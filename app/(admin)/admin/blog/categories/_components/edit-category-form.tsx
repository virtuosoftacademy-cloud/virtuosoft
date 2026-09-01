"use client";

import { useActionState, useEffect, useState } from "react";
import { updateCategory, type EditCategoryState } from "../_actions/category-actions";

const inputClass =
    "rounded-md border border-neutral-300 px-2 py-1 text-sm text-neutral-900 " +
    "focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900";

export function EditCategoryForm({
    id,
    label,
    accent,
}: {
    id: number;
    label: string;
    accent: string;
}) {
    const [editing, setEditing] = useState(false);
    const boundAction = updateCategory.bind(null, id);
    const [state, formAction, isPending] = useActionState<EditCategoryState, FormData>(
        boundAction,
        {}
    );

    // Close the editor when a save succeeds; revalidation refreshes the row.
    useEffect(() => {
        if (state.success) setEditing(false);
    }, [state]);

    if (!editing) {
        return (
            <div className="flex items-center gap-2">
                <span className="font-medium text-neutral-900">
                    {label}{" "}
                    <span className="font-semibold text-primary">{accent}</span>
                </span>
                <button
                    type="button"
                    onClick={() => setEditing(true)}
                    className="rounded-md px-2 py-1 text-xs font-medium text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
                >
                    Edit
                </button>
            </div>
        );
    }

    return (
        <form action={formAction} className="flex flex-wrap items-center gap-2">
            {/* Fall back to the stored row, but prefer a rejected edit so the
                attempted text survives instead of snapping back on failure. */}
            <input
                name="label"
                defaultValue={state.values?.label ?? label}
                required
                placeholder="Label"
                className={`${inputClass} w-36`}
            />
            <input
                name="accent"
                defaultValue={state.values?.accent ?? accent}
                placeholder="Accent phrase"
                className={`${inputClass} w-36`}
            />
            <button
                type="submit"
                disabled={isPending}
                className="rounded-md bg-neutral-900 px-2.5 py-1 text-xs font-medium text-white hover:bg-neutral-700 disabled:opacity-60"
            >
                {isPending ? "Saving…" : "Save"}
            </button>
            <button
                type="button"
                onClick={() => setEditing(false)}
                className="rounded-md px-2 py-1 text-xs text-neutral-500 hover:bg-neutral-100"
            >
                Cancel
            </button>
            {state.error && (
                <p className="w-full text-xs text-red-600">{state.error}</p>
            )}
        </form>
    );
}