"use client";

import { useActionState } from "react";
import type {
    TarabutProblemSolutionFormState,
    TarabutProblemSolutionValues,
} from "../_actions/tarabut-problem-solution-actions";
import { updateTarabutProblemSolution } from "../_actions/tarabut-problem-solution-actions";
import { Button } from "@/components/ui/button";

const initialState: TarabutProblemSolutionFormState = {};

const inputClass =
    "mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm " +
    "text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none " +
    "focus:ring-1 focus:ring-neutral-900";
const labelClass = "block text-sm font-medium text-neutral-800";
const hintClass = "mt-1 text-xs text-neutral-500";

function FieldError({ message }: { message?: string }) {
    if (!message) return null;
    return <p className="mt-1 text-sm text-red-600">{message}</p>;
}

function Text({
    name, label, error, defaultValue,
}: {
    name: keyof TarabutProblemSolutionValues; label: string; error?: string; defaultValue?: string;
}) {
    return (
        <div>
            <label htmlFor={name} className={labelClass}>{label}</label>
            <input id={name} name={name} type="text" required
                defaultValue={defaultValue ?? ""} className={inputClass}
                aria-invalid={Boolean(error)} />
            <FieldError message={error} />
        </div>
    );
}

function Area({
    name, label, hint, error, defaultValue, rows = 4,
}: {
    name: keyof TarabutProblemSolutionValues; label: string; hint?: string; error?: string;
    defaultValue?: string; rows?: number;
}) {
    return (
        <div>
            <label htmlFor={name} className={labelClass}>{label}</label>
            <textarea id={name} name={name} rows={rows} required
                defaultValue={defaultValue ?? ""} className={inputClass}
                aria-invalid={Boolean(error)} />
            {hint && <p className={hintClass}>{hint}</p>}
            <FieldError message={error} />
        </div>
    );
}

// One <Panel> for both Problem and Solution — same four fields, different
// name prefix, matching the two <Panel> cards rendered on the public page.
function PanelFields({
    prefix, legend, values, errors,
}: {
    prefix: "problem" | "solution";
    legend: string;
    values: Partial<TarabutProblemSolutionValues>;
    errors: Partial<Record<keyof TarabutProblemSolutionValues, string>>;
}) {
    const titleLead = `${prefix}TitleLead` as const;
    const titleAccent = `${prefix}TitleAccent` as const;
    const intro = `${prefix}Intro` as const;
    const points = `${prefix}Points` as const;

    return (
        <fieldset className="rounded-lg border border-neutral-200 p-4">
            <legend className="px-1 text-sm font-semibold text-neutral-800">{legend}</legend>
            <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                    <Text name={titleLead} label="Title (lead)" error={errors[titleLead]}
                        defaultValue={values[titleLead]} />
                    <Text name={titleAccent} label="Title (accent, bold/blue)" error={errors[titleAccent]}
                        defaultValue={values[titleAccent]} />
                </div>
                <Area name={intro} label="Intro" rows={3} error={errors[intro]}
                    defaultValue={values[intro]} />
                <Area name={points} label="Points" rows={5} error={errors[points]}
                    defaultValue={values[points]} hint="One point per line" />
            </div>
        </fieldset>
    );
}

export function TarabutProblemSolutionForm({
    defaultValues,
}: {
    defaultValues: TarabutProblemSolutionValues;
}) {
    const [state, formAction, isPending] = useActionState(updateTarabutProblemSolution, initialState);
    const errors = state.fieldErrors ?? {};
    const values = state.values ?? defaultValues;

    return (
        <form action={formAction} className="space-y-6">
            {state.error && (
                <div role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {state.error}
                </div>
            )}
            {state.success && (
                <div role="status" className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                    {state.success}
                </div>
            )}

            <PanelFields prefix="problem" legend="Problem panel" values={values} errors={errors} />
            <PanelFields prefix="solution" legend="Solution panel" values={values} errors={errors} />

            <div className="flex items-center gap-3 border-t border-neutral-200 pt-6">
                <Button type="submit" disabled={isPending}>
                    {isPending ? "Saving…" : "Save"}
                </Button>
            </div>
        </form>
    );
}
