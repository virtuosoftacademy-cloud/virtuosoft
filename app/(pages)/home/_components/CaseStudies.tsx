'use client'

import Image, { StaticImageData } from "next/image"
import BadgeIcon from "@/public/assets/Images/home/global/badge-sparkle.svg"
import { global_CaseStudies } from "@/app/_constant"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"



import AmaxLogo from "@/public/assets/Images/ClientLogo/amax-white.png";

import TarabutLogo from "@/public/assets/Images/ClientLogo/tarabut-white.png";
import NeogiesLogo from "@/public/assets/Images/ClientLogo/neogies-white.png";
import BuypassLogo from "@/public/assets/Images/ClientLogo/buypass.png";
import Gasco from "@/public/assets/Images/ClientLogo/gasco-white.png";
import QterminalsLogo from "@/public/assets/Images/ClientLogo/qterminals-white.png";

import BgAmax from "@/public/assets/Images/products/certus/trackrecord/bg-amax.png";
import BgTarabut from "@/public/assets/Images/products/certus/trackrecord/bg-tarabut.png";
import BgGasco from "@/public/assets/Images/products/certus/trackrecord/bg-gasco.png";
import BgQterminals from "@/public/assets/Images/products/certus/trackrecord/bg-qterminals.png";
import BgNeogies from "@/public/assets/Images/products/certus/trackrecord/bg-neogies.png";
import BgBuypass from "@/public/assets/Images/products/certus/trackrecord/bg-buypass.png";

type StoryLogo =
  | { kind: "image"; src: StaticImageData; alt: string; forceWhite?: boolean }
  | { kind: "text"; text: string };

interface Story {
  title: string;
  description: string;
  tags: string[];
  logo: StoryLogo;
  background: StaticImageData;
}

const stories: Story[] = [
  {
    title: "AMAX's Conversational Data Agent - GenBI",
    description:
      "With executives needing faster access to insights, Virtuosoft created GenBI, an AI-powered natural language interface that connects to AMAX's data warehouse and cloud sources. Now, AMAX leadership can query data, view reports and explore metrics, no code, no delays.",
    tags: ["Growth", "Success"],
    logo: { kind: "image", src: AmaxLogo, alt: "AMAX" },
    background: BgAmax,
  },
  {
    title: "Powering Secure Open Banking Innovation",
    description:
      "Virtuosoft has been partnering with Tarabut's Riyadh subsidiary for over 1.6 years as a software development and security controls implementation partner. As the MENA region's leading open banking and embedded finance platform, Tarabut enables secure, API-driven connectivity between banks, fintechs, and third-party service providers.",
    tags: ["Growth", "Success"],
    logo: { kind: "image", src: TarabutLogo, alt: "Tarabut" },
    background: BgTarabut,
  },
  {
    title: "Enterprise IT Service Management",
    description:
      "Virtuosoft is partnering with Gasco KSA on an enterprise-wide implementation of BMC Helix IT Service Management, spanning Gasco and its six subsidiaries, standardizing IT service processes and strengthening operational governance across the group.",
    tags: ["Growth", "Success"],
    logo: { kind: "image", src: Gasco, alt: "GASCO" },
    background: BgGasco,
  },
  {
    title: "Enhancing Port & Terminal Efficiency with QTerminals",
    description:
      "Virtuosoft collaborated with QTerminals to build robust IT systems aimed at modernizing port operations, from cargo handling and tracking to logistics workflows and real-time status visibility, enabling smoother operations and improved throughput.",
    tags: ["Growth", "Success"],
    logo: { kind: "image", src: QterminalsLogo, alt: "QTerminals", forceWhite: true },
    background: BgQterminals,
  },
  {
    title: "Empowering Energy Efficiency with NEOGIES",
    description:
      "Virtuosoft partnered with NEOGIES to build a custom energy-contract management platform that simplifies procurement, automates workflows, and delivers transparent, compliant energy solutions tailored for businesses in France.",
    tags: ["Growth", "Success"],
    logo: { kind: "image", src: NeogiesLogo, alt: "NEOGIES" },
    background: BgNeogies,
  },
  {
    title: "Buypass AI: Pakistan's First Super App",
    description:
      "Virtuosoft proudly developed Buypass AI, Pakistan's first super app designed to transform how users shop, watch, and engage, merging shopping, content and services into one intelligent, AI-powered ecosystem.",
    tags: ["Growth", "Success"],
    logo: { kind: "image", src: BuypassLogo, alt: "Buypass AI" },
    background: BgBuypass,
  },
];

function CaseStudies() {
  return (
    <div className="px-6 sm:px-10 lg:px-0 my-16 lg:my-24">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary bg-white px-4 py-2">
          <Image src={BadgeIcon} alt="" className="size-3.5" />
          <span className="text-xs font-bold text-primary">Who Built This</span>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl leading-[1.2] text-[#080e19] md:text-[40px]">
          16+ Years Building Enterprise Systems That{" "}
          <span className="text-primary font-bold">Work in Production</span>
        </h2>
        <p className="mt-3 text-base leading-[1.4] text-[#4c5468] max-w-2xl">
          Virtuosoft is an enterprise technology and AI consulting firm with offices in Pakistan, Saudi Arabia, UAE, USA and France. We have scaled 50+ startups and enterprises, impacted 50,000+ users and built systems across ERP, FinTech, cybersecurity and custom software engineering.
        </p>
      </div>
<div className="ml-26">
      <Carousel opts={{ align: "start", loop: true }} className="w-full mt-10">
        <CarouselContent>
          {stories.map((story) => (
            <CarouselItem key={story.title} className="basis-full sm:basis-1/2 lg:basis-3/5">
              <div
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 p-4 bg-accent/20 shadow-xl/20"
              >
                {/* Visual */}
                <div className="relative aspect-[736/406] w-full overflow-hidden rounded-[18px] bg-[#1B2334]">
                  <Image
                    src={story.background}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1280px) 50vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/40" />

                  {story.logo.kind === "image" ? (
                    <Image
                      src={story.logo.src}
                      alt={story.logo.alt}
                      width={800}
                      height={200}
                      className={`absolute left-4 top-6 lg:left-8 lg:top-8 h-auto w-[150px] max-w-[15%] object-contain ${story.logo.forceWhite ? "brightness-0 invert" : ""
                        }`}
                    />
                  ) : (
                    <span className="absolute left-8 top-8 text-sm font-bold text-white">
                      {story.logo.text}
                    </span>
                  )}

                  <span className="absolute bottom-5 right-5 inline-flex items-center gap-2.5 rounded-full bg-white/10 px-5 py-4 text-[17px] font-semibold text-white backdrop-blur-sm">
                    View Project <span aria-hidden="true" className="text-xl font-normal">&rarr;</span>
                  </span>
                </div>


                <div className="px-2 pb-3 pt-10">
                  <h3 className="text-2xl font-bold leading-8 text-[#050f21]">
                    {story.title}
                  </h3>
                  <p className="mt-4 text-sm font-bold leading-5 text-primary">
                    DESCRIPTION
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-[#050f21]">
                    {story.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-6 flex justify-end gap-3">
          <CarouselPrevious className="static size-10 translate-x-0 translate-y-0" />
          <CarouselNext className="static size-10 translate-x-0 translate-y-0" />
        </div>
      </Carousel>
</div>

    </div>
  )
}

export default CaseStudies
