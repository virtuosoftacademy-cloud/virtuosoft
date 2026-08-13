import Image, { type StaticImageData } from "next/image";
import { Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// import AmaxLogo from "@/public/assets/Images/ClientLogo/alwatania.png";
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

export default function TrackRecord() {
  return (
    <section className="bg-accent/40 py-20">
      <div className="mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[680px_minmax(0,1fr)] items-center gap-8">
          <div className="lg:ml-32">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-white px-4 py-1.5 text-xs font-bold text-primary">
              <Sparkles className="size-3.5" /> Who Built This
            </span>

            <h4 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl md:text-[40px] md:leading-12">
              16+ Years Building Enterprise Systems That{" "}
              <span className="font-bold text-primary">Work in Production</span>
            </h4>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Virtuosoft is an enterprise technology and AI consulting firm with offices in
              Pakistan, Saudi Arabia, UAE, USA and France. We have scaled 50+ startups and
              enterprises, impacted 50,000+ users and built systems across ERP, FinTech,
              cybersecurity and custom software engineering.
            </p>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {stories.map((story) => (
                <CarouselItem key={story.title} className="basis-[85%] lg:pl-5 sm:basis-1/2 lg:basis-2/5">
                  <div className="group relative flex h-[420px] flex-col justify-between overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={story.background}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1280px) 50vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/60 transition-colors duration-500 group-hover:from-black/20 group-hover:to-black/70" />

                    <div className="relative z-10 pt-4 pl-6">
                      <div className="w-full">
                        {story.logo.kind === "image" ? (
                          <Image
                            src={story.logo.src}
                            alt={story.logo.alt}
                            className={`max-h-10 w-18 object-center ${story.logo.forceWhite ? "brightness-0 invert" : ""}`}
                            width={800}
                            height={200}
                          />
                        ) : (
                          <span className="text-sm font-bold text-white">{story.logo.text}</span>
                        )}
                      </div>
                    </div>

                    <div className="relative z-10 flex flex-col gap-3 p-6 pt-0">
                      <div className="flex gap-2">
                        {story.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h4 className="text-xl leading-tight text-white">{story.title}</h4>

                      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                        <div className="overflow-hidden">
                          <p className="translate-y-2 text-sm leading-relaxed text-white/80 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-150 line-clamp-2">
                            {story.description}
                          </p>
                          <div className="mt-3 flex translate-y-2 items-center gap-2 border-t border-white/10 pt-3 text-sm font-bold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-200">
                            Read Case Study <span aria-hidden="true">&rarr;</span>
                          </div>
                        </div>
                      </div>
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
    </section>
  );
}
