'use client'

import { CommonHead, HeroHeadPages, HeroRegular, Italic } from "@/components/Styles/StyleClasses"
import TeamCard from "./TeamCard"
import { teamMembers } from "@/app/_constant"
import { useState } from "react";
function OurTeam() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // null = all closed
  return (
    <div className="mx-auto max-w-7xl px-10 py-12">
      <div className="my-10">

        <h4 className={`flex gap-2 font-normal ${HeroHeadPages}`}>
          Our
          <strong className={`flex flex-row gap-1 lg:gap-2 italic ${HeroHeadPages}`}>
            <em>
              Team
            </em>
            <div className="bg-chart-1 rounded-full size-1 lg:size-3 mt-6 lg:mt-12" />
          </strong>
        </h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Team Member Card */}
        {teamMembers.map((member, index) => (
          <TeamCard 
          key={index} 
          teammember={member}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)} />
        ))}
      </div>

    </div>
  )
}

export default OurTeam
