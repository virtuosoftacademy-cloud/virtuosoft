// Plain module, deliberately NOT "use server": such a file may only export
// async functions, so these constants cannot live beside the action. Both the
// client form and the server action import them, which is what keeps the
// checkbox list and its server-side whitelist from drifting apart.

/**
 * The multi-select checkbox topics, in the two-column order the design lays
 * them out in (column 1 top-to-bottom, then column 2).
 */
export const INTEREST_OPTIONS = [
    "AI Agent",
    "Cloud Optimization",
    "Cybersecurity",
    "Enterprise Solution",
    "Web & App Development",
    "Digital Marketing",
    "Talent Hiring",
    "Partners & Investors",
    "Careers",
    "Press",
    "Other",
] as const;
