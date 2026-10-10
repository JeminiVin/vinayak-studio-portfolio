"use client";

import React, { useState } from "react";
import { CheckCircle2, Mail, Send, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Next.js Web Application",
    details: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#fbf9f5] text-[#1c1917] py-20 px-6 lg:px-12 border-b border-[#e2ded4] scroll-mt-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs uppercase font-mono tracking-widest text-[#d97706] font-bold bg-[#f0ebd9] px-3 py-1 rounded-full border border-[#e2ded4]">
            Start a Conversation
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#1c1917] leading-tight">
            Have a project in mind? Let&apos;s build it.
          </h2>
          <p className="text-sm text-[#57534e] font-light leading-relaxed">
            Whether you need a custom Next.js web application, Supabase backend integration, or an automated SaaS outreach engine, Jaimini Studio delivers production-ready engineering.
          </p>

          <div className="pt-4 space-y-4 font-mono text-xs text-[#57534e]">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#f0ebd9] rounded-full border border-[#e2ded4] text-[#1c1917]">
                <Mail className="w-4 h-4 text-[#d97706]" />
              </div>
              <span>vinayak@jaiministudio.dev</span>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7 bg-[#f5f2eb] border border-[#e2ded4] rounded-3xl p-8 sm:p-10 shadow-lg">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-2xl font-bold text-[#1c1917]">Inquiry Received!</h3>
              <p className="text-xs text-[#57534e] max-w-md mx-auto">
                Thank you for reaching out. We will review your project requirements and respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase font-bold text-[#1c1917]">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#fbf9f5] border border-[#e2ded4] text-xs text-[#1c1917] px-4 py-3.5 rounded-2xl focus:outline-none focus:border-[#1c1917]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase font-bold text-[#1c1917]">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#fbf9f5] border border-[#e2ded4] text-xs text-[#1c1917] px-4 py-3.5 rounded-2xl focus:outline-none focus:border-[#1c1917]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase font-bold text-[#1c1917]">Project Type</label>
                <select 
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-[#fbf9f5] border border-[#e2ded4] text-xs text-[#1c1917] px-4 py-3.5 rounded-2xl focus:outline-none focus:border-[#1c1917]"
                >
                  <option>Next.js Web Application</option>
                  <option>SaaS Development & AI Outreach</option>
                  <option>Supabase Backend Architecture</option>
                  <option>React Native Mobile Screen Setup</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase font-bold text-[#1c1917]">Project Details</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your project goals, timelines, and requirements..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-[#fbf9f5] border border-[#e2ded4] text-xs text-[#1c1917] px-4 py-3.5 rounded-2xl focus:outline-none focus:border-[#1c1917]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1c1917] hover:bg-[#d97706] hover:text-[#1c1917] text-[#fbf9f5] font-bold py-4 rounded-full text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}