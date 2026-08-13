'use client'

import { HeroHeadPages, HeroRegular } from "@/components/Styles/StyleClasses"

function Hero() {
    return (
        <>
            <div className="relative mt-30 max-w-7xl lg:mt-50 mx-auto px-10">
                <div className="flex justify-center items-center flex-col h-80 px-10 text-center">
                    <div className="flex flex-col justify-center items-center text-6xl">
                        <h4 className={`${HeroRegular}`}>Exclusive Project Start&apos;s With</h4>
                        <h2 className={`py-2 ${HeroHeadPages}`}>
                            <strong className="flex flex-row gap-1 lg:gap-2">
                                <em>
                                    One Message
                                </em>
                                <div className="bg-chart-1 rounded-full size-2 lg:size-4 mt-10 lg:mt-12" />
                            </strong>
                        </h2>
                    </div>
                    <div className="flex justify-center text-sm lg:text-[16px]">
                        <p className="text-center font-light lg:w-xl text-[#6D7786]">Turn ambitious ideas into timeless results.
                            We partner with visionaries who demand the exceptional. Your project deserves nothing less.</p>
                    </div>
                </div>   
            </div>
        </>
    )
}

export default Hero
