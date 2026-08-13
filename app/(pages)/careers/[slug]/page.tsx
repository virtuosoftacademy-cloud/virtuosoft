'use client'
import { use } from 'react';
import { ReactLenis } from 'lenis/react';
import type { LenisOptions } from 'lenis';
import { jobListings, openApp, type JobListing } from "@/app/_constant";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Upload, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JobDetailPageProps {
    params: Promise<{ slug: string }>;
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
    const router = useRouter();
    const resolvedParams = use(params);
    const slug = resolvedParams.slug;

    // Note: `openApp` doesn't carry the full JobListing shape (fullDescription,
    // requirements, benefits). This mirrors the pre-existing JS behavior, which
    // relied on this object never actually resolving to /careers/open-application
    // via this lookup path.
    const job = (jobListings.find((item) => item.id === slug) ||
                (slug === 'open-application' ? openApp : null)) as JobListing | null;

    if (!job) {
        return (
            
            <div className="flex flex-col items-center justify-center min-h-screen font-mono">
                <p className="text-xl mb-4 text-slate-800">Position Not Found</p>
                <Link href="/careers" className="text-primary underline font-bold">Return to Careers</Link>
            </div>
        );
    }

    // This function sends the user to the form with the job title in the URL
    const handleApplyNavigation = () => {
        if (job?.title) {
            // encodeURIComponent turns "Software Engineer" into "Software%20Engineer"
            const encodedRole = encodeURIComponent(job.title);
            router.push(`/contact?role=${encodedRole}`);
        }
    };

    return (
        <ReactLenis root options={{ lerp: 0.1, smooth: true } as LenisOptions}>
        <div className="bg-white min-h-screen py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <Link 
                    href="/careers" 
                    className="group flex items-center gap-2 text-gray-400 hover:text-black mb-12 inline-block font-mono transition-all"
                >
                    <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Careers
                </Link>

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-black italic font-serif text-black mb-4 tracking-tight uppercase">
                            {job.title}
                        </h1>
                        <div className="flex gap-4 font-mono text-sm text-gray-400 uppercase tracking-widest border-l-2 border-primary pl-4">
                            <span>{job.type}</span> 
                            <span className="text-primary">•</span> 
                            <span>{job.location}</span>
                        </div>
                    </div>
                    
                  <Button 
  size="lg" 
  onClick={handleApplyNavigation}
  className="active:scale-95 transition-all" // Just add the tiny animation here
>
  Apply for this position
</Button>     </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-gray-100 pt-16">
                    
                    <div className="lg:col-span-2 space-y-16">
                        <section>
                            <h2 className="text-3xl font-bold mb-6 italic font-serif text-black">Role Overview</h2>
                            <p className="text-xl text-gray-600 leading-relaxed font-light">
                                {job.fullDescription}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-6 italic font-serif text-black">Key Requirements</h2>
                            <ul className="space-y-6">
                                {job.requirements.map((req, i) => (
                                    <li key={i} className="flex items-start gap-6 text-xl text-gray-700 font-light group">
                                        <div className="size-2 bg-blue-500 rounded-full mt-3 shrink-0 group-hover:scale-150 transition-transform" />
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-10">
                        <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-bold mb-8 font-serif italic text-black">Perks & Benefits</h3>
                            <ul className="space-y-4">
                                {job.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                                        <div className="size-1.5 bg-blue-600 rounded-full" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* BOTTOM FOOTER CTA */}
                <div className="mt-32 pt-20 border-t border-gray-100 text-center">
                    {/* <button 
                        onClick={handleApplyNavigation}
                        className="bg-blue-600 text-white px-16 py-6 rounded-full font-bold text-xl hover:bg-black transition-all shadow-2xl shadow-blue-500/20 active:scale-95"
                    >
                        Apply now
                    </button> */}
                </div>
            </div>
        </div>
         </ReactLenis>
    );
}