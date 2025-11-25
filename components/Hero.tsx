export default function Hero() {
  return (
    <section className="grid grid-cols-1 gap-8 items-center py-8 w-full overflow-hidden">
      <div className="flex flex-col gap-6 text-center items-center w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight animate-fade-in-up px-4 text-primary">
          HerNetworkingHub
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
          Ambitious Women Deserve Powerful Networks!
        </p>
        
        {/* Decorative fading line after heading */}
        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}></div>
        
        <div className="relative max-w-4xl w-full px-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {/* Decorative quote marks - overlapping the box */}
          <div className="absolute left-4 sm:left-6 top-2 text-2xl sm:text-3xl md:text-4xl text-primary font-bold z-10 animate-pulse">"</div>
          <div className="absolute right-4 sm:right-6 bottom-2 text-2xl sm:text-3xl md:text-4xl text-primary font-bold z-10 rotate-180 animate-pulse">"</div>
          
          <div className="flex flex-col gap-5 bg-card-dark/30 border border-border-dark/50 rounded-2xl p-6 md:p-10 backdrop-blur-sm relative hover:border-primary/30 transition-all duration-300">
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              HerNetworkingHub is a <span className="text-primary font-semibold">Global Exclusive Community</span> for Entrepreneurs, Founders, Investors, Coaches, Finance Professionals, Business Owners, Creators, Industry Leaders & Media who are ready to <span className="text-primary font-semibold">Connect, Collaborate & Create Real Impact</span>.
            </p>
            
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              We believe in <span className="text-primary font-semibold">Collaboration over Competition</span>, in lifting each other up & creating a network where <span className="text-primary font-semibold">Every Woman Feels Seen, Heard & Empowered</span>.
            </p>
          </div>
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-500 mt-2 animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
          Network • Grow • Succeed
        </p>
      </div>
    </section>
  );
}
