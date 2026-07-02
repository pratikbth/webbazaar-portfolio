import React from 'react';
import { Award, Code2, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-portfolio" />,
      title: "Student Path",
      desc: "B.Tech CSE student at Guru Kashi University, grounding theoretical foundations in computer science."
    },
    {
      icon: <Code2 className="w-6 h-6 text-indigo-500" />,
      title: "Full Stack & AI Dev",
      desc: "Expertise in building scalable React/Vite frontends, FastAPI backends, and integrating LLMs and generative agents."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-webbazaar-saffron" />,
      title: "Entrepreneurship",
      desc: "Founder of WebBazaar, custom-engineering software infrastructure, CRMs, and automated chatbots for Bharat's SMBs."
    }
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-16 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">
        {/* Asymmetric Header */}
        <div className="mb-20 text-left">
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-slate-950 dark:text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio to-rose-500">Me</span>
          </h2>
          <div className="w-16 h-1.5 bg-portfolio rounded-full"></div>
        </div>

        {/* Asymmetric Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-8">
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Bridging Academic Learning with Enterprise-Ready AI Solutions
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base font-light">
              I am a passionate AI Engineer, Full-Stack Developer, and the founder of <strong>WebBazaar</strong>. My journey blends academic rigor at university with fast-paced real-world shipping. From developing advanced event visualizers during my internship at <strong>LoversAI</strong> to building production-grade agency CRM systems, I love turning complex workflows into sleek, automated systems.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base font-light">
              My engineering approach is local-first, agent-driven, and client-centric. I specialize in designing systems that help small-to-medium businesses scale via automated WhatsApp bots, tailored digital studios, and robust data management.
            </p>
          </div>

          {/* Offset Asymmetric Cards */}
          <div className="lg:col-span-5 space-y-6 lg:-mt-10">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5 p-6 rounded-2xl glass-panel glass-panel-hover"
              >
                <div className="p-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-white/20 dark:border-white/5 shrink-0 shadow-inner">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{card.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
