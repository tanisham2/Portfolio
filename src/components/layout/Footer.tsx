"use client";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";
import { HiMail } from "react-icons/hi";

const links = [
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

export default function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <a href="#hero" className="text-lg font-mono font-bold gradient-text">
            TM.dev
          </a>

          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              
                key={l.label}
                href={l.href}
                className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[var(--muted)] hover:text-[var(--accent)] hover:scale-110 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

        </div>

        <p className="text-center text-xs text-[var(--muted)] mt-8">
          &copy; {new Date().getFullYear()} Tanisha Mathur. Built with Next.js,
          Tailwind CSS &amp; Supabase.
        </p>
      </div>
    </footer>
  );
}