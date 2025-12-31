import Hero, { HeroContent } from '@/components/Hero';
import Projects from '@/components/Projects';
import Thoughts from '@/components/Thoughts';
import Education from '@/components/Education';
import Tools from '@/components/Tools';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <main className="px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 lg:pt-20">
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
  );
}
