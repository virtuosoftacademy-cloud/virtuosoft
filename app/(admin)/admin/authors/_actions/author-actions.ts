"use server";

import { prisma } from "@/app/api/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isRenderableImageSrc } from "@/app/api/lib/blog-actions/blog-image";

export type AuthorValues = {
    name: string;
    jobTitle: string;
    bio: string;
    image: string;
    linkedIn: string;
};

export type AuthorFormState = {
    error?: string;
    fieldErrors?: Partial<Record<keyof AuthorValues, string>>;
    /**
     * What was submitted, echoed back so a rejected save can be re-rendered
     * with the admin's own text still in place. React resets an uncontrolled
     * form once its action resolves, so without this one bad field would
     * wipe everything else that had been typed.
     */
    values?: AuthorValues;
};

async function requireAdmin() {
    const session = await auth();
    return session?.user?.role === "ADMIN" ? session : null;
}

function parse(formData: FormData): {
    values: AuthorValues;
    fieldErrors?: Partial<Record<keyof AuthorValues, string>>;
} {
    const get = (k: string) => String(formData.get(k) ?? "").trim();

    const fieldErrors: Partial<Record<keyof AuthorValues, string>> = {};
    if (!get("name")) fieldErrors.name = "Name is required — it's shown as the byline.";

    const linkedIn = get("linkedIn");
    if (linkedIn && !/^https?:\/\//i.test(linkedIn)) {
        fieldErrors.linkedIn = "LinkedIn URL must start with http:// or https://.";
    }

    const image = get("image");
    if (image && !isRenderableImageSrc(image)) {
        fieldErrors.image = "Profile photo must be a path starting with / or a full http(s) URL.";
    }

    return {
        fieldErrors: Object.keys(fieldErrors).length > 0 ? fieldErrors : undefined,
        values: {
            name: get("name"),
            jobTitle: get("jobTitle"),
            bio: get("bio"),
            image,
            linkedIn,
        },
    };
}

// Revalidates everywhere an author's byline can be seen: the admin list,
// and every post/case study they're credited on.
function refresh() {
    revalidatePath("/admin/authors");
    revalidatePath("/blogs");
    revalidatePath("/case-studies");
}

export async function createAuthor(
    _prev: AuthorFormState,
    formData: FormData
): Promise<AuthorFormState> {
    if (!(await requireAdmin())) {
        return { error: "You must be signed in as an admin." };
    }

    const { values, fieldErrors } = parse(formData);
    if (fieldErrors) return { fieldErrors, values };

    try {
        await prisma.author.create({
            data: {
                name: values.name,
                jobTitle: values.jobTitle || null,
                bio: values.bio || null,
                image: values.image || null,
                linkedIn: values.linkedIn || null,
            },
        });
    } catch (err) {
        console.error("Failed to create author:", err);
        return { error: "Could not save the author. Check the server logs.", values };
    }

    refresh();
    redirect("/admin/authors");
}

export async function updateAuthor(
    id: string,
    _prev: AuthorFormState,
    formData: FormData
): Promise<AuthorFormState> {
    if (!(await requireAdmin())) {
        return { error: "You must be signed in as an admin." };
    }

    const { values, fieldErrors } = parse(formData);
    if (fieldErrors) return { fieldErrors, values };

    try {
        await prisma.author.update({
            where: { id },
            data: {
                name: values.name,
                jobTitle: values.jobTitle || null,
                bio: values.bio || null,
                image: values.image || null,
                linkedIn: values.linkedIn || null,
            },
        });
    } catch (err) {
        console.error("Failed to update author:", err);
        return { error: "Could not update the author. Check the server logs.", values };
    }

    refresh();
    redirect("/admin/authors");
}

export async function deleteAuthor(formData: FormData) {
    if (!(await requireAdmin())) return;

    const id = String(formData.get("id") ?? "");
    if (!id) return;

    // Posts/case studies detach rather than being deleted — an author being
    // removed shouldn't take their credited work down with them.
    await prisma.$transaction([
        prisma.blogPost.updateMany({ where: { authorId: id }, data: { authorId: null } }),
        prisma.caseStudy.updateMany({ where: { authorId: id }, data: { authorId: null } }),
        prisma.author.delete({ where: { id } }),
    ]);

    refresh();
}
