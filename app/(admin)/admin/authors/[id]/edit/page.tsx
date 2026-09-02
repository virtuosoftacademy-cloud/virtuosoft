import { prisma } from "@/app/api/lib/prisma";
import { notFound } from "next/navigation";
import { updateAuthor } from "../../_actions/author-actions";
import { AuthorForm } from "../../_components/author-form";

export const metadata = { title: "Edit author" };
export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

export default async function EditAuthorPage({ params }: Props) {
    const { id } = await params;

    const author = await prisma.author.findUnique({ where: { id } });
    if (!author) notFound();

    // Bind the id so the client form's action signature stays (state, formData).
    const updateAuthorWithId = updateAuthor.bind(null, author.id);

    return (
        <main className="max-w-2xl">
            <header className="mb-8">
                <h1 className="text-3xl font-semibold text-neutral-900">Edit author</h1>
                <p className="mt-2 text-sm text-neutral-600">Editing {author.name}&apos;s byline.</p>
            </header>

            <AuthorForm
                action={updateAuthorWithId}
                submitLabel="Save changes"
                pendingLabel="Saving…"
                defaultValues={{
                    name: author.name,
                    jobTitle: author.jobTitle ?? "",
                    bio: author.bio ?? "",
                    image: author.image ?? "",
                    linkedIn: author.linkedIn ?? "",
                }}
            />
        </main>
    );
}
