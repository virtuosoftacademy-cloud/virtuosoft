"use client";

import { useActionState, useEffect } from "react";
import { approveDevice, revokeDevice, type DeviceActionState } from "@/app/(admin)/admin/devices/_actions/device-actions";
import { showSimpleSuccess, showSimpleError } from "@/lib/toast-notifications";

const initialState: DeviceActionState = {};

export function DeviceRowActions({
    id,
    approved,
    isCurrent,
}: {
    id: string;
    approved: boolean;
    isCurrent: boolean;
}) {
    const [approveState, approveAction, approving] = useActionState(approveDevice, initialState);
    const [revokeState, revokeAction, revoking] = useActionState(revokeDevice, initialState);

    useEffect(() => {
        if (approveState.success) showSimpleSuccess("Device approved", approveState.success);
        if (approveState.error) showSimpleError("Could not approve", approveState.error);
    }, [approveState]);

    useEffect(() => {
        if (revokeState.success) showSimpleSuccess("Device removed", revokeState.success);
        if (revokeState.error) showSimpleError("Could not remove", revokeState.error);
    }, [revokeState]);

    return (
        <div className="flex items-center justify-end gap-1">
            {!approved && (
                <form action={approveAction}>
                    <input type="hidden" name="id" value={id} />
                    <button
                        type="submit"
                        disabled={approving}
                        className="rounded-md bg-neutral-900 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-neutral-700 disabled:opacity-50"
                    >
                        {approving ? "Approving…" : "Approve"}
                    </button>
                </form>
            )}

            <form action={revokeAction}>
                <input type="hidden" name="id" value={id} />
                <button
                    type="submit"
                    // Revoking the device you're signed in on would lock you out
                    // immediately; the server rejects it too, this is just the hint.
                    disabled={revoking || isCurrent}
                    title={isCurrent ? "You can't remove the device you're using" : undefined}
                    className="rounded-md px-2.5 py-1.5 text-xs font-medium text-red-700 hover:bg-red-50 disabled:opacity-40 disabled:hover:bg-transparent"
                >
                    {revoking ? "Removing…" : approved ? "Remove" : "Deny"}
                </button>
            </form>
        </div>
    );
}
