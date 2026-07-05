import React from 'react';
import { Code2, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <GraduationCap className="w-5 h-5 text-[#00f2fe]" />,
      title: "Student Path",
      desc: "B.Tech CSE student at Guru Kashi University, grounding theoretical foundations in computer science."
    },
    {
      icon: <Code2 className="w-5 h-5 text-[#743ad5]" />,
      title: "Full Stack & AI Dev",
      desc: "Expertise in building scalable React/Vite frontends, FastAPI backends, and integrating LLMs and generative agents."
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#00f2fe]" />,
      title: "Entrepreneurship",
      desc: "Founder of WebBazaar, custom-engineering software infrastructure, CRMs, and automated chatbots for Bharat's SMBs."
    }
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-16 lg:px-24 bg-[#131313] text-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Asymmetric Header */}
        <div className="mb-20 text-left">
          <div className="font-mono text-[10px] text-[#00f2fe] mb-2">// INTRO_NODE</div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            About <span className="text-gradient-cyan-magenta">Me</span>
          </h2>
          <div className="w-16 h-1 bg-[#00f2fe]"></div>
        </div>

        {/* Asymmetric Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start font-mono">
          <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-8 text-sm text-slate-400">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-sans tracking-tight">
              Bridging Academic Learning with Enterprise-Ready AI Solutions
            </h3>
            <p className="leading-relaxed font-light">
              I am a passionate AI Engineer, Full-Stack Developer, and the founder of <strong>WebBazaar</strong>. My journey blends academic rigor at university with fast-paced real-world shipping. From developing advanced event visualizers during my internship at <strong>LoversAI</strong> to building production-grade agency CRM systems, I love turning complex workflows into sleek, automated systems.
            </p>
            <p className="leading-relaxed font-light">
              My engineering approach is local-first, agent-driven, and client-centric. I specialize in designing systems that help small-to-medium businesses scale via automated WhatsApp bots, tailored digital studios, and robust data management.
            </p>
          </div>

          {/* Offset Asymmetric Cards */}
          <div className="lg:col-span-5 space-y-6 lg:-mt-10">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5 p-6 rounded-xl glass-void border border-white/5 hover:border-[#00f2fe]/20 hover:scale-[1.01] transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-white mb-2 tracking-tight font-sans">{card.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light font-mono">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
