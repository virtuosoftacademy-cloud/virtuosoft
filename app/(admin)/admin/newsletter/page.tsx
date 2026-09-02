
import { prisma } from "@/app/api/lib/prisma";
import { DeleteSubscriberButton } from "@/app/(admin)/admin/newsletter/_components/delete-subscriber-button";

export const metadata = { title: "Subscribers" };
export const dynamic = "force-dynamic";

export default async function SubscribersPage() {
    const subscribers = await prisma.newsletterSubscriber.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <main className="max-w-2xl">
            <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-semibold text-neutral-900">Subscribers</h1>
                    <p className="mt-1 text-sm text-neutral-600">
                        {subscribers.length} newsletter subscriber{subscribers.length === 1 ? "" : "s"}.
                    </p>
                </div>
                <a
                    href="/admin/newsletter/export"
                    className="rounded-none bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-secondary"
                >
                    Export CSV
                </a>
            </header>

            <section className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
                {subscribers.length === 0 ? (
                    <p className="px-6 py-10 text-center text-neutral-600">
                        No subscribers yet. The signup form feeds this list.
                    </p>
                ) : (
                    <ul className="divide-y divide-neutral-100">
                        {subscribers.map((s) => (
                            <li key={s.id} className="flex items-center justify-between gap-4 px-4 py-3">
                                <div className="min-w-0">
                                    <p className="truncate font-medium text-neutral-900">{s.email}</p>
                                    <p className="text-xs text-neutral-500">
                                        Joined {s.createdAt.toISOString().slice(0, 10)}
                                    </p>
                                </div>
                                <DeleteSubscriberButton id={s.id} email={s.email} />
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    );
}