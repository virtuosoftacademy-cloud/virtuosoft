'use client'

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useAnimate, type PanInfo } from 'framer-motion';

export interface EmpowerItem {
  title: string;
  description: string;
}

interface EmpowerProps {
  title: string;
  items: EmpowerItem[];
}

export default function Empower({ title, items }: EmpowerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();
  const x = useMotionValue(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Measure card width + gap + determine visible cards count
  useEffect(() => {
    const updateLayout = () => {
      if (!containerRef.current) return;

      const w = window.innerWidth;

      let perView = 1;
      if (w >= 1024) perView = 4;       // lg+
      else if (w >= 768) perView = 2;    // md (tablet)

      setCardsPerView(perView);

      const card = containerRef.current.querySelector<HTMLElement>('.ai-card');
      if (card) {
        setCardWidth(card.offsetWidth + 20); // gap-5 = 20px
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const slideTo = (index: number) => {
    if (cardWidth === 0) return;
    const newX = -index * cardWidth;
    setCurrentIndex(index);
    animate(scope.current, { x: newX }, { type: 'spring', stiffness: 200, damping: 30 });
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      slideTo(currentIndex - 1);
    }
  };

  const goNext = () => {
    if (currentIndex < items.length - cardsPerView) {
      slideTo(currentIndex + 1);
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (cardWidth === 0) return;

    const movedBy = info.offset.x;
    const threshold = cardWidth * 0.35;

    let newIndex = currentIndex;

    if (movedBy < -threshold && currentIndex < items.length - 1) {
      newIndex += 1;
    } else if (movedBy > threshold && currentIndex > 0) {
      newIndex -= 1;
    }

    // Clamp to valid range
    newIndex = Math.max(0, Math.min(newIndex, items.length - cardsPerView));

    slideTo(newIndex);
  };

  const maxDragOffset = -(items.length - cardsPerView) * cardWidth;

  return (
    <section className="bg-foreground py-10 md:pr-16 overflow-hidden mt-20">
      <div className="relative max-w-7xl mx-auto px-6 md:px-0">
        {/* Title + Controls */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 md:mb-10">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight md:pl-[70px] max-w-[500px]">
            {title}
          </h2>

          <div className="flex gap-3 mt-6 md:mt-0 md:absolute md:top-3 md:right-2">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 md:w-[55] md:h-[55] rounded-full border border-[#7B7B7B] text-[#7B7B7B] text-3xl flex items-center justify-center transition-colors hover:border-white hover:text-white disabled:opacity-40 disabled:hover:border-[#7B7B7B] disabled:hover:text-[#7B7B7B] focus:outline-none"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              disabled={currentIndex >= items.length - cardsPerView}
              className="w-12 h-12 md:w-[55] md:h-[55] rounded-full border border-[#7B7B7B] text-[#7B7B7B] text-3xl flex items-center justify-center transition-colors hover:border-white hover:text-white disabled:opacity-40 disabled:hover:border-[#7B7B7B] disabled:hover:text-[#7B7B7B] focus:outline-none"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div
          ref={containerRef}
          className="overflow-hidden pb-6 md:ml-16"
        >
          <motion.div
            ref={scope}
            drag="x"
            dragConstraints={{ right: 0, left: maxDragOffset }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            style={{ x }}
            className="flex gap-5 cursor-grab active:cursor-grabbing"
          >
            {items.map((item, index) => (
              <div
                key={index}
                className={`
                  ai-card shrink-0 snap-center
                  w-[calc(100%-20px)]                      /* mobile: ~full width */
                  md:w-[calc((100%-40px)/2)]               /* tablet: 2 cards + gap */
                  lg:w-[calc((100%-70px)/4)]               /* desktop: 4 cards + gaps */
                  min-w-0
                  bg-accent/20 text-accent p-5 md:p-6
                  border-l-4 border-transparent hover:border-white/20
                  transition-all duration-300 hover:shadow-xl min-h-96
                  flex flex-col
                `}
              >
                <h4 className="text-lg md:text-xl font-medium leading-tight mb-15 min-h-[60]">
                  {item.title}
                </h4>
                <p className="text-[#D8D8D8] text-sm md:text-[15px] leading-relaxed opacity-85 group-hover:opacity-100 transition-all duration-400">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}