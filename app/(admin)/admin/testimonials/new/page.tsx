import { createTestimonial } from "../_actions/testimonial-actions";
import { TestimonialForm } from "../_components/testimonial-form";

export const metadata = { title: "New testimonial" };

export default function NewTestimonialPage() {
    return (
        <main className="max-w-2xl">
            <header className="mb-8">
                <h1 className="text-3xl font-semibold text-neutral-900">New testimonial</h1>
                <p className="mt-2 text-sm text-neutral-600">
                    Shown in the &quot;Client Success Stories&quot; carousel on the home page.
                </p>
            </header>

            <TestimonialForm
                action={createTestimonial}
                submitLabel="Add testimonial"
                pendingLabel="Adding…"
            />
        </main>
    );
}
