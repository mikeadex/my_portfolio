export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12 border-t border-gray-900">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-12">
        <div className="hidden lg:block w-[400px] flex-shrink-0"></div>
        <div className="flex-1 min-w-0 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-600">
          © {currentYear} Michael Adeleye
        </p>
        
        <a 
          href="https://www.heylokal.com/directory?utm_source=badge&utm_medium=referral&utm_campaign=owner_badge" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="As seen on heyLOKAL – Your Business"
          className="transition-opacity hover:opacity-80"
        >
          <img 
            src="https://www.heylokal.com/badges/seen-on-heylokal.svg" 
            alt="As seen on heyLOKAL" 
            width="220" 
            height="48"
            loading="lazy"
          />
        </a>
        
        <p className="text-xs text-gray-600">
          Built with Next.js
        </p>
        </div>
      </div>
    </footer>
  );
}
