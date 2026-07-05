import React, { useState } from 'react';
import { ExternalLink, FolderGit } from 'lucide-react';
import ThreeArtifacts from './ThreeArtifacts';

export default function Projects() {
  const projectsList = [
    {
      title: "IRIS Mini",
      desc: "An agentic CLI & desktop voice AI assistant powered by Google Gemini Live. Scaffolds files, runs filesystem commands, and automates developer workflows natively.",
      tags: ["React UI", "Node.js", "Gemini Live API", "CLI Tool"],
      github: "https://github.com/pratikbth/IRIS-Mini",
      demo: "https://irisaiw.vercel.app/",
      category: "AI & Agents",
      integrity: "99.8%",
      hash: "0x3e2a9b"
    },
    {
      title: "Catering.AI",
      desc: "AI-powered wedding food visualization studio that uses venue photos and catering references to generate high-fidelity buffet and dessert styling previews.",
      tags: ["React", "FastAPI", "Gemini API", "Nano Banana"],
      github: "https://github.com/pratikbth/Catering-AI",
      demo: "",
      category: "AI & Agents",
      integrity: "99.4%",
      hash: "0xf9b1a7"
    },
    {
      title: "LoversAI CRM (Wed Us CRM)",
      desc: "Event design pipeline management system featuring lead card management, automated CRM operations, task boards, and team access permissions.",
      tags: ["React 18", "Tailwind CSS", "FastAPI", "MongoDB"],
      github: "https://github.com/pratikbth/lovers-ai-crm-1",
      demo: "https://lovers-ai-crm-1.vercel.app",
      category: "Full Stack",
      integrity: "99.9%",
      hash: "0xab88d4"
    },
    {
      title: "AI Engineering from Scratch",
      desc: "A collaborative curriculum and workspace containing over 260 lessons across 20 phases, moving from math to custom agentic swarms.",
      tags: ["Python", "TypeScript", "Rust", "Julia"],
      github: "https://github.com/pratikbth/ai-engineering-from-scratch",
      demo: "https://aiengineeringfromscratch.com",
      category: "Open Source",
      integrity: "99.6%",
      hash: "0xdc92e0"
    },
    {
      title: "Taj x LoversAI Resort Studios",
      desc: "A series of customized digital studios configured for luxury hotel properties including Taj, Fairmont, Maira Resort, and Jaypee Palace.",
      tags: ["React 19", "Tailwind", "Radix UI", "ReportLab"],
      github: "https://github.com/pratikbth/Taj-X-Lovers-Ai",
      demo: "",
      category: "Full Stack",
      integrity: "99.5%",
      hash: "0x12ff7b"
    },
    {
      title: "Masai x IIT Patna Evaluation Page",
      desc: "Program project showcase and evaluation submission interface built during the Masai School program.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/pratikbth/Masai-x-iit-patna-",
      demo: "",
      category: "Others",
      integrity: "98.9%",
      hash: "0x9812bb"
    }
  ];

  const categories = ["All", "AI & Agents", "Full Stack", "Open Source", "Others"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsList
    : projectsList.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 px-6 md:px-16 lg:px-24 bg-[#131313] text-white relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 text-left">
            <div className="font-mono text-[10px] text-[#00f2fe] mb-2">// BUILD_MARKETPLACE</div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
              Portfolio <span className="text-gradient-cyan-magenta">Lab</span>
            </h2>
            <div className="w-16 h-1 bg-[#00f2fe] mb-6"></div>
            <p className="text-slate-400 text-base font-mono leading-relaxed max-w-xl">
              Inspect active 3D artifacts representing core builds and explore our digital repository pipeline.
            </p>
          </div>
          
          {/* Offset category switcher */}
          <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-2 h-fit font-mono">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded text-[10px] font-semibold border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-portfolio/15 border-portfolio text-[#00f2fe] shadow-lg shadow-portfolio/10'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Lab Interactive Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 p-6 rounded-2xl glass-void border border-white/5">
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-4 pr-0 lg:pr-6">
            <div className="font-mono text-[10px] text-[#743ad5]">// LAB_RENDER_MODULE</div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Interactive Build Artifacts
            </h3>
            <p className="text-slate-400 font-mono text-xs leading-relaxed">
              Use the viewport controls to switch geometries, inspect structural wireframes, and adjust real-time spin rates. Click and drag within the viewport to manually rotate the active node.
            </p>
            <div className="border-t border-white/5 pt-4 font-mono text-[10px] text-slate-500 space-y-2">
              <div className="flex justify-between">
                <span>3D_SHADERS:</span>
                <span className="text-emerald-400">OPTIMIZED_ACTIVE</span>
              </div>
              <div className="flex justify-between">
                <span>GRAPHICS_PIPELINE:</span>
                <span className="text-[#00f2fe]">THREE_JS_RENDERER</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 w-full h-[400px] flex items-center justify-center bg-slate-950/20 rounded-xl overflow-hidden border border-white/5 relative">
            <ThreeArtifacts />
          </div>
        </div>

        {/* Projects Grid in Glassmorphism style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between p-6 rounded-xl glass-void border border-white/5 hover:border-[#00f2fe]/30 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden font-mono"
            >
              <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-l from-[#00f2fe] to-transparent"></div>
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#00f2fe]/20 transition-all duration-300">
                    <FolderGit className="w-4 h-4 text-[#00f2fe]" />
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00f2fe] transition-all duration-300 font-sans tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-light">
                  {project.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[9px] px-2 py-0.5 bg-white/5 text-slate-400 border border-white/5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Cyber HUD Readout */}
                <div className="mb-4 text-[9px] text-slate-600 border-t border-white/5 pt-3 space-y-1">
                  <div className="flex justify-between">
                    <span>BUILD_HASH:</span>
                    <span className="text-slate-400">{project.hash}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>INTEGRITY:</span>
                    <span className="text-[#00f2fe]">{project.integrity}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-semibold pt-3 border-t border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-slate-400 hover:text-[#00f2fe] transition-colors duration-250"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                      className="flex items-center gap-1 text-slate-400 hover:text-[#00f2fe] transition-colors duration-250 ml-auto"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[10px] text-slate-500 italic ml-auto">
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
