
"use client";

import { useActionState } from "react";
import { createCategory, type CategoryFormState } from "../_actions/category-actions";
import { Button } from "@/components/ui/button";

const initialState: CategoryFormState = {};

export function NewCategoryForm() {
    const [state, formAction, isPending] = useActionState(createCategory, initialState);

    return (
        <form
            action={formAction}
            className="flex flex-wrap items-end gap-3 rounded-lg border border-neutral-200 bg-white p-4"
        >
            <div className="min-w-48 flex-1">
                <label
                    htmlFor="label"
                    className="block text-sm font-medium text-neutral-800"
                >
                    New category
                </label>
                <input
                    id="label"
                    name="label"
                    type="text"
                    required
                    // Cleared once the category is created, otherwise the name
                    // just added would sit in the box for the next one.
                    defaultValue={state.success ? "" : state.values?.label ?? ""}
                    placeholder="Technology"
                    className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm
                               focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
            </div>
            <div className="min-w-40">
                <label
                    htmlFor="cat-accent"
                    className="block text-sm font-medium text-neutral-800"
                >
                    Accent phrase
                </label>
                {/* Rendered highlighted after the label on the blog index,
                    e.g. label "Business" + accent "Growth". */}
                <input
                    id="cat-accent"
                    name="accent"
                    type="text"
                    defaultValue={state.success ? "" : state.values?.accent ?? ""}
                    placeholder="Growth"
                    className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm
                               focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
            </div>
            <Button
                type="submit"
                disabled={isPending}
                className="py-4">
                {isPending ? "Adding…" : "Add category"}
            </Button>

            {state.error && (
                <p role="alert" className="w-full text-sm text-red-600">
                    {state.error}
                </p>
            )}
            {state.success && (
                <p role="status" className="w-full text-sm text-green-700">
                    {state.success}
                </p>
            )}
        </form>
    );
}