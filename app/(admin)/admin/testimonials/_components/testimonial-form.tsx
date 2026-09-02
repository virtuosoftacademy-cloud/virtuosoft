"use client";

import { useActionState } from "react";
import type { TestimonialFormState, TestimonialValues } from "../_actions/testimonial-actions";
import { Button } from "@/components/ui/button";

type Props = {
    action: (state: TestimonialFormState, formData: FormData) => Promise<TestimonialFormState>;
    submitLabel: string;
    pendingLabel: string;
    defaultValues?: Partial<TestimonialValues>;
};

const initialState: TestimonialFormState = {};

function FieldError({ message }: { message?: string }) {
    if (!message) return null;
    return <p className="mt-1 text-sm text-red-600">{message}</p>;
}

export function TestimonialForm({ action, submitLabel, pendingLabel, defaultValues = {} }: Props) {
    const [state, formAction, isPending] = useActionState(action, initialState);
    const errors = state.fieldErrors ?? {};

    // React resets an uncontrolled form once its action resolves, restoring
    // each input to its defaultValue. Pointing those defaults at the rejected
    // submission means a validation failure leaves the typing intact instead
    // of emptying every other field.
    const values: Partial<TestimonialValues> = state.values ?? defaultValues;

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
                <label htmlFor="role" className={labelClass}>
                    Role
                </label>
                <input
                    id="role"
                    name="role"
                    type="text"
                    required
                    defaultValue={values.role}
                    placeholder="Product Manager, Acme Corp"
                    className={inputClass}
                    aria-invalid={Boolean(errors.role)}
                />
                <FieldError message={errors.role} />
            </div>

            <div>
                <label htmlFor="quote" className={labelClass}>
                    Quote
                </label>
                <textarea
                    id="quote"
                    name="quote"
                    rows={4}
                    required
                    defaultValue={values.quote}
                    placeholder="What the client actually said."
                    className={inputClass}
                    aria-invalid={Boolean(errors.quote)}
                />
                <FieldError message={errors.quote} />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="rating" className={labelClass}>
                        Rating
                    </label>
                    <select
                        id="rating"
                        name="rating"
                        defaultValue={values.rating ?? 5}
                        className={inputClass}
                    >
                        {[5, 4, 3, 2, 1].map((n) => (
                            <option key={n} value={n}>
                                {n} star{n === 1 ? "" : "s"}
                            </option>
                        ))}
                    </select>
                    <FieldError message={errors.rating} />
                </div>

                <div>
                    <label htmlFor="order" className={labelClass}>
                        Display order
                    </label>
                    <input
                        id="order"
                        name="order"
                        type="number"
                        defaultValue={values.order ?? 0}
                        placeholder="0"
                        className={inputClass}
                    />
                    <p className="mt-1 text-xs text-neutral-500">
                        Lower numbers show first. Ties break by newest.
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-neutral-200 pt-6">
                <Button type="submit" disabled={isPending} className="py-4">
                    {isPending ? pendingLabel : submitLabel}
                </Button>
            </div>
        </form>
    );
}
