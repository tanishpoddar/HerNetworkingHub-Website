import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TargetAudience from "@/components/TargetAudience";
import WaitlistForm from "@/components/WaitlistForm";
import GoToTop from "@/components/GoToTop";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="relative w-full flex flex-col items-center overflow-hidden pt-16 sm:pt-20 flex-1">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col gap-12 sm:gap-20 md:gap-24 lg:gap-32 overflow-hidden">
          <Hero />
          <ScrollReveal delay={100}>
            <Features />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <TargetAudience />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <WaitlistForm />
          </ScrollReveal>
        </div>
      </main>
      <GoToTop />
      <Footer />
    </div>
  );
}
