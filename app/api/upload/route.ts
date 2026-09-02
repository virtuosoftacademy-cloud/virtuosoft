
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { uploadImageToR2, type ImageKind } from "@/app/api/lib/r2-server";
import { isImageKind } from "@/app/api/lib/r2";

// Server-authoritative limit — the real enforcement point. Mirror any
// change here in the client-side MAX_SIZE in lib/r2.ts (that one can't read
// this env var directly: it's bundled into the browser, and this var isn't
// NEXT_PUBLIC_-prefixed).
const MAX_SIZE = Number(process.env.UPLOAD_MAX_SIZE) || 10 * 1024 * 1024;
const MAX_SIZE_LABEL = `${Math.round(MAX_SIZE / 1024)}KB`;

export async function POST(request: Request) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") {
        return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    let formData: FormData;
    try {
        formData = await request.formData();
    } catch {
        return NextResponse.json({ success: false, error: "Invalid form data" }, { status: 400 });
    }

    const file = formData.get("file");
    const kindRaw = String(formData.get("kind") ?? "");
    const kind: ImageKind | null = isImageKind(kindRaw) ? kindRaw : null;

    if (!(file instanceof File) || !kind) {
        return NextResponse.json(
            { success: false, error: "A file and a valid kind are required" },
            { status: 400 }
        );
    }
    if (!file.type.startsWith("image/")) {
        return NextResponse.json(
            { success: false, error: "Only image files are allowed" },
            { status: 400 }
        );
    }
    if (file.size > MAX_SIZE) {
        return NextResponse.json(
            { success: false, error: `Image must be smaller than ${MAX_SIZE_LABEL}` },
            { status: 400 }
        );
    }

    const result = await uploadImageToR2(file, kind);
    if (!result.success) {
        return NextResponse.json(
            { success: false, error: result.error ?? "Upload failed" },
            { status: 500 }
        );
    }

    return NextResponse.json({
        success: true,
        url: result.url,
        objectKey: result.objectKey,
        width: result.width,
        height: result.height,
        bytes: result.bytes,
    });
}