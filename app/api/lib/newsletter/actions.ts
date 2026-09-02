
"use server";

import { prisma } from "@/app/api/lib/prisma";
import { Prisma } from "@/generated/prisma/client";
import { revalidatePath } from "next/cache";

export type NewsletterState = { success?: string; error?: string };

// Pragmatic email shape check — the real verification is the inbox.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function subscribe(
    _prev: NewsletterState,
    formData: FormData
): Promise<NewsletterState> {
    // Honeypot: humans never see or fill this field. Bots do.
    // Pretend success so bots learn nothing.
    if (String(formData.get("website") ?? "").length > 0) {
        return { success: "Thanks — you're on the list." };
    }

    // Consent is required. The submit button is disabled until the box is
    // ticked, but that is only a UI hint — this action is a public endpoint and
    // can be POSTed directly, so the consent has to be enforced here too.
    if (formData.get("consent") !== "yes") {
        return { error: "Please accept the Privacy Notice before subscribing." };
    }

    const email = String(formData.get("email") ?? "").toLowerCase().trim();

    if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
        return { error: "Please enter a valid email address." };
    }

    try {
        await prisma.newsletterSubscriber.create({ data: { email } });
    } catch (err) {
        // P2002 = unique violation -> already subscribed. Not an error to the user.
        if (
            err instanceof Prisma.PrismaClientKnownRequestError &&
            err.code === "P2002"
        ) {
            return { success: "You're already on the list — thank you!" };
        }
        console.error("Newsletter subscribe failed:", err);
        return { error: "Something went wrong. Please try again." };
    }

    return { success: "Thanks — you're on the list." };
}
