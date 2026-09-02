import Link from "next/link";
import { auth } from "@/auth";
import { prisma } from "@/app/api/lib/prisma";
import { ChangePasswordForm } from "./_components/change-password-form";

export const metadata = { title: "Profile" };
export const dynamic = "force-dynamic";

function Field({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-md bg-neutral-50 px-3 py-2">
            <p className="text-xs text-neutral-500">{label}</p>
            <p className="mt-0.5 truncate text-sm font-medium text-neutral-900">{value}</p>
        </div>
    );
}

export default async function ProfilePage() {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return null; // layout redirects; keeps types honest

    const [user, deviceCount, pendingCount] = await Promise.all([
        prisma.user.findUnique({
            where: { id: userId },
            select: {
                name: true,
                email: true,
                role: true,
                createdAt: true,
            },
        }),
        prisma.device.count({ where: { userId, approved: true } }),
        prisma.device.count({ where: { userId, approved: false } }),
    ]);

    if (!user) return null;

    return (
        <main>
            <header className="mb-8">
                <h1 className="text-3xl font-semibold text-neutral-900">Profile</h1>
                <p className="mt-1 text-sm text-neutral-600">
                    Your account details and sign-in security.
                </p>
            </header>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* ══ Account ═══════════════════════════════════════════ */}
                <section className="flex flex-col rounded-lg border border-neutral-200 bg-white p-6">
                    <h2 className="text-xl font-semibold text-neutral-900">Account</h2>
                    <p className="mt-0.5 text-sm text-neutral-500">Who you are signed in as</p>

                    <div className="mt-5 grid gap-3">
                        <Field label="Name" value={user.name ?? "—"} />
                        <Field label="Email" value={user.email} />
                        <div className="grid grid-cols-2 gap-3">
                            <Field label="Role" value={user.role} />
                            <Field
                                label="Member since"
                                value={user.createdAt.toISOString().slice(0, 10)}
                            />
                        </div>
                    </div>

                    {user.email.endsWith("@example.com") && (
                        <p className="mt-5 rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-800">
                            This is a reserved example address and cannot receive mail, so password
                            resets and notifications will not reach you. Worth changing to a real one.
                        </p>
                    )}
                </section>

                {/* ══ Security ══════════════════════════════════════════ */}
                <section className="flex flex-col rounded-lg border border-neutral-200 bg-white p-6">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-semibold text-neutral-900">Security</h2>
                            <p className="mt-0.5 text-sm text-neutral-500">
                                Password and trusted devices
                            </p>
                        </div>
                        <Link href="/admin/devices"
                            className="shrink-0 rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50">
                            Manage devices
                        </Link>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                        <Field label="Approved devices" value={String(deviceCount)} />
                        <Field label="Awaiting approval" value={String(pendingCount)} />
                    </div>

                    {pendingCount > 0 && (
                        <Link href="/admin/devices"
                            className="mt-3 block rounded-md bg-amber-50 px-3 py-2 text-xs font-medium text-amber-800 hover:bg-amber-100">
                            {pendingCount} sign-in {pendingCount === 1 ? "attempt is" : "attempts are"} waiting for
                            your approval →
                        </Link>
                    )}

                    <div className="mt-6 border-t border-neutral-100 pt-5">
                        <h3 className="text-sm font-semibold text-neutral-900">Change password</h3>
                        <ChangePasswordForm />
                    </div>
                </section>
            </div>

        </main>
    );
}
