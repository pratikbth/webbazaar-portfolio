import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineering Intern",
      company: "LoversAI",
      period: "Internship (2025 - 2026)",
      desc: "Developed luxury design studios for properties like Taj and Fairmont. Programmed FastAPI PDF/PPT exporters, Motor-MongoDB integrations, and visual-edits canvas features."
    },
    {
      role: "Founder & Lead Developer",
      company: "WebBazaar",
      period: "2024 - Present",
      desc: "Founded and engineered tech solutions for Indian SMBs. Built custom lead pipelines, WhatsApp chatbots, and automated workflows, focusing on highly localized web tools."
    },
    {
      role: "Microsoft Student Ambassador",
      company: "Microsoft",
      period: "Academic Ambassador Role",
      desc: "Evangelized cloud services, organized workshops on React and full-stack engineering, and supported university hackathons."
    },
    {
      role: "Campus Partner",
      company: "Perplexity AI",
      period: "Campus Ambassador Role",
      desc: "Led campus research initiatives, demoed AI-powered searching paradigms, and coordinated student developer communities."
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 md:px-16 lg:px-24 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Asymmetric Header */}
        <div className="mb-24 text-left">
          <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-slate-950 dark:text-white mb-4">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio to-rose-500">Experience</span>
          </h2>
          <div className="w-16 h-1.5 bg-portfolio rounded-full"></div>
        </div>

        {/* Timeline Offset Layout */}
        <div className="relative border-l-2 border-slate-300 dark:border-slate-800 ml-4 md:ml-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-14 last:mb-0 relative pl-8 md:pl-12">
              {/* Bullet Node with custom color and ring */}
              <div className="absolute -left-[12px] top-1.5 p-1 rounded-full bg-slate-50 dark:bg-slate-950 border-2 border-portfolio shadow-md">
                <div className="w-3.5 h-3.5 rounded-full bg-portfolio"></div>
              </div>

              {/* Offset glassmorphic card */}
              <div className="p-8 rounded-3xl bg-white/20 dark:bg-slate-900/20 border border-white/20 dark:border-white/5 shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 backdrop-blur-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-portfolio">{exp.company}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/50 dark:bg-slate-800/50 text-slate-650 dark:text-slate-350 border border-white/10 w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-slate-650 dark:text-slate-405 leading-relaxed font-light">
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
