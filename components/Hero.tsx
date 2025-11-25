export default function Hero() {
  return (
    <section className="grid grid-cols-1 gap-8 items-center py-8">
      <div className="flex flex-col gap-6 text-center items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight animate-fade-in-up px-4">
          Ambitious Women<br />
          Deserve <span className="text-primary">Powerful Networks</span>
        </h1>
        
        {/* Decorative fading line after heading */}
        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
        
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
            
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              If You're Ready to Network With Purpose, Elevate Your Business & Grow With a Community Of <span className="text-primary font-semibold">Powerhouse Women</span>, This Is Your Sign To Join Us!
            </p>
          </div>
        </div>
        
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mt-2 animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
          Let's Rise Together.
        </p>
      </div>
    </section>
  );
}
