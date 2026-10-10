"use client";

import React from "react";
import { ArrowUpRight, Clock, Tag } from "lucide-react";

export default function BlogGrid() {
  const articles = [
    {
      title: "Building High-Throughput Lead Pipelines with Next.js & Resend",
      excerpt: "Architecting a fast client outreach agent with zero database latency using Vercel Serverless and dynamic queueing.",
      date: "Oct 2026",
      readTime: "5 min read",
      category: "Architecture",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Supabase vs Custom PostgreSQL for SaaS MVPs",
      excerpt: "Comparing row-level security, realtime subscriptions, and database triggers when building modern React Native mobile apps.",
      date: "Sep 2026",
      readTime: "7 min read",
      category: "Backend & DB",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mastering Squarespace & Editorial UI Aesthetics in Tailwind CSS",
      excerpt: "How to craft ultra-clean warm beige layouts, custom serif typography hierarchy, and smooth Framer Motion interactions.",
      date: "Aug 2026",
      readTime: "4 min read",
      category: "UI Engineering",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div id="projects" className="scroll-mt-20">
      <section id="stack" className="bg-[#fbf9f5] text-[#1c1917] py-20 px-6 lg:px-12 border-b border-[#e2ded4] scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#e2ded4] pb-6">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#d97706] font-bold block mb-1">
                Engineering Journal & Selected Work
              </span>
              <h2 className="text-4xl font-serif text-[#1c1917]">Featured Architecture & Stack</h2>
            </div>
            <a href="#about" className="text-xs font-bold uppercase tracking-widest text-[#1c1917] hover:text-[#d97706] flex items-center gap-1.5 transition-colors">
              <span>About Studio</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((item, idx) => (
              <article
                key={idx}
                className="group rounded-3xl overflow-hidden border border-[#e2ded4] bg-[#f5f2eb] shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="relative h-52 overflow-hidden border-b border-[#e2ded4]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#fbf9f5]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#e2ded4] text-[10px] font-mono uppercase font-bold text-[#d97706] flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      <span>{item.category}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-[11px] text-[#78716c]">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {item.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1c1917] group-hover:text-[#d97706] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#57534e] font-light leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1c1917] group-hover:text-[#d97706] transition-colors">
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}