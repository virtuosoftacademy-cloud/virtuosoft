"use client";

import { deleteAuthor } from "../_actions/author-actions";

export function DeleteAuthorButton({ id, name, usageCount }: { id: string; name: string; usageCount: number }) {
    const warning =
        usageCount > 0
            ? `Delete "${name}"? ${usageCount} post/case study${usageCount === 1 ? "" : "s"} credited to them will show no author.`
            : `Delete "${name}"? This can't be undone.`;

    return (
        <form
            action={deleteAuthor}
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
