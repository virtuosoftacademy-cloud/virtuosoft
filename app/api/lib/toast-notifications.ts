
import { toast } from "sonner";

/** Green success toast: bold title + optional description line. */
export function showSimpleSuccess(title: string, description?: string) {
    toast.success(title, { description });
}

/** Red error toast: bold title + optional description line. */
export function showSimpleError(title: string, description?: string) {
    toast.error(title, { description });
}

/** Neutral info toast. */
export function showSimpleInfo(title: string, description?: string) {
    toast.info(title, { description });
}

/** Amber warning toast. */
export function showSimpleWarning(title: string, description?: string) {
    toast.warning(title, { description });
}

/**
 * Async helper: shows loading -> success/error automatically.
 *   await showPromise(saveProperty(), {
 *     loading: "Saving…", success: "Property saved", error: "Save failed",
 *   });
 */
export function showPromise<T>(
    promise: Promise<T>,
    messages: { loading: string; success: string; error: string }
) {
    return toast.promise(promise, messages);
}