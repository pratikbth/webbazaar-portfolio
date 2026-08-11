import React from 'react';
import { Bot, Globe, Settings, Smartphone, MessageSquareCode, ShieldAlert } from 'lucide-react';
import pratikImg from '../assets/pratik.webp';
import piyushImg from '../assets/piyush.webp';

export default function WebBazaarSpotlight() {
  const services = [
    {
      icon: <Globe className="w-5 h-5 text-[#00f2fe]" />,
      title: "Bespoke Web Solutions",
      desc: "High-performance, modern, and localized web portals designed to bring Indian businesses online.",
      pillar: "TECH_PILLAR_01"
    },
    {
      icon: <Settings className="w-5 h-5 text-[#743ad5]" />,
      title: "Tailored CRM Systems",
      desc: "Custom pipeline trackers, lead systems, and business tools to clean and accelerate client workflows.",
      pillar: "STRATEGY_PILLAR_02"
    },
    {
      icon: <Bot className="w-5 h-5 text-[#00f2fe]" />,
      title: "WhatsApp AI Chatbots",
      desc: "Connect directly with users on India's most popular messaging app using automated, smart Gemini-powered helpers.",
      pillar: "CREATIVE_PILLAR_03"
    },
    {
      icon: <MessageSquareCode className="w-5 h-5 text-[#743ad5]" />,
      title: "Agentic Automation",
      desc: "Replacing repetitive manual data entry, PDF exports, and notification schedules with intelligent script engines.",
      pillar: "AUTOMATION_PILLAR_04"
    }
  ];

  return (
    <section id="webbazaar" className="py-32 px-6 md:px-16 lg:px-24 bg-[#131313] text-white relative overflow-hidden">
      {/* Cyan & Magenta background mesh lights */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#00f2fe]/10 blur-[150px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#743ad5]/10 blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Asymmetric Header */}
        <div className="text-left mb-24 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[#00f2fe] text-xs font-mono tracking-widest uppercase mb-6">
            <span>// FEATURED_AGENCY_SPOTLIGHT</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6">
            Web<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#743ad5]">Bazaar</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-[#00f2fe] font-mono mb-4 tracking-tighter">
            "Digital experiences that defy the template."
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f2fe] to-[#743ad5]"></div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 space-y-6">
            <div className="font-mono text-[10px] text-slate-500">// BRAND_MISSION_STATEMENT</div>
            <h3 className="text-3xl font-extrabold text-white leading-tight font-sans tracking-tight">
              Transforming Indian SMBs with Void-Protocol Tech & AI
            </h3>
            <p className="text-slate-400 leading-relaxed font-light font-mono text-sm">
              WebBazaar is a specialized software agency focusing on building reliable digital infrastructure for small and medium businesses in India. We design fast websites, custom CRM pipeline managers that solve local business chaos, and WhatsApp automation platforms that capture leads and respond instantly using AI.
            </p>
            <div className="flex flex-wrap gap-2.5 text-[10px] font-mono text-[#00f2fe] pt-4">
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded">SYSTEM_CRM: ACTIVE</span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded">WA_CHATBOTS: MULTI_AGENT</span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded">AUTO_ENGINES: DEPLOYED</span>
            </div>
          </div>
          
          {/* Services in Asymmetric Offset Layout */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:-mt-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl glass-void border border-white/5 hover:border-[#00f2fe]/30 hover:scale-[1.02] transition-all duration-300 relative group"
              >
                <div className="absolute top-4 right-4 text-[9px] font-mono text-slate-600 group-hover:text-[#00f2fe] transition-colors duration-200">
                  {service.pillar}
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg w-fit mb-4">
                  {service.icon}
                </div>
                <h4 className="text-lg font-extrabold text-white mb-2 tracking-tight">{service.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-mono">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Founders */}
        <div className="pt-20 border-t border-white/5">
          <div className="text-left mb-16">
            <div className="font-mono text-[10px] text-slate-500 mb-2">// AGENCY_ARCHITECTS</div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Meet the <span className="text-gradient-cyan-magenta">Founder</span>
            </h3>
            <div className="w-16 h-1 bg-[#00f2fe]"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Pratik */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-xl glass-void border border-white/5 hover:border-[#00f2fe]/40 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-l from-[#00f2fe] to-transparent"></div>
              <img
                src={pratikImg}
                alt="Pratik Kumar Tiwari"
                className="w-20 h-20 rounded-lg object-cover border border-[#00f2fe]/30 group-hover:border-glow-cyan transition-all duration-300 shrink-0"
              />
              <div className="text-center sm:text-left font-mono">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00f2fe] animate-pulse"></span>
                  <h4 className="text-base font-bold text-white tracking-tight">Pratik Kumar Tiwari</h4>
                </div>
                <div className="text-[10px] font-semibold text-[#00f2fe] mb-3 uppercase tracking-wider">// FOUNDER_AI_LEAD</div>
                <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                  Leads AI strategy and automation — building AI-powered tools, chatbots, and intelligent systems that power WebBazaar's client solutions.
                </p>
                <div className="mt-4 text-[9px] text-slate-600 flex gap-4">
                  <span>STABILITY: 100%</span>
                  <span>CORE: LOAD_OK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
