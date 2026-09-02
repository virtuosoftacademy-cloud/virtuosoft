"use client";

// ============================================================================
// Image field for admin forms (post cover/thumbnail, case-study hero/
// thumbnail): upload a file to R2, or paste a URL/path directly. Renders a
// single text input carrying `name` — the value the surrounding <form>
// actually submits — plus a file picker that fills it in after a successful
// upload. Validates dimensions client-side for the given ImageKind before
// spending an upload on a file that will just get rejected.
// ============================================================================

import { useRef, useState, type ChangeEvent } from "react";
import Image from "next/image";
import {
    type ImageKind,
    validateImageForSlot,
    isR2Url,
} from "@/app/api/lib/r2";

type Props = {
    name: string;
    kind: ImageKind;
    label: string;
    defaultValue?: string;
    error?: string;
    help?: string;
};

export function ImageUploadField({ name, kind, label, defaultValue, error, help }: Props) {
    const [value, setValue] = useState(defaultValue ?? "");
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const inputClass =
        "mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm " +
        "text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none " +
        "focus:ring-1 focus:ring-neutral-900";
    const labelClass = "block text-sm font-medium text-neutral-800";

    async function handleFile(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        e.target.value = ""; // allow re-selecting the same file after an error
        if (!file) return;

        setUploadError(null);

        const validation = await validateImageForSlot(file, kind);
        if (!validation.isValid) {
            setUploadError(validation.errors[0] ?? "This image can't be used.");
            return;
        }

        setIsUploading(true);
        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("kind", kind);

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
            <label htmlFor={name} className={labelClass}>
                {label}
            </label>

            {help && <p className="mt-0.5 text-xs text-neutral-500">{help}</p>}

            <div className="mt-1 flex items-start gap-3">
                {showPreview && (
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-md border border-neutral-200 bg-neutral-50">
                        <Image
                            src={value}
                            alt=""
                            fill
                            sizes="80px"
                            className="object-cover"
                            unoptimized={!isR2Url(value)}
                        />
                    </div>
                )}

                <div className="flex-1">
                    <input
                        id={name}
                        name={name}
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Paste a URL/path, or upload a file below"
                        className={inputClass}
                        aria-invalid={Boolean(error)}
                    />

                    <div className="mt-2 flex items-center gap-3">
                        <button
                            type="button"
                            disabled={isUploading}
                            onClick={() => fileInputRef.current?.click()}
                            className="rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 disabled:opacity-60"
                        >
                            {isUploading ? "Uploading…" : "Upload image"}
                        </button>
                        {value && (
                            <button
                                type="button"
                                onClick={() => setValue("")}
                                className="text-xs font-medium text-neutral-500 hover:text-neutral-700"
                            >
                                Remove
                            </button>
                        )}
                    </div>

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/avif"
                        onChange={handleFile}
                        className="hidden"
                    />
                </div>
            </div>

            {uploadError && <p className="mt-1 text-sm text-red-600">{uploadError}</p>}
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
}
