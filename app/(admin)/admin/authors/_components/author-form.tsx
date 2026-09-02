"use client";

import { useActionState } from "react";
import type { AuthorFormState, AuthorValues } from "../_actions/author-actions";
import { AvatarUploadField } from "@/components/upload/AvatarUploadField";
import { Button } from "@/components/ui/button";

type Props = {
    action: (state: AuthorFormState, formData: FormData) => Promise<AuthorFormState>;
    submitLabel: string;
    pendingLabel: string;
    defaultValues?: Partial<AuthorValues>;
};

const initialState: AuthorFormState = {};

function FieldError({ message }: { message?: string }) {
    if (!message) return null;
    return <p className="mt-1 text-sm text-red-600">{message}</p>;
}

export function AuthorForm({ action, submitLabel, pendingLabel, defaultValues = {} }: Props) {
    const [state, formAction, isPending] = useActionState(action, initialState);
    const errors = state.fieldErrors ?? {};

    // React resets an uncontrolled form once its action resolves, restoring
    // each input to its defaultValue. Pointing those defaults at the rejected
    // submission means a validation failure leaves the typing intact instead
    // of emptying every other field.
    const values: Partial<AuthorValues> = state.values ?? defaultValues;

    const inputClass =
        "mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm " +
        "text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none " +
        "focus:ring-1 focus:ring-neutral-900";
    const labelClass = "block text-sm font-medium text-neutral-800";

    return (
        <form action={formAction} className="max-w-xl space-y-6">
            {state.error && (
                <div
                    role="alert"
                    className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                    {state.error}
                </div>
            )}

            <AvatarUploadField
                name="image"
                label="Profile photo"
                defaultValue={values.image}
                error={errors.image}
            />

            <div>
                <label htmlFor="name" className={labelClass}>
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    defaultValue={values.name}
                    placeholder="Jane Doe"
                    className={inputClass}
                    aria-invalid={Boolean(errors.name)}
                />
                <FieldError message={errors.name} />
            </div>

            <div>
                <label htmlFor="jobTitle" className={labelClass}>
                    Job title
                </label>
                <input
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    defaultValue={values.jobTitle}
                    placeholder="Senior Engineer"
                    className={inputClass}
                />
            </div>

            <div>
                <label htmlFor="bio" className={labelClass}>
                    Bio
                </label>
                <textarea
                    id="bio"
                    name="bio"
                    rows={3}
                    defaultValue={values.bio}
                    placeholder="A couple of sentences shown on the author card."
                    className={inputClass}
                />
            </div>

            <div>
                <label htmlFor="linkedIn" className={labelClass}>
                    LinkedIn URL
                </label>
                <input
                    id="linkedIn"
                    name="linkedIn"
                    type="url"
                    defaultValue={values.linkedIn}
                    placeholder="https://linkedin.com/in/..."
                    className={inputClass}
                    aria-invalid={Boolean(errors.linkedIn)}
                />
                <FieldError message={errors.linkedIn} />
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-neutral-200 pt-6">
                <Button type="submit" disabled={isPending} className="py-4">
                    {isPending ? pendingLabel : submitLabel}
                </Button>
            </div>
        </form>
    );
}
