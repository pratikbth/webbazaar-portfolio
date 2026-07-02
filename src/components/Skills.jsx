import React from 'react';
import { Cpu, Globe, Workflow, PenTool, Database } from 'lucide-react';

export default function Skills() {
  const skillGroups = [
    {
      title: "AI / ML",
      icon: <Cpu className="w-5 h-5 text-portfolio" />,
      skills: ["Google Gemini Live API", "FLUX & Stable Diffusion APIs", "LLM Fine-Tuning & RAG", "LangChain & Agent Swarms", "Hugging Face"]
    },
    {
      title: "Web Dev",
      icon: <Globe className="w-5 h-5 text-indigo-500" />,
      skills: ["React (v18 & v19)", "Vite & CRACO", "Tailwind CSS", "Next.js", "Radix UI Primitives", "HTML5 & CSS3"]
    },
    {
      title: "Full Stack Developer",
      icon: <Database className="w-5 h-5 text-rose-500" />,
      skills: ["FastAPI (Python)", "Node.js & Express", "MongoDB & Motor", "Supabase Client", "REST APIs", "SQL / NoSQL"]
    },
    {
      title: "Automation",
      icon: <Workflow className="w-5 h-5 text-webbazaar-emerald" />,
      skills: ["WhatsApp AI Chatbots", "Python script systems", "Automated PDF/PPT Exporters", "Cron Jobs", "Workflow Pipelines"]
    },
    {
      title: "Tools & DevOps",
      icon: <PenTool className="w-5 h-5 text-amber-500" />,
      skills: ["Git & GitHub Desktop", "CLI Heartbeat / Agent tools", "Docker & Railway", "Vercel", "npm / pip / poetry"]
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 md:px-16 lg:px-24 bg-slate-100/30 dark:bg-slate-900/10 backdrop-blur-md relative">
      <div className="max-w-6xl mx-auto">
        {/* Asymmetric Header */}
        <div className="mb-20 text-left">
          <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-slate-950 dark:text-white mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio to-rose-500">Expertise</span>
          </h2>
          <div className="w-16 h-1.5 bg-portfolio rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed max-w-xl">
            A sandbox of APIs, languages, frameworks, and deployment automation platforms.
          </p>
        </div>

        {/* Asymmetric Grid Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white/20 dark:bg-slate-900/20 border border-white/20 dark:border-white/5 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-lg"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
                <div className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 shadow-inner">
                  {group.icon}
                </div>
                <h3 className="font-extrabold text-lg text-slate-950 dark:text-white">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-semibold px-3 py-2 rounded-xl bg-white/65 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/20 dark:border-slate-700/20 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
