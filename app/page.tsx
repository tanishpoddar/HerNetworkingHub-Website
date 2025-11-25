import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TargetAudience from "@/components/TargetAudience";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative w-full flex flex-col items-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col gap-12 sm:gap-20 md:gap-24 lg:gap-32">
          <Hero />
          <Features />
          <TargetAudience />
          <WaitlistForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
