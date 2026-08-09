import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/** Section divider: "§01 PROJECTS" label + rule that draws left-to-right on entry. */
export function SectionHeading({ index, title }: { index: string; title: string }) {
  const reduced = useReducedMotion();

  return (
    <div className="mb-10 flex items-center gap-4">
      <motion.span
        className="label-mono whitespace-nowrap text-primary"
        initial={reduced ? { opacity: 0 } : { opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: reduced ? 0.01 : 0.4 }}
      >
        §{index}
      </motion.span>
      <motion.h2
        className="text-xl font-semibold tracking-tight sm:text-2xl"
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: reduced ? 0.01 : 0.4, delay: 0.05 }}
      >
        {title}
      </motion.h2>
      <motion.span
        className="h-px flex-1 origin-left bg-border"
        initial={reduced ? { opacity: 0 } : { scaleX: 0 }}
        whileInView={reduced ? { opacity: 1 } : { scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: reduced ? 0.01 : 0.7, ease: "easeOut" }}
      />
    </div>
  );
}

/** Wrapper that fades + slides a section up on viewport entry. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: reduced ? 0.01 : 0.5, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionHeading index={index} title={title} />
        {children}
      </div>
    </section>
  );
}
