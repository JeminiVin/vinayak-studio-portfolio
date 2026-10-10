"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="about" className="bg-[#1c1917] text-[#a8a29e] py-16 px-6 lg:px-12 border-t border-[#27272a] font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#27272a]">
          
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#fbf9f5] text-[#1c1917] flex items-center justify-center font-bold text-xs">
                VJ
              </div>
              <span className="font-extrabold text-xl text-[#f5f5f4] tracking-tight">
                JAIMINI STUDIO
              </span>
            </div>
            <p className="text-xs text-[#a8a29e] font-light max-w-md leading-relaxed">
              Crafting high-performance Next.js architectures, modern web applications, and automated SaaS pipelines with bespoke editorial UI aesthetics.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold tracking-widest text-[#f5f5f4]">Navigation</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#capabilities" className="hover:text-[#d97706] transition-colors">Capabilities</a></li>
              <li><a href="#projects" className="hover:text-[#d97706] transition-colors">Selected Work</a></li>
              <li><a href="#stack" className="hover:text-[#d97706] transition-colors">Stack</a></li>
              <li><a href="#about" className="hover:text-[#d97706] transition-colors">About Studio</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold tracking-widest text-[#f5f5f4]">Connect</h4>
            <div className="flex items-center gap-3">
              
              {/* GitHub SVG Icon */}
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 bg-[#27272a] rounded-full hover:bg-[#d97706] hover:text-[#1c1917] transition-colors text-[#f5f5f4]"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn SVG Icon */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 bg-[#27272a] rounded-full hover:bg-[#d97706] hover:text-[#1c1917] transition-colors text-[#f5f5f4]"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Twitter / X SVG Icon */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 bg-[#27272a] rounded-full hover:bg-[#d97706] hover:text-[#1c1917] transition-colors text-[#f5f5f4]"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

            </div>
          </div>

        </div>

        {/* Lower Copyright Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
          <p>© 2026 Jaimini Studio. All rights reserved.</p>
          <p className="text-[11px] text-[#78716c]">Built with Next.js 15, Tailwind CSS & Framer Motion.</p>
        </div>

      </div>
    </footer>
  );
}