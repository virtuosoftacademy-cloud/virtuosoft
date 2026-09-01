// ============================================================================
// The single case-study form, shared by create and edit.
// Purpose: The single case-study form used by create and edit. Scalar fields
//          follow the blog form's conventions (paragraphs = blank-line
//          separated, lists = one per line). The three repeatable groups
//          (approach cards, timeline, related services) are React-state row
//          editors serialized into hidden JSON inputs (cardsJson,
//          timelineJson, servicesJson) that the server action parses.
// Type: Client Component ("use client")
// ============================================================================
"use client";

import { useActionState, useState } from "react";
import { ImageUploadField } from "@/components/upload/ImageUploadField";
import { RichTextEditor } from "@/components/editor/RichTextEditor";
import type {
    CaseStudyFormState,
    CardRow,
    TimelineRow,
    ServiceRow,
} from "../_lib/parse-case-study-form";
import { Button } from "@/components/ui/button";
// Same source the navbar uses, so admin choices and public navigation
// can never drift apart.
import { serviceItems } from "@/app/_constant";

const initialState: CaseStudyFormState = {};

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
    name, label, hint, error, defaultValue, required = true,
}: {
    name: string; label: string; hint?: string; error?: string;
    defaultValue?: string | null; required?: boolean;
}) {
    return (
        <div>
            <label htmlFor={name} className={labelClass}>{label}</label>
            <input id={name} name={name} type="text" required={required}
                defaultValue={defaultValue ?? ""} className={inputClass}
                aria-invalid={Boolean(error)} />
            {hint && <p className={hintClass}>{hint}</p>}
            <FieldError message={error} />
        </div>
    );
}

function Area({
    name, label, hint, error, defaultValue, rows = 4, required = true,
}: {
    name: string; label: string; hint?: string; error?: string;
    defaultValue?: string | null; rows?: number; required?: boolean;
}) {
    return (
        <div>
            <label htmlFor={name} className={labelClass}>{label}</label>
            <textarea id={name} name={name} rows={rows} required={required}
                defaultValue={defaultValue ?? ""} className={inputClass}
                aria-invalid={Boolean(error)} />
            {hint && <p className={hintClass}>{hint}</p>}
            <FieldError message={error} />
        </div>
    );
}

// ── Generic repeatable-rows editor ─────────────────────────────────
function RowsEditor<T extends Record<string, string>>({
    title, rows, setRows, empty, fields, addLabel,
}: {
    title: string;
    rows: T[];
    setRows: (rows: T[]) => void;
    empty: T;
    fields: { key: keyof T & string; label: string; wide?: boolean }[];
    addLabel: string;
}) {
    const update = (i: number, key: keyof T & string, value: string) =>
        setRows(rows.map((r, idx) => (idx === i ? { ...r, [key]: value } : r)));
    const remove = (i: number) => setRows(rows.filter((_, idx) => idx !== i));
    const move = (i: number, dir: -1 | 1) => {
        const j = i + dir;
        if (j < 0 || j >= rows.length) return;
        const next = [...rows];
        [next[i], next[j]] = [next[j], next[i]];
        setRows(next);
    };

    return (
        <fieldset className="rounded-lg border border-neutral-200 p-4">
            <legend className="px-1 text-sm font-semibold text-neutral-800">{title}</legend>
            <div className="space-y-3">
                {rows.map((row, i) => (
                    <div key={i} className="flex items-start gap-2">
                        <div className="grid flex-1 gap-2 sm:grid-cols-2">
                            {fields.map((f) => (
                                <input
                                    key={f.key}
                                    value={row[f.key]}
                                    onChange={(e) => update(i, f.key, e.target.value)}
                                    placeholder={f.label}
                                    className={`${inputClass} mt-0 ${f.wide ? "sm:col-span-2" : ""}`}
                                />
                            ))}
                        </div>
                        <div className="flex shrink-0 gap-1 pt-1">
                            <button type="button" onClick={() => move(i, -1)} title="Move up"
                                className="rounded px-2 py-1 text-xs text-neutral-500 hover:bg-neutral-100">↑</button>
                            <button type="button" onClick={() => move(i, 1)} title="Move down"
                                className="rounded px-2 py-1 text-xs text-neutral-500 hover:bg-neutral-100">↓</button>
                            <button type="button" onClick={() => remove(i)} title="Remove"
                                className="rounded px-2 py-1 text-xs text-red-600 hover:bg-red-50">✕</button>
                        </div>
                    </div>
                ))}
            </div>
            <button type="button" onClick={() => setRows([...rows, { ...empty }])}
                className="mt-3 rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100">
                {addLabel}
            </button>
        </fieldset>
    );
}

// ── Related services: pick from the real service pages ─────────────
// Free-text links were easy to get wrong — every related service in the
// seed pointed at a slug with no page behind it. The dropdown is fed by
// the same serviceItems the navbar uses, so a chosen link always resolves.
function RelatedServicesEditor({
    rows,
    setRows,
    error,
}: {
    rows: ServiceRow[];
    setRows: (rows: ServiceRow[]) => void;
    error?: string;
}) {
    const remove = (i: number) => setRows(rows.filter((_, idx) => idx !== i));
    const move = (i: number, dir: -1 | 1) => {
        const j = i + dir;
        if (j < 0 || j >= rows.length) return;
        const next = [...rows];
        [next[i], next[j]] = [next[j], next[i]];
        setRows(next);
    };
    // Title comes from the chosen service, so the label can't drift from the page.
    const choose = (i: number, href: string) => {
        const item = serviceItems.find((s) => s.href === href);
        setRows(
            rows.map((r, idx) =>
                idx === i ? { label: item?.title ?? r.label, href } : r
            )
        );
    };

    return (
        <fieldset className="rounded-lg border border-neutral-200 p-4">
            <legend className="px-1 text-sm font-semibold text-neutral-800">
                Related services
            </legend>
            <div className="space-y-3">
                {rows.map((row, i) => {
                    // A link saved before this dropdown existed, or one whose page
                    // has since gone. Kept selectable so editing doesn't drop it.
                    const isLegacy =
                        Boolean(row.href) &&
                        !serviceItems.some((s) => s.href === row.href);

                    return (
                        <div key={i} className="flex items-start gap-2">
                            <div className="flex-1">
                                <select
                                    value={row.href}
                                    onChange={(e) => choose(i, e.target.value)}
                                    className={`${inputClass} mt-0`}
                                    aria-invalid={isLegacy || undefined}
                                >
                                    <option value="">Choose a service…</option>
                                    {serviceItems.map((s) => (
                                        <option
                                            key={s.href}
                                            value={s.href}
                                            // Stop the same service being added twice.
                                            disabled={
                                                s.href !== row.href &&
                                                rows.some((r) => r.href === s.href)
                                            }
                                        >
                                            {s.title}
                                        </option>
                                    ))}
                                    {isLegacy && (
                                        <option value={row.href}>
                                            {row.label || row.href} (no matching page)
                                        </option>
                                    )}
                                </select>
                                {row.href && (
                                    <p className={hintClass}>
                                        {isLegacy
                                            ? `${row.href} — this link has no service page and will 404.`
                                            : row.href}
                                    </p>
                                )}
                            </div>
                            <div className="flex shrink-0 gap-1 pt-1">
                                <button type="button" onClick={() => move(i, -1)} title="Move up"
                                    className="rounded px-2 py-1 text-xs text-neutral-500 hover:bg-neutral-100">↑</button>
                                <button type="button" onClick={() => move(i, 1)} title="Move down"
                                    className="rounded px-2 py-1 text-xs text-neutral-500 hover:bg-neutral-100">↓</button>
                                <button type="button" onClick={() => remove(i)} title="Remove"
                                    className="rounded px-2 py-1 text-xs text-red-600 hover:bg-red-50">✕</button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button
                type="button"
                onClick={() => setRows([...rows, { label: "", href: "" }])}
                // Nothing left to pick once every service is on the list.
                disabled={rows.length >= serviceItems.length}
                className="mt-3 rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium
                           text-neutral-700 hover:bg-neutral-100 disabled:opacity-50"
            >
                + Add service
            </button>
            <FieldError message={error} />
        </fieldset>
    );
}

// ── Default values shape (edit page fills this from the row) ───────
export type CaseStudyFormValues = {
    heroTitle?: string; heroSubtitle?: string; heroImage?: string;
    thumbnailImage?: string | null;
    industryId?: number | null; serviceAreaIds?: number[]; summary?: string;
    situationParagraphs?: string; situationQuestions?: string; situationClosing?: string | null;
    challenge?: string; approachIntro?: string; outcome?: string; keyResults?: string;
    calloutHeading?: string | null; calloutText?: string | null;
    calloutButtonHref?: string | null; calloutButtonLabel?: string | null;
    cards?: CardRow[]; timeline?: TimelineRow[]; services?: ServiceRow[];
};

type Lookup = { id: number; label: string };

export function CaseStudyForm({
    action, submitLabel, pendingLabel, industries, serviceAreas, defaultValues = {},
}: {
    action: (state: CaseStudyFormState, formData: FormData) => Promise<CaseStudyFormState>;
    submitLabel: string;
    pendingLabel: string;
    industries: Lookup[];
    serviceAreas: Lookup[];
    defaultValues?: CaseStudyFormValues;
}) {
    const [state, formAction, isPending] = useActionState(action, initialState);
    const errors = state.fieldErrors ?? {};

    // React resets an uncontrolled form once its action resolves, restoring
    // each input to its defaultValue. Pointing those defaults at the rejected
    // submission means a validation failure leaves the typing intact instead
    // of emptying every other field. The repeatable groups below are React
    // state, so they survive the reset on their own.
    const values: CaseStudyFormValues = state.values ?? defaultValues;

    const [cards, setCards] = useState<CardRow[]>(defaultValues.cards ?? []);
    const [timeline, setTimeline] = useState<TimelineRow[]>(defaultValues.timeline ?? []);
    const [services, setServices] = useState<ServiceRow[]>(defaultValues.services ?? []);

    return (
        <form action={formAction} className="space-y-6">
            {state.error && (
                <div role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {state.error}
                </div>
            )}

            {/* Repeatable groups travel as JSON */}
            <input type="hidden" name="cardsJson" value={JSON.stringify(cards)} />
            <input type="hidden" name="timelineJson" value={JSON.stringify(timeline)} />
            <input type="hidden" name="servicesJson" value={JSON.stringify(services)} />

            {/* ── Hero ── */}
            <Text name="heroTitle" label="Hero title" error={errors.heroTitle}
                defaultValue={values.heroTitle} />
            <Area name="heroSubtitle" label="Hero subtitle" rows={2} error={errors.heroSubtitle}
                defaultValue={values.heroSubtitle} />
            {/* ── Hero image: upload to R2 or paste URL/path ── */}
            <ImageUploadField
                name="heroImage"
                kind="case-study"
                label="Hero image"
                defaultValue={values.heroImage}
                error={errors.heroImage}
            />
            {/* ── Card thumbnail: optional, falls back to the hero image ── */}
            <ImageUploadField
                name="thumbnailImage"
                kind="case-study-thumb"
                label="Card thumbnail"
                defaultValue={values.thumbnailImage ?? undefined}
                error={errors.thumbnailImage}
                help="Shown on the case study card in the listing grid."
            />

            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="industryId" className={labelClass}>Industry</label>
                    <select id="industryId" name="industryId"
                        defaultValue={values.industryId ?? ""} className={inputClass}>
                        <option value="">No industry</option>
                        {industries.map((i) => (
                            <option key={i.id} value={i.id}>{i.label}</option>
                        ))}
                    </select>
                    <p className={hintClass}>Manage the list at /industries</p>
                </div>
            </div>

            <fieldset className="rounded-lg border border-neutral-200 p-4">
                <legend className="px-1 text-sm font-semibold text-neutral-800">Service areas</legend>
                {serviceAreas.length === 0 ? (
                    <p className="text-sm text-neutral-500">
                        No service areas yet — add them at /service-areas.
                    </p>
                ) : (
                    <div className="grid gap-2 sm:grid-cols-2">
                        {serviceAreas.map((a) => (
                            <label key={a.id} className="flex items-center gap-2 text-sm text-neutral-800">
                                <input
                                    type="checkbox"
                                    name="serviceAreaIds"
                                    value={a.id}
                                    defaultChecked={values.serviceAreaIds?.includes(a.id)}
                                    className="h-4 w-4 rounded border-neutral-300"
                                />
                                {a.label}
                            </label>
                        ))}
                    </div>
                )}
            </fieldset>

            {/* ── Prose sections ── */}
            <RichTextEditor
                name="summary"
                label="Executive summary"
                defaultValue={values.summary}
                error={errors.summary}
                help="Case studies written before the editor existed open as plain paragraphs and can be formatted from here."
            />
            <Area name="situationParagraphs" label="The Situation — paragraphs" rows={5} required={false}
                error={errors.situationParagraphs} defaultValue={values.situationParagraphs}
                hint="Separate paragraphs with a blank line" />
            <Area name="situationQuestions" label="The Situation — questions" rows={3} required={false}
                error={errors.situationQuestions} defaultValue={values.situationQuestions}
                hint="One question per line" />
            <Area name="situationClosing" label="The Situation — closing line" rows={2} required={false}
                defaultValue={values.situationClosing} hint="Optional" />
            {/* Rich text: writes HTML into a hidden "challenge" input, so the
                action and parser keep reading the same field name. */}
            <RichTextEditor
                name="challenge"
                label="The Challenge"
                defaultValue={values.challenge}
                error={errors.challenge}
                help="Case studies written before the editor existed open as plain paragraphs and can be formatted from here."
            />
            <Area name="approachIntro" label="Our Approach — intro" rows={3} required={false} error={errors.approachIntro}
                defaultValue={values.approachIntro} hint="Separate paragraphs with a blank line" />

            <RowsEditor
                title="Our Approach — cards"
                rows={cards} setRows={setCards}
                empty={{ title: "", description: "" }}
                fields={[{ key: "title", label: "Card title" }, { key: "description", label: "Card description", wide: true }]}
                addLabel="+ Add card"
            />

            <RowsEditor
                title="Engagement timeline"
                rows={timeline} setRows={setTimeline}
                empty={{ phase: "", duration: "" }}
                fields={[{ key: "phase", label: "Phase" }, { key: "duration", label: "Duration (e.g. Weeks 1–2)" }]}
                addLabel="+ Add phase"
            />

            <Area name="outcome" label="The Outcome" rows={5} required={false} error={errors.outcome}
                defaultValue={values.outcome} hint="Separate paragraphs with a blank line" />
            <Area name="keyResults" label="Key results" rows={4} required={false} error={errors.keyResults}
                defaultValue={values.keyResults} hint="One result per line" />

            <RelatedServicesEditor
                rows={services}
                setRows={setServices}
                error={errors.services}
            />

            {/* ── Callout (optional) ── */}
            <fieldset className="rounded-lg border border-neutral-200 p-4">
                <legend className="px-1 text-sm font-semibold text-neutral-800">
                    Callout (optional — shown when heading is filled)
                </legend>
                <div className="grid gap-4 sm:grid-cols-2">
                    <Text name="calloutHeading" label="Heading" required={false}
                        defaultValue={values.calloutHeading} />
                    <Text name="calloutButtonLabel" label="Button label" required={false}
                        defaultValue={values.calloutButtonLabel} />
                    <div className="sm:col-span-2">
                        <Area name="calloutText" label="Text" rows={2} required={false}
                            defaultValue={values.calloutText} />
                    </div>
                    {/* Pre-filled: the callout button almost always points at
                        the contact page, so type nothing and it still works. */}
                    <Text name="calloutButtonHref" label="Button link" required={false}
                        defaultValue={values.calloutButtonHref ?? "/contact"}
                        hint="Defaults to /contact" />
                </div>
            </fieldset>

            <div className="flex items-center gap-3 border-t border-neutral-200 pt-6">
                <Button type="submit" disabled={isPending}>
                    {isPending ? pendingLabel : submitLabel}
                </Button>
            </div>
        </form>
    );
}