import Hero, { HeroContent } from '@/components/Hero';
import Projects from '@/components/Projects';
import Thoughts from '@/components/Thoughts';
import Education from '@/components/Education';
import Tools from '@/components/Tools';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import LoadingAnimation from '@/components/LoadingAnimation';

export default function Home() {
  return (
    <>
      <LoadingAnimation />
      <div className="min-h-screen bg-[#0a0a0a]">
        <Navbar />
        <main id="home" className="px-4 sm:px-6 lg:px-12 pt-8 sm:pt-12 lg:pt-16">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
          <Hero />
          <div className="space-y-12 w-full lg:flex-1">
            <HeroContent />
            <Projects />
            <Education />
            <Tools />
            <Thoughts />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
}
