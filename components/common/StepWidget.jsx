"use client";

import StepItem from "./StepItem";

export default function StepWidget({ heading, button, steps, outComes }) {
  return (
    <section className="relative py-24 px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-x-16">

        {/* LEFT COLUMN — STATIC / STICKY */}
        <div className="lg:sticky lg:top-56 self-start pl-2 md:w-xs">
          <h2 className="text-4xl sm:text-5xl text-gray-900 leading-tight">
            {heading}
          </h2>

          {button && <div className="my-8 md:my-0 md:mt-8">{button}</div>}
        </div>

        {/* RIGHT COLUMN — NATURAL VERTICAL SCROLL */}
        <div className="relative">
          <div className="flex flex-col gap-2">
            {steps.map((step, index) => (
              <StepItem
                key={index}
                step={index + 1}
                title={step.title}
                description={step.description}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
          {outComes && outComes.length > 0 &&
            (<div className="flex flex-col gap-2 list-inside">
              <h2 className="text-3xl md:text-4xl"><strong>Business</strong> OutComes</h2>
              {outComes.map((outCome, index) => (
                <li key={index} className="list-disc">
                  {outCome.point}
                </li>
              ))}
            </div>)
          }
        </div>

      </div>
    </section>
  );
}
