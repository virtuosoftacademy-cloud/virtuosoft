
import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "./_components/admin-sidebar";
import { SignOutButton } from "../auth/signin/_components/sign-out-button";

export const metadata = {
    title: { template: "%s · Admin", default: "Admin" },
};

export default async function AdminLayout({ children }: { children: ReactNode }) {
    // LAYER 2 — enforcing guard, not just display.
    const session = await auth();
    if (session?.user?.role !== "ADMIN") redirect("/auth/signin");

    return (
        <SidebarProvider>
            <AdminSidebar
                email={session.user.email}
                signOutSlot={<SignOutButton />}
            />
            <SidebarInset>
                <header className="flex h-14 items-center gap-2 border-b px-4">
                    <SidebarTrigger />
                </header>
                <div className="min-w-0 flex-1 p-4 md:p-8">{children}</div>
            </SidebarInset>
        </SidebarProvider>
    );
}