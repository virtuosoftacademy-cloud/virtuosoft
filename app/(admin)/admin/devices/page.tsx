import { auth } from "@/auth";
import { listDevices, describeUserAgent, getDeviceId } from "@/lib/device";
import { DeviceRowActions } from "./_components/device-row-actions";

export const metadata = { title: "Devices" };
export const dynamic = "force-dynamic";

export default async function DevicesPage() {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) return null; // layout already redirects; this satisfies types

    const [devices, currentDeviceId] = await Promise.all([
        listDevices(userId),
        getDeviceId(),
    ]);

    const pending = devices.filter((d) => !d.approved);
    const approved = devices.filter((d) => d.approved);

    return (
        <main>
            <header className="mb-8">
                <h1 className="text-3xl font-semibold text-neutral-900">Devices</h1>
                <p className="mt-1 text-sm text-neutral-600">
                    Browsers allowed to sign in to this account. A sign-in from an
                    unrecognised device is refused and appears here for approval.
                </p>
            </header>

            {/* ══ Pending ═══════════════════════════════════════════════ */}
            <section className="mb-8">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                    Awaiting approval
                    {pending.length > 0 && (
                        <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">
                            {pending.length}
                        </span>
                    )}
                </h2>

                {pending.length === 0 ? (
                    <div className="rounded-lg border border-neutral-200 bg-white px-6 py-8 text-center text-sm text-neutral-500">
                        Nothing waiting. Sign-in attempts from new devices will show up here.
                    </div>
                ) : (
                    <div className="overflow-hidden rounded-lg border border-amber-200 bg-white">
                        <table className="w-full text-left text-sm">
                            <thead className="border-b border-neutral-200 bg-amber-50 text-xs uppercase tracking-wide text-neutral-600">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Device</th>
                                    <th className="px-4 py-3 font-medium">IP</th>
                                    <th className="px-4 py-3 font-medium">Requested</th>
                                    <th className="px-4 py-3 text-right font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-100">
                                {pending.map((d) => (
                                    <tr key={d.id} className="hover:bg-neutral-50">
                                        <td className="px-4 py-3">
                                            <span className="block font-medium text-neutral-900">
                                                {d.label || "Unnamed device"}
                                            </span>
                                            <span className="block text-xs text-neutral-500">
                                                {describeUserAgent(d.userAgent)}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-neutral-600">{d.ip ?? "—"}</td>
                                        <td className="whitespace-nowrap px-4 py-3 text-neutral-600">
                                            {d.createdAt.toISOString().slice(0, 16).replace("T", " ")}
                                        </td>
                                        <td className="px-4 py-3">
                                            <DeviceRowActions id={d.id} approved={false} isCurrent={false} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>

            {/* ══ Approved ══════════════════════════════════════════════ */}
            <section>
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                    Approved devices
                </h2>

                {approved.length === 0 ? (
                    <div className="rounded-lg border border-neutral-200 bg-white px-6 py-8 text-center text-sm text-neutral-500">
                        No approved devices yet.
                    </div>
                ) : (
                    <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
                        <table className="w-full text-left text-sm">
                            <thead className="border-b border-neutral-200 bg-neutral-50 text-xs uppercase tracking-wide text-neutral-500">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Device</th>
                                    <th className="px-4 py-3 font-medium">IP</th>
                                    <th className="px-4 py-3 font-medium">Last seen</th>
                                    <th className="px-4 py-3 text-right font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-100">
                                {approved.map((d) => {
                                    const isCurrent = !!currentDeviceId && d.deviceId === currentDeviceId;
                                    return (
                                        <tr key={d.id} className="hover:bg-neutral-50">
                                            <td className="px-4 py-3">
                                                <span className="flex items-center gap-2 font-medium text-neutral-900">
                                                    {d.label || "Unnamed device"}
                                                    {isCurrent && (
                                                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                                                            This device
                                                        </span>
                                                    )}
                                                </span>
                                                <span className="block text-xs text-neutral-500">
                                                    {describeUserAgent(d.userAgent)}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-neutral-600">{d.ip ?? "—"}</td>
                                            <td className="whitespace-nowrap px-4 py-3 text-neutral-600">
                                                {d.lastSeenAt.toISOString().slice(0, 16).replace("T", " ")}
                                            </td>
                                            <td className="px-4 py-3">
                                                <DeviceRowActions id={d.id} approved isCurrent={isCurrent} />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>
        </main>
    );
}
