export default function Features() {
  const features = [
    {
      icon: "groups",
      title: "Powerful Networking",
      description: (
        <>
          Connect with a <span className="text-primary font-bold">diverse group</span> of <span className="text-primary font-bold">high-achieving women</span>, from <span className="text-primary font-bold">industry leaders</span> to <span className="text-primary font-bold">rising stars</span>. Build <span className="text-primary font-bold">relationships that matter</span>.
        </>
      ),
      colorClass: "bg-vibrant-teal/20 text-vibrant-teal",
    },
    {
      icon: "lightbulb",
      title: "Collaboration & Growth",
      description: (
        <>
          Find <span className="text-primary font-bold">co-founders</span>, <span className="text-primary font-bold">business partners</span>, or <span className="text-primary font-bold">collaborators</span> for your next big project. Spark <span className="text-primary font-bold">innovation</span> through <span className="text-primary font-bold">shared ambition</span>.
        </>
      ),
      colorClass: "bg-electric-purple/20 text-electric-purple",
    },
    {
      icon: "shield",
      title: "Support & Safe Space",
      description: (
        <>
          Share your <span className="text-primary font-bold">challenges</span> and <span className="text-primary font-bold">triumphs</span> in a <span className="text-primary font-bold">confidential</span>, <span className="text-primary font-bold">supportive environment</span> where you can be your <span className="text-primary font-bold">authentic self</span>.
        </>
      ),
      colorClass: "bg-yellow-500/20 text-yellow-500",
    },
    {
      icon: "star",
      title: "Exclusive Resources & Events",
      description: (
        <>
          Gain access to <span className="text-primary font-bold">members-only workshops</span>, <span className="text-primary font-bold">masterclasses</span>, <span className="text-primary font-bold">mentorship programs</span>, and a library of tools to <span className="text-primary font-bold">accelerate your success</span>.
        </>
      ),
      colorClass: "bg-amber-700/20 text-amber-700",
    },
  ];

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 text-center animate-fade-in-up px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
          What You'll Access Inside the <span className="text-primary">Community</span>
        </h2>
        <p className="text-base sm:text-lg text-yellow-500 max-w-3xl mx-auto font-medium">
          A curated ecosystem designed for your growth, connection, and success.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-xl border border-border-dark bg-card-dark p-6 hover:border-primary/50 hover:scale-105 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className={`flex items-center justify-center size-10 sm:size-12 rounded-full ${feature.colorClass} transition-transform duration-300 hover:rotate-12 flex-shrink-0`}>
                <span className="material-symbols-outlined text-2xl sm:text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-yellow-500">{feature.title}</h3>
            </div>
            <p className="text-sm sm:text-base text-white/70 font-normal">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
