'use client'
import { useState, useMemo, type ChangeEvent } from 'react'
import { jobListings, openApp, type JobListing } from '@/app/_constant'
import { ReactLenis } from 'lenis/react';
import type { LenisOptions } from 'lenis';
import JobCard from '../_components/JobCard'

export default function JobListingPage() {
    const [isRemoteOnly, setIsRemoteOnly] = useState<boolean>(false);
    const [selectedDept, setSelectedDept] = useState<string>("All");

    // Dynamic Filter logic
    const filteredJobs = useMemo<JobListing[]>(() => {
        return jobListings.filter(job => {
            const matchesRemote = isRemoteOnly ? job.location.toLowerCase().includes("remote") : true;
            const matchesDept = selectedDept === "All" ? true : job.department === selectedDept;
            return matchesRemote && matchesDept;
        });
    }, [isRemoteOnly, selectedDept]);

    // Grouping by Department
    const groupedJobs = filteredJobs.reduce<Record<string, JobListing[]>>((acc, job) => {
        const dept = job.department || "Other Openings";
        if (!acc[dept]) acc[dept] = [];
        acc[dept].push(job);
        return acc;
    }, {});

    const departments = ["All", ...new Set(jobListings.map(job => job.department))];

    return (
        <ReactLenis root options={{ lerp: 0.1, smooth: true } as LenisOptions}>
        <div className="bg-white min-h-screen py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-700 font-serif italic">Shape Your Future With Us</h1>
                </header>

                {/* Filter Controls */}
                <div className="flex flex-wrap items-center gap-6 mb-12 border-b border-slate-100 pb-8">
                    <label className="flex items-center gap-2 cursor-pointer font-mono text-sm uppercase">
                        <input 
                            type="checkbox" 
                            checked={isRemoteOnly}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setIsRemoteOnly(e.target.checked)}
                            className="accent-primary size-4"
                        />
                        Remote Jobs
                    </label>

                    <div className="flex items-center gap-3">
                        <span className="font-mono text-sm uppercase">Filter by</span>
                        <select 
                            value={selectedDept}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedDept(e.target.value)}
                            className="border border-slate-200 rounded-md px-4 py-2 bg-white outline-none text-sm font-bold"
                        >
                            {departments.map(dept => (
                                <option key={dept} value={dept}>{dept}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Categorized Sections */}
                {Object.keys(groupedJobs).map((dept) => (
                    <div key={dept} className="mb-20">
                        <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-4">
                            <h2 className="text-2xl font-black italic font-serif text-black">{dept}</h2>
                            <span className="bg-primary/10 text-primary text-[10px] px-2 py-1 rounded font-bold">
                                {groupedJobs[dept].length} {groupedJobs[dept].length === 1 ? 'JOB' : 'JOBS'}
                            </span>
                        </div>

                       {/* Category Grid in listings/page.jsx */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {groupedJobs[dept].map((job) => (
        <JobCard 
            key={job.id} 
            job={job} 
            variant="compact" // Makes the card small
        />
    ))}
</div>
                    </div>
                ))}
                {/* THE OPEN APPLICATION CARD - PLACED AT THE BOTTOM */}
                <div className="mt-25 pt-10 border-t border-gray-100">
                    <div className="mb-10">
                        <h2 className="text-2xl font-black italic font-serif text-black">Didn&apos;t find what you&apos;re looking for?</h2>
                        <p className="text-gray-500 mt-2">Send us an open application and we&apos;ll keep you in mind for future roles.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <JobCard job={openApp} isOpenApp={true} variant="compact" />
                    </div>
                </div>
            </div>
        </div>
    </ReactLenis>
    );
}