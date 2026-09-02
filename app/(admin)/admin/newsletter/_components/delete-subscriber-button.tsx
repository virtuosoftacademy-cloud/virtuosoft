"use client";

import { deleteSubscriber } from "../_actions/subscriber-actions";

export function DeleteSubscriberButton({ id, email }: { id: string; email: string }) {
    return (
        <form
            action={deleteSubscriber}
            onSubmit={(e) => {
                if (!confirm(`Remove ${email} from the newsletter?`)) e.preventDefault();
            }}
        >
            <input type="hidden" name="id" value={id} />
            <button
                type="submit"
                className="rounded-md px-2.5 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 hover:text-red-700"
            >
                Remove
            </button>
        </form>
    );
}