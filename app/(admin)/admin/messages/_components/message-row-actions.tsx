"use client";

import { setMessageRead, deleteContactMessage } from "../_actions/message-actions";

export function MarkReadButton({ id, isRead }: { id: string; isRead: boolean }) {
    return (
        <form action={setMessageRead}>
            <input type="hidden" name="id" value={id} />
            {/* Toggles rather than only marking read, so a message can be put
                back on the pile if it still needs a reply. */}
            <input type="hidden" name="read" value={isRead ? "no" : "yes"} />
            <button
                type="submit"
                className="rounded-md border border-neutral-300 px-2.5 py-1.5 text-xs font-medium
                           text-neutral-700 hover:bg-neutral-100"
            >
                {isRead ? "Mark unread" : "Mark read"}
            </button>
        </form>
    );
}

export function DeleteMessageButton({ id, name }: { id: string; name: string }) {
    return (
        <form
            action={deleteContactMessage}
            onSubmit={(e) => {
                if (
                    !confirm(
                        `Delete the enquiry from ${name}? This cannot be undone.`
                    )
                ) {
                    e.preventDefault();
                }
            }}
        >
            <input type="hidden" name="id" value={id} />
            <button
                type="submit"
                className="rounded-md px-2.5 py-1.5 text-xs font-medium text-red-700 hover:bg-red-50"
            >
                Delete
            </button>
        </form>
    );
}
