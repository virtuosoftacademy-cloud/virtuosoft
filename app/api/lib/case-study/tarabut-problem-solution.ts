// ============================================================================
// Data access for the Problem/Solution panels on the bespoke
// /case-studies/tarabut page. Backed by a singleton TarabutProblemSolution
// row (fixed id) rather than the generic CaseStudy model, since that page's
// layout is custom-built. See prisma/schema.prisma for the row shape.
// ============================================================================
import { prisma } from "@/app/api/lib/prisma";

export const TARABUT_PROBLEM_SOLUTION_ID = "tarabut";

export type TarabutPanel = {
    titleLead: string;
    titleAccent: string;
    intro: string;
    points: string[];
};

export type TarabutProblemSolutionContent = {
    problem: TarabutPanel;
    solution: TarabutPanel;
};

const lines = (text: string): string[] =>
    text.split("\n").map((l) => l.trim()).filter(Boolean);

/** Reads the singleton row, or null if the admin hasn't saved one yet. */
export async function getTarabutProblemSolution(): Promise<TarabutProblemSolutionContent | null> {
    const row = await prisma.tarabutProblemSolution.findUnique({
        where: { id: TARABUT_PROBLEM_SOLUTION_ID },
    });
    if (!row) return null;

    return {
        problem: {
            titleLead: row.problemTitleLead,
            titleAccent: row.problemTitleAccent,
            intro: row.problemIntro,
            points: lines(row.problemPoints),
        },
        solution: {
            titleLead: row.solutionTitleLead,
            titleAccent: row.solutionTitleAccent,
            intro: row.solutionIntro,
            points: lines(row.solutionPoints),
        },
    };
}
