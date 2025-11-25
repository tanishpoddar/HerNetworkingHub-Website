'use client';

import { useState, useEffect } from 'react';

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleScroll = () => {
      setIsScrolling(true);
      
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      const timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
      
      setScrollTimeout(timeout);
      toggleVisibility();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-4 sm:right-8 z-40 p-2.5 sm:p-3 bg-gradient-to-r from-primary/30 via-primary/40 to-primary/30 backdrop-blur-xl border border-primary/60 rounded-full transition-all duration-100 ${
        isVisible ? (isScrolling ? 'opacity-50 translate-y-0' : 'opacity-100 translate-y-0') : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Go to top"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white sm:w-5 sm:h-5"
      >
        <path
          d="M12 4L4 12L5.41 13.41L11 7.83V20H13V7.83L18.59 13.41L20 12L12 4Z"
          fill="currentColor"
          strokeWidth="2"
          stroke="currentColor"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
