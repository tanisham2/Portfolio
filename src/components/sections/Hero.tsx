"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowRight, HiDownload } from "react-icons/hi";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Text content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 lg:order-1"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase text-[var(--accent)] bg-[var(--accent-muted)] px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Tanisha Mathur</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl sm:text-2xl font-medium text-[var(--muted)] mb-5 font-mono"
          >
            Software Developer &amp; AI/ML Student
          </motion.p>

          <motion.p
            variants={item}
            className="text-[var(--muted)] leading-relaxed mb-8 max-w-lg text-sm sm:text-base"
          >
            I build full-stack applications and intelligent systems — from
            real-time social platforms to ML-powered productivity tools.
            Currently studying Computer Science with a focus on AI/ML, and
            obsessed with making technology that genuinely helps people.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-white rounded-lg font-medium text-sm hover:bg-[var(--accent-dark)] hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
            >
              View Projects <HiArrowRight size={16} />
            </a>
            
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--card-border)] text-[var(--foreground)] rounded-lg font-medium text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
            >
              Contact Me
            </a>
            
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[var(--muted)] rounded-lg font-medium text-sm hover:text-[var(--accent)] transition-colors"
            >
              <HiDownload size={16} /> Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-2xl opacity-20 scale-110 animate-float" />

            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-[var(--accent)] shadow-2xl shadow-purple-500/20">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Tanisha Mathur"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -right-2 bg-[var(--card)] border border-[var(--card-border)] rounded-xl px-3 py-2 shadow-lg"
            >
              <p className="text-xs font-mono font-semibold text-[var(--accent)]">
                AI/ML @ CSE
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[var(--muted)] font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[var(--accent)] to-transparent"
        />
      </motion.div>
    </section>
  );
}