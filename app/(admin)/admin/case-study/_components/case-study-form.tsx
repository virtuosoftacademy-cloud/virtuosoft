// ============================================================================
// The single case-study form, shared by create and edit. Scalar fields
// follow the blog form's conventions (lists = one per line). The two
// repeatable groups (hero stats, impact rows) are React-state row editors
// serialized into hidden JSON inputs (heroStatsJson, impactRowsJson) that
// the server action parses.
// Type: Client Component ("use client")
// ============================================================================
"use client";

import { useActionState, useState } from "react";
import { ImageUploadField } from "@/components/upload/ImageUploadField";
import type {
    CaseStudyFormState,
    HeroStatRow,
    ImpactRowRow,
} from "../_lib/parse-case-study-form";
import { Button } from "@/components/ui/button";

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

// ── Hero stats: up to 3 floating stat cards under the laptop mockup ────
const HERO_STAT_ICONS = ["institutions", "users", "funding"] as const;

function HeroStatsEditor({
    rows, setRows,
}: {
    rows: HeroStatRow[];
    setRows: (rows: HeroStatRow[]) => void;
}) {
    const update = (i: number, key: keyof HeroStatRow, value: string) =>
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
            <legend className="px-1 text-sm font-semibold text-neutral-800">
                Hero stats (up to 3, shown as floating cards under the hero)
            </legend>
            <div className="space-y-3">
                {rows.map((row, i) => (
                    <div key={i} className="flex items-start gap-2">
                        <div className="grid flex-1 gap-2 sm:grid-cols-3">
                            <select
                                value={row.icon}
                                onChange={(e) => update(i, "icon", e.target.value)}
                                className={`${inputClass} mt-0`}
                            >
                                {HERO_STAT_ICONS.map((icon) => (
                                    <option key={icon} value={icon}>{icon}</option>
                                ))}
                            </select>
                            <input
                                value={row.value}
                                onChange={(e) => update(i, "value", e.target.value)}
                                placeholder="Value (e.g. 50+)"
                                className={`${inputClass} mt-0`}
                            />
                            <input
                                value={row.label}
                                onChange={(e) => update(i, "label", e.target.value)}
                                placeholder="Label"
                                className={`${inputClass} mt-0`}
                            />
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
            <button type="button"
                onClick={() => setRows([...rows, { icon: "institutions", value: "", label: "" }])}
                disabled={rows.length >= 3}
                className="mt-3 rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 disabled:opacity-50">
                + Add stat
            </button>
        </fieldset>
    );
}

// ── Impact rows: the before/after table in the Business Impact section ──
const IMPACT_ROW_ICONS = ["efficiency", "latency", "availability", "delivery"] as const;

function ImpactRowsEditor({
    rows, setRows,
}: {
    rows: ImpactRowRow[];
    setRows: (rows: ImpactRowRow[]) => void;
}) {
    const update = (i: number, key: keyof ImpactRowRow, value: string) =>
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
            <legend className="px-1 text-sm font-semibold text-neutral-800">Impact rows</legend>
            <div className="space-y-3">
                {rows.map((row, i) => (
                    <div key={i} className="flex items-start gap-2">
                        <div className="grid flex-1 gap-2 sm:grid-cols-2">
                            <select
                                value={row.icon}
                                onChange={(e) => update(i, "icon", e.target.value)}
                                className={`${inputClass} mt-0 sm:col-span-2`}
                            >
                                {IMPACT_ROW_ICONS.map((icon) => (
                                    <option key={icon} value={icon}>{icon}</option>
                                ))}
                            </select>
                            <input
                                value={row.label}
                                onChange={(e) => update(i, "label", e.target.value)}
                                placeholder="Label (e.g. Efficiency)"
                                className={`${inputClass} mt-0 sm:col-span-2`}
                            />
                            <input
                                value={row.before}
                                onChange={(e) => update(i, "before", e.target.value)}
                                placeholder="Before"
                                className={`${inputClass} mt-0`}
                            />
                            <input
                                value={row.after}
                                onChange={(e) => update(i, "after", e.target.value)}
                                placeholder="After"
                                className={`${inputClass} mt-0`}
                            />
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
            <button type="button"
                onClick={() => setRows([...rows, { icon: "efficiency", label: "", before: "", after: "" }])}
                className="mt-3 rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100">
                + Add row
            </button>
        </fieldset>
    );
}

// ── Default values shape (edit page fills this from the row) ───────
export type CaseStudyFormValues = {
    heroTitle?: string; heroSubtitle?: string; heroImage?: string;
    thumbnailImage?: string | null; logoImage?: string | null; liveSiteUrl?: string | null;
    industryId?: number | null; serviceAreaIds?: number[];
    heroTags?: string;
    summaryHeadingLead?: string; summaryHeadingAccent?: string; summaryIntro?: string;
    problemTitleLead?: string; problemTitleAccent?: string; problemIntro?: string; problemPoints?: string;
    solutionTitleLead?: string; solutionTitleAccent?: string; solutionIntro?: string; solutionPoints?: string;
    impactNote?: string;
    heroStats?: HeroStatRow[]; impactRows?: ImpactRowRow[];
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

    const [heroStats, setHeroStats] = useState<HeroStatRow[]>(defaultValues.heroStats ?? []);
    const [impactRows, setImpactRows] = useState<ImpactRowRow[]>(defaultValues.impactRows ?? []);

    return (
        <form action={formAction} className="space-y-6">
            {state.error && (
                <div role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {state.error}
                </div>
            )}

            {/* Repeatable groups travel as JSON */}
            <input type="hidden" name="heroStatsJson" value={JSON.stringify(heroStats)} />
            <input type="hidden" name="impactRowsJson" value={JSON.stringify(impactRows)} />

            {/* ── Hero ── */}
            <Text name="heroTitle" label="Hero title" error={errors.heroTitle}
                defaultValue={values.heroTitle} />
            <Area name="heroSubtitle" label="Hero subtitle" rows={2} error={errors.heroSubtitle}
                defaultValue={values.heroSubtitle} />
            {/* ── Hero image: fills the laptop-mockup screen ── */}
            <ImageUploadField
                name="heroImage"
                kind="case-study"
                label="Hero image"
                defaultValue={values.heroImage}
                error={errors.heroImage}
                help="Shown inside the laptop mockup in the hero."
            />
            {/* ── Card thumbnail: optional, falls back to the hero image ── */}
            <ImageUploadField
                name="thumbnailImage"
                kind="case-study-thumb"
                label="Card thumbnail"
                defaultValue={values.thumbnailImage ?? undefined}
                error={errors.thumbnailImage}
                help="Shown on the case study card in the listing grid and the 'More Case Studies' carousel."
            />
            {/* ── Client logo: optional, shown on the carousel card ── */}
            <ImageUploadField
                name="logoImage"
                kind="case-study-logo"
                label="Client logo"
                defaultValue={values.logoImage ?? undefined}
                error={errors.logoImage}
                help="Optional. Overlaid on the 'More Case Studies' carousel card; hidden when blank."
            />
            <Text name="liveSiteUrl" label="Live site link" required={false}
                defaultValue={values.liveSiteUrl}
                hint="Optional. Shown as 'View Live Site' in the hero." />
            <Area name="heroTags" label="Hero tags" rows={2} required={false}
                defaultValue={values.heroTags} hint="One tag per line" />

            <HeroStatsEditor rows={heroStats} setRows={setHeroStats} />

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

            {/* ── "How Virtuosoft Helped..." heading above the panels ── */}
            <div className="grid gap-4 sm:grid-cols-2">
                <Text name="summaryHeadingLead" label="Summary heading (lead)" required={false}
                    defaultValue={values.summaryHeadingLead} />
                <Text name="summaryHeadingAccent" label="Summary heading (accent, bold/blue)" required={false}
                    defaultValue={values.summaryHeadingAccent} />
            </div>
            <Area name="summaryIntro" label="Summary intro" rows={3} required={false}
                defaultValue={values.summaryIntro} />

            {/* ── Problem panel ── */}
            <fieldset className="rounded-lg border border-neutral-200 p-4">
                <legend className="px-1 text-sm font-semibold text-neutral-800">Problem panel</legend>
                <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Text name="problemTitleLead" label="Title (lead)" required={false}
                            defaultValue={values.problemTitleLead} />
                        <Text name="problemTitleAccent" label="Title (accent, bold/blue)" required={false}
                            defaultValue={values.problemTitleAccent} />
                    </div>
                    <Area name="problemIntro" label="Intro" rows={3} required={false}
                        defaultValue={values.problemIntro} />
                    <Area name="problemPoints" label="Points" rows={5} required={false}
                        defaultValue={values.problemPoints} hint="One point per line" />
                </div>
            </fieldset>

            {/* ── Solution panel ── */}
            <fieldset className="rounded-lg border border-neutral-200 p-4">
                <legend className="px-1 text-sm font-semibold text-neutral-800">Solution panel</legend>
                <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Text name="solutionTitleLead" label="Title (lead)" required={false}
                            defaultValue={values.solutionTitleLead} />
                        <Text name="solutionTitleAccent" label="Title (accent, bold/blue)" required={false}
                            defaultValue={values.solutionTitleAccent} />
                    </div>
                    <Area name="solutionIntro" label="Intro" rows={3} required={false}
                        defaultValue={values.solutionIntro} />
                    <Area name="solutionPoints" label="Points" rows={5} required={false}
                        defaultValue={values.solutionPoints} hint="One point per line" />
                </div>
            </fieldset>

            <ImpactRowsEditor rows={impactRows} setRows={setImpactRows} />
            <Area name="impactNote" label="Impact note" rows={2} required={false}
                defaultValue={values.impactNote}
                hint="Shown under the Impact table" />

            <div className="flex items-center gap-3 border-t border-neutral-200 pt-6">
                <Button type="submit" disabled={isPending}>
                    {isPending ? pendingLabel : submitLabel}
                </Button>
            </div>
        </form>
    );
}
