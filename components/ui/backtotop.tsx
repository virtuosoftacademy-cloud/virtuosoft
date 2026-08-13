'use client'
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react'; // ← or use heroicons / font-awesome / your own SVG


export default function BackToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px (you can change this value)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Cleanup
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-6 right-6 z-50
            flex h-12 w-12 items-center justify-center
            rounded-full bg-gray-800 text-white
            shadow-lg transition-all hover:bg-gray-700
            focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
            active:scale-95
          `}
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
}