import { prisma } from "@/app/api/lib/prisma";
import { MarkReadButton, DeleteMessageButton } from "./_components/message-row-actions";

export const metadata = { title: "Messages" };
export const dynamic = "force-dynamic";

export default async function MessagesPage() {
    // Unread first, newest first within each group — the list is a queue.
    const messages = await prisma.contactMessage.findMany({
        orderBy: [{ isRead: "asc" }, { createdAt: "desc" }],
    });

    const unread = messages.filter((m) => !m.isRead).length;

    return (
        <main>
            <header className="mb-8">
                <h1 className="text-3xl font-semibold text-neutral-900">Messages</h1>
                <p className="mt-1 text-sm text-neutral-600">
                    {messages.length === 0
                        ? "Enquiries sent from the contact page appear here."
                        : `${messages.length} enquir${messages.length === 1 ? "y" : "ies"}` +
                          (unread > 0 ? ` · ${unread} unread` : " · all read")}
                </p>
            </header>

            {messages.length === 0 ? (
                <div className="rounded-lg border border-neutral-200 bg-white px-6 py-12 text-center text-sm text-neutral-500">
                    Nothing yet. The form at the bottom of the contact page feeds this list.
                </div>
            ) : (
                <ul className="space-y-4">
                    {messages.map((m) => (
                        <li
                            key={m.id}
                            className={
                                "rounded-lg border bg-white p-5 " +
                                (m.isRead
                                    ? "border-neutral-200"
                                    : "border-amber-300 bg-amber-50/40")
                            }
                        >
                            <div className="flex flex-wrap items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <p className="flex flex-wrap items-center gap-2 font-medium text-neutral-900">
                                        {m.name}
                                        {!m.isRead && (
                                            <span className="rounded-full bg-amber-200 px-2 py-0.5 text-xs font-semibold text-amber-900">
                                                New
                                            </span>
                                        )}
                                    </p>
                                    {/* mailto so a reply is one click away — this list is
                                        the only place these addresses live. */}
                                    <a
                                        href={`mailto:${m.email}?subject=${encodeURIComponent(
                                            `Re: ${m.interestedIn}`
                                        )}`}
                                        className="text-sm text-neutral-600 underline underline-offset-2 hover:text-neutral-900"
                                    >
                                        {m.email}
                                    </a>
                                </div>

                                <div className="flex shrink-0 items-center gap-1">
                                    <MarkReadButton id={m.id} isRead={m.isRead} />
                                    <DeleteMessageButton id={m.id} name={m.name} />
                                </div>
                            </div>

                            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500">
                                {m.interestedIn.split(", ").filter(Boolean).map((topic) => (
                                    <span
                                        key={topic}
                                        className="rounded-full bg-neutral-100 px-2.5 py-0.5 font-medium text-neutral-700"
                                    >
                                        {topic}
                                    </span>
                                ))}
                                <span>
                                    {m.createdAt.toISOString().slice(0, 16).replace("T", " ")}
                                </span>
                            </div>

                            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500">
                                {m.phone && <span>{m.phone}</span>}
                                {m.company && <span>{m.company}</span>}
                            </div>

                            {/* whitespace-pre-line: the visitor's line breaks are
                                meaningful and would otherwise collapse. */}
                            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-neutral-800">
                                {m.description}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    );
}
