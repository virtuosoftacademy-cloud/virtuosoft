import React from "react";
import { history } from "@/data/history";

export default function MobileHistoryTimeline(): React.JSX.Element {
  return (
    <div className="max-w-md mx-auto relative ml-8 sm:ml-0 pl-6.5 sm:pl-12 pr-4 mt-10 md:hidden">
      {/* Vertical line as an absolute div, moved right */}
      <div className="absolute top-1 left-8 bottom-0 w-[2px] bg-primary rounded" />

      {history.map((item, index) => (
        <div key={index} className="mb-12 relative">
          {/* Blue Circle */}
          <span className="absolute -left-5.6 sm:-left-1.5 top-0.5 w-4 h-4 rounded-full bg-blue-600 border-2 border-white" />

         <p
  className={`text-primary font-semibold text-sm mb-1
    ${item.highlight ? "text-primary" : ""}
    pl-10 sm:pl-12
  `}
>
  {item.year}
</p>


          <h3 className="font-bold text-lg mb-1 text-black pl-10 sm:pl-12">
  {item.title}
</h3>


          <p className="text-gray-600 text-sm leading-relaxed max-w-xs pl-10 sm:pl-12">
  {item.description}
</p>

        </div>
      ))}
    </div>
  );
}
