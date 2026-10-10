"use client";

import React from "react";
import { Mail, Phone, Globe, Terminal } from "lucide-react";

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
          <span className="text-[#a8a29e]">Stack: Next.js 15 • Supabase • Node.js</span>
          <span className="text-[#44403c]">|</span>
          <div className="flex items-center gap-1 text-[#d97706] font-semibold cursor-pointer hover:underline">
            <Globe className="w-3 h-3" />
            <span>Remote / Worldwide</span>
          </div>
        </div>
      </div>
    </div>
  );
}