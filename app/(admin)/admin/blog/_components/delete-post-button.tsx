
"use client";

import { deletePost } from "../_actions/delete-post";

export function DeletePostButton({ id, title }: { id: string; title: string }) {
    return (
        <form
            action={deletePost}
            onSubmit={(e) => {
                if (!confirm(`Delete "${title}"? This can't be undone.`)) {
                    e.preventDefault();
                }
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