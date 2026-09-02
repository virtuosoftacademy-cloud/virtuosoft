import { prisma } from "@/app/api/lib/prisma";
import { notFound } from "next/navigation";
import { updateTestimonial } from "../../_actions/testimonial-actions";
import { TestimonialForm } from "../../_components/testimonial-form";

export const metadata = { title: "Edit testimonial" };
export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

export default async function EditTestimonialPage({ params }: Props) {
    const { id } = await params;

    const testimonial = await prisma.testimonial.findUnique({ where: { id } });
    if (!testimonial) notFound();

    // Bind the id so the client form's action signature stays (state, formData).
    const updateTestimonialWithId = updateTestimonial.bind(null, testimonial.id);

    return (
        <main className="max-w-2xl">
            <header className="mb-8">
                <h1 className="text-3xl font-semibold text-neutral-900">Edit testimonial</h1>
                <p className="mt-2 text-sm text-neutral-600">Editing the quote from {testimonial.name}.</p>
            </header>

            <TestimonialForm
                action={updateTestimonialWithId}
                submitLabel="Save changes"
                pendingLabel="Saving…"
                defaultValues={{
                    name: testimonial.name,
                    role: testimonial.role,
                    quote: testimonial.quote,
                    rating: testimonial.rating,
                    order: testimonial.order,
                }}
            />
        </main>
    );
}
