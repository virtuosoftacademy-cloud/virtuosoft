'use client'
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import FounderSection from "@/components/ui/FounderSection";
import LocationsHorizontalSection from "@/components/ui/LocationsHorizontalSection";
import MobileHistoryTimeline from "@/components/ui/MobileHistoryTimeline";
import { CommonHead } from "@/components/Styles/StyleClasses";
import Image from 'next/image';
import HistoryTimeline from "@/components/ui/HistoryTimeline";

function DynamicComponents() {
  return (
    <>
      <div>
        <HorizontalScroll
          text="VIRTUOSOFT" />
      </div>
      <div className="flex justify-center my-4 px-4 sm:px-0 md:mb-[-12px]">
        <Image
          src="/Virtuosoft-logo.svg"
          alt="Virtuosoft Logo"
          width={160}            // base size for desktop
          height={120}
          className="w-[100px] sm:w-[140px] md:w-[160px] md:mt-[-20px] h-auto"  // responsive width
          priority
        />
      </div>
      <p className="mt-10 md:mt-20 max-w-3xl mx-auto text-center text-sm sm:text-xl md:text-[25px] px-4 text-[#333]">
        At <strong>Virtuosoft</strong>, we focus on human values over
        traditional KPIs and profitability. Our mission is to deliver innovative
        software solutions that drive success for both clients and employees.
      </p>

      {/* FOUNDER */}
      {/* Wrap FounderSection in a responsive container */}
      <div className="px-4 sm:px-6 md:px-20 lg:px-28 xl:px-36 2xl:px-44 mt-10 sm:mt-14 md:mt-20">
        <FounderSection />
      </div>

      {/* GROWTH HEADER */}
      <div className="mx-auto max-w-7xl pl-5 md:pl-40 xl:pl-30">

        <div className="-space-y-1 lg:-space-y-3 px-10">
          <h4 className={`font-normal ${CommonHead}`}>
            Driven by{" "}
            <span className="">
              <strong>
                Growth
              </strong>
            </span>
          </h4>
          <div className="text-5xl lg:text-[62px] font-light">
            <div className="flex flex-row gap-1 lg:gap-2 text-3xl lg:text-[62px] items-baseline">
              <h4 className={`font-normal ${CommonHead}`}>
                Our OnGoing{" "}
                <strong>
                  Rise
                </strong>
              </h4>
              <div className="bg-chart-1 rounded-full size-1.5 lg:size-2.5 mt-5" />
            </div>
          </div>
          <div className="text-5xl lg:text-[96px] font-medium mt-2 lg:mt-4 capitalize">
            <p className="text-gray-200">The Journey</p>
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <HistoryTimeline />
      <MobileHistoryTimeline />

      {/* LOCATIONS */}
      <LocationsHorizontalSection />
    </>
  )
}

export default DynamicComponents
