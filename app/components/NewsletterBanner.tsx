"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Sparkles } from "lucide-react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-[#f0ebd9] text-[#1c1917] py-16 px-6 lg:px-12 border-b border-[#e2ded4]">
      <div className="max-w-5xl mx-auto rounded-3xl bg-[#fbf9f5] border border-[#e2ded4] p-8 sm:p-12 shadow-xl relative overflow-hidden">
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-xl">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#d97706] font-bold bg-[#f0ebd9] px-3 py-1 rounded-full border border-[#e2ded4] inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Direct Insights
            </span>
            <h3 className="text-3xl font-serif font-normal text-[#1c1917]">
              Subscribe to Engineering Notes.
            </h3>
            <p className="text-xs text-[#57534e] font-light leading-relaxed">
              Get bi-weekly breakdown articles on Next.js 15 App Router patterns, Supabase backend optimizations, and real-world full-stack architectures.
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0">
            {submitted ? (
              <div className="bg-[#1c1917] text-[#fbf9f5] px-6 py-4 rounded-2xl flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-5 h-5 text-[#d97706]" />
                <span>You are on the insider list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#f0ebd9] border border-[#e2ded4] text-xs text-[#1c1917] px-4 py-3.5 rounded-full focus:outline-none focus:border-[#1c1917] w-full sm:w-64"
                />
                <button
                  type="submit"
                  className="bg-[#1c1917] hover:bg-[#d97706] hover:text-[#1c1917] text-[#fbf9f5] font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shrink-0 shadow-md"
                >
                  <span>Join List</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}