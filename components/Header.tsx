'use client';

import GlareHover from './GlareHover';

export default function Header() {
  const scrollToForm = () => {
    const formSection = document.getElementById('waitlist-form');
    if (formSection) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = formSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="w-full px-3 sm:px-6 lg:px-8 py-3 sm:py-4 md:py-5 fixed top-0 left-0 right-0 z-50 bg-background-dark/95 backdrop-blur-lg border-b border-border-dark/50 animate-slide-down shadow-lg shadow-black/10">
      <div className="flex items-center justify-center overflow-hidden max-w-7xl mx-auto">
        <GlareHover
          width="auto"
          height="auto"
          background="transparent"
          borderRadius="0.5rem"
          borderColor="transparent"
          glareColor="#FF007F"
          glareOpacity={0.4}
          glareAngle={-30}
          glareSize={200}
          transitionDuration={600}
          className="border-0"
        >
          <button
            onClick={scrollToForm}
            className="relative bg-gradient-to-r from-primary/30 via-primary/40 to-primary/30 hover:from-primary/40 hover:via-primary/50 hover:to-primary/40 backdrop-blur-xl border border-primary/60 text-white font-bold px-6 py-2 rounded-lg transition-all duration-300 text-sm"
          >
            Join Now
          </button>
        </GlareHover>
      </div>
    </header>
  );
}
