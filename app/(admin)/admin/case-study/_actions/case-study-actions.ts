"use server";

import { prisma } from "@/app/api/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { type CaseStudyFormState, parseCaseStudyForm } from "../_lib/parse-case-study-form";
import { slugify } from "@/app/types/types";

async function requireAdmin() {
    const session = await auth();
    return session?.user?.role === "ADMIN" ? session : null;
}

function childWrites(values: ReturnType<typeof parseCaseStudyForm>["values"]) {
    return {
        heroStats: {
            create: values.heroStats.map((s, i) => ({ ...s, order: i + 1 })),
        },
        impactRows: {
            create: values.impactRows.map((r, i) => ({ ...r, order: i + 1 })),
        },
    };
}

// Revalidates everything a case-study change can affect: admin list,
// public listing, and the public detail page.
function refreshCaseStudies(slug?: string) {
    revalidatePath("/admin/case-study");
    // The public routes are /case-studies (plural) — revalidating
    // "/case-study" silently did nothing, so the grid stayed stale.
    revalidatePath("/case-studies");
    if (slug) revalidatePath(`/case-studies/${slug}`);
}

export async function createCaseStudy(
    _prev: CaseStudyFormState,
    formData: FormData
): Promise<CaseStudyFormState> {
    const session = await requireAdmin();
    if (!session) return { error: "You must be signed in as an admin." };

    // `values` always comes back so every early return can hand the admin's
    // own input to the form instead of letting React blank it out.
    const { values, fieldErrors } = parseCaseStudyForm(formData);
    if (fieldErrors) return { fieldErrors, values };

    const slug = slugify(values.heroTitle);
    const existing = await prisma.caseStudy.findUnique({ where: { slug } });
    if (existing) {
        return {
            fieldErrors: {
                heroTitle: `A case study with the slug "${slug}" already exists. Change the title.`,
            },
            values,
        };
    }

    // serviceAreaIds must NOT reach Prisma as a scalar — it becomes the
    // m2m connect below. heroStats/impactRows go through childWrites.
    const { heroStats, impactRows, serviceAreaIds, ...scalars } = values;
    try {
        await prisma.caseStudy.create({
            data: {
                ...scalars,
                slug,
                // No author picker on this form yet — case studies save
                // without a byline for now (Author is independent of the
                // signed-in admin; see prisma/schema.prisma's Author model).
                serviceAreas: { connect: serviceAreaIds.map((id) => ({ id })) },
                ...childWrites(values),
            },
        });
    } catch (err) {
        console.error("Failed to create case study:", err);
        return { error: "Could not save the case study. Check the server logs.", values };
    }

    refreshCaseStudies(slug);
    redirect(`/case-studies/${slug}`);
}

export async function updateCaseStudy(
    slug: string,
    _prev: CaseStudyFormState,
    formData: FormData
): Promise<CaseStudyFormState> {
    const session = await requireAdmin();
    if (!session) return { error: "You must be signed in as an admin." };

    const { values, fieldErrors } = parseCaseStudyForm(formData);
    if (fieldErrors) return { fieldErrors, values };

    const { heroStats, impactRows, serviceAreaIds, ...scalars } = values;
    try {
        await prisma.caseStudy.update({
            where: { slug },
            data: {
                ...scalars,
                // set replaces the whole m2m membership with the checked boxes
                serviceAreas: { set: serviceAreaIds.map((id) => ({ id })) },
                heroStats: { deleteMany: {}, create: values.heroStats.map((s, i) => ({ ...s, order: i + 1 })) },
                impactRows: { deleteMany: {}, create: values.impactRows.map((r, i) => ({ ...r, order: i + 1 })) },
            },
        });
    } catch (err) {
        console.error("Failed to update case study:", err);
        return { error: "Could not update the case study. Check the server logs.", values };
    }

    refreshCaseStudies(slug);
    redirect(`/admin/case-study`);
}

export async function deleteCaseStudy(formData: FormData) {
    const session = await requireAdmin();
    if (!session) return;

    const id = String(formData.get("id") ?? "");
    if (!id) return;

    // ApproachCard / TimelinePhase / RelatedService rows cascade;
    // ServiceArea join rows are removed automatically.
    await prisma.caseStudy.delete({ where: { id } });

    refreshCaseStudies();
}

// ── Industries ─────────────────────────────────────────────────────
function refresh() {
    revalidatePath("/admin/case-study/industries");
    revalidatePath("/admin/case-study/service-areas");
    revalidatePath("/admin/case-study");
    revalidatePath("/admin");
    revalidatePath("/case-studies"); // labels show on public pages too
}

export type TaxonomyFormState = {
    error?: string;
    success?: string;
    // React resets an uncontrolled form once its action resolves, so without
    // echoing this back a duplicate name would clear the box as it complained.
    values?: { label: string };
};

export async function createIndustry(
    _prev: TaxonomyFormState,
    formData: FormData
): Promise<TaxonomyFormState> {
    const label = String(formData.get("label") ?? "").trim();
    const values = { label };

    if (!(await requireAdmin())) {
        return { error: "You must be signed in as an admin.", values };
    }
    if (!label) return { error: "Industry name is required.", values };

    const existing = await prisma.industry.findUnique({ where: { label } });
    if (existing) return { error: `"${label}" already exists.`, values };

    await prisma.industry.create({ data: { label } });
    refresh();
    return { success: `Created "${label}".` };
}

export async function deleteIndustry(formData: FormData) {
    if (!(await requireAdmin())) return;
    const id = Number(formData.get("id"));
    if (!id) return;

    // Detach first — case studies survive as "No industry".
    await prisma.caseStudy.updateMany({
        where: { industryId: id },
        data: { industryId: null },
    });
    await prisma.industry.delete({ where: { id } });
    refresh();
}

// ── Service areas ──────────────────────────────────────────────────
export async function createServiceArea(
    _prev: TaxonomyFormState,
    formData: FormData
): Promise<TaxonomyFormState> {
    const label = String(formData.get("label") ?? "").trim();
    const values = { label };

    if (!(await requireAdmin())) {
        return { error: "You must be signed in as an admin.", values };
    }
    if (!label) return { error: "Service area name is required.", values };

    const existing = await prisma.serviceArea.findUnique({ where: { label } });
    if (existing) return { error: `"${label}" already exists.`, values };

    await prisma.serviceArea.create({ data: { label } });
    refresh();
    return { success: `Created "${label}".` };
}

export async function deleteServiceArea(formData: FormData) {
    if (!(await requireAdmin())) return;
    const id = Number(formData.get("id"));
    if (!id) return;

    // Implicit m2m: deleting the area removes its join rows automatically.
    await prisma.serviceArea.delete({ where: { id } });
    refresh();
}
