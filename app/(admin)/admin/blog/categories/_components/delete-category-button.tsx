
"use client";

import { deleteCategory } from "../_actions/category-actions";

export function DeleteCategoryButton({
    id,
    label,
    postCount,
}: {
    id: number;
    label: string;
    postCount: number;
}) {
    const warning =
        postCount > 0
            ? `Delete "${label}"? Its ${postCount} post${postCount === 1 ? "" : "s"} will be moved to "No category".`
            : `Delete "${label}"?`;

    return (
        <form
            action={deleteCategory}
            onSubmit={(e) => {
                if (!confirm(warning)) e.preventDefault();
            }}
        >
            <input type="hidden" name="id" value={id} />
            <button
                type="submit"
                className="rounded-md px-2.5 py-1.5 text-xs font-medium text-red-600
                           hover:bg-red-50 hover:text-red-700"
            >
                Delete
            </button>
        </form>
    );
}