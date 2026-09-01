"use client";

import { useActionState } from "react";
import { login, type LoginState } from "../_actions/login";
import { Button } from "@/components/ui/button";

const initialState: LoginState = {};

export function LoginForm() {
    const [state, formAction, isPending] = useActionState(login, initialState);

    const inputClass =
        "mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm " +
        "text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none " +
        "focus:ring-1 focus:ring-neutral-900";

    return (
        <form
            action={formAction}
            className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm"
        >
            {state.error && (
                <div
                    role="alert"
                    className={
                        // A pending device isn't a failure the person can fix by
                        // retrying, so it reads as a notice rather than an error.
                        state.pendingDevice
                            ? "rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800"
                            : "rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
                    }
                >
                    {state.error}
                </div>
            )}

            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-800"
                >
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                />
            </div>

            <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-neutral-800"
                >
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className={inputClass}
                />
            </div>

            <div>
                <label
                    htmlFor="deviceName"
                    className="block text-sm font-medium text-neutral-800"
                >
                    Device name{" "}
                    <span className="font-normal text-neutral-500">(optional)</span>
                </label>
                <input
                    id="deviceName"
                    name="deviceName"
                    type="text"
                    // Matches DEVICE_LABEL_MAX in lib/device.ts, which is
                    // server-only and so can't be imported here.
                    maxLength={60}
                    autoComplete="off"
                    placeholder="e.g. Office laptop"
                    className={inputClass}
                />
                <p className="mt-1 text-xs text-neutral-500">
                    Only used the first time you sign in from a browser, so the
                    administrator can recognise it.
                </p>
            </div>

            <Button
                type="submit"
                disabled={isPending}
                className="w-full py-6 text-xl! hover:bg-secondary"
            >
                <span>{isPending ? "Signing in…" : "Sign in"}</span>
            </Button>
        </form>
    );
}