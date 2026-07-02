"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, className, children }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn("py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto", className)}
    >
      {children}
    </motion.section>
  );
}