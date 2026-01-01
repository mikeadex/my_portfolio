'use client';

import { useState, useEffect } from 'react';
import { Home, FolderOpen, GraduationCap, Wrench, Edit3, Mail } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'tools', icon: Wrench, label: 'Tools' },
    { id: 'thoughts', icon: Edit3, label: 'Thoughts' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'education', 'tools', 'thoughts', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = window.scrollY + rect.top;
          
          if (scrollPosition >= offsetTop) {
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a] py-4 px-4 border-b border-gray-800">
      <div 
        className="max-w-7xl mx-auto flex items-center justify-center gap-2 px-4 py-3 rounded-full backdrop-blur-xl border border-gray-700/50 shadow-2xl"
        style={{
          backgroundColor: 'rgba(10, 10, 10, 0.95)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 48px rgba(239, 35, 60, 0.1)'
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative group p-3 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: isActive ? '#ef233c' : 'transparent',
                color: isActive ? '#ffffff' : '#9ca3af'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'rgba(239, 35, 60, 0.1)';
                  e.currentTarget.style.color = '#ef233c';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#9ca3af';
                }
              }}
              aria-label={item.label}
            >
              <Icon size={20} />
              
              {/* Tooltip */}
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium text-white bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
