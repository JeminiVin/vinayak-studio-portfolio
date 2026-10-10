"use client";

import React from "react";
import { Mail, Globe, Terminal } from "lucide-react";

export default function TopAdminBar() {
  return (
    <div className="bg-[#1c1917] text-[#a8a29e] text-[11px] py-2 px-6 border-b border-[#27272a] hidden sm:block font-mono">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 hover:text-[#f5f5f4] cursor-pointer transition-colors">
            <Mail className="w-3 h-3 text-[#d97706]" />
            <span>vinayak@jaiministudio.dev</span>
          </span>
          <span className="flex items-center gap-1.5 hover:text-[#f5f5f4] cursor-pointer transition-colors">
            <Terminal className="w-3 h-3 text-[#d97706]" />
            <span>Available for Full-Stack Freelance Projects</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Live Status Badge */}
          <div className="flex items-center gap-2 bg-[#27272a] px-3 py-0.5 rounded-full border border-[#3f3f46]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
              Systems Live
            </span>
          </div>

          <span className="text-[#44403c]">|</span>
          <div className="flex items-center gap-1 text-[#d97706] font-semibold">
            <Globe className="w-3 h-3" />
            <span>Jaipur / Remote</span>
          </div>
        </div>
      </div>
    </div>
  );
}