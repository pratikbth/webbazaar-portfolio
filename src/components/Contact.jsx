import React, { useState } from 'react';
import { Mail, Send, ShieldAlert, Cpu } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch("https://formspree.io/f/xgojpwjr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-16 lg:px-24 bg-[#131313] text-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Asymmetric Header */}
        <div className="mb-20 text-left">
          <div className="font-mono text-[10px] text-[#00f2fe] mb-2">// SECURE_UPLINK</div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Initiate <span className="text-gradient-cyan-magenta">Contact</span>
          </h2>
          <div className="w-16 h-1 bg-[#00f2fe] mb-6"></div>
          <p className="text-slate-400 text-sm font-mono leading-relaxed max-w-xl">
            Establish a verified terminal pipeline to submit requests, RFPs, or tech collaborations.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start font-mono text-sm">
          {/* Info Card / Terminal readout */}
          <div className="lg:col-span-5 space-y-8 glass-void p-6 rounded-xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-[1px] bg-gradient-to-l from-[#743ad5] to-transparent"></div>
            
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs text-slate-500">UPLINK_NODE: #001</span>
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-emerald-400">ENCRYPTION_ACTIVE</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white tracking-tight font-sans">
                WebBazaar Client Subsystem
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Whether you are an Indian small business needing WhatsApp chatbots, a brand looking for localized CRM solutions, or a student wanting to learn AI engineering, feel free to drop a message.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/5">
              <a
                href="mailto:tiwaripratik.work@gmail.com"
                className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#00f2fe]/30 hover:scale-[1.01] transition-all duration-300"
              >
                <div className="p-2 bg-white/5 border border-white/10 rounded-md">
                  <Mail className="w-4 h-4 text-[#00f2fe]" />
                </div>
                <div>
                  <div className="text-[9px] text-slate-500 uppercase">Email Pipeline</div>
                  <div className="text-xs text-slate-300">tiwaripratik.work@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/pratikbth/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#743ad5]/30 hover:scale-[1.01] transition-all duration-300"
              >
                <div className="p-2 bg-white/5 border border-white/10 rounded-md">
                  <Cpu className="w-4 h-4 text-[#743ad5]" />
                </div>
                <div>
                  <div className="text-[9px] text-slate-500 uppercase">LinkedIn Sync</div>
                  <div className="text-xs text-slate-300">linkedin.com/in/pratikbth</div>
                </div>
              </a>
            </div>

            {/* Visual Signal HUD */}
            <div className="pt-2 text-[10px] text-slate-600 flex items-center justify-between">
              <span>SIGNAL_STRENGTH</span>
              <div className="flex gap-0.5 items-end h-3">
                <span className="w-0.5 h-1 bg-emerald-500"></span>
                <span className="w-0.5 h-1.5 bg-emerald-500"></span>
                <span className="w-0.5 h-2 bg-emerald-500"></span>
                <span className="w-0.5 h-2.5 bg-emerald-500"></span>
                <span className="w-0.5 h-3 bg-emerald-500"></span>
              </div>
            </div>
          </div>

          {/* Form Node */}
          <div className="lg:col-span-7 p-6 rounded-xl glass-void border border-white/5 relative">
            <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-l from-[#00f2fe] to-transparent"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase text-slate-400 tracking-wider mb-2 font-mono">// FIELD: SENDER_NAME</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="IDENTIFIER"
                  className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 focus:outline-none focus:border-[#00f2fe] text-white transition-colors duration-200 font-mono text-xs"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase text-slate-400 tracking-wider mb-2 font-mono">// FIELD: RETURN_EMAIL</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ADDRESS@DOMAIN.COM"
                  className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 focus:outline-none focus:border-[#00f2fe] text-white transition-colors duration-200 font-mono text-xs"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase text-slate-400 tracking-wider mb-2 font-mono">// FIELD: ENCRYPTED_MESSAGE</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="INPUT REQUEST CORRESPONDENCE..."
                  className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 focus:outline-none focus:border-[#00f2fe] text-white transition-colors duration-200 font-mono text-xs"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-4 rounded bg-gradient-to-r from-[#00f2fe] to-[#743ad5] text-slate-950 font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{status.loading ? "ESTABLISHING CONNECT..." : "TRANSMIT MESSAGE"}</span>
                <Send className="w-4 h-4 text-slate-950" />
              </button>

              {status.success && (
                <div className="p-4 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold text-center">
                  Thanks! I'll get back to you soon.
                </div>
              )}

              {status.error && (
                <div className="p-4 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold text-center flex items-center justify-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-400" />
                  <span>{status.error}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
