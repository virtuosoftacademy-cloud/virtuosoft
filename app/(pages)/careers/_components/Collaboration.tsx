import type { JSX } from "react"
import CollaborationCard from "./CollaborationCard"
import { collabCard } from "@/app/_constant"

function Collaboration(): JSX.Element {
    return (
        <>
            <div className="relative mt-30 max-w-7xl lg:mt-50 mx-auto px-16">
                <div className="flex justify-center items-center flex-col mt-20 md:mt-50 text-center">
                    <div className="flex flex-col">
                        <h4 className={`font-light capitalize text-4xl md:text-5xl -mt-4 md:-mt-6`}>Driven By Passion</h4>
                        <h4 className={`text-4xl lg:text-[46px] xl:text-5xl capitalize font-black`}>
                            <strong>
                                <em>
                                    Powered By Collaboration
                                </em>
                            </strong>
                        </h4>
                        <div className="bg-chart-1 rounded-full size-2 lg:size-3 relative bottom-3 md:bottom-4 left-[87%]" />
                        <div className="flex justify-center pb-10">
                            <p className="text-sm lg:text-lg text-gray-400/80 font-light max-w-3xl">Our squad is all about turning ideas into impact. Every project, every challenge, every success is a team win.</p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8 transform transition-all">
                        {collabCard.map((collabData,index) =>
                            <CollaborationCard collabData={collabData} key={index} />
                        )}
                    </div>
                    <div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Collaboration
