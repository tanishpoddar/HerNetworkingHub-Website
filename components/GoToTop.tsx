'use client';

import { useState, useEffect } from 'react';

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 p-2.5 sm:p-3 bg-gradient-to-r from-primary/30 via-primary/40 to-primary/30 backdrop-blur-xl border border-primary/60 rounded-full shadow-[0_8px_32px_0_rgba(255,0,127,0.37)] hover:shadow-[0_8px_32px_0_rgba(255,0,127,0.5)] transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Go to top"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        className="sm:w-5 sm:h-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
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
