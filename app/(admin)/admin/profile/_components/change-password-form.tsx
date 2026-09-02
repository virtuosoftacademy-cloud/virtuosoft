"use client";

import { useActionState, useEffect, useRef } from "react";
import { changePassword, type ChangePasswordState } from "../_actions/change-password";
import { showSimpleSuccess, showSimpleError } from "@/app/api/lib/toast-notifications";

const initialState: ChangePasswordState = {};

export function ChangePasswordForm() {
    const [state, action, pending] = useActionState(changePassword, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.success) {
            showSimpleSuccess("Password updated", state.success);
            // Clear the fields so the old password isn't left sitting in the DOM.
            formRef.current?.reset();
        }
        if (state.error) showSimpleError("Could not update password", state.error);
    }, [state]);

    return (
        <form ref={formRef} action={action} className="mt-3 grid gap-3">
            <input
                type="password"
                name="currentPassword"
                autoComplete="current-password"
                required
                placeholder="Current password"
                className="rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-500"
            />
            <input
                type="password"
                name="newPassword"
                autoComplete="new-password"
                required
                minLength={12}
                placeholder="New password (min 12 characters)"
                className="rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-500"
            />
            <input
                type="password"
                name="confirmPassword"
                autoComplete="new-password"
                required
                minLength={12}
                placeholder="Confirm new password"
                className="rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-500"
            />
            <button
                type="submit"
                disabled={pending}
                className="justify-self-start rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 disabled:opacity-50"
            >
                {pending ? "Updating…" : "Update password"}
            </button>
        </form>
    );
}
