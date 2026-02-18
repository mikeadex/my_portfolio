import { Download, Calendar, Mail } from 'lucide-react';

export default function ContractReady() {
  return (
    <section className="pt-8 sm:pt-12 pb-8 sm:pb-12">
      <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-700">
        <div className="mb-6">
          <div className="inline-block px-3 py-1 bg-[#ef233c] text-white text-xs font-bold rounded-full mb-4">
            AVAILABLE FOR REMOTE CONTRACTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 font-[family-name:var(--font-poppins)]">
            Contract-Ready Developer
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            Open to remote contracts (UK-based). Specialising in Django/PostgreSQL backends, Next.js/React frontends, 
            WordPress rebuilds, and conversion-focused delivery with tracking, SEO, and measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">Focus Areas</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Django + PostgreSQL builds</li>
              <li>• Next.js/React frontends</li>
              <li>• WordPress delivery</li>
              <li>• Tracking + CRO</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">Engagement Types</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• 3–6 month contracts</li>
              <li>• Project sprints</li>
              <li>• Retainers</li>
              <li>• Fixed-price projects</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">Location & Status</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• UK-based (remote)</li>
              <li>• Available immediately</li>
              <li>• Right to work: UK</li>
              <li>• IR35: Outside preferred</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ef233c] text-white font-bold rounded-xl hover:bg-[#d41f35] transition-all duration-300 hover:scale-[1.02]"
          >
            View Case Studies
          </a>
          
          <a
            href="/cv/michael-adeleye-cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all duration-300 hover:scale-[1.02]"
          >
            <Download size={18} />
            Download CV
          </a>
          
          <a
            href="https://calendly.com/mikeadeleye"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all duration-300 hover:scale-[1.02]"
          >
            <Calendar size={18} />
            Book a Call
          </a>

          <a
            href="mailto:support@creativemikestudios.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all duration-300 hover:scale-[1.02]"
          >
            <Mail size={18} />
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
