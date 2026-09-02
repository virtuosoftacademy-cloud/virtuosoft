"use server";

import { prisma } from "@/app/api/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type TestimonialValues = {
    name: string;
    role: string;
    quote: string;
    rating: number;
    order: number;
};

export type TestimonialFormState = {
    error?: string;
    fieldErrors?: Partial<Record<keyof TestimonialValues, string>>;
    /**
     * What was submitted, echoed back so a rejected save can be re-rendered
     * with the admin's own text still in place. React resets an uncontrolled
     * form once its action resolves, so without this one bad field would
     * wipe everything else that had been typed.
     */
    values?: TestimonialValues;
};

async function requireAdmin() {
    const session = await auth();
    return session?.user?.role === "ADMIN" ? session : null;
}

function parse(formData: FormData): {
    values: TestimonialValues;
    fieldErrors?: Partial<Record<keyof TestimonialValues, string>>;
} {
    const get = (k: string) => String(formData.get(k) ?? "").trim();

    const ratingRaw = Number(get("rating"));
    const orderRaw = Number(get("order"));

    const fieldErrors: Partial<Record<keyof TestimonialValues, string>> = {};
    if (!get("name")) fieldErrors.name = "Name is required.";
    if (!get("role")) fieldErrors.role = "Role is required.";
    if (!get("quote")) fieldErrors.quote = "Quote is required.";
    if (!Number.isInteger(ratingRaw) || ratingRaw < 1 || ratingRaw > 5) {
        fieldErrors.rating = "Rating must be between 1 and 5.";
    }

    return {
        fieldErrors: Object.keys(fieldErrors).length > 0 ? fieldErrors : undefined,
        values: {
            name: get("name"),
            role: get("role"),
            quote: get("quote"),
            rating: Number.isInteger(ratingRaw) ? ratingRaw : 5,
            order: Number.isInteger(orderRaw) ? orderRaw : 0,
        },
    };
}

// Revalidates everywhere a testimonial change can be seen: the admin list
// and every home-page region (the carousel is region-agnostic, so all of
// them read the same data).
function refresh() {
    revalidatePath("/admin/testimonials");
    revalidatePath("/home");
    revalidatePath("/home/[region]", "page");
}

export async function createTestimonial(
    _prev: TestimonialFormState,
    formData: FormData
): Promise<TestimonialFormState> {
    if (!(await requireAdmin())) {
        return { error: "You must be signed in as an admin." };
    }

    const { values, fieldErrors } = parse(formData);
    if (fieldErrors) return { fieldErrors, values };

    try {
        await prisma.testimonial.create({ data: values });
    } catch (err) {
        console.error("Failed to create testimonial:", err);
        return { error: "Could not save the testimonial. Check the server logs.", values };
    }

    refresh();
    redirect("/admin/testimonials");
}

export async function updateTestimonial(
    id: string,
    _prev: TestimonialFormState,
    formData: FormData
): Promise<TestimonialFormState> {
    if (!(await requireAdmin())) {
        return { error: "You must be signed in as an admin." };
    }

    const { values, fieldErrors } = parse(formData);
    if (fieldErrors) return { fieldErrors, values };

    try {
        await prisma.testimonial.update({ where: { id }, data: values });
    } catch (err) {
        console.error("Failed to update testimonial:", err);
        return { error: "Could not update the testimonial. Check the server logs.", values };
    }

    refresh();
    redirect("/admin/testimonials");
}

export async function deleteTestimonial(formData: FormData) {
    if (!(await requireAdmin())) return;

    const id = String(formData.get("id") ?? "");
    if (!id) return;

    await prisma.testimonial.delete({ where: { id } });
    refresh();
}
