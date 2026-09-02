"use client";

import { deleteTestimonial } from "../_actions/testimonial-actions";

export function DeleteTestimonialButton({ id, name }: { id: string; name: string }) {
    return (
        <form
            action={deleteTestimonial}
            onSubmit={(e) => {
                if (!confirm(`Delete the testimonial from "${name}"? This can't be undone.`)) {
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
