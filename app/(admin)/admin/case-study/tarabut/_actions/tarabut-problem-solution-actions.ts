"use server";

import { prisma } from "@/app/api/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { TARABUT_PROBLEM_SOLUTION_ID } from "@/app/api/lib/case-study/tarabut-problem-solution";

export type TarabutProblemSolutionValues = {
    problemTitleLead: string;
    problemTitleAccent: string;
    problemIntro: string;
    problemPoints: string;
    solutionTitleLead: string;
    solutionTitleAccent: string;
    solutionIntro: string;
    solutionPoints: string;
};

export type TarabutProblemSolutionFormState = {
    error?: string;
    success?: string;
    fieldErrors?: Partial<Record<keyof TarabutProblemSolutionValues, string>>;
    /**
     * What was submitted, echoed back so a rejected save can be re-rendered
     * with the admin's own text still in place. React resets an uncontrolled
     * form once its action resolves, so without this one bad field would
     * wipe everything else that had been typed.
     */
    values?: TarabutProblemSolutionValues;
};

const REQUIRED: [key: keyof TarabutProblemSolutionValues, label: string][] = [
    ["problemTitleLead", "Problem title (lead)"],
    ["problemTitleAccent", "Problem title (accent)"],
    ["problemIntro", "Problem intro"],
    ["problemPoints", "Problem points"],
    ["solutionTitleLead", "Solution title (lead)"],
    ["solutionTitleAccent", "Solution title (accent)"],
    ["solutionIntro", "Solution intro"],
    ["solutionPoints", "Solution points"],
];

async function requireAdmin() {
    const session = await auth();
    return session?.user?.role === "ADMIN" ? session : null;
}

function parse(formData: FormData): {
    values: TarabutProblemSolutionValues;
    fieldErrors?: Partial<Record<keyof TarabutProblemSolutionValues, string>>;
} {
    const get = (k: string) => String(formData.get(k) ?? "").trim();

    const values: TarabutProblemSolutionValues = {
        problemTitleLead: get("problemTitleLead"),
        problemTitleAccent: get("problemTitleAccent"),
        problemIntro: get("problemIntro"),
        problemPoints: get("problemPoints"),
        solutionTitleLead: get("solutionTitleLead"),
        solutionTitleAccent: get("solutionTitleAccent"),
        solutionIntro: get("solutionIntro"),
        solutionPoints: get("solutionPoints"),
    };

    const fieldErrors: Partial<Record<keyof TarabutProblemSolutionValues, string>> = {};
    for (const [key, label] of REQUIRED) {
        if (!values[key]) fieldErrors[key] = `${label} is required.`;
    }

    return {
        fieldErrors: Object.keys(fieldErrors).length > 0 ? fieldErrors : undefined,
        values,
    };
}

// The public page is a server component that reads this row directly, so
// revalidating its path is what makes an edit show up without a redeploy.
function refresh() {
    revalidatePath("/admin/case-study/tarabut");
    revalidatePath("/case-studies/tarabut");
}

export async function updateTarabutProblemSolution(
    _prev: TarabutProblemSolutionFormState,
    formData: FormData
): Promise<TarabutProblemSolutionFormState> {
    if (!(await requireAdmin())) {
        return { error: "You must be signed in as an admin." };
    }

    const { values, fieldErrors } = parse(formData);
    if (fieldErrors) return { fieldErrors, values };

    try {
        await prisma.tarabutProblemSolution.upsert({
            where: { id: TARABUT_PROBLEM_SOLUTION_ID },
            update: values,
            create: { id: TARABUT_PROBLEM_SOLUTION_ID, ...values },
        });
    } catch (err) {
        console.error("Failed to update tarabut problem/solution copy:", err);
        return { error: "Could not save the changes. Check the server logs.", values };
    }

    refresh();
    return { success: "Saved.", values };
}
