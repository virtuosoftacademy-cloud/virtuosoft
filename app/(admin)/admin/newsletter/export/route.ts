
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET() {
    const session = await auth();
    if (session?.user?.role !== "ADMIN") {
        return new Response("Unauthorized", { status: 401 });
    }

    const subscribers = await prisma.newsletterSubscriber.findMany({
        orderBy: { createdAt: "asc" },
    });

    const rows = [
        "email,subscribed_at",
        ...subscribers.map(
            (s) => `${s.email},${s.createdAt.toISOString()}`
        ),
    ];

    return new Response(rows.join("\n"), {
        headers: {
            "Content-Type": "text/csv; charset=utf-8",
            "Content-Disposition": `attachment; filename="newsletter-subscribers.csv"`,
        },
    });
}