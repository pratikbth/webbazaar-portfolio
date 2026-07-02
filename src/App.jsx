import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import About from './components/About';
import WebBazaarSpotlight from './components/WebBazaarSpotlight';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Terminal, Globe } from 'lucide-react';

export default function App() {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'WebBazaar', href: '#webbazaar' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen font-sans antialiased text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Navbar Header */}
      <header className="sticky top-0 z-50 w-full bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-display font-extrabold text-xl tracking-tight text-slate-950 dark:text-white">
            <Terminal className="w-5 h-5 text-portfolio" />
            <span>WebBazaar</span>
          </a>

          {/* Nav links (hidden on mobile, can tap target directly) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-slate-600 dark:text-slate-400 hover:text-portfolio dark:hover:text-portfolio transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* WebBazaar Featured Spotlight */}
      <WebBazaarSpotlight />

      {/* Projects */}
      <Projects />

      {/* Skills */}
      <Skills />

      {/* Experience */}
      <Experience />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-900 bg-slate-100 dark:bg-slate-950/20 text-center">
        <div className="max-w-5xl mx-auto px-4 text-sm text-slate-500 dark:text-slate-400 space-y-4">
          <p>© {new Date().getFullYear()} Pratik Kumar Tiwari. All rights reserved.</p>
          <div className="flex items-center justify-center gap-1.5 text-xs">
            <span>Powered by</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-webbazaar-accent to-webbazaar-saffron">WebBazaar</span>
            <span>&</span>
            <span className="font-bold text-portfolio">React + Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
