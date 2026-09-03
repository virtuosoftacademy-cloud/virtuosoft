
import {
    S3Client,
    PutObjectCommand,
    DeleteObjectCommand,
    HeadObjectCommand,
} from "@aws-sdk/client-s3";
import sharp from "sharp";

// ── Config ─────────────────────────────────────────────────────────

function getR2Config() {
    return {
        accountId: process.env.R2_ACCOUNT_ID,
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
        bucketName: process.env.R2_BUCKET,
        publicUrl: process.env.NEXT_PUBLIC_R2_PUBLIC_URL,
    };
}

function createR2Client() {
    const config = getR2Config();
    if (!config.accountId || !config.accessKeyId || !config.secretAccessKey) {
        throw new Error("R2 configuration missing");
    }

    return new S3Client({
        region: "auto",
        endpoint: `https://${config.accountId}.r2.cloudflarestorage.com`,
        credentials: {
            accessKeyId: config.accessKeyId,
            secretAccessKey: config.secretAccessKey,
        },
    });
}

// ── Types ──────────────────────────────────────────────────────────

export type ImageKind = "post" | "post-thumb" | "case-study" | "case-study-thumb" | "case-study-logo" | "avatar";

export interface R2UploadResult {
    success: boolean;
    url?: string;
    objectKey?: string;
    error?: string;
    width?: number;
    height?: number;
    format?: string;
    bytes?: number;
}

export interface UploadOptions {
    /** Cap the longest edge; original ratio kept, never enlarged. Default 2400. */
    maxWidth?: number;
    /** Re-encode quality 1-100. Default 80. */
    quality?: number;
}

// ── Image processing (sharp) ───────────────────────────────────────

async function processImage(
    buffer: Buffer,
    options: UploadOptions = {}
): Promise<{ buffer: Buffer; metadata: sharp.Metadata }> {
    const maxWidth = options.maxWidth ?? 2400;
    const quality = options.quality ?? 80;

    let image = sharp(buffer).resize({
        width: maxWidth,
        withoutEnlargement: true, // small images pass through untouched
    });

    const inputMeta = await sharp(buffer).metadata();
    if (inputMeta.format === "jpeg" || inputMeta.format === "jpg") {
        image = image.jpeg({ quality, mozjpeg: true });
    } else if (inputMeta.format === "png") {
        image = image.png({ quality });
    } else if (inputMeta.format === "webp") {
        image = image.webp({ quality });
    } else if (inputMeta.format === "avif") {
        image = image.avif({ quality });
    }

    const processedBuffer = await image.toBuffer();
    const metadata = await sharp(processedBuffer).metadata();
    return { buffer: processedBuffer, metadata };
}

// ── Object keys (mirror of client's objectKeyFor) ──────────────────

function objectKeyFor(kind: ImageKind, fileName: string): string {
    const folder = {
        post: "virtuosoft/posts",
        "post-thumb": "virtuosoft/posts/thumbnails",
        "case-study": "virtuosoft/case-studies",
        "case-study-thumb": "virtuosoft/case-studies/thumbnails",
        "case-study-logo": "virtuosoft/case-studies/logos",
        avatar: "virtuosoft/avatars",
    }[kind];
    const ext = fileName.includes(".")
        ? fileName.slice(fileName.lastIndexOf(".")).toLowerCase()
        : "";
    const base =
        fileName
            .slice(0, fileName.length - ext.length)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "")
            .slice(0, 60) || "image";
    const stamp = new Date().toISOString().slice(0, 10);
    return `${folder}/${stamp}-${Date.now()}-${base}${ext}`;
}

// ── Upload ─────────────────────────────────────────────────────────

/**
 * Upload one image for a post cover or case-study hero.
 * Processes with sharp (width cap + re-encode), stores under posts/ or
 * case-studies/, returns the public URL to save in the DB column.
 */
export async function uploadImageToR2(
    file: File,
    kind: ImageKind,
    options: UploadOptions = {}
): Promise<R2UploadResult> {
    try {
        const config = getR2Config();
        if (!config.bucketName || !config.publicUrl) {
            return {
                success: false,
                error: "R2 configuration missing. Please check environment variables.",
            };
        }

        if (!file.type.startsWith("image/")) {
            return { success: false, error: "Only image files can be uploaded." };
        }

        const client = createR2Client();
        const buffer = Buffer.from(await file.arrayBuffer());
        const { buffer: finalBuffer, metadata } = await processImage(buffer, options);

        const objectKey = objectKeyFor(kind, file.name);
        const contentType = `image/${metadata.format ?? "jpeg"}`;

        await client.send(
            new PutObjectCommand({
                Bucket: config.bucketName,
                Key: objectKey,
                Body: finalBuffer,
                ContentType: contentType,
                CacheControl: "public, max-age=31536000, immutable",
                Metadata: {
                    originalName: file.name,
                    kind,
                    uploadedAt: new Date().toISOString(),
                },
            })
        );

        return {
            success: true,
            url: `${config.publicUrl}/${objectKey}`,
            objectKey,
            width: metadata.width,
            height: metadata.height,
            format: metadata.format,
            bytes: finalBuffer.length,
        };
    } catch (error) {
        console.error("R2 upload failed:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Upload failed",
        };
    }
}

// ── Delete ─────────────────────────────────────────────────────────

/** Delete an object (e.g. when an image is replaced). Missing object = ok. */
export async function deleteFromR2(objectKey: string): Promise<boolean> {
    try {
        const config = getR2Config();
        if (!config.bucketName) return false;

        const client = createR2Client();
        await client.send(
            new DeleteObjectCommand({ Bucket: config.bucketName, Key: objectKey })
        );
        return true;
    } catch {
        return false; // object may not exist — not an error for our flow
    }
}

// ── Config validation & diagnostics ────────────────────────────────

export function validateR2Config(): {
    isValid: boolean;
    errors: string[];
} {
    const config = getR2Config();
    const errors: string[] = [];

    if (!config.accountId) errors.push("Missing R2_ACCOUNT_ID environment variable");
    if (!config.accessKeyId) errors.push("Missing R2_ACCESS_KEY_ID environment variable");
    if (!config.secretAccessKey) errors.push("Missing R2_SECRET_ACCESS_KEY environment variable");
    if (!config.bucketName) errors.push("Missing R2_BUCKET environment variable");
    if (!config.publicUrl) errors.push("Missing NEXT_PUBLIC_R2_PUBLIC_URL environment variable");

    return { isValid: errors.length === 0, errors };
}

/** Presence-only status — never leaks secret values. */
export function getR2ConfigStatus() {
    const config = getR2Config();
    return {
        hasAccountId: !!config.accountId,
        hasAccessKeyId: !!config.accessKeyId,
        hasSecretAccessKey: !!config.secretAccessKey,
        hasBucketName: !!config.bucketName,
        hasPublicUrl: !!config.publicUrl,
        bucketName: config.bucketName || "missing",
        publicUrl: config.publicUrl || "missing",
    };
}

/** Connection test: a 404 HeadObject proves credentials + bucket work. */
export async function testR2Connection() {
    try {
        const config = getR2Config();
        const validation = validateR2Config();
        if (!validation.isValid) {
            return {
                success: false,
                error: `R2 configuration missing: ${validation.errors.join(", ")}`,
                configStatus: getR2ConfigStatus(),
            };
        }

        const client = createR2Client();
        await client.send(
            new HeadObjectCommand({ Bucket: config.bucketName!, Key: "connection-test" })
        );
        return { success: true, configStatus: getR2ConfigStatus() };
    } catch (error) {
        const err = error as { name?: string; $metadata?: { httpStatusCode?: number } };
        if (err.name === "NotFound" || err.$metadata?.httpStatusCode === 404) {
            return { success: true, configStatus: getR2ConfigStatus() };
        }
        return {
            success: false,
            error: error instanceof Error ? error.message : "Connection test failed",
            configStatus: getR2ConfigStatus(),
        };
    }
}

/** Object info (size, type, upload metadata) for debugging. */
export async function getAssetInfo(objectKey: string) {
    try {
        const config = getR2Config();
        if (!config.bucketName) {
            return { success: false, error: "R2 bucket name missing" };
        }

        const client = createR2Client();
        const result = await client.send(
            new HeadObjectCommand({ Bucket: config.bucketName, Key: objectKey })
        );

        return {
            success: true,
            data: {
                objectKey,
                url: `${config.publicUrl}/${objectKey}`,
                contentType: result.ContentType,
                contentLength: result.ContentLength,
                lastModified: result.LastModified,
                metadata: result.Metadata,
            },
        };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : "Failed to get asset info",
        };
    }
}