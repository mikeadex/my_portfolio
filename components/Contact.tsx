import { personalInfo } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xs tracking-[0.3em] text-gray-600 dark:text-gray-400 uppercase font-medium mb-8">
          LET'S WORK TOGETHER
        </h2>
        
        <a 
          href={`mailto:${personalInfo.email}`}
          className="inline-block text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
        >
          Get in touch →
        </a>
      </div>
    </section>
  );
}
