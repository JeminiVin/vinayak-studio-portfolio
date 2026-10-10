"use client";

import React from "react";
import { X, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectData {
  title: string;
  type: string;
  tech: string;
  desc: string;
  link: string;
  status: string;
  highlights?: string[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-sans">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#1c1917]/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-[#fbf9f5] border border-[#e2ded4] rounded-3xl p-8 sm:p-10 shadow-2xl z-10 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#f0ebd9] border border-[#e2ded4] text-[#1c1917] hover:bg-[#1c1917] hover:text-[#fbf9f5] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#d97706] bg-[#f0ebd9] px-3 py-1 rounded-full border border-[#e2ded4]">
                {project.type}
              </span>
              <span className="text-[10px] font-mono text-[#78716c] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                {project.status}
              </span>
            </div>

            <div>
              <h3 className="text-3xl font-serif text-[#1c1917] font-normal">
                {project.title}
              </h3>
              <p className="text-xs text-[#57534e] font-light mt-3 leading-relaxed">
                {project.desc}
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#e2ded4]">
              <span className="text-[11px] font-mono uppercase font-bold text-[#1c1917] block">
                Architecture Highlights
              </span>
              <ul className="space-y-1.5 text-xs text-[#57534e]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>Type-safe App Router with server-side rendering</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>Sub-second database query resolution and optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>Responsive editorial design tailored for high conversion</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 text-[11px] font-mono text-[#78716c] bg-[#f0ebd9] p-4 rounded-2xl border border-[#e2ded4]">
              <span className="font-bold text-[#1c1917] block mb-1">Stack Breakdown:</span>
              {project.tech}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              {project.link !== "#" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1c1917] text-[#fbf9f5] hover:bg-[#d97706] hover:text-[#1c1917] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  <span>Visit Live App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs font-mono text-[#78716c] italic">
                  Demo access available upon request
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}