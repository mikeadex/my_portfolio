import Hero, { HeroContent } from '@/components/Hero';
import ContractReady from '@/components/ContractReady';
import Projects from '@/components/Projects';
import Thoughts from '@/components/Thoughts';
import Education from '@/components/Education';
import Tools from '@/components/Tools';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import LoadingAnimation from '@/components/LoadingAnimation';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Michael Adeleye',
    url: 'https://mikeadeleye.dev',
    image: 'https://mikeadeleye.dev/profile.jpg',
    jobTitle: 'Full-Stack Software Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Creative Mike Studios',
    },
    sameAs: [
      'https://github.com/mikeadeleye',
      'https://linkedin.com/in/mikeadeleye',
      'https://twitter.com/mikeadeleye',
    ],
    knowsAbout: [
      'Web Development',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'JavaScript',
      'Full-Stack Development',
      'UI/UX Design',
      'Cloud Computing',
    ],
    description: 'Full-stack software developer specializing in modern web applications with expertise in React, Next.js, TypeScript, and Node.js.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LoadingAnimation />
      <div className="min-h-screen bg-[#0a0a0a]">
        <Navbar />
        <main id="home" className="px-4 sm:px-6 lg:px-12 pt-8 sm:pt-12 lg:pt-16">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
          <Hero />
          <div className="space-y-12 w-full lg:flex-1">
            <HeroContent />
            <ContractReady />
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
