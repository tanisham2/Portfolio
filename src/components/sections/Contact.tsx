"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { HiMail, HiPaperAirplane } from "react-icons/hi";
import { submitContactForm } from "@/lib/supabase";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await submitContactForm(form);
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-[var(--background)] border border-[var(--card-border)] rounded-xl text-sm text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all duration-200";

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        label="Get In Touch"
        title="Contact Me"
        subtitle="Have a project in mind, want to collaborate, or just say hello? My inbox is open."
      />

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-6 sm:p-8"
        >
          {/* Quick contact info */}
          <div className="flex items-center gap-3 mb-7 p-3 bg-[var(--accent-muted)] rounded-xl">
            <div className="p-2 bg-[var(--accent)] rounded-lg text-white shrink-0">
              <HiMail size={18} />
            </div>
            <div>
              <p className="text-xs text-[var(--muted)]">Preferred contact</p>
              
                href="mailto:tanisha@example.com"
                className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                tanisha@example.com
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[var(--muted)] mb-1.5">
                  Your Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[var(--muted)] mb-1.5">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[var(--muted)] mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project or just say hello..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[var(--accent)] text-white rounded-xl font-medium text-sm hover:bg-[var(--accent-dark)] hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? (
                <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
              ) : (
                <>
                  Send Message <HiPaperAirplane size={16} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}