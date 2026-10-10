"use client";

import React, { useState } from "react";
import { Search, Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#fbf9f5] border-b border-[#e2ded4] text-[#1c1917] sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-[#1c1917] text-[#fbf9f5] flex items-center justify-center font-bold text-xs tracking-wider">
            VJ
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight block leading-none text-[#1c1917]">
              JAIMINI STUDIO
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#78716c] font-medium">
              Web & Software Engineering
            </span>
          </div>
        </a>

        {/* Minimal Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-[#57534e]">
          <a href="#capabilities" className="hover:text-[#1c1917] transition-colors">Capabilities</a>
          <a href="#projects" className="hover:text-[#1c1917] transition-colors">Selected Work</a>
          <a href="#stack" className="hover:text-[#1c1917] transition-colors">Stack</a>
          <a href="#about" className="hover:text-[#1c1917] transition-colors">About Studio</a>
        </nav>

        {/* CTA Button & Search */}
        <div className="hidden sm:flex items-center gap-4">
          <button className="p-2 text-[#78716c] hover:text-[#1c1917] transition-colors">
            <Search className="w-4 h-4" />
          </button>
          
          <a
            href="#about"
            className="bg-[#1c1917] text-[#fbf9f5] hover:bg-[#d97706] hover:text-[#1c1917] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#1c1917]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbf9f5] border-b border-[#e2ded4] px-6 py-6 space-y-4 text-xs font-bold uppercase tracking-widest text-[#57534e]">
          <a href="#capabilities" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#1c1917]">Capabilities</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#1c1917]">Selected Work</a>
          <a href="#stack" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#1c1917]">Stack</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-[#d97706]">About Studio</a>
        </div>
      )}
    </header>
  );
}