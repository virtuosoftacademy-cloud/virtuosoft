'use client'

import { Button } from "@/components/ui/button"
import { CommonHead, HeroRegular, Italic } from "../../../../components/Styles/StyleClasses"
import Link from "next/link"
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { services_Section } from "@/app/_constant";

function InnovativeSolutions() {
    return (
        <div className="max-w-7xl mx-auto px-10 my-8 lg:my-10">
            <div className="-space-y-2 lg:-space-y-4">
                <h4 className={`font-normal ${CommonHead}`}>
                    Innovative{" "}
                    <span className="">
                        <strong>
                            <em>
                                Solutions
                            </em>
                        </strong>
                    </span>
                </h4>
                <div className="text-5xl lg:text-[62px] font-light">
                    <div className="flex flex-row gap-1 lg:gap-2 text-3xl lg:text-[62px] items-baseline">
                        <h4 className={`font-normal ${CommonHead}`}>
                            Real{" "}
                            <strong className="italic">
                                <em>
                                    Results
                                </em>
                            </strong>
                        </h4>
                        <div className="bg-chart-1 rounded-full size-1.5 lg:size-2.5 mt-5" />
                    </div>
                </div>
                <div className="text-5xl lg:text-[96px] font-medium mt-2 lg:mt-4 capitalize">
                    <p className="text-gray-200">Smart service.</p>
                </div>
            </div>
            <div
                className="
          grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[320px_minmax(0,1fr)_minmax(0,1fr)]
          auto-rows-fr md:auto-rows-[300px]
          gap-5 md:gap-6 lg:gap-5
          my-10 lg:my-16 min-h-[620]
        "
            >
                {services_Section.map((service) => (
                    <div
                        key={service.id}
                        className={cn(
                            "group relative overflow-hidden cursor-pointer",
                            "flex flex-col justify-end",
                            "transition-all duration-300 ease-out",
                            "hover:-translate-y-1 hover:shadow-2xl",
                            service.bgColor.startsWith("#") ? `bg-[${service.bgColor}]` : service.bgColor,
                            service.textColor,
                            service.gridClasses
                        )}
                    >
                        {/* Background Image */}
                        <div
                            className="
                absolute inset-0 bg-contain bg-no-repeat bg-center opacity-70
                transition-all duration-500 ease-out
                group-hover:opacity-55 group-hover:-translate-y-2
              "
                            style={{ backgroundImage: `url('${service.bgImage}')` }}
                        />

                        {/* Content */}
                        <div
                            className={cn(
                                "relative z-10 px-6 md:px-7",
                                "md:transition-transform duration-700 ease-out",
                                service.hoverTranslate
                            )}
                        >
                            <h3 className="italic font-bold text-3xl md:text-4xl lg:text-[31px] mb-3 leading-tight capitalize">
                                {service.title}
                            </h3>

                            <p className="text-base lg:text-[15px] mb-6 opacity-95 leading-relaxed">
                                {service.description}
                            </p>

                            <div
                                className="flex flex-wrap gap-2.5
                md:opacity-0 md:translate-y-4 transition-all duration-500 ease-out
                group-hover:opacity-100 group-hover:translate-y-0
                "
                            >
                                {service.buttons.map((btn, idx) => (
                                    <Button
                                        key={idx}
                                        variant="outline"
                                        size="sm"
                                        className={cn(
                                            "service-btn",
                                            service.isBusiness && "text-black bg-transparent border-black hover:bg-black hover:text-white hover:border-black"
                                        )}
                                        asChild
                                    >
                                        <Link href={btn.href}>{btn.label}</Link>
                                    </Button>
                                ))}
                                {/* <Button className={''}><Link href={'/'}>More</Link></Button> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8 lg:mt-10">
                <Button className={'border'} variant="ghost">
                    <Link href="/services">
                        Load More
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default InnovativeSolutions
