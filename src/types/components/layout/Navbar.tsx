"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";
import { HiMail, HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "About", href: "#hero" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: SiGithub, href: "https://github.com/tanishamathur", label: "GitHub" },
  { icon: SiLinkedin, href: "https://linkedin.com/in/tanishamathur", label: "LinkedIn" },
  { icon: SiLeetcode, href: "https://leetcode.com/tanishamathur", label: "LeetCode" },
  { icon: HiMail, href: "mailto:tanisha@example.com", label: "Email" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass bg-[var(--background)]/80 border-b border-[var(--card-border)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-lg font-mono font-bold gradient-text">
          TM.dev
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              
                href={link.href}
                className="text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--accent)] transition-all duration-200 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Socials + Theme toggle */}
        <div className="hidden md:flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-1.5 text-[var(--muted)] hover:text-[var(--accent)] hover:scale-110 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="p-2 ml-1 rounded-lg bg-[var(--accent-muted)] hover:bg-[var(--accent)] hover:text-white text-[var(--accent)] transition-all duration-200"
            >
              {theme === "dark" ? <HiSun size={16} /> : <HiMoon size={16} />}
            </button>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[var(--muted)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass bg-[var(--background)]/95 border-b border-[var(--card-border)]"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2 border-t border-[var(--card-border)]">
                {socials.map(({ icon: Icon, href, label }) => (
                  
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
                {mounted && (
                  <button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="ml-auto p-2 rounded-lg bg-[var(--accent-muted)] text-[var(--accent)]"
                  >
                    {theme === "dark" ? (
                      <HiSun size={16} />
                    ) : (
                      <HiMoon size={16} />
                    )}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}