import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import WebBazaarSpotlight from './components/WebBazaarSpotlight';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Terminal } from 'lucide-react';

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
    <div className="min-h-screen font-sans antialiased bg-[#131313] text-slate-100 selection:bg-[#00f2fe]/20 selection:text-[#00f2fe]">
      {/* Navbar Header */}
      <header className="sticky top-0 z-50 w-full bg-[#131313]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-mono font-extrabold text-lg tracking-tight text-white group">
            <Terminal className="w-4 h-4 text-[#00f2fe] group-hover:rotate-6 transition-transform" />
            <span>WebBazaar</span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-slate-400 hover:text-[#00f2fe] transition-colors duration-150"
              >
                // {link.name.toUpperCase()}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
            SYS_ONLINE
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <WebBazaarSpotlight />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-12 bg-[#131313] border-t border-white/5 text-center font-mono text-[10px] text-slate-650">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} WebBazaar Void-Protocol. All Rights Reserved.</p>
          <p className="mt-2 text-slate-600">// LATENCY: 12ms | STABILITY: 100%</p>
        </div>
      </footer>
    </div>
  );
}
