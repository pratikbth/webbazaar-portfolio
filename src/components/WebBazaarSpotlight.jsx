import React from 'react';
import { Bot, Globe, Settings, Smartphone, MessageSquareCode, ArrowUpRight } from 'lucide-react';
import pratikImg from '../assets/pratik.webp';
import piyushImg from '../assets/piyush.webp';

export default function WebBazaarSpotlight() {
  const services = [
    {
      icon: <Globe className="w-6 h-6 text-webbazaar-saffron" />,
      title: "Bespoke Web Solutions",
      desc: "High-performance, modern, and localized web portals designed to bring Indian businesses online."
    },
    {
      icon: <Settings className="w-6 h-6 text-webbazaar-emerald" />,
      title: "Tailored CRM Systems",
      desc: "Custom pipeline trackers, lead systems, and business tools to clean and accelerate client workflows."
    },
    {
      icon: <Bot className="w-6 h-6 text-indigo-400" />,
      title: "WhatsApp AI Chatbots",
      desc: "Connect directly with users on India's most popular messaging app using automated, smart Gemini-powered helpers."
    },
    {
      icon: <MessageSquareCode className="w-6 h-6 text-rose-400" />,
      title: "Agentic Automation",
      desc: "Replacing repetitive manual data entry, PDF exports, and notification schedules with intelligent script engines."
    }
  ];

  return (
    <section id="webbazaar" className="py-32 px-6 md:px-16 lg:px-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Saffron & Green Accent Lights */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-webbazaar-saffron/10 blur-[130px] animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-webbazaar-emerald/10 blur-[130px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Asymmetric Header */}
        <div className="text-left mb-24 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-webbazaar-saffron text-sm font-semibold mb-6 uppercase tracking-wider">
            <span>Featured Agency Spotlight</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black font-display tracking-tight text-white mb-6">
            Web<span className="text-transparent bg-clip-text bg-gradient-to-r from-webbazaar-saffron via-webbazaar-accent to-webbazaar-emerald">Bazaar</span>
          </h2>
          
          <p className="text-xl text-slate-300 italic mb-4 font-light">
            "Built for Bharat. Designed for the World."
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-webbazaar-saffron to-webbazaar-emerald rounded-full"></div>
        </div>

        {/* Asymmetric Pitch Column + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl font-bold text-white leading-tight">
              Transforming Indian SMBs with Tech & AI Solutions
            </h3>
            <p className="text-slate-300 leading-relaxed font-light">
              WebBazaar is a specialized software agency focusing on building reliable digital infrastructure for small and medium businesses in India. We design fast websites, custom CRM pipeline managers that solve local business chaos, and WhatsApp automation platforms that capture leads and respond instantly using AI.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-200 pt-4">
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">CRM Systems</span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">WhatsApp AI Integration</span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">Business Automation</span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">Indian SMB Specialist</span>
            </div>
          </div>
          
          {/* Services in Asymmetric Offset Layout */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:-mt-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:scale-[1.03] transition-all duration-300 backdrop-blur-md"
              >
                <div className="p-3 bg-white/10 rounded-xl w-fit mb-4">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-light">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Founders with Frosted Glass Panels */}
        <div className="mt-32 pt-20 border-t border-white/10">
          <div className="text-left mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-4">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-webbazaar-saffron to-webbazaar-emerald">Founders</span>
            </h3>
            <div className="w-16 h-1.5 bg-webbazaar-saffron rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pratik */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:scale-[1.03] transition-all duration-300 backdrop-blur-xl shadow-2xl">
              <img
                src={pratikImg}
                alt="Pratik Kumar Tiwari"
                className="w-24 h-24 rounded-full object-cover border-2 border-webbazaar-saffron shrink-0"
              />
              <div className="text-center sm:text-left">
                <h4 className="text-lg font-bold text-white">Pratik Kumar Tiwari</h4>
                <div className="text-xs font-semibold text-webbazaar-saffron mb-3 uppercase tracking-wide">Founder & AI Lead</div>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  Leads AI strategy and automation — building AI-powered tools, chatbots, and intelligent systems that power WebBazaar's client solutions.
                </p>
              </div>
            </div>

            {/* Piyush */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:scale-[1.03] transition-all duration-300 backdrop-blur-xl shadow-2xl">
              <img
                src={piyushImg}
                alt="Piyush"
                className="w-24 h-24 rounded-full object-cover border-2 border-webbazaar-emerald shrink-0"
              />
              <div className="text-center sm:text-left">
                <h4 className="text-lg font-bold text-white">Piyush</h4>
                <div className="text-xs font-semibold text-webbazaar-emerald mb-3 uppercase tracking-wide">Co-Founder & Full-Stack Lead</div>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  Leads full-stack development — architecting and building the web platforms, CRMs, and applications WebBazaar delivers to clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
