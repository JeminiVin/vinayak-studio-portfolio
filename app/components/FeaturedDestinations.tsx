"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedDestinations() {
  const capabilities = [
    {
      title: "Full-Stack Web Development",
      desc: "Custom Next.js App Router applications with dynamic server rendering and Tailwind CSS.",
      tag: "Next.js & React",
    },
    {
      title: "Backend & Database Design",
      desc: "Robust Supabase, PostgreSQL, and Node.js APIs built for speed and security.",
      tag: "Postgres & APIs",
    },
    {
      title: "Client Hunter & AI Outreach",
      desc: "Automated Lead Scraping, Resend Email Automation, and analytics workflows.",
      tag: "Automation Tools",
    },
    {
      title: "Mobile App Interfaces",
      desc: "Cross-platform React Native and Expo screens connected to live backends.",
      tag: "React Native",
    }
  ];

  return (
    <section id="capabilities" className="bg-[#f5f2eb] text-[#1c1917] py-20 px-6 lg:px-12 border-b border-[#e2ded4] scroll-mt-20">
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
              Studio Capabilities
            </span>
            <h2 className="text-4xl font-serif text-[#1c1917]">Everything you need to launch.</h2>
          </div>
          <a href="#projects" className="text-xs font-bold uppercase tracking-widest text-[#1c1917] hover:text-[#d97706] flex items-center gap-1.5 transition-colors">
            <span>Explore Work</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl overflow-hidden border border-[#e2ded4] bg-[#fbf9f5] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 h-96 flex flex-col justify-between p-6"
            >
              <div className="relative z-10">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#1c1917] bg-[#f0ebd9] px-3 py-1 rounded-full border border-[#e2ded4] font-bold">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold text-[#1c1917] mt-4 group-hover:text-[#d97706] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#57534e] mt-2 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="relative z-10 flex justify-end">
                <motion.div 
                  whileHover={{ rotate: 45 }}
                  className="p-3 bg-[#1c1917] rounded-full text-[#fbf9f5] group-hover:bg-[#d97706] group-hover:text-[#1c1917] transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}