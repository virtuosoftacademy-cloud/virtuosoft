'use client'

import { Card } from "@/components/ui/card"
import { CommonHead } from "../../../../components/Styles/StyleClasses"
import { values_Section } from "@/app/_constant"
import Image from "next/image"

function Technology() {

    return (
        <>
            <div className="max-w-7xl mx-auto px-10 my-12 lg:my-14">
                <div className="flex flex-col gap-8 lg:flex-row justify-between items-center">

                    <div className="lg:-space-y-4">
                        <div className="flex flex-row items-baseline gap-1 lg:gap-2 text-5xl lg:text-[62px]">
                            <h4 className={`${CommonHead}`}>
                                <strong>
                                    Technology with{" "}
                                </strong>
                                <br />
                                <strong className="flex gap-1 lg:gap-2 flex-row italic font-semibold -mt-2 lg:-mt-5">
                                    <em>
                                        Purpose
                                    </em>
                                    <div className="mt-6 lg:mt-11 bg-chart-1 rounded-full size-1.5 lg:size-2.5" />
                                </strong>
                            </h4>
                        </div>

                        <div className="text-5xl lg:text-[80px] font-medium mt-2 lg:mt-4">
                            <p className="text-gray-200">Why Choose Us?</p>
                        </div>
                    </div>
                    <div
                        className="
        flex justify-start md:justify-center lg:justify-start
        py-6 md:py-8 lg:py-10
      "
                    >
                        <Card
                            className="group relative w-full max-w-[380] lg:max-w-[380] rounded-2xl bg-white p-7 sm:p-8 lg:p-9
            shadow-[0_20px_20px_rgba(0,0,0,0.08)]
            -translate-y-1.5
            transition-all duration-400 ease-out
            overflow-hidden"                        >
                            {/* Gradient border – modern, reliable method */}
                            <div
                                className="
            pointer-events-none absolute inset-0 rounded-2xl
            bg-linear-to-b from-primary to-white p-[0.2em] -z-10
          "
                            >
                                <div className="h-full w-full rounded-xl bg-white" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 space-y-5 sm:space-y-6">
                                {/* Icon / Image */}
                                <div className="relative mx-auto w-28 sm:w-32 md:w-36 lg:w-40 max-w-[140] transition-transform duration-400 group-hover:-translate-y-2.5 -left-20">
                                    <Image
                                        src="assets/Images/home/transparency.svg"
                                        alt="Transparency Icon"
                                        width={160}
                                        height={160}
                                        className="h-auto w-full object-contain"
                                    />
                                </div>

                                {/* Heading */}
                                <h3
                                    className="
              italic font-bold
              text-4xl sm:text-5xl md:text-[46px] lg:text-[47.71px]
              leading-[1.05] -tracking-[0.01em]
              text-[#222]
            "
                                >
                                    Transparency
                                </h3>

                                {/* Paragraph */}
                                <p
                                    className="
              text-[15.5px] sm:text-[16px] md:text-base
              leading-[1.6] text-[#555]
              max-w-prose
            "
                                >
                                    We believe in openness at every level, with our clients, partners and teams. Every action, decision and process at Virtuosoft is guided by honesty and clarity. By maintaining open communication and visible workflows, we ensure our stakeholders have complete confidence in how we operate and deliver results that truly reflect our shared goals.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
                <section
                    className="
        grid grid-cols-1 lg:grid-cols-3 justify-center gap-8 sm:gap-9 lg:gap-6 
        py-12 sm:py-14 lg:py-16
        bg-white
      "
                >
                    {values_Section.map((value, index) => (
                        <div
                            key={index}
                            className="
            group relative
            w-full max-w-[380] lg:max-w-[380]
            rounded-2xl bg-white
            p-7 sm:p-8 lg:p-9
            transition-all duration-400 ease-out
            shadow-[0_20px_20px_rgba(0,0,0,0.08)]
            -translate-y-1.5
            overflow-hidden
          "
                        >
                            {/* Gradient border – reliable method */}
                            <div
                                className="
              pointer-events-none absolute inset-0 rounded-2xl
              bg-linear-to-b from-blue-600 to-white  p-[0.2em] -z-10
            "
                            >
                                <div className="h-full w-full rounded-xl bg-white" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 space-y-5 sm:space-y-6">
                                {/* Icon */}
                                <div className="relative mx-auto w-28 sm:w-32 md:w-36 lg:w-40 max-w-[140] transition-transform duration-400 group-hover:-translate-y-2.5 -left-20">
                                    <Image
                                        src={value.imageSrc}
                                        alt={value.title}
                                        width={160}
                                        height={160}
                                        className="h-auto w-full object-contain"
                                    />
                                </div>

                                {/* Title */}
                                <h3
                                    className="
                font-['Sofia_Sans_Condensed'] italic font-bold
                text-4xl sm:text-5xl lg:text-[47px]
                leading-tight text-gray-900
              "
                                >
                                    {value.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="
                font-['Host_Grotesk']
                text-base sm:text-[15.5px] lg:text-[16px]
                leading-relaxed text-gray-600
              "
                                >
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>

            </div>
        </>
    )
}

export default Technology
