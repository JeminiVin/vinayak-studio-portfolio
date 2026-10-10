"use client";

import React, { useState } from "react";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import ProjectModal, { ProjectData } from "./ProjectModal";

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      title: "Client Hunter Agent",
      type: "SaaS & Automation",
      tech: "Next.js 15 • Vercel • Resend API",
      desc: "An automated lead generation and outreach system featuring real-time analytics dashboards and dynamic email dispatch pipelines.",
      link: "https://client-hunter-agent.vercel.app",
      status: "Live Production"
    },
    {
      title: "Devlink Networking Platform",
      type: "Full-Stack Web App",
      tech: "React • Node.js • Express • MongoDB",
      desc: "A developer networking platform facilitating project collaboration, skills matching, and real-time community engagement.",
      link: "#",
      status: "Completed Project"
    },
    {
      title: "Supabase Mobile Survey App",
      type: "Cross-Platform Mobile",
      tech: "React Native • Expo • Supabase DB",
      desc: "Mobile application interface integrated with Supabase backend for real-time survey distribution and data submission tracking.",
      link: "#",
      status: "Active Deployment"
    }
  ];

  return (
    <section id="projects" className="bg-[#f0ebd9] text-[#1c1917] py-20 px-6 lg:px-12 border-b border-[#e2ded4] scroll-mt-20 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#e2ded4] pb-6"
        >
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#d97706] font-bold block mb-1">
              Portfolio
            </span>
            <h2 className="text-4xl font-serif text-[#1c1917]">Selected Case Studies</h2>
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#78716c]">
            Built with Type-Safe Architecture
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-[#e2ded4] bg-[#fbf9f5] p-8 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#d97706] bg-[#f0ebd9] px-3 py-1 rounded-full border border-[#e2ded4]">
                    {item.type}
                  </span>
                  <span className="text-[10px] font-mono text-[#78716c] flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    {item.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#1c1917] group-hover:text-[#d97706] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#57534e] font-light leading-relaxed">
                  {item.desc}
                </p>

                <div className="pt-2 text-[11px] font-mono text-[#78716c] border-t border-[#e2ded4]/60">
                  {item.tech}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#e2ded4]">
                <button
                  onClick={() => setSelectedProject(item)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1c1917] hover:text-[#d97706] transition-colors cursor-pointer"
                >
                  <span>Explore Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}