
import Link from "next/link";
import { prisma } from "@/app/api/lib/prisma";
import { describeUserAgent } from "@/app/api/lib/device";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Dashboard" };
export const dynamic = "force-dynamic";

function Stat({ value, label }: { value: number | string; label: string }) {
    return (
        <div className="rounded-md bg-neutral-50 px-3 py-2">
            <p className="text-xl font-semibold text-neutral-900">{value}</p>
            <p className="text-xs text-neutral-500">{label}</p>
        </div>
    );
}

function Chip({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-block rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700">
            {children}
        </span>
    );
}

export default async function DashboardPage() {
    const [
        postCount,
        featuredCount,
        sidebarCount,
        categories,
        latestPost,
        caseStudies,
        industryRows,
        serviceAreaRows,
        cardTotal,
        phaseTotal,
        subscriberCount,
        subscribersLast30,
        latestSubscriber,
        unreadMessages,
        pendingDevices,
    ] = await Promise.all([
        prisma.blogPost.count(),
        prisma.blogPost.count({ where: { isFeatured: true } }),
        prisma.blogPost.count({ where: { isSidebar: true } }),
        prisma.blogCategory.findMany({
            orderBy: { label: "asc" },
            include: { _count: { select: { posts: true } } },
        }),
        prisma.blogPost.findFirst({
            orderBy: { date: "desc" },
            select: { title: true, date: true, slug: true },
        }),
        prisma.caseStudy.findMany({
            orderBy: { updatedAt: "desc" },
            select: { heroTitle: true, slug: true, updatedAt: true },
        }),
        prisma.industry.findMany({
            orderBy: { label: "asc" },
            include: { _count: { select: { caseStudies: true } } },
        }),
        prisma.serviceArea.findMany({
            orderBy: { label: "asc" },
            include: { _count: { select: { caseStudies: true } } },
        }),
        prisma.approachCard.count(),
        prisma.timelinePhase.count(),
        prisma.newsletterSubscriber.count(),
        prisma.newsletterSubscriber.count({
            where: { createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } },
        }),
        prisma.newsletterSubscriber.findFirst({
            orderBy: { createdAt: "desc" },
            select: { email: true, createdAt: true },
        }),
        prisma.contactMessage.count({ where: { isRead: false } }),
        // Sign-in attempts from browsers this account hasn't trusted yet.
        prisma.device.findMany({
            where: { approved: false },
            orderBy: { lastSeenAt: "desc" },
            select: { id: true, label: true, ip: true, userAgent: true, lastSeenAt: true },
        }),
    ]);

    const industries = industryRows.map((i) => `${i.label} · ${i._count.caseStudies}`);
    const serviceAreas = serviceAreaRows.map((a) => `${a.label} · ${a._count.caseStudies}`);
    const latestCaseStudy = caseStudies[0];

    return (
        <main>
            <header className="mb-8">
                <h1 className="text-3xl font-semibold text-neutral-900">Dashboard</h1>
                <p className="mt-1 text-sm text-neutral-600">
                    Content overview across the site.
                </p>
            </header>

            {/* Unread enquiries are time-sensitive in a way content stats
                aren't, so they sit above the cards too. */}
            {unreadMessages > 0 && (
                <Link
                    href="/admin/messages"
                    className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-lg
                               border border-neutral-300 bg-white p-5 hover:border-neutral-400"
                >
                    <div>
                        <h2 className="text-base font-semibold text-neutral-900">
                            {unreadMessages === 1
                                ? "1 unread enquiry"
                                : `${unreadMessages} unread enquiries`}
                        </h2>
                        <p className="mt-1 text-sm text-neutral-600">
                            Sent from the contact page form.
                        </p>
                    </div>
                    <span className="text-sm font-medium text-neutral-900">Read them →</span>
                </Link>
            )}

            {/* Security notices sit above the content cards so a sign-in
                attempt from an unknown browser can't be scrolled past. */}
            {pendingDevices.length > 0 && (
                <section className="mb-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
                    <h2 className="text-base font-semibold text-amber-900">
                        {pendingDevices.length === 1
                            ? "A new device is waiting for approval"
                            : `${pendingDevices.length} new devices are waiting for approval`}
                    </h2>
                    <p className="mt-1 text-sm text-amber-800">
                        Someone signed in with the correct password from a browser this
                        account has not used before. They have been refused access until
                        you approve them.
                    </p>

                    <ul className="mt-4 space-y-2">
                        {pendingDevices.slice(0, 4).map((d) => (
                            <li
                                key={d.id}
                                className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 rounded-md bg-white/70 px-3 py-2 text-sm"
                            >
                                <span className="font-medium text-amber-900">
                                    {d.label || "Unnamed device"}
                                </span>
                                <span className="text-xs text-amber-800">
                                    {describeUserAgent(d.userAgent)}
                                </span>
                                <span className="text-xs text-amber-700">
                                    {d.ip ?? "unknown IP"} ·{" "}
                                    {d.lastSeenAt.toISOString().slice(0, 16).replace("T", " ")}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/admin/devices"
                        className="mt-4 inline-block rounded-md bg-amber-900 px-4 py-2 text-sm font-medium text-white hover:bg-amber-800"
                    >
                        Review devices
                    </Link>
                </section>
            )}

            <div className="grid gap-6 lg:grid-cols-2">
                {/* ══ Blogs card ══════════════════════════════════════════ */}
                <section className="flex flex-col rounded-lg border border-neutral-200 bg-white p-6">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-semibold text-neutral-900">Blogs</h2>
                            <p className="mt-0.5 text-sm text-neutral-500">
                                Posts shown at /blogs
                            </p>
                        </div>
                        <Button>
                            <Link href="/admin/blog/new-post">
                                New post
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-3">
                        <Stat value={postCount} label="Posts" />
                        <Stat value={featuredCount} label="Featured" />
                        <Stat value={sidebarCount} label="In sidebar" />
                    </div>

                    <div className="mt-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                            Categories
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                            {categories.length === 0 ? (
                                <span className="text-sm text-neutral-500">None yet</span>
                            ) : (
                                categories.map((c) => (
                                    <Chip key={c.id}>
                                        {c.label} · {c._count.posts}
                                    </Chip>
                                ))
                            )}
                        </div>
                    </div>

                    {latestPost && (
                        <div className="mt-5">
                            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                                Latest post
                            </p>
                            <Link href={`/blogs/${latestPost.slug}`}
                                className="mt-1 block truncate text-sm font-medium text-neutral-900 hover:underline">
                                {latestPost.title}
                            </Link>
                            <p className="text-xs text-neutral-500">{latestPost.date}</p>
                        </div>
                    )}

                    <div className="mt-auto flex gap-4 border-t border-neutral-100 pt-4 text-sm font-medium">
                        <Link href="/admin/blog" className="text-neutral-700 hover:text-neutral-900 hover:underline">
                            View all posts →
                        </Link>
                        <Link href="/admin/blog/categories" className="text-neutral-500 hover:text-neutral-900 hover:underline">
                            Categories
                        </Link>
                    </div>
                </section>

                {/* ══ Case studies card ═══════════════════════════════════ */}
                <section className="flex flex-col rounded-lg border border-neutral-200 bg-white p-6">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-semibold text-neutral-900">Case studies</h2>
                            <p className="mt-0.5 text-sm text-neutral-500">
                                Engagements shown at /case-studies
                            </p>
                        </div>
                        <Button>
                            <Link href="/admin/case-study/new-casestudy">
                                New case study
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-3">
                        <Stat value={caseStudies.length} label="Case studies" />
                        <Stat value={cardTotal} label="Approach cards" />
                        <Stat value={phaseTotal} label="Timeline phases" />
                    </div>

                    <div className="mt-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                            Industries · {industries.length}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                            {industries.length === 0 ? (
                                <span className="text-sm text-neutral-500">None yet</span>
                            ) : (
                                industries.map((i) => <Chip key={i}>{i}</Chip>)
                            )}
                        </div>
                    </div>

                    <div className="mt-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                            Service areas · {serviceAreas.length}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                            {serviceAreas.length === 0 ? (
                                <span className="text-sm text-neutral-500">None yet</span>
                            ) : (
                                serviceAreas.map((s) => <Chip key={s}>{s}</Chip>)
                            )}
                        </div>
                    </div>

                    {latestCaseStudy && (
                        <div className="mt-5">
                            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                                Last updated
                            </p>
                            <Link href={`/case-studies/${latestCaseStudy.slug}`}
                                className="mt-1 block truncate text-sm font-medium text-neutral-900 hover:underline">
                                {latestCaseStudy.heroTitle}
                            </Link>
                            <p className="text-xs text-neutral-500">
                                {latestCaseStudy.updatedAt.toISOString().slice(0, 10)}
                            </p>
                        </div>
                    )}

                    <div className="mt-auto flex gap-4 border-t border-neutral-100 pt-4 text-sm font-medium">
                        <Link href="/admin/case-study" className="text-neutral-700 hover:text-neutral-900 hover:underline">
                            View all case studies →
                        </Link>
                    </div>
                </section>

                {/* ══ Newsletter card ═══════════════════════════════════════ */}
                <section className="flex flex-col rounded-lg border border-neutral-200 bg-white p-6">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-semibold text-neutral-900">Newsletter</h2>
                            <p className="mt-0.5 text-sm text-neutral-500">
                                Sign-ups from the site footer
                            </p>
                        </div>
                        <Button>
                            <Link href="/admin/newsletter/export">
                                Export CSV
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-3">
                        <Stat value={subscriberCount} label="Subscribers" />
                        <Stat value={subscribersLast30} label="Last 30 days" />
                        <Stat
                            value={subscriberCount - subscribersLast30}
                            label="Earlier"
                        />
                    </div>

                    {latestSubscriber ? (
                        <div className="mt-5">
                            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                                Most recent
                            </p>
                            <p className="mt-1 truncate text-sm font-medium text-neutral-900">
                                {latestSubscriber.email}
                            </p>
                            <p className="text-xs text-neutral-500">
                                {latestSubscriber.createdAt.toISOString().slice(0, 10)}
                            </p>
                        </div>
                    ) : (
                        <div className="mt-5">
                            <p className="text-sm text-neutral-500">No sign-ups yet.</p>
                        </div>
                    )}

                    <div className="mt-auto flex gap-4 border-t border-neutral-100 pt-4 text-sm font-medium">
                        <Link href="/admin/newsletter" className="text-neutral-700 hover:text-neutral-900 hover:underline">
                            View all subscribers →
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}