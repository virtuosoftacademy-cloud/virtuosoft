// ============================================================================
// Server actions for the blog categories screen.
// Purpose: Server actions for category management:
//            - createCategory: validates, blocks duplicates by label, inserts
//            - deleteCategory: detaches posts FIRST (sets categoryId = null,
//              so no post is lost and no foreign-key error fires), then
//              deletes the category
// Type: Server Actions ("use server")
// ============================================================================

"use server";

import { prisma } from "@/app/api/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

/** What was typed, echoed back so a rejected save keeps it on screen. */
export type CategoryValues = { label: string; accent: string };

export type CategoryFormState = {
    error?: string;
    success?: string;
    // React resets an uncontrolled form once its action resolves. Without
    // this, a duplicate name would clear both boxes as it reported itself.
    values?: CategoryValues;
};

export async function createCategory(
    _prevState: CategoryFormState,
    formData: FormData
): Promise<CategoryFormState> {
    const label = String(formData.get("label") ?? "").trim();
    // Accent is a highlighted phrase shown after the label (may be empty).
    const accent = String(formData.get("accent") ?? "").trim();
    const values: CategoryValues = { label, accent };

    // Guard: only a signed-in ADMIN may manage categories.
    const session = await auth();
    if (session?.user?.role !== "ADMIN") {
        return { error: "You must be signed in as an admin.", values };
    }

    if (!label) return { error: "Category name is required.", values };

    const existing = await prisma.blogCategory.findFirst({ where: { label } });
    if (existing) return { error: `"${label}" already exists.`, values };

    await prisma.blogCategory.create({ data: { label, accent } });

    revalidatePath("/categories");
    revalidatePath("/view-page");
    return { success: `Created "${label}".` };
}

export async function deleteCategory(formData: FormData) {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") return;

    const id = Number(formData.get("id"));
    if (!id) return;

    // Detach posts first — categoryId is nullable, so posts survive
    // as "No category" instead of failing the foreign-key constraint.
    await prisma.blogPost.updateMany({
        where: { categoryId: id },
        data: { categoryId: null },
    });
    await prisma.blogCategory.delete({ where: { id } });

    revalidatePath("/categories");
    revalidatePath("/view-page");
    revalidatePath("/blogs");
}


export type EditCategoryState = {
    error?: string;
    success?: boolean;
    /** Echoed back so a rejected rename keeps the attempted text. */
    values?: CategoryValues;
};

export async function updateCategory(
    id: number,
    _prev: EditCategoryState,
    formData: FormData
): Promise<EditCategoryState> {
    "use server"; // omit if the file already has top-level "use server"
    const label = String(formData.get("label") ?? "").trim();
    const accent = String(formData.get("accent") ?? "").trim();
    const values: CategoryValues = { label, accent };

    const session = await auth();
    if (session?.user?.role !== "ADMIN") {
        return { error: "You must be signed in as an admin.", values };
    }

    if (!label) return { error: "Label is required.", values };

    await prisma.blogCategory.update({ where: { id }, data: { label, accent } });

    revalidatePath("/admin/blog/categories"); // adjust to your route
    revalidatePath("/blogs");                 // labels render publicly
    return { success: true };
}