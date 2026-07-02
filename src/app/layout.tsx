import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanisha Mathur — Software Developer & AI/ML Student",
  description:
    "Portfolio of Tanisha Mathur, a software developer and AI/ML student building thoughtful full-stack applications and intelligent systems.",
  keywords: [
    "Tanisha Mathur",
    "Software Developer",
    "AI/ML",
    "Portfolio",
    "Next.js",
    "React",
    "Python",
  ],
  authors: [{ name: "Tanisha Mathur" }],
  openGraph: {
    title: "Tanisha Mathur — Software Developer & AI/ML Student",
    description:
      "Portfolio of Tanisha Mathur, a software developer and AI/ML student.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased font-sans`}
      >
        <ThemeProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "var(--card)",
                color: "var(--foreground)",
                border: "1px solid var(--card-border)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}