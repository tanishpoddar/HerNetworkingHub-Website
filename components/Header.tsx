export default function Header() {
  return (
    <header className="w-full px-3 sm:px-6 lg:px-8 py-3 sm:py-4 md:py-5 sticky top-0 z-50 bg-background-dark/95 backdrop-blur-lg border-b border-border-dark/50 animate-slide-down shadow-lg shadow-black/10">
      <div className="flex items-center justify-center overflow-hidden">
        <h2 className="text-white text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
          <span className="font-bold">HerNetworkingHub</span> <span className="text-white/50">|</span> <span className="text-primary font-normal">Network • Grow • Succeed</span>
        </h2>
      </div>
    </header>
  );
}
