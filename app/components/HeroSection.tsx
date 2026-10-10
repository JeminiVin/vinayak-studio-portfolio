"use client";

import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-[#fbf9f5] text-[#1c1917] pt-12 pb-24 px-6 lg:px-12 font-sans border-b border-[#e2ded4] overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8"
        >
          
          <div className="inline-flex items-center gap-2 bg-[#f0ebd9] border border-[#e2ded4] text-[#1c1917] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Next.js • Supabase • Full-Stack Systems</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-normal tracking-tight leading-[1.05] text-[#1c1917]">
              A website <br />
              <span className="italic font-serif font-light text-[#57534e]">makes it real.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#57534e] font-light max-w-xl leading-relaxed pt-2">
              Turn your ideas, SaaS concepts, and digital platforms into ultra-fast, high-converting Next.js web applications crafted with precision engineering.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="bg-[#1c1917] text-[#fbf9f5] hover:bg-[#d97706] hover:text-[#1c1917] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 shadow-lg"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="border border-[#1c1917] hover:bg-[#1c1917] hover:text-[#fbf9f5] text-[#1c1917] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 bg-transparent"
            >
              <span>View Portfolio</span>
            </motion.a>
          </div>

          {/* Key Metrics */}
          <div className="pt-10 border-t border-[#e2ded4] grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <span className="block text-3xl font-serif text-[#1c1917]">100%</span>
              <span className="text-[11px] text-[#78716c] uppercase tracking-wider font-semibold">Custom Code</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-[#1c1917]">Lightning</span>
              <span className="text-[11px] text-[#78716c] uppercase tracking-wider font-semibold">Page Speed</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-[#1c1917]">Full-Stack</span>
              <span className="text-[11px] text-[#78716c] uppercase tracking-wider font-semibold">MERN & Next.js</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Showcase Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-[#e2ded4] shadow-2xl bg-[#f0ebd9] group">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
              alt="Developer Workspace"
              className="w-full h-[540px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/80 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#fbf9f5]/90 backdrop-blur-md rounded-2xl border border-[#e2ded4] shadow-md">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#d97706] font-bold block mb-1">
                Featured Case Study
              </span>
              <h3 className="text-xl font-bold text-[#1c1917]">Client Hunter & SaaS Systems</h3>
              <p className="text-xs text-[#57534e] mt-1 font-light leading-relaxed">
                Automated outreach engine with live lead metrics and dynamic dashboard filters.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}