"use client";

import { motion } from "framer-motion";

export interface StepItemProps {
  step: number;
  title: string;
  description: string;
  isLast: boolean;
}

export default function StepItem({ step, title, description, isLast }: StepItemProps) {
  return (
    <div className="relative flex gap-6">
      {/* LEFT: DOT + LINE */}
      <div className="relative flex flex-col items-center">
        {/* Dot (INCREASED SIZE) */}
        <span className="mt-1 h-4 w-4 rounded-full bg-blue-600 z-10" />

        {/* Line (INCREASED WIDTH) */}
        {!isLast && (
          <span className="absolute top-5 h-full w-[1.5px] bg-blue-700" />
        )}
      </div>

      {/* RIGHT: CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pb-14"
      >
        {/* Step text (INCREASED SIZE) */}
        <p className="text-lg font-semibold text-blue-600 mb-1">
          Step {step}
        </p>

        <h4 className="text-xl font-semibold text-gray-900 leading-snug">
          {title}
        </h4>

        <p className="mt-2 text-gray-600 max-w-xl">
          {description}
        </p>
      </motion.div>
    </div>
  );
}
