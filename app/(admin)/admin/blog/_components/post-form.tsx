"use client";

import { useActionState } from "react";
import type { PostFormState } from "@/app/types/types";
import { ImageUploadField } from "@/components/upload/ImageUploadField";
import { RichTextEditor } from "@/components/editor/RichTextEditor";
import { Button } from "@/components/ui/button";

type Category = { id: number; label: string };
type Author = { id: string; name: string };

export type PostFormValues = {
    title: string;
    excerpt: string;
    content: string;
    image: string;
    thumbnailImage: string | null;
    accent: string;
    date: string;
    categoryId: number | null;
    authorId: string | null;
    isFeatured: boolean;
    isSidebar: boolean;
};

type Props = {
    categories: Category[];
    authors: Author[];
    action: (state: PostFormState, formData: FormData) => Promise<PostFormState>;
    submitLabel: string;
    pendingLabel: string;
    defaultValues?: Partial<PostFormValues>;
};

const initialState: PostFormState = {};

function FieldError({ message }: { message?: string }) {
    if (!message) return null;
    return <p className="mt-1 text-sm text-red-600">{message}</p>;
}

export function PostForm({
    categories,
    authors,
    action,
    submitLabel,
    pendingLabel,
    defaultValues = {},
}: Props) {
    const [state, formAction, isPending] = useActionState(action, initialState);
    const errors = state.fieldErrors ?? {};

    // React resets an uncontrolled form once its action resolves, restoring
    // each input to its defaultValue. Pointing those defaults at the rejected
    // submission means a validation failure leaves the typing intact instead
    // of emptying every other field.
    const values: Partial<PostFormValues> = state.values ?? defaultValues;

    const inputClass =
        "mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm " +
        "text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none " +
        "focus:ring-1 focus:ring-neutral-900";
    const labelClass = "block text-sm font-medium text-neutral-800";

    return (
        <form action={formAction} className="space-y-6">
            {state.error && (
                <div
                    role="alert"
                    className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                    {state.error}
                </div>
            )}

            <div>
                <label htmlFor="title" className={labelClass}>
                    Title
                </label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    defaultValue={values.title}
                    placeholder="How we rebuilt our data layer"
                    className={inputClass}
                    aria-invalid={Boolean(errors.title)}
                />
                <FieldError message={errors.title} />
            </div>

            <div>
                <label htmlFor="excerpt" className={labelClass}>
                    Excerpt
                </label>
                <textarea
                    id="excerpt"
                    name="excerpt"
                    rows={2}
                    required
                    defaultValue={values.excerpt}
                    placeholder="One or two sentences shown in post cards."
                    className={inputClass}
                    aria-invalid={Boolean(errors.excerpt)}
                />
                <FieldError message={errors.excerpt} />
            </div>

            {/* Rich text: writes HTML into a hidden "content" input, so the
                action and parser keep reading the same field name. */}
            <RichTextEditor
                name="content"
                label="Content"
                defaultValue={values.content}
                error={errors.content}
                help="Posts written before the editor existed open as plain paragraphs and can be formatted from here."
            />

            {/* ── Cover image: upload to R2 or paste a URL/path.
                  Feeds the same "image" field name, so the action and
                  parser are unchanged. ── */}
            <ImageUploadField
                name="image"
                kind="post"
                label="Cover image"
                defaultValue={values.image}
                error={errors.image}
            />

            {/* ── Card thumbnail: optional, falls back to the cover ── */}
            <ImageUploadField
                name="thumbnailImage"
                kind="post-thumb"
                label="Card thumbnail"
                defaultValue={values.thumbnailImage ?? undefined}
                error={errors.thumbnailImage}
                help="Shown on post cards in the listings."
            />

            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="authorId" className={labelClass}>
                        Author
                    </label>
                    <a
                        href="/admin/authors/new"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-neutral-500 hover:text-neutral-700"
                    >
                        New author
                    </a>
                </div>
                <select
                    id="authorId"
                    name="authorId"
                    defaultValue={values.authorId ?? ""}
                    className={inputClass}
                >
                    <option value="">No author</option>
                    {authors.map((a) => (
                        <option key={a.id} value={a.id}>
                            {a.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="date" className={labelClass}>
                        Publish date
                    </label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        required
                        defaultValue={values.date}
                        className={inputClass}
                        aria-invalid={Boolean(errors.date)}
                    />
                    <FieldError message={errors.date} />
                </div>

                <div>
                    <label htmlFor="categoryId" className={labelClass}>
                        Category
                    </label>
                    <select
                        id="categoryId"
                        name="categoryId"
                        defaultValue={values.categoryId ?? ""}
                        className={inputClass}
                    >
                        <option value="">No category</option>
                        {categories.map((c) => (
                            <option key={c.id} value={c.id}>
                                {c.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="accent" className={labelClass}>
                        Accent phrase
                    </label>
                    {/* A PHRASE, not a color: rendered highlighted after/inside
                        the title on the public site (e.g. "with Prisma"). */}
                    <input
                        id="accent"
                        name="accent"
                        type="text"
                        defaultValue={values.accent ?? ""}
                        placeholder="highlighted part of the title"
                        className={inputClass}
                    />
                </div>
            </div>

            <fieldset className="flex flex-wrap gap-6">
                <legend className="sr-only">Placement</legend>
                <label className="flex items-center gap-2 text-sm text-neutral-800">
                    <input
                        type="checkbox"
                        name="isFeatured"
                        defaultChecked={values.isFeatured}
                        className="h-4 w-4 rounded border-neutral-300"
                    />
                    Featured post
                </label>
                <label className="flex items-center gap-2 text-sm text-neutral-800">
                    <input
                        type="checkbox"
                        name="isSidebar"
                        defaultChecked={values.isSidebar}
                        className="h-4 w-4 rounded border-neutral-300"
                    />
                    Show in sidebar
                </label>
            </fieldset>

            <div className="flex items-center justify-end gap-3 border-t border-neutral-200 pt-6">
                <Button
                    type="submit"
                    disabled={isPending}
                    className="py-4">
                    {isPending ? pendingLabel : submitLabel}
                </Button>
            </div>
        </form>
    );
}