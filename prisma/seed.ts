

import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";
import { hash } from "bcryptjs";
import { getDbConfig } from "../app/api/lib/db-config";
import { computeTimeAgo, computeReadTime } from "../app/types/types";

const prisma = new PrismaClient({ adapter: new PrismaMariaDb(getDbConfig()) });

async function seedAdmin() {
    const email = (process.env.SEED_ADMIN_EMAIL ?? "admin@virtuosoft.com")
        .toLowerCase()
        .trim();
    const password = process.env.SEED_ADMIN_PASSWORD ?? "ChangeMe123!";

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
        console.log(`Admin user already exists: ${email}`);
        return;
    }

    await prisma.user.create({
        data: {
            email,
            name: "Admin",
            password: await hash(password, 12),
            role: "ADMIN",
        },
    });
    console.log(`Created admin user: ${email}`);
    if (!process.env.SEED_ADMIN_PASSWORD) {
        console.log(`  Password: ${password} (set SEED_ADMIN_PASSWORD to choose your own — change this after first sign-in)`);
    }
}

async function seedBlogCategories() {
    const categories: { label: string; accent: string }[] = [
        { label: "Finance", accent: "Clarity" },
        { label: "Technology", accent: "Innovation" },
        { label: "Operations", accent: "Efficiency" },
        { label: "Leadership", accent: "Growth" },
    ];

    for (const category of categories) {
        const existing = await prisma.blogCategory.findFirst({
            where: { label: category.label },
        });
        if (existing) continue;
        await prisma.blogCategory.create({ data: category });
        console.log(`Created blog category: ${category.label}`);
    }
}

async function seedIndustries() {
    const labels = [
        "Banking & Fintech",
        "Government",
        "Healthcare",
        "Insurance",
        "Retail",
        "Manufacturing",
        "Oil, Gas and Energy",
        "Logistics",
        "Telecommunication",
        "Education",
    ];

    for (const label of labels) {
        await prisma.industry.upsert({
            where: { label },
            update: {},
            create: { label },
        });
    }
    console.log(`Industries ready: ${labels.length}`);
}

async function seedServiceAreas() {
    const labels = [
        "Advisory",
        "Artificial Intelligence",
        "Software Engineering",
        "Data Engineering",
        "Cybersecurity",
        "Policy & Governance",
        "Expertise",
    ];

    for (const label of labels) {
        await prisma.serviceArea.upsert({
            where: { label },
            update: {},
            create: { label },
        });
    }
    console.log(`Service areas ready: ${labels.length}`);
}

async function seedAuthor() {
    const name = "Margaret Thorne";
    const existing = await prisma.author.findFirst({ where: { name } });
    if (existing) return existing;

    const author = await prisma.author.create({ data: { name } });
    console.log(`Created author: ${name}`);
    return author;
}

async function seedTestimonials() {
    const testimonials: { name: string; role: string; quote: string; rating: number }[] = [
        {
            name: "Maxin Will",
            role: "Product Manager",
            quote: "Virtuosoft cut through the noise and delivered a system that actually works the way our teams operate day to day.",
            rating: 4,
        },
        {
            name: "Maxin Will",
            role: "Product Manager",
            quote: "From discovery to launch, their engineers understood the complexity of our enterprise stack better than teams three times their size.",
            rating: 4,
        },
        {
            name: "Maxin Will",
            role: "Product Manager",
            quote: "The results were measurable within weeks, not quarters. That pace of delivery changed how we plan technology investment.",
            rating: 5,
        },
        {
            name: "Maxin Will",
            role: "Product Manager",
            quote: "Reliable, transparent and genuinely invested in our success, Virtuosoft feels like an extension of our own team.",
            rating: 5,
        },
    ];

    for (const [i, t] of testimonials.entries()) {
        const existing = await prisma.testimonial.findFirst({ where: { quote: t.quote } });
        if (existing) continue;
        await prisma.testimonial.create({ data: { ...t, order: i } });
        console.log(`Created testimonial: ${t.quote.slice(0, 40)}…`);
    }
}

// The frontend's own static posts (app/(pages)/blogs/_components/index.ts),
// including the fourth one that's currently commented out there — it's
// finished copy, just not switched on. Reshaped into the CMS row shape:
// `date` becomes an ISO string (what the admin form's <input type="date">
// produces), and timeAgo/readTime are computed the same way a real
// create-post submission computes them, rather than reusing the static
// file's own (now-stale) "8 min read" labels.
async function seedBlogPosts() {
    const author = await prisma.author.findFirst({ where: { name: "Margaret Thorne" } });
    const blogImg = "/assets/Images/blog";

    const posts: {
        slug: string;
        title: string;
        excerpt: string;
        image: string;
        date: string;
        content: string;
        category: string;
        isFeatured?: boolean;
        isSidebar?: boolean;
    }[] = [
        {
            slug: "accounting-and-finance",
            title: "Accounting and Finance: The Backbone Most Businesses Ignore Until It Breaks",
            excerpt: "Accounting and finance rarely get attention when things are going well.",
            image: `${blogImg}/accounts.png`,
            date: "2024-03-15",
            category: "Finance",
            isFeatured: true,
            content: `
<p>Accounting and finance rarely get attention when things are going well. Sales are up. Customers are happy. Teams are busy. Everything feels fine. Until one day, it doesn’t.</p>

<p>Cash feels tighter than expected. Decisions take longer. Leaders ask simple questions and get complicated answers. The numbers don’t lie, but they don’t explain either.</p>

<h3 class="capitalize text-4xl py-3">Accounting is not about compliance alone</h3>

<p>Many organizations still treat accounting as a reporting obligation. Close the books. File the reports. Stay compliant. That mindset is outdated.</p>

<p>Modern accounting is about visibility. It should explain how money moves through the business.</p>

<p>Strong finance functions don’t just report what happened. They help leaders understand why it happened and what to do next.</p>

<h3 class="capitalize text-4xl py-3">Finance sits at the center of every decision</h3>

<p>Every strategic decision has a financial consequence.</p>

<p>Clear, trusted financial data removes doubt.</p>

<h3 class="capitalize text-4xl py-3">Growth exposes weak financial foundations</h3>

<p>Manual processes stretch. Controls weaken. Reporting lags.</p>

<p>Strong accounting functions are built to scale.</p>

<h3 class="capitalize text-4xl py-3">The real role of accounting and finance</h3>

<p>They provide:</p>

<ul class="list-disc pl-5">
<li>a clear view of cash</li>
<li>early warning signs</li>
<li>confidence in decisions</li>
<li>discipline</li>
</ul>

<h3 class="capitalize text-4xl py-3">Where businesses go wrong</h3>

<p>Outsourcing without oversight. Adding tools without integration.</p>

<h3 class="capitalize text-4xl py-3">The future of accounting and finance</h3>

<p>Automation and real-time data are changing finance.</p>

<h3 class="capitalize text-4xl py-3">Final Thought</h3>

<p>Sustainable success is built on clarity and trust in numbers.</p>
`,
        },
        {
            slug: "ai-agents",
            title: "AI Agents: The Shift From Tools to Digital Teammates",
            excerpt: "AI agents are changing how businesses think, decide and act.",
            image: `${blogImg}/Friction.png`,
            date: "2024-03-10",
            category: "Technology",
            isSidebar: true,
            content: `
<p>For years, technology has helped businesses work faster. AI agents are changing something bigger.</p>

<p>They help businesses think, decide and act without constant human input.</p>

<h3 class="capitalize text-4xl py-3">What is an AI Agent?</h3>

<p>An AI agent understands goals, takes action, learns from outcomes, and works in the background.</p>

<p>They operate with intent.</p>

<h3 class="capitalize text-4xl py-3">From Assistance to Ownership</h3>

<p>AI agents take ownership of tasks such as monitoring, handling decisions, and coordinating systems.</p>

<h3 class="capitalize text-4xl py-3">Why AI Agents Matter</h3>

<p>Businesses face pressure from speed, complexity, and limited talent.</p>

<p>AI agents fill this gap.</p>

<h3 class="capitalize text-4xl py-3">The Real Value</h3>

<p>The real value is consistency and clarity.</p>

<ul class="list-disc pl-5">
<li>Apply rules consistently</li>
<li>Surface problems early</li>
<li>Reduce dependency</li>
</ul>

<h3 class="capitalize text-4xl py-3">Where Businesses Go Wrong</h3>

<p>Rushing technology without strong foundations creates confusion.</p>

<h3 class="capitalize text-4xl py-3">Hybrid Future</h3>

<p>The future is humans working with AI agents.</p>

<h3 class="capitalize text-4xl py-3">Final Thought</h3>

<p>AI agents are digital teammates, not toys.</p>
`,
        },
        {
            slug: "workflow-automation",
            title: "Workflow Automation: How Modern Businesses Remove Friction and Regain Control",
            excerpt: "Workflow automation removes friction and improves reliability.",
            image: `${blogImg}/3.png`,
            date: "2024-03-08",
            category: "Operations",
            isSidebar: true,
            content: `
<p>Every organization wants to work faster. Few focus on working cleaner.</p>

<p>Most delays come from manual handoffs and memory.</p>

<h3 class="capitalize text-4xl py-3">What is Workflow Automation?</h3>

<p>Workflow automation designs work to move forward on its own.</p>

<h3 class="capitalize text-4xl py-3">Where It Delivers Value</h3>

<p>Finance, operations, and compliance benefit most.</p>

<p>Automation ensures approvals, reconciliations, and tracking.</p>

<h3 class="capitalize text-4xl py-3">The Unexpected Benefit</h3>

<p>The biggest benefit is predictability.</p>

<h3 class="capitalize text-4xl py-3">Risks</h3>

<p>Automating broken processes locks in flaws.</p>

<h3 class="capitalize text-4xl py-3">Leadership Shift</h3>

<p>Leaders must focus on how work flows.</p>

<h3 class="capitalize text-4xl py-3">Future Outlook</h3>

<p>Manual coordination will not scale.</p>

<h3 class="capitalize text-4xl py-3">Final Thought</h3>

<p>Real efficiency is removing friction.</p>
`,
        },
        {
            slug: "fix-the-system",
            title: "What Happens When You Fix the System Instead of Pushing the Team",
            excerpt: "Fixing systems creates sustainable performance.",
            image: `${blogImg}/system.png`,
            date: "2024-03-06",
            category: "Leadership",
            content: `
<p>This case study focuses on fixing systems instead of pushing people.</p>

<p>A growing company was facing constant friction.</p>

<h3 class="capitalize text-4xl py-3">The Real Problem</h3>

<p>The problem was structure, not effort.</p>

<p>Tools didn’t connect and processes relied on memory.</p>

<h3 class="capitalize text-4xl py-3">The Shift</h3>

<p>We mapped data flow and decision delays.</p>

<h3 class="capitalize text-4xl py-3">What Changed</h3>

<ul class="list-disc pl-5">
<li>Simplified finance processes</li>
<li>Aligned data</li>
<li>Added smart automation</li>
</ul>

<h3 class="capitalize text-4xl py-3">Results</h3>

<p>Confidence returned. Teams focused on real issues.</p>

<h3 class="capitalize text-4xl py-3">The Lesson</h3>

<p>Strong systems create strong performance.</p>

<h3 class="capitalize text-4xl py-3">Final Thought</h3>

<p>Fixing structure builds resilience.</p>
`,
        },
    ];

    for (const post of posts) {
        const existing = await prisma.blogPost.findUnique({ where: { slug: post.slug } });
        if (existing) continue;

        const category = await prisma.blogCategory.findFirst({
            where: { label: post.category },
        });

        await prisma.blogPost.create({
            data: {
                slug: post.slug,
                title: post.title,
                accent: "",
                excerpt: post.excerpt,
                image: post.image,
                timeAgo: computeTimeAgo(post.date),
                readTime: computeReadTime(post.content),
                date: post.date,
                content: post.content,
                href: `/blogs/${post.slug}`,
                isFeatured: post.isFeatured ?? false,
                isSidebar: post.isSidebar ?? false,
                categoryId: category?.id,
                authorId: author?.id,
            },
        });
        console.log(`Created blog post: ${post.slug}`);
    }
}

// The one case study with enough real design copy to fill every required
// field honestly: Tarabut's Problem/Solution/Impact content from
// app/_constant/index.ts (caseStudies_Problem/Solution/Impact), which
// backs the bespoke /case-studies/tarabut page. Slugged
// "tarabut-open-banking" rather than "tarabut" so it doesn't collide with
// that existing static route.
async function seedCaseStudies() {
    const author = await prisma.author.findFirst({ where: { name: "Margaret Thorne" } });
    const slug = "tarabut-open-banking";

    const existing = await prisma.caseStudy.findUnique({ where: { slug } });
    if (existing) return;

    const industry = await prisma.industry.findUnique({
        where: { label: "Banking & Fintech" },
    });
    const serviceAreas = await prisma.serviceArea.findMany({
        where: { label: { in: ["Software Engineering", "Cybersecurity"] } },
    });

    await prisma.caseStudy.create({
        data: {
            slug,
            heroTitle: "Powering Secure Open Banking Innovation",
            heroSubtitle:
                "Virtuosoft has been partnering with Tarabut's Riyadh subsidiary for over 1.6 years as a software development and security controls implementation partner. As the MENA region's leading open banking and embedded finance platform, Tarabut enables secure, API-driven connectivity between banks, fintechs, and third-party service providers.",
            heroImage: "/assets/Images/casestudies/detail/visual-tarabut.png",
            thumbnailImage: "/assets/Images/casestudies/card-tarabut-visual.png",
            industryId: industry?.id,
            serviceAreas: { connect: serviceAreas.map((s) => ({ id: s.id })) },

            summary:
                "Virtuosoft partnered with Tarabut, the MENA region's leading open banking platform, to scale engineering, QA and DevOps teams for faster delivery and secure financial infrastructure.",

            situationParagraphs:
                "Tarabut faced rapid growth challenges with scaling its core platform while maintaining security and compliance across MENA markets.",
            situationQuestions: [
                "Skilled backend and frontend engineers to build scalable microservices and responsive interfaces.",
                "QA experts to automate testing and maintain stability in a highly regulated environment.",
                "Cloud and DevOps specialists to streamline deployments and ensure high availability.",
                "Faster development cycles to deliver new open banking APIs and stay competitive.",
            ].join("\n"),
            situationClosing: null,

            challenge:
                "<p>Tarabut needed to scale its open banking platform across MENA markets without compromising security, compliance, or delivery speed — all while operating in one of the region's most heavily regulated fintech environments.</p>",

            approachIntro:
                "Virtuosoft strengthened Tarabut's engineering capabilities with dedicated experts, scalable architecture, and automated delivery processes.",

            outcome:
                "This engagement demonstrates Virtuosoft's capability to deliver secure, regulation-aligned fintech and Open Banking solutions within the KSA market.",
            keyResults: [
                "Streamlined full-stack teams delivering faster cycles",
                "Automated QA testing removed release bottlenecks",
                "Reliable cloud infrastructure with CI/CD automation",
                "Stable, skilled teams maintained predictable delivery",
            ].join("\n"),

            calloutHeading: null,
            calloutText: null,
            calloutButtonHref: null,
            calloutButtonLabel: null,

            authorId: author?.id,

            approachCards: {
                create: [
                    {
                        title: "Embedded Engineering Teams",
                        description:
                            "Embedded specialized backend and frontend engineers into Tarabut's product teams.",
                        order: 1,
                    },
                    {
                        title: "Automated QA & Compliance Testing",
                        description:
                            "Automated QA processes with regression and compliance testing to improve release stability.",
                        order: 2,
                    },
                    {
                        title: "Managed Cloud & DevOps",
                        description:
                            "Managed cloud infrastructure, CI/CD pipelines, and site reliability to improve deployment speed and reduce downtime.",
                        order: 3,
                    },
                    {
                        title: "Domain Expertise in Financial Services",
                        description:
                            "Delivered hands-on domain expertise in financial services, contributing to both technical execution and product evolution.",
                        order: 4,
                    },
                ],
            },
            timeline: {
                create: [
                    { phase: "Engineering Ramp-Up", duration: "Weeks 1–6", order: 1 },
                    { phase: "Scaled Delivery & Compliance Hardening", duration: "Ongoing (1.6+ years)", order: 2 },
                ],
            },
            relatedServices: {
                create: [
                    {
                        label: "Software Engineering",
                        href: "/services/softengineering/custom-software-development",
                        order: 1,
                    },
                    {
                        label: "Cybersecurity",
                        href: "/services/cybersecurity/managed-cybersecurity-service",
                        order: 2,
                    },
                ],
            },
        },
    });
    console.log(`Created case study: ${slug}`);
}

async function main() {
    await seedAdmin();
    await seedAuthor();
    await seedBlogCategories();
    await seedIndustries();
    await seedServiceAreas();
    await seedTestimonials();
    await seedBlogPosts();
    await seedCaseStudies();
}

main()
    .catch((err) => {
        console.error("Seed failed:", err);
        process.exitCode = 1;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
