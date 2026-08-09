import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import portrait from "@/assets/tanish-portrait.jpg";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/* [INSERT PHOTO: tanish-portrait.jpg] — replace src/assets/tanish-portrait.jpg with the real portrait. */

function CornerBrackets() {
  const reduced = useReducedMotion();
  const paths = [
    "M2 34 L2 2 L34 2",
    "M266 2 L298 2 L298 34",
    "M298 334 L298 366 L266 366",
    "M34 366 L2 366 L2 334",
  ];

  return (
    <svg
      viewBox="0 0 300 368"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {paths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke="var(--amber)"
          strokeWidth="1.5"
          initial={reduced ? { opacity: 0 } : { pathLength: 0, opacity: 0 }}
          animate={reduced ? { opacity: 1 } : { pathLength: 1, opacity: 1 }}
          transition={{
            duration: reduced ? 0.01 : 0.8,
            delay: reduced ? 0 : 0.6 + i * 0.12,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const drift = useTransform(scrollY, [0, 600], [0, reduced ? 0 : -18]);

  const rise = (delay: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0.01 : 0.5, delay: reduced ? 0 : delay },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24">
      <div className="grid-graph pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-14 px-6 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p className="label-mono flex items-center gap-2" {...rise(0.1)}>
            <span className="inline-block size-1.5 animate-pulse rounded-full bg-primary" />
            Log entry 001 // status: active
          </motion.p>

          <motion.h1
            className="mt-5 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl"
            {...rise(0.2)}
          >
            Tanish
            <span className="block text-primary">Student Developer</span>
            <span className="block text-muted-foreground">&amp; Tech Leader</span>
          </motion.h1>

          {/* Telemetry line */}
          <div className="mt-6 h-px w-full max-w-sm overflow-hidden bg-border">
            <motion.div
              className="h-px w-1/3 bg-primary"
              animate={reduced ? { opacity: 1 } : { x: ["-100%", "300%"], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 4.5, repeat: reduced ? 0 : Infinity, ease: "easeInOut" }}
            />
          </div>

          <motion.p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground" {...rise(0.3)}>
            Class 11 student in Coimbatore building rocket avionics, IoT sensor systems and
            school-scale software — from a KVS learning platform to an election system for 1,650
            students.
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap gap-3" {...rise(0.4)}>
            <a
              href="#projects"
              className="label-mono border border-primary bg-primary px-4 py-2.5 text-primary-foreground transition-colors duration-150 hover:bg-transparent hover:text-primary"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="label-mono border border-border px-4 py-2.5 transition-colors duration-150 hover:border-primary hover:text-primary"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div style={{ y: drift }} className="mx-auto w-full max-w-xs">
          <motion.div
            className="relative aspect-[300/368] w-full bg-surface p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduced ? 0.01 : 0.7, delay: reduced ? 0 : 0.5 }}
          >
            <img
              src={portrait}
              alt="Portrait of Tanish, student developer from Coimbatore, in formal black attire"
              width={832}
              height={1024}
              className="h-full w-full object-cover contrast-[1.05] saturate-[0.55] sepia-[0.12]"
            />
            <CornerBrackets />
          </motion.div>
          <p className="label-mono mt-3 text-center">Operator: Tanish // Status: Active</p>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="label-mono mx-auto mt-16 flex w-fit items-center gap-2 transition-colors duration-150 hover:text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0 : 0.9 }}
      >
        Scroll <ArrowDown className="size-3.5 animate-bounce" />
      </motion.a>
    </section>
  );
}
