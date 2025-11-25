'use client';

export default function TargetAudience() {
  const criteria = [
    "A high-achieving woman—founder, executive, creative, or expert—ready to make a significant impact in your field.",
    "Looking for an empowering network that goes beyond superficial connections to foster genuine collaboration and support.",
    "Seeking a safe, confidential space to share ideas, overcome challenges, and celebrate successes with like-minded peers.",
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
      <div className="flex flex-col gap-4 sm:gap-6 animate-fade-in-left px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">This Community is for You if You're:</h2>
        <div className="flex flex-col gap-3 sm:gap-4">
          {criteria.map((criterion, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 sm:gap-4 animate-fade-in-up hover:translate-x-2 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0 size-5 sm:size-6 mt-0.5 sm:mt-1 flex items-center justify-center rounded-full bg-primary text-background-dark animate-scale-in" style={{ animationDelay: `${index * 0.15 + 0.1}s` }}>
                <span className="material-symbols-outlined text-xs sm:text-sm">check</span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-white/90">{criterion}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-64 sm:h-80 lg:h-full min-h-[300px] rounded-xl animate-fade-in-right hover:scale-105 transition-transform duration-500 overflow-hidden">
        <img 
          src="/websiteimage.png" 
          alt="Powerhouse Women Community" 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if image doesn't exist
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #FF007F 0%, #9D4EDD 100%)';
          }}
        />
      </div>
    </section>
  );
}
