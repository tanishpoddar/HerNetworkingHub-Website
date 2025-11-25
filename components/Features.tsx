export default function Features() {
  const features = [
    {
      icon: "groups",
      title: "Powerful Networking",
      description:
        "Connect with a diverse group of high-achieving women, from industry leaders to rising stars. Build relationships that matter.",
      colorClass: "bg-primary/20 text-primary",
    },
    {
      icon: "lightbulb",
      title: "Collaboration & Growth",
      description:
        "Find co-founders, business partners, or collaborators for your next big project. Spark innovation through shared ambition.",
      colorClass: "bg-electric-purple/20 text-electric-purple",
    },
    {
      icon: "shield",
      title: "Support & Safe Space",
      description:
        "Share your challenges and triumphs in a confidential, supportive environment where you can be your authentic self.",
      colorClass: "bg-vibrant-teal/20 text-vibrant-teal",
    },
    {
      icon: "star",
      title: "Exclusive Resources & Events",
      description:
        "Gain access to members-only workshops, masterclasses, mentorship programs, and a library of tools to accelerate your success.",
      colorClass: "bg-soft-pink/20 text-soft-pink",
    },
  ];

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 text-center animate-fade-in-up px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
          What You'll Access Inside the <span className="text-primary">Community</span>
        </h2>
        <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto">
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
              <h3 className="text-lg sm:text-xl font-bold text-white">{feature.title}</h3>
            </div>
            <p className="text-sm sm:text-base text-white/70">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
