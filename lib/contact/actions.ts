"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { INTEREST_OPTIONS } from "./options";

export type ContactState = {
    success?: string;
    error?: string;
    fieldErrors?: Partial<Record<string, string>>;
    /**
     * Echoed back so a rejected send keeps what the visitor typed. React
     * resets an uncontrolled form once its action resolves, so without this
     * one bad field would wipe a long description.
     */
    values?: ContactValues;
};

export type ContactValues = {
    name: string;
    email: string;
    phone: string;
    company: string;
    interests: string[];
    description: string;
};

// Pragmatic shape check — the real verification is whether a reply lands.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_DESCRIPTION = 5000;

export async function sendContactMessage(
    _prev: ContactState,
    formData: FormData
): Promise<ContactState> {
    // Honeypot: humans never see this field, bots fill it. Report success so
    // a bot learns nothing about why it failed.
    if (String(formData.get("website") ?? "").length > 0) {
        return { success: "Thanks — we'll be in touch shortly." };
    }

    const values: ContactValues = {
        name: String(formData.get("name") ?? "").trim(),
        email: String(formData.get("email") ?? "").toLowerCase().trim(),
        phone: String(formData.get("phone") ?? "").trim(),
        company: String(formData.get("company") ?? "").trim(),
        interests: formData.getAll("interests").map((v) => String(v)),
        description: String(formData.get("description") ?? "").trim(),
    };

    const fieldErrors: Record<string, string> = {};
    if (!values.name) fieldErrors.name = "Please tell us your name.";
    if (!values.email || values.email.length > 254 || !EMAIL_RE.test(values.email)) {
        fieldErrors.email = "Please enter a valid email address.";
    }
    if (!values.phone) fieldErrors.phone = "Please enter your phone number.";
    // Checked against the list rather than accepted as free text: this is a
    // public endpoint and can be POSTed directly.
    if (values.interests.length === 0) {
        fieldErrors.interests = "Please choose what this is about.";
    } else if (values.interests.some((i) => !INTEREST_OPTIONS.includes(i as (typeof INTEREST_OPTIONS)[number]))) {
        fieldErrors.interests = "Please choose from the listed options.";
    }
    if (!values.description) {
        fieldErrors.description = "Please tell us a little about your enquiry.";
    } else if (values.description.length > MAX_DESCRIPTION) {
        fieldErrors.description = `Please keep this under ${MAX_DESCRIPTION} characters.`;
    }

    if (Object.keys(fieldErrors).length > 0) {
        return { fieldErrors, values, error: "Please check the highlighted fields." };
    }

    try {
        await prisma.contactMessage.create({
            data: {
                name: values.name,
                email: values.email,
                phone: values.phone,
                company: values.company || null,
                interestedIn: values.interests.join(", "),
                description: values.description,
            },
        });
    } catch (err) {
        console.error("Contact message failed to save:", err);
        return { error: "Something went wrong. Please try again.", values };
    }

    // So the admin list and its unread badge pick the new message up.
    revalidatePath("/admin/messages");
    revalidatePath("/admin");

    return { success: "Thanks — we'll be in touch shortly." };
}
