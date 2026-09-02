import { prisma } from "@/app/api/lib/prisma";
import { TARABUT_PROBLEM_SOLUTION_ID } from "@/app/api/lib/case-study/tarabut-problem-solution";
import { caseStudies_Problem, caseStudies_Solution } from "@/app/_constant";
import { TarabutProblemSolutionForm } from "./_components/tarabut-problem-solution-form";
import type { TarabutProblemSolutionValues } from "./_actions/tarabut-problem-solution-actions";

export const metadata = { title: "Tarabut: Problem & Solution" };
export const dynamic = "force-dynamic";

export default async function TarabutProblemSolutionPage() {
    const row = await prisma.tarabutProblemSolution.findUnique({
        where: { id: TARABUT_PROBLEM_SOLUTION_ID },
    });

    // No row saved yet — prefill with the page's current copy so the first
    // save doesn't accidentally change anything live.
    const defaultValues: TarabutProblemSolutionValues = row
        ? {
              problemTitleLead: row.problemTitleLead,
              problemTitleAccent: row.problemTitleAccent,
              problemIntro: row.problemIntro,
              problemPoints: row.problemPoints,
              solutionTitleLead: row.solutionTitleLead,
              solutionTitleAccent: row.solutionTitleAccent,
              solutionIntro: row.solutionIntro,
              solutionPoints: row.solutionPoints,
          }
        : {
              problemTitleLead: caseStudies_Problem.titleLead,
              problemTitleAccent: caseStudies_Problem.titleAccent,
              problemIntro: caseStudies_Problem.intro,
              problemPoints: caseStudies_Problem.points.join("\n"),
              solutionTitleLead: caseStudies_Solution.titleLead,
              solutionTitleAccent: caseStudies_Solution.titleAccent,
              solutionIntro: caseStudies_Solution.intro,
              solutionPoints: caseStudies_Solution.points.join("\n"),
          };

    return (
        <main className="max-w-2xl">
            <header className="mb-8">
                <h1 className="text-3xl font-semibold text-neutral-900">Tarabut: Problem & Solution</h1>
                <p className="mt-2 text-sm text-neutral-600">
                    Copy for the two panels on the{" "}
                    <a href="/case-studies/tarabut" target="_blank" rel="noreferrer" className="underline">
                        /case-studies/tarabut
                    </a>{" "}
                    page. That page has a custom design, so only this text is editable here — layout and images stay as built.
                </p>
            </header>

            <TarabutProblemSolutionForm defaultValues={defaultValues} />
        </main>
    );
}
