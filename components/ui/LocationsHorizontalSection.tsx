"use client";

import Image from "next/image";
import HorizontalScrollWrapper from "./HorizontalScrollWrapper";
import { useState, useEffect } from "react";

interface Location {
  name: string;
  img: string;
}

const locations: Location[] = [
  { name: "PAKISTAN", img: "/Pakistan.svg" },
  { name: "USA", img: "/USA.svg" },
  { name: "UAE", img: "/UAE.svg" },
  { name: "KSA", img: "/KSA.svg" },
  { name: "FRANCE", img: "/France.svg" },
  { name: "CANADA", img: "/Canada.svg" },
  { name: "QATAR", img: "/Qatar.svg" },
];

export default function LocationsHorizontalSection() {
  const [startOffset, setStartOffset] = useState<number>(0);

  useEffect(() => {
    function updateOffset() {
      const width = window.innerWidth;

      if (width < 640) setStartOffset(width * 0.4);
      else if (width < 1024) setStartOffset(width * 0.25);
      else if (width < 1280) setStartOffset(width * 0.3);
      else setStartOffset(width * 0.2);
    }

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return (
    <HorizontalScrollWrapper
      height="60vh"
      mobileHeight="55vh"
      startOffset={startOffset}
    >
     <div className="
  flex items-center gap-8
  max-[639px]:ml-[-20vw]
  sm:ml-[-15vw]
  lg:ml-[-7%]
  pr-20 sm:pr-16 lg:pr-24
  pb-12 min-h-full
">


        {/* LEFT TEXT */}
        <div className="min-w-[280px] sm:min-w-[360px]">
          <h2 className="text-2xl sm:text-5xl font-semibold leading-tight">
            Now operating <br />
            across six diverse <br />
            international locations.
          </h2>
        </div>

        {/* LOCATION CARDS */}
        {locations.map((loc) => (
          <div
            key={loc.name}
            className="relative w-[180px] sm:w-[260px] h-[260px] sm:h-[380px] rounded-2xl overflow-hidden shrink-0"
          >
            <Image
              src={loc.img}
              alt={loc.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 180px, 260px"
              priority
            />

            <div className="absolute inset-x-0 bottom-6 flex justify-center">
              <span className="text-white text-base sm:text-xl font-bold tracking-wide">
                {loc.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </HorizontalScrollWrapper>
  );
}
