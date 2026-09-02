import { createAuthor } from "../_actions/author-actions";
import { AuthorForm } from "../_components/author-form";

export const metadata = { title: "New author" };

export default function NewAuthorPage() {
    return (
        <main className="max-w-2xl">
            <header className="mb-8">
                <h1 className="text-3xl font-semibold text-neutral-900">New author</h1>
                <p className="mt-2 text-sm text-neutral-600">
                    Available as a byline for any post or case study once saved.
                </p>
            </header>

            <AuthorForm action={createAuthor} submitLabel="Add author" pendingLabel="Adding…" />
        </main>
    );
}
