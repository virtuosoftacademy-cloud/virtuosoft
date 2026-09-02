

// ── Types ──────────────────────────────────────────────────────────

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


export type ImageKind = "post" | "post-thumb" | "case-study" | "case-study-thumb" | "avatar";

/** Every valid ImageKind, so the upload route can validate without repeating the union. */
export const IMAGE_KINDS = [
    "post",
    "post-thumb",
    "case-study",
    "case-study-thumb",
    "avatar",
] as const;

export function isImageKind(value: string): value is ImageKind {
    return (IMAGE_KINDS as readonly string[]).includes(value);
}

export interface ImageValidationResult {
    isValid: boolean;
    errors: string[];
    warnings: string[];
}

// ── URL helpers ────────────────────────────────────────────────────

/** Check if a URL points at our R2 bucket (or R2 generally). */
export function isR2Url(url: string): boolean {
    const r2PublicUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL || "";
    return (
        (r2PublicUrl.length > 0 && url.includes(r2PublicUrl)) ||
        url.includes("r2.cloudflarestorage.com")
    );
}

/**
 * Whether next/image can run its remote optimizer on this src without
 * throwing. next.config.ts only whitelists the R2 host (via
 * `remotePatterns`) — there's no blanket `images.unoptimized`, so any other
 * absolute URL (an admin pasting an arbitrary external image link, say)
 * needs `unoptimized` set explicitly or the page errors at render time.
 * Root-relative paths (public/ assets) are same-origin and always safe.
 */
export function isOptimizableImageSrc(src: string): boolean {
    return src.startsWith("/") || isR2Url(src);
}

/** Extract the object key from one of our R2 URLs (null if not ours). */
export function extractObjectKey(url: string): string | null {
    try {
        const r2PublicUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL || "";
        if (!r2PublicUrl || !url.includes(r2PublicUrl)) return null;

        const pathname = new URL(url).pathname;
        return pathname.startsWith("/") ? pathname.substring(1) : pathname;
    } catch (error) {
        console.error("Error extracting object key:", error);
        return null;
    }
}

/** Build the public URL for an object key. */
export function buildR2Url(objectKey: string): string {
    const r2PublicUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL || "";
    return `${r2PublicUrl}/${objectKey}`;
}

/**
 * Generate a collision-safe object key for an upload:
 *   posts/2026-05-12-1715505600123-my-image.jpg
 * Folder comes from what the image is for; filename is slugified.
 */
export function objectKeyFor(kind: ImageKind, fileName: string): string {
    const folder = {
        post: "virtuosoft/posts",
        "post-thumb": "virtuosoft/posts/thumbnails",
        "case-study": "virtuosoft/case-studies",
        "case-study-thumb": "virtuosoft/case-studies/thumbnails",
        avatar: "virtuosoft/avatars",
    }[kind];
    const ext = fileName.includes(".")
        ? fileName.slice(fileName.lastIndexOf(".")).toLowerCase()
        : "";
    const base = fileName
        .slice(0, fileName.length - ext.length)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 60) || "image";
    const stamp = new Date().toISOString().slice(0, 10);
    return `${folder}/${stamp}-${Date.now()}-${base}${ext}`;
}

// ── Basic file validation (shared) ─────────────────────────────────

// This module ships to the browser, so it can't read the server-only
// UPLOAD_MAX_SIZE env var — keep this in sync with app/api/upload/route.ts's
// MAX_SIZE by hand. Only a pre-flight UX check anyway; the route above is
// the actual enforcement point.
const MAX_SIZE = 102400 * 1024; // 102400KB (100MB)
const ALLOWED_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/avif",
];
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

/** Quick type/size check before any upload starts. */
export function validateImageFile(file: File): {
    isValid: boolean;
    error?: string;
} {
    const fileName = file.name.toLowerCase();
    const hasValidExtension = ALLOWED_EXTENSIONS.some((ext) =>
        fileName.endsWith(ext)
    );
    const hasValidMimeType = ALLOWED_TYPES.includes(file.type);
    const isGenericMimeType =
        file.type === "" || file.type === "application/octet-stream" || !file.type;

    if (!hasValidMimeType && !hasValidExtension) {
        return {
            isValid: false,
            error: "Invalid file type. Please upload JPEG, PNG, WebP, or AVIF images.",
        };
    }
    if (isGenericMimeType && !hasValidExtension) {
        return {
            isValid: false,
            error: "Invalid file type. Please upload JPEG, PNG, WebP, or AVIF images.",
        };
    }
    if (file.size > MAX_SIZE) {
        return {
            isValid: false,
            error: `File size too large. Please upload images smaller than ${Math.round(MAX_SIZE / 1024)}KB.`,
        };
    }

    return { isValid: true };
}


export const IMAGE_VALIDATION: Record<
    ImageKind,
    {
        minDimensions: { width: number; height: number };
        maxDimensions: { width: number; height: number };
        recommended: { width: number; height: number };
        note: string;
    }
> = {
    post: {
        minDimensions: { width: 800, height: 450 },
        maxDimensions: { width: 4000, height: 4000 },
        recommended: { width: 1200, height: 675 },
        note: "Post covers display at 16:9 on blog cards.",
    },
    "post-thumb": {
        // The floor is "still legible in a card", not "ideal". A post card is
        // ~400px wide in the grid, so 400px across is 1x — soft but usable.
        // Height matches 16:9 at that width, so a correctly-shaped 400px image
        // is not rejected for being short. Shape is handled by the aspect-ratio
        // WARNING below, not by this hard block: a portrait thumbnail is a
        // cropping decision for the admin to make, not an invalid file.
        minDimensions: { width: 400, height: 225 },
        maxDimensions: { width: 4000, height: 4000 },
        recommended: { width: 1200, height: 675 },
        note: "Card thumbnails are cropped to 16:9 in the post listings.",
    },
    "case-study": {
        minDimensions: { width: 1200, height: 600 },
        maxDimensions: { width: 4000, height: 4000 },
        recommended: { width: 1600, height: 900 },
        note: "Hero images render full-bleed; keep them wide but compressed — they are served as-is.",
    },
    "case-study-thumb": {
        // Same reasoning as post-thumb: a usability floor rather than the ideal
        // size. The card box is ~30rem wide, so 400px across is 1x.
        minDimensions: { width: 400, height: 225 },
        maxDimensions: { width: 4000, height: 4000 },
        recommended: { width: 1200, height: 800 },
        note: "Card thumbnails are cropped to fill a 3:2 box in the case studies grid.",
    },
    avatar: {
        // Rendered as a small circle everywhere it appears (author card,
        // admin sidebar-adjacent previews) — a square floor well below the
        // post/case-study minimums is enough to stay sharp at that size.
        minDimensions: { width: 200, height: 200 },
        maxDimensions: { width: 4000, height: 4000 },
        recommended: { width: 400, height: 400 },
        note: "Profile photos are cropped to a circle wherever they're shown.",
    },
};

/** Validate an image's dimensions for its intended slot. */
export function validateImageDimensions(
    width: number,
    height: number,
    kind: ImageKind
): ImageValidationResult {
    const result: ImageValidationResult = {
        isValid: true,
        errors: [],
        warnings: [],
    };
    const v = IMAGE_VALIDATION[kind];

    if (width < v.minDimensions.width || height < v.minDimensions.height) {
        result.errors.push(
            `Image dimensions (${width}x${height}) are below the minimum (${v.minDimensions.width}x${v.minDimensions.height}) — it will look blurry.`
        );
        result.isValid = false;
    }
    if (width > v.maxDimensions.width || height > v.maxDimensions.height) {
        result.errors.push(
            `Image dimensions (${width}x${height}) exceed the maximum (${v.maxDimensions.width}x${v.maxDimensions.height}) — resize before uploading.`
        );
        result.isValid = false;
    }

    const targetRatio = v.recommended.width / v.recommended.height;
    const actualRatio = width / height;
    if (Math.abs(actualRatio - targetRatio) > 0.15) {
        result.warnings.push(
            `Aspect ratio ${actualRatio.toFixed(2)} differs from the recommended ${v.recommended.width}x${v.recommended.height} — edges may be cropped. ${v.note}`
        );
    }

    return result;
}

/** Read dimensions from a File in the browser. */
export function getImageDimensions(
    file: File
): Promise<{ width: number; height: number }> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const url = URL.createObjectURL(file);

        img.onload = () => {
            URL.revokeObjectURL(url);
            resolve({ width: img.width, height: img.height });
        };
        img.onerror = () => {
            URL.revokeObjectURL(url);
            reject(new Error("Failed to load image"));
        };

        img.src = url;
    });
}

/** Full pre-upload check: type + size + dimensions for the slot. */
export async function validateImageForSlot(
    file: File,
    kind: ImageKind
): Promise<ImageValidationResult> {
    const basic = validateImageFile(file);
    if (!basic.isValid) {
        return { isValid: false, errors: [basic.error!], warnings: [] };
    }

    try {
        const { width, height } = await getImageDimensions(file);
        return validateImageDimensions(width, height, kind);
    } catch {
        return {
            isValid: false,
            errors: ["Failed to read image dimensions."],
            warnings: [],
        };
    }
}