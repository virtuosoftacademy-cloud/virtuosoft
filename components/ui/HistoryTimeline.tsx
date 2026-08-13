"use client";

import HorizontalScrollWrapper from "./HorizontalScrollWrapper";
import { history } from "@/data/history";
import React, { useState } from "react";

export default function HistoryTimeline() {
  const [startOffset] = useState<number>(() => {
    if (typeof window === "undefined") return 0;

    const width = window.innerWidth;
    return width >= 1024 && width < 1280 ? width * 0.45 : width * 0.3;
  });
return (
  <div className="hidden md:block">
    <HorizontalScrollWrapper
      height="100vh"
      mobileHeight="80vh"
      marginTop="100px"
    >
      <div className="relative px-8 sm:px-24 md:px-50 lg:px-80 xl:px-70 pt-20 xl:pt-25 pb-16">
        
        {/* ONE CONTINUOUS TIMELINE LINE */}
        <div className="absolute top-32 md:left-[4.1%] md:right-[10.2%] lg:left-[6.2%] lg:right-[12%] xl:top-37 xl:left-[5.5%] xl:right-[11.5%] h-px bg-blue-500" />

        {/* Timeline Items */}
        <div className="flex gap-20 sm:gap-40 pt-16">
          {history.map((item, index) => (
            <div
              key={index}
              className="relative min-w-[240px] sm:min-w-[300px] flex flex-col"
            >
              {/* DOT */}
              <span className="absolute -top-6 left-0 w-4 h-4 rounded-full bg-primary" />

              {/* YEAR */}
              <span className="text-sm sm:text-lg xl:text-xl text-primary font-medium mb-2">
                {item.year}
              </span>

              {/* TITLE */}
              <h3 className="text-lg sm:text-xl xl:text-xl font-bold text-[#2B3439] mb-2 max-w-xs">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm sm:text-lg xl:text-xl text-gray-500 leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </HorizontalScrollWrapper>
  </div>
);

}
