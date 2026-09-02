
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "@/components/ui/sidebar";
import {
    Home,
    Factory,
    Layers,
    LayoutDashboard,
    FilePlus2,
    Tags,
    Briefcase,
    FolderPlus,
    ExternalLink,
    LetterText,
    Mail,
    UserRound,
    MonitorSmartphone,
    Quote,
    Users,
} from "lucide-react";
import type { ReactNode } from "react";

const overviewItems = [
    { href: "/admin", label: "Dashboard", icon: Home },
    { href: "/admin/messages", label: "Messages", icon: Mail },
    { href: "/admin/newsletter", label: "Newsletter", icon: LetterText },
];

// Independent of admin login — a byline any post/case study can be
// credited to, not the account that happened to write it.
const authorItems = [
    { href: "/admin/authors", label: "View authors", icon: Users },
    { href: "/admin/authors/new", label: "New author", icon: FilePlus2 },
];

const testimonialItems = [
    { href: "/admin/testimonials", label: "View testimonials", icon: Quote },
    { href: "/admin/testimonials/new", label: "New testimonial", icon: FilePlus2 },
];

const accountItems = [
    { href: "/admin/profile", label: "Profile", icon: UserRound },
    { href: "/admin/devices", label: "Devices", icon: MonitorSmartphone },
];

const blogItems = [
    { href: "/admin/blog", label: "View posts", icon: LayoutDashboard },
    { href: "/admin/blog/new-post", label: "New post", icon: FilePlus2 },
    { href: "/admin/blog/categories", label: "Categories", icon: Tags },
];

const caseStudyItems = [
    { href: "/admin/case-study", label: "View case studies", icon: Briefcase },
    { href: "/admin/case-study/new-casestudy", label: "New case study", icon: FolderPlus },
    { href: "/admin/case-study/industries", label: "Industries", icon: Factory },
    { href: "/admin/case-study/service-areas", label: "Service areas", icon: Layers },
];

export function AdminSidebar({
    email,
    signOutSlot,
}: {
    email?: string | null;
    signOutSlot: ReactNode;
}) {
    const pathname = usePathname();
    const isActive = (href: string) =>
        pathname === href || pathname.startsWith(href + "/");

    return (
        <Sidebar>
            <SidebarHeader>
                <p className="px-2 pt-2 text-xs font-semibold uppercase tracking-wide text-sidebar-foreground/60">
                    Virtuosoft Admin
                </p>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {overviewItems.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton asChild isActive={isActive(item.href)}>
                                        <Link href={item.href}>
                                            <item.icon />
                                            <span>{item.label}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Authors</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {authorItems.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton asChild isActive={isActive(item.href)}>
                                        <Link href={item.href}>
                                            <item.icon />
                                            <span>{item.label}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Testimonials</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {testimonialItems.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton asChild isActive={isActive(item.href)}>
                                        <Link href={item.href}>
                                            <item.icon />
                                            <span>{item.label}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Blog</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {blogItems.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton asChild isActive={isActive(item.href)}>
                                        <Link href={item.href}>
                                            <item.icon />
                                            <span>{item.label}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Case Studies</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {caseStudyItems.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton asChild isActive={isActive(item.href)}>
                                        <Link href={item.href}>
                                            <item.icon />
                                            <span>{item.label}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Account</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {accountItems.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton asChild isActive={isActive(item.href)}>
                                        <Link href={item.href}>
                                            <item.icon />
                                            <span>{item.label}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarSeparator />
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                                <ExternalLink />
                                <span>View site</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <div className="px-2 pb-2 space-y-2">
                    <p className="truncate text-xs text-sidebar-foreground/60">{email}</p>
                    {signOutSlot}
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}