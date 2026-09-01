// Fixed-window attempt counter for sign-in.
//
// In-memory on purpose: no Redis here, and a DB round-trip on every login
// attempt is what a brute-force attacker would like most. The trade-offs are
// real and worth knowing:
//   • counters reset when the server restarts
//   • each Passenger worker keeps its own map, so the effective limit is
//     MAX_ATTEMPTS × workers
// It raises the cost of guessing a lot; it is not a substitute for a strong
// password or the device gate. Move it to the database if either matters more
// than the per-attempt latency.

type Entry = { count: number; resetAt: number };

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 5;

// An attacker rotating the identifier would otherwise grow this map forever —
// each miss creates a key. Bounded, with the soonest-to-expire evicted first.
const MAX_ENTRIES = 10_000;

const attempts = new Map<string, Entry>();

function sweep(now: number): void {
    for (const [key, entry] of attempts) {
        if (now > entry.resetAt) attempts.delete(key);
    }
    if (attempts.size <= MAX_ENTRIES) return;

    const byExpiry = [...attempts.entries()].sort((a, b) => a[1].resetAt - b[1].resetAt);
    for (const [key] of byExpiry.slice(0, attempts.size - MAX_ENTRIES)) {
        attempts.delete(key);
    }
}

// ── Keys ───────────────────────────────────────────────────────────
// Two dimensions, because each catches what the other misses: per-email stops
// one account being ground down from many addresses, per-IP stops one host
// working through a list of accounts.

export function emailKey(email: string): string {
    return `email:${email.toLowerCase().trim()}`;
}

export function ipKey(ip: string | null | undefined): string | null {
    return ip ? `ip:${ip}` : null;
}

/** The keys guarding a single sign-in attempt, with unknown IPs dropped. */
export function signInKeys(email: string, ip: string | null | undefined): string[] {
    return [emailKey(email), ipKey(ip)].filter((k): k is string => Boolean(k));
}

// ── Counters ───────────────────────────────────────────────────────

/** Returns true if this identifier is currently blocked. */
export function isRateLimited(id: string): boolean {
    const e = attempts.get(id);
    if (!e) return false;
    if (Date.now() > e.resetAt) {
        attempts.delete(id);
        return false;
    }
    return e.count >= MAX_ATTEMPTS;
}

/** Record a FAILED attempt. Successful logins should call clearAttempts. */
export function recordFailure(id: string): void {
    const now = Date.now();
    sweep(now);

    const e = attempts.get(id);
    if (!e || now > e.resetAt) {
        // Fixed window: the clock starts at the first failure and does not
        // extend on later ones, so a blocked user always gets out in <= 15 min.
        attempts.set(id, { count: 1, resetAt: now + WINDOW_MS });
    } else {
        e.count += 1;
    }
}

export function clearAttempts(id: string): void {
    attempts.delete(id);
}

/** Minutes until the identifier unlocks (for the error message). */
export function minutesLeft(id: string): number {
    const e = attempts.get(id);
    if (!e) return 0;
    return Math.max(1, Math.ceil((e.resetAt - Date.now()) / 60000));
}

// ── Multi-key helpers ──────────────────────────────────────────────

/** Blocked if ANY key is over the limit; reports the longest wait. */
export function checkKeys(keys: string[]): { limited: boolean; minutes: number } {
    const blocked = keys.filter(isRateLimited);
    return {
        limited: blocked.length > 0,
        minutes: blocked.reduce((max, k) => Math.max(max, minutesLeft(k)), 0),
    };
}

export function recordFailureFor(keys: string[]): void {
    for (const key of keys) recordFailure(key);
}

export function clearAttemptsFor(keys: string[]): void {
    for (const key of keys) clearAttempts(key);
}

export const RATE_LIMIT = { WINDOW_MS, MAX_ATTEMPTS } as const;
