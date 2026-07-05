import React from 'react';
import { Cpu, Globe, Workflow, PenTool, Database } from 'lucide-react';

export default function Skills() {
  const skillGroups = [
    {
      title: "AI / ML",
      icon: <Cpu className="w-4 h-4 text-[#00f2fe]" />,
      skills: ["Google Gemini Live API", "FLUX & Stable Diffusion APIs", "LLM Fine-Tuning & RAG", "LangChain & Agent Swarms", "Hugging Face"],
      id: "PILL_AI_ML"
    },
    {
      title: "Web Dev",
      icon: <Globe className="w-4 h-4 text-[#743ad5]" />,
      skills: ["React (v18 & v19)", "Vite & CRACO", "Tailwind CSS", "Next.js", "Radix UI Primitives", "HTML5 & CSS3"],
      id: "PILL_WEB_DEV"
    },
    {
      title: "Full Stack Developer",
      icon: <Database className="w-4 h-4 text-[#00f2fe]" />,
      skills: ["FastAPI (Python)", "Node.js & Express", "MongoDB & Motor", "Supabase Client", "REST APIs", "SQL / NoSQL"],
      id: "PILL_FULL_STACK"
    },
    {
      title: "Automation",
      icon: <Workflow className="w-4 h-4 text-[#743ad5]" />,
      skills: ["WhatsApp AI Chatbots", "Python script systems", "Automated PDF/PPT Exporters", "Cron Jobs", "Workflow Pipelines"],
      id: "PILL_AUTOMATION"
    },
    {
      title: "Tools & DevOps",
      icon: <PenTool className="w-4 h-4 text-[#00f2fe]" />,
      skills: ["Git & GitHub Desktop", "CLI Heartbeat / Agent tools", "Docker & Railway", "Vercel", "npm / pip / poetry"],
      id: "PILL_DEV_OPS"
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 md:px-16 lg:px-24 bg-[#131313] text-white relative">
      <div className="max-w-6xl mx-auto font-mono text-xs">
        {/* Asymmetric Header */}
        <div className="mb-20 text-left">
          <div className="text-[10px] text-[#00f2fe] mb-2">// TECHNICAL_CAPABILITIES</div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4 font-sans">
            Skills & <span className="text-gradient-cyan-magenta">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-[#00f2fe] mb-6"></div>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            A sandbox of APIs, languages, frameworks, and deployment automation platforms configured for production load.
          </p>
        </div>

        {/* Asymmetric Grid Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl glass-void border border-white/5 hover:border-[#00f2fe]/30 hover:scale-[1.01] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-2 right-3 text-[8px] text-slate-600">
                {group.id}
              </div>

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="p-2 rounded bg-white/5 border border-white/10 text-[#00f2fe]">
                  {group.icon}
                </div>
                <h3 className="font-extrabold text-sm text-white tracking-tight font-sans">{group.title}</h3>
              </div>

              <ul className="space-y-2">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-slate-400">
                    <span className="h-1 w-1 rounded-full bg-[#00f2fe]"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
