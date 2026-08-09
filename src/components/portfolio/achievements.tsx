import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const ITEMS = [
  
  {
    title: "ISRO Young Scientist Awardee 2025",
    detail: "ISRO Yuvika Young Scientist Award for the year 2025.",
  },
  {
    title: "Launched DLMS",
    detail: "India's First Student Centric KVS DLMS for KV Sulur.",
  },
  {
    title: "BSG Rajyapuraskar Awardee",
    detail: "Bharat Scouts and Guides Rajyapuraskar award; earned through service, leadership, and skill development.",
  },
  {
    title: "KRITI iKITES Internship — IIT Kharagpur",
    detail: "Research internship covering avionics, sensing and systems design.",
  },
  {
    title: "Elected Vice Captain",
    detail: "Won the school election with roughly 72% of the vote.",
  },
  {
    title: "CBSE Class 10 Results",
    detail: "Strong overall performance across all subjects.",
  },
  {
    title: "AI Vidyasetu 1.0",
    detail: "Participated in the AI Vidyasetu 1.0 Hackathon, and secured Zonal Runner-up and qualified for NATIONALS.",
  },
];

export function Achievements() {
  const reduced = useReducedMotion();

  return (
    <ol className="relative pl-8">
      <span className="absolute top-1 bottom-1 left-[7px] w-px bg-border" aria-hidden="true" />
      {ITEMS.map((item, i) => (
        <motion.li
          key={item.title}
          className="relative pb-9 last:pb-0"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: reduced ? 0.01 : 0.45, delay: reduced ? 0 : i * 0.06 }}
        >
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="absolute top-1 -left-8 size-4 overflow-visible"
          >
            <motion.path
              d="M0 8 H16"
              stroke="var(--amber)"
              strokeWidth="2"
              fill="none"
              initial={reduced ? { opacity: 0 } : { pathLength: 0 }}
              whileInView={reduced ? { opacity: 1 } : { pathLength: 1 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: reduced ? 0.01 : 0.5, delay: reduced ? 0 : i * 0.06 }}
            />
          </svg>
          <h3 className="text-sm font-semibold tracking-tight">{item.title}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">{item.detail}</p>
        </motion.li>
      ))}
    </ol>
  );
}

const CLUSTERS = [
  { label: "Web dev", items: ["HTML / CSS / JS", "React", "Supabase", "Tailwind"] },
  { label: "Hardware / IoT", items: ["Arduino", "Raspberry", "ESP", "OpenSCAD / CAD", "Sensor fusion"] },
  { label: "Tools", items: ["Google Cloud TTS", "AI Prompting", "Spreadsheets / data", "Git"] },
];

export function Skills() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ show: { transition: { staggerChildren: reduced ? 0 : 0.08 } } }}
    >
      {CLUSTERS.map((c) => (
        <motion.div
          key={c.label}
          variants={{
            hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: reduced ? 0.01 : 0.45 }}
          className="border border-border bg-surface p-5"
        >
          <h3 className="label-mono text-primary">{c.label}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {c.items.map((s) => (
              <li key={s} className="label-mono border border-border px-2 py-1 text-[10px]">
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}
