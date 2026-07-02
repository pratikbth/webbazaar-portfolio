import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-16 lg:px-24 bg-slate-100/30 dark:bg-slate-900/10 backdrop-blur-md relative">
      <div className="max-w-6xl mx-auto">
        {/* Asymmetric Header */}
        <div className="mb-20 text-left">
          <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-slate-950 dark:text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio to-rose-500">Touch</span>
          </h2>
          <div className="w-16 h-1.5 bg-portfolio rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed max-w-xl">
            Have an SMB business requirement, need a custom CRM system, or want to collaborate on AI workflows? Let's connect!
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Info Card */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Let's talk about WebBazaar or AI Solutions
            </h3>
            <p className="text-slate-650 dark:text-slate-400 leading-relaxed font-light text-base">
              Whether you are an Indian small business needing WhatsApp chatbots, a brand looking for localized CRM solutions, or a student wanting to learn AI engineering, feel free to drop a message.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:tiwaripratik.work@gmail.com"
                className="flex items-center gap-5 p-5 rounded-2xl bg-white/20 dark:bg-slate-900/20 border border-white/20 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:border-portfolio/30 hover:scale-[1.02] transition-all duration-300 backdrop-blur-lg shadow-lg"
              >
                <div className="p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 shadow-inner">
                  <Mail className="w-5 h-5 text-portfolio" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Email</div>
                  <div className="text-sm font-bold">tiwaripratik.work@gmail.com</div>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 rounded-2xl bg-white/20 dark:bg-slate-900/20 border border-white/20 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:border-portfolio/30 hover:scale-[1.02] transition-all duration-300 backdrop-blur-lg shadow-lg"
              >
                <div className="p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 shadow-inner">
                  <svg className="w-5 h-5 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">LinkedIn</div>
                  <div className="text-sm font-bold">Connect on LinkedIn</div>
                </div>
              </a>

              <a
                href="https://github.com/pratikbth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 rounded-2xl bg-white/20 dark:bg-slate-900/20 border border-white/20 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:border-portfolio/30 hover:scale-[1.02] transition-all duration-300 backdrop-blur-lg shadow-lg"
              >
                <div className="p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 shadow-inner">
                  <svg className="w-5 h-5 text-slate-950 dark:text-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">GitHub</div>
                  <div className="text-sm font-bold">github.com/pratikbth</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white/25 dark:bg-slate-900/25 border border-white/20 dark:border-white/5 shadow-2xl backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-5 py-4 rounded-2xl bg-white/40 dark:bg-slate-950/40 border border-white/20 dark:border-white/5 focus:outline-none focus:border-portfolio dark:focus:border-portfolio text-slate-900 dark:text-white transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-5 py-4 rounded-2xl bg-white/40 dark:bg-slate-950/40 border border-white/20 dark:border-white/5 focus:outline-none focus:border-portfolio dark:focus:border-portfolio text-slate-900 dark:text-white transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help?"
                  className="w-full px-5 py-4 rounded-2xl bg-white/40 dark:bg-slate-950/40 border border-white/20 dark:border-white/5 focus:outline-none focus:border-portfolio dark:focus:border-portfolio text-slate-900 dark:text-white transition-colors duration-200"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4.5 rounded-2xl bg-portfolio hover:bg-portfolio-dark text-white font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-portfolio/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>

              {submitted && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-bold text-center animate-pulse">
                  Thank you! Your message has been received.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
