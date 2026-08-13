'use client'
import Link from 'next/link';
import { ArrowRight } from "lucide-react";
import type { JobListing, OpenApplication } from "@/app/_constant";

type JobCardVariant = "featured" | "compact";

interface JobCardProps {
    job: JobListing | OpenApplication | null | undefined;
    isOpenApp?: boolean;
    variant?: JobCardVariant;
}

export default function JobCard({ job, isOpenApp = false, variant = "featured" }: JobCardProps) {
    if (!job) return null;

    // `id` only exists on JobListing; when isOpenApp is true we route to /contact
    // instead, so this mirrors the original (untyped) runtime behavior exactly.
    const destination = isOpenApp ? `/contact` : `/careers/${(job as JobListing).id}`;

    // Conditional styling based on variant
    const isCompact = variant === "compact";

    return (
        <Link href={destination} className="block h-full group">
            {/* Changed items-center to items-start to fix top-heavy alignment */}
            <div className={`relative bg-white border border-slate-200 rounded-lg transition-all duration-300 hover:shadow-lg hover:border-blue-400 flex justify-between items-start h-full 
                ${isCompact ? 'p-5 min-h-[130px]' : 'p-8 min-h-[180px]'}`}
            >
                {/* Left Side: Text Content */}
                {/* Added pr-12 to ensure title doesn't hit the arrow */}
                <div className="flex flex-col text-left pr-12">
                    {/* Compact tag logic */}
                    {isCompact && (
                        <span className="text-[10px] font-bold text-slate-400 mb-1 leading-none">
                            {job.type || "Full time"}
                        </span>
                    )}

                    {/* Title styling */}
                    <h3 className={`font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors
                        ${isCompact ? 'text-[17px] mb-2' : 'text-xl md:text-2xl mb-3'}`}
                    >
                        {job.title}
                    </h3>
                    
                    {/* Location styling */}
                    <p className={`text-slate-500 font-normal
                        ${isCompact ? 'text-sm' : 'text-lg'}`}
                    >
                        {job.location}
                    </p>
                </div>

                {/* Right Side: Arrow Icon */}
                {/* Added mt-1 to align arrow with the first line of the title */}
                <div className="shrink-0 mt-1">
                    <ArrowRight className={`text-blue-600 transition-transform duration-300 group-hover:translate-x-2 
                        ${isCompact ? 'size-5' : 'size-6'}`} 
                    />
                </div>
            </div>
        </Link>
    );
}