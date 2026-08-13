'use client'

import { HeroHeadPages, HeroRegular } from "@/components/Styles/StyleClasses"
import OurTeamImg from '@/public/assets/Images/team/ourteam.jpeg'
import Image from "next/image"
function Hero() {
    return (
        <div className="relative mt-30 max-w-7xl lg:mt-50 mx-auto">
            <div className="flex justify-center items-center flex-col h-80 px-10 text-center">
                <div className="flex flex-col justify-center items-center text-6xl">
                    <h4 className={`${HeroRegular}`}>Meet the Visionaries Of</h4>
                    <h2 className={`py-2 ${HeroHeadPages}`}>
                        <strong className="flex flex-row gap-1 lg:gap-2">
                            <em>
                                Virtuosoft
                            </em>
                            <div className="bg-chart-1 rounded-full size-2 lg:size-4 mt-10 lg:mt-12" />
                        </strong>
                    </h2>
                </div>
                <div className="flex justify-center text-sm lg:text-[16px]">
                    <p className="text-center font-light lg:w-xl text-[#6D7786]">Guided by passion and purpose, the minds behind Virtuosoft redefine what’s possible in technology. Their leadership inspires progress, innovation, and excellence at every step.</p>
                </div>
            </div>
            <div className="lg:mt-6 flex justify-center items-center px-10 lg:px-50">
                <Image src={OurTeamImg} alt="Our Team" className="w-full h-auto" />
            </div>
        </div>
    )
}

export default Hero
