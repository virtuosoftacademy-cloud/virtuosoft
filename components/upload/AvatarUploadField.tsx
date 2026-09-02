"use client";

// ============================================================================
// Circular profile-photo field for the author bio form: a round preview with
// a camera-icon badge overlaid on it (click to upload), plus a small text
// input underneath for pasting a URL/path directly. Same upload flow as
// ImageUploadField (validate dimensions for the slot, POST to /api/upload),
// just laid out for an avatar instead of a wide cover image.
// ============================================================================

import { useRef, useState, type ChangeEvent } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { validateImageForSlot, isR2Url } from "@/app/api/lib/r2";

type Props = {
    name: string;
    label: string;
    defaultValue?: string;
    error?: string;
};

export function AvatarUploadField({ name, label, defaultValue, error }: Props) {
    const [value, setValue] = useState(defaultValue ?? "");
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    async function handleFile(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        e.target.value = ""; // allow re-selecting the same file after an error
        if (!file) return;

        setUploadError(null);

        const validation = await validateImageForSlot(file, "avatar");
        if (!validation.isValid) {
            setUploadError(validation.errors[0] ?? "This image can't be used.");
            return;
        }

        setIsUploading(true);
        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("kind", "avatar");

            const res = await fetch("/api/upload", { method: "POST", body: formData });
            const result = await res.json();

            if (!res.ok || !result.success) {
                setUploadError(result.error ?? "Upload failed.");
                return;
            }
            setValue(result.url as string);
        } catch {
            setUploadError("Upload failed. Check your connection and try again.");
        } finally {
            setIsUploading(false);
        }
    }

    const showPreview = value.startsWith("/") || /^https?:\/\//i.test(value);

    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-neutral-800">
                {label}
            </label>

            <div className="mt-2 flex items-center gap-4">
                <div className="relative">
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100">
                        {showPreview ? (
                            <Image
                                src={value}
                                alt=""
                                fill
                                sizes="80px"
                                className="object-cover"
                                unoptimized={!isR2Url(value)}
                            />
                        ) : (
                            <span className="flex size-full items-center justify-center text-neutral-400">
                                <Camera className="size-6" />
                            </span>
                        )}
                    </div>

                    {/* Image icon badge — click to upload a new photo */}
                    <button
                        type="button"
                        disabled={isUploading}
                        onClick={() => fileInputRef.current?.click()}
                        aria-label="Upload profile photo"
                        title="Upload profile photo"
                        className="absolute -bottom-1 -right-1 flex size-7 items-center justify-center rounded-full border-2 border-white bg-neutral-900 text-white shadow-sm hover:bg-neutral-700 disabled:opacity-60"
                    >
                        <Camera className="size-3.5" />
                    </button>

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/avif"
                        onChange={handleFile}
                        className="hidden"
                    />
                </div>

                <div className="flex-1">
                    <input
                        id={name}
                        name={name}
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Paste a URL/path, or click the camera icon"
                        className="block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm
                                   text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none
                                   focus:ring-1 focus:ring-neutral-900"
                        aria-invalid={Boolean(error)}
                    />
                    <p className="mt-1 text-xs text-neutral-500">
                        {isUploading ? "Uploading…" : "Shown on your author card."}
                    </p>
                </div>
            </div>

            {uploadError && <p className="mt-1 text-sm text-red-600">{uploadError}</p>}
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
}
