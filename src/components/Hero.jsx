import React from 'react';
import { ArrowUpRight, MessageSquare, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden py-36 px-6 md:px-16 lg:px-24 bg-slate-950">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Navy/slate base */}
        <div className="absolute inset-0 bg-[#020108]"></div>
        
        {/* Animated colored blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-900/30 blur-[130px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-violet-900/30 blur-[150px] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-webbazaar-accent/15 blur-[120px] animate-pulse-slow" style={{ animationDelay: '5s' }}></div>

        {/* Subtle Grain SVG Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-start text-left">
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-webbazaar-saffron text-sm font-semibold mb-8 shadow-md">
          <Terminal className="w-4 h-4 text-webbazaar-saffron" />
          <span>Web, AI & Automation for Indian Businesses</span>
        </div>

        {/* Oversized Type Treatment Title: WebBazaar */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black font-display tracking-tight text-white leading-[0.9] mb-4">
          Web<span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio via-fuchsia-500 to-rose-500">Bazaar</span>
        </h1>

        {/* Subheadline: Built by Pratik & Piyush */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-300 mb-8 tracking-tight max-w-4xl">
          Built by <span className="text-webbazaar-saffron">Pratik (AI)</span> & <span className="text-webbazaar-emerald">Piyush (Full-Stack)</span>
        </h2>

        {/* Reframed body copy */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
          Engineering custom automation scripts, pipeline CRMs, and generative AI agents that help Indian SMBs scale on WhatsApp and the web.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="px-8 py-4.5 rounded-2xl bg-gradient-to-r from-webbazaar-accent to-webbazaar-saffron text-white font-bold hover:shadow-xl hover:shadow-webbazaar-accent/25 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Explore Our Work</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4.5 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 font-bold hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <MessageSquare className="w-5 h-5 text-portfolio" />
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </section>
  );
}
