import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineering Intern",
      company: "LoversAI",
      period: "Internship (2025 - 2026)",
      desc: "Developed luxury design studios for properties like Taj and Fairmont. Programmed FastAPI PDF/PPT exporters, Motor-MongoDB integrations, and visual-edits canvas features.",
      id: "LOG_ITEM_01"
    },
    {
      role: "Founder & Lead Developer",
      company: "WebBazaar",
      period: "2024 - Present",
      desc: "Founded and engineered tech solutions for Indian SMBs. Built custom lead pipelines, WhatsApp chatbots, and automated workflows, focusing on highly localized web tools.",
      id: "LOG_ITEM_02"
    },
    {
      role: "Microsoft Student Ambassador",
      company: "Microsoft",
      period: "Academic Ambassador Role",
      desc: "Evangelized cloud services, organized workshops on React and full-stack engineering, and supported university hackathons.",
      id: "LOG_ITEM_03"
    },
    {
      role: "Campus Partner",
      company: "Perplexity AI",
      period: "Campus Ambassador Role",
      desc: "Led campus research initiatives, demoed AI-powered searching paradigms, and coordinated student developer communities.",
      id: "LOG_ITEM_04"
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 md:px-16 lg:px-24 bg-[#131313] text-white relative">
      <div className="max-w-4xl mx-auto font-mono text-xs">
        
        {/* Asymmetric Header */}
        <div className="mb-24 text-left">
          <div className="text-[10px] text-[#00f2fe] mb-2">// EXP_TIMELINE</div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4 font-sans">
            Work <span className="text-gradient-cyan-magenta">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-[#00f2fe]"></div>
        </div>

        {/* Timeline Offset Layout */}
        <div className="relative border-l border-white/5 ml-4 md:ml-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-14 last:mb-0 relative pl-8 md:pl-12">
              {/* Bullet Node with custom color and ring */}
              <div className="absolute -left-[6px] top-1.5 p-0.5 rounded-full bg-[#131313] border border-[#00f2fe]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00f2fe]"></div>
              </div>

              {/* Offset glassmorphic card */}
              <div className="p-6 rounded-xl glass-void border border-white/5 hover:border-[#00f2fe]/20 hover:scale-[1.01] transition-all duration-300">
                <div className="absolute top-2 right-3 text-[8px] text-slate-600">
                  {exp.id}
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-lg font-extrabold text-white mb-1 font-sans tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-semibold text-[#00f2fe]">// {exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="leading-relaxed font-light text-slate-400">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
