import React from 'react';
import { ArrowUpRight, MessageSquare, Terminal } from 'lucide-react';
import LiquidShader from './LiquidShader';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden py-36 px-6 md:px-16 lg:px-24 bg-[#131313]">
      {/* WebGL Fragment Shader Liquid Background */}
      <LiquidShader />

      {/* Subtle Scanline Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]"></div>

      <div className="relative z-20 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Main Content */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-portfolio/10 border border-portfolio/20 text-[#00f2fe] text-xs font-mono tracking-widest uppercase mb-8 shadow-inner">
            <Terminal className="w-3.5 h-3.5 text-[#00f2fe]" />
            <span>Web, AI & Automation for Indian Businesses</span>
          </div>

          {/* Title */}
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white leading-[0.85] mb-6">
            Web<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#743ad5]">Bazaar</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-300 mb-8 font-mono tracking-tight">
            Built by <span className="text-[#00f2fe]">&lt;Pratik (AI Engineer) /&gt;</span>
          </h2>

          {/* Body */}
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mb-10 leading-relaxed font-light font-mono">
            Engineering custom automation scripts, pipeline CRMs, and generative AI agents that help Indian SMBs scale on WhatsApp and the web.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#743ad5] text-slate-950 font-bold hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-[#00f2fe] hover:bg-white/10 font-bold hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <MessageSquare className="w-4 h-4 text-[#00f2fe]" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

        {/* HUD Readout Panel (Asymmetric Right Side) */}
        <div className="lg:col-span-4 hidden lg:block">
          <div className="glass-void p-6 rounded-2xl border border-white/5 text-left space-y-4 font-mono text-[11px] text-slate-400 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-[1px] bg-gradient-to-l from-[#00f2fe] to-transparent"></div>
            
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-[#00f2fe] font-bold">VOID_PROTOCOL: v1.0.9</span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>SYSTEM_STATUS</span>
                <span className="text-white">ONLINE</span>
              </div>
              <div className="flex justify-between">
                <span>NETWORK_LATENCY</span>
                <span className="text-[#00f2fe]">12ms</span>
              </div>
              <div className="flex justify-between">
                <span>LOC_COORDS</span>
                <span className="text-white">20.5937° N, 78.9629° E</span>
              </div>
              <div className="flex justify-between">
                <span>ENCRYPTION</span>
                <span className="text-[#743ad5]">AES-256 ACTIVE</span>
              </div>
              <div className="flex justify-between">
                <span>CORE_STABILITY</span>
                <span className="text-emerald-400">99.98%</span>
              </div>
            </div>

            <div className="border-t border-white/5 pt-3 text-[9px] text-slate-500 space-y-1">
              <div>// BUILD_HASH: 0x8a9bf2e3dc</div>
              <div>// SYSTEM LOAD: 4.8%</div>
              <div>// BAZAAR INSTANCE: DETECTED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
