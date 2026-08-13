'use client'
import type { JSX } from 'react'
import Link from 'next/link'
import JobCard from './JobCard'
import { jobListings, careersHeader } from '@/app/_constant'

function JobList(): JSX.Element {
  // Show only first 3 jobs on the main page
  const featuredJobs = jobListings.slice(0, 3);

  return (
    <section className="bg-white pt-40 md:pt-60 pb-20">
      
      {/* Original Heading UI */}
      <div className="flex justify-center items-center flex-col mb-24 text-center">
        <div className="relative inline-block">
          <h4 className="font-light capitalize text-4xl md:text-5xl text-black">
            {careersHeader.title}
          </h4>
          <h4 className="text-5xl lg:text-[64px] xl:text-7xl capitalize font-black text-black -mt-2">
            <strong><em>{careersHeader.company}</em></strong>
          </h4>
          <div className="bg-chart-1 rounded-full size-3 lg:size-4 absolute bottom-2 lg:bottom-4 -right-4 lg:-right-6" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} variant="featured" />
          ))}
        </div>

        {/* Small Blue Load More Button */}
        <div className="flex justify-center mb-10">
            <Link 
                href="/careers/listings" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all  tracking-wider text-xs shadow-md active:scale-95"
            >
                Load More Openings
            </Link>
        </div>
        
        {/* Open Application Card REMOVED from here */}
      </div>
    </section>
  )
}

export default JobList