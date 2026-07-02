import React, { useState } from 'react';
import { ExternalLink, Code, Sparkles, FolderGit } from 'lucide-react';

export default function Projects() {
  const projectsList = [
    {
      title: "IRIS Mini",
      desc: "An agentic CLI & desktop voice AI assistant powered by Google Gemini Live. Scaffolds files, runs filesystem commands, and automates developer workflows natively.",
      tags: ["React UI", "Node.js", "Gemini Live API", "CLI Tool"],
      github: "https://github.com/pratikbth/IRIS-Mini",
      demo: "https://irisaiw.vercel.app/",
      category: "AI & Agents"
    },
    {
      title: "Catering.AI",
      desc: "AI-powered wedding food visualization studio that uses venue photos and catering references to generate high-fidelity buffet and dessert styling previews.",
      tags: ["React", "FastAPI", "Gemini API", "Nano Banana"],
      github: "https://github.com/pratikbth/Catering-AI",
      demo: "",
      category: "AI & Agents"
    },
    {
      title: "LoversAI CRM (Wed Us CRM)",
      desc: "Event design pipeline management system featuring lead card management, automated CRM operations, task boards, and team access permissions.",
      tags: ["React 18", "Tailwind CSS", "FastAPI", "MongoDB"],
      github: "https://github.com/pratikbth/lovers-ai-crm-1",
      demo: "https://lovers-ai-crm-1.vercel.app",
      category: "Full Stack"
    },
    {
      title: "AI Engineering from Scratch",
      desc: "A collaborative curriculum and workspace containing over 260 lessons across 20 phases, moving from math to custom agentic swarms.",
      tags: ["Python", "TypeScript", "Rust", "Julia"],
      github: "https://github.com/pratikbth/ai-engineering-from-scratch",
      demo: "https://aiengineeringfromscratch.com",
      category: "Open Source"
    },
    {
      title: "LoversAI Custom Resort Studios",
      desc: "A series of customized digital studios configured for luxury hotel properties including Taj, Fairmont, Maira Resort, and Jaypee Palace.",
      tags: ["React 19", "Tailwind", "Radix UI", "ReportLab"],
      github: "https://github.com/pratikbth/Taj-X-Lovers-Ai",
      demo: "",
      category: "Full Stack"
    },
    {
      title: "Masai x IIT Patna Evaluation Page",
      desc: "Program project showcase and evaluation submission interface built during the Masai School program.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/pratikbth/Masai-x-iit-patna-",
      demo: "",
      category: "Others"
    }
  ];

  const categories = ["All", "AI & Agents", "Full Stack", "Open Source", "Others"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsList
    : projectsList.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 px-6 md:px-16 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 text-left">
            <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-slate-950 dark:text-white mb-4">
              Other <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio to-rose-500">Projects</span>
            </h2>
            <div className="w-16 h-1.5 bg-portfolio rounded-full mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed max-w-xl">
              A selection of public repositories, open source contributions, and custom hotel client studios.
            </p>
          </div>
          
          {/* Offset category switcher */}
          <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-2 h-fit">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-portfolio border-portfolio text-white shadow-lg'
                    : 'bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border-white/20 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-900/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid in Glassmorphism style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between p-7 rounded-3xl bg-white/20 dark:bg-slate-900/20 border border-white/20 dark:border-white/5 hover:border-portfolio/30 dark:hover:border-portfolio/20 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/50 dark:bg-slate-800/50 group-hover:bg-portfolio/10 group-hover:text-portfolio transition-all duration-300 shadow-inner">
                    <FolderGit className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-portfolio" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/50 dark:bg-slate-850/50 text-slate-600 dark:text-slate-400">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-portfolio transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-light">
                  {project.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-semibold px-2.5 py-1 bg-white/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm font-semibold pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-portfolio transition-colors duration-250"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-portfolio transition-colors duration-250 ml-auto"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 italic ml-auto">
                      Demo Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
