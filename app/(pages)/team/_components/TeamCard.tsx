'use client'
import LinkedinIcon from "@/public/assets/Images/linkedin.svg"
import Image from "next/image"
import Link from "next/link"
import type { TeamMember } from "@/app/_constant"

interface TeamCardProps {
  teammember: TeamMember;
  onToggle: () => void;
  isOpen: boolean;
}

export default function TeamCard({ teammember, onToggle, isOpen }: TeamCardProps) {
  const { name, role, description, image, linkedin } = teammember;

  return (
    <div className="flex flex-col pb-6">
      <Image
        className="bg-accent hover:bg-primary transition-all duration-700 cursor-pointer h-[30em]"
        width={380}
        height={280}
        src={image}
        alt={name}
      />
      <div className="border border-accent-foreground/10 pb-8">

        <div className="flex justify-between items-center mt-4 p-4">
          <h4
            className={`
            text-2xl font-bold uppercase
            cursor-pointer
            transition-colors duration-200
            hover:text-primary
            `}
            onClick={onToggle}
          >
            {name}
          </h4>

          <Link href={linkedin} aria-label="LinkedIn profile">
            <Image
              src={LinkedinIcon}
              width={18}
              height={18}
              alt="LinkedIn"
            />
          </Link>
        </div>

        <h5 className="text-[18px] font-medium text-muted-foreground px-4">
          {role}
        </h5>

        <div
          className={`
        overflow-hidden transition-all duration-500 ease-in-out px-4
        ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-[3em] opacity-90'}
        `}
        >
          <p className="text-base leading-relaxed text-gray-700">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}