import { motion } from "motion/react";
import { Reveal } from "./section";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Status = "LIVE" | "IN PROGRESS" | "PRESENTED" | "PROTOTYPE" | "PROPOSAL";

const STATUS_CLASS: Record<Status, string> = {
  LIVE: "border-primary text-primary",
  "IN PROGRESS": "border-accent text-accent",
  PRESENTED: "border-accent text-accent",
  PROTOTYPE: "border-border text-muted-foreground",
  PROPOSAL: "border-border text-muted-foreground",
};

const PROJECTS: {
  title: string;
  desc: string;
  stack: string[];
  status: Status;
  link: string;
}[] = [
  {
    title: "SePP",
    desc: "AI-powered LMS/DLMS for KVS schools with dashboards, XP/badges and leaderboards — India's first student-centric KVS DLMS, launched 29 July 2026 at PM SHRI KV Sulur's library.",
    stack: ["React", "Supabase", "AI", "Dashboards"],
    status: "LIVE",
    link: "[ADD GITHUB REPO LINK]",
  },
  {
    title: "School Election Voting System",
    desc: "Election platform for ~1,650 students with polling agent roster, booth allotment and Google Cloud TTS voiceovers.",
    stack: ["Lovable", "Supabase", "Google Cloud TTS"],
    status: "LIVE",
    link: "[ADD GITHUB REPO LINK]",
  },
  {
    title: "KRITI 2026 Sounding Rocket Avionics Payload",
    desc: "IIT Kharagpur payload: Kalman-filtered altitude, triple-vote apogee detection and dual memory redundancy. Presented at PRAVAH 2026.",
    stack: ["Arduino Nano", "BMP280", "MPU-6050", "Kalman filter"],
    status: "PRESENTED",
    link: "[ADD GITHUB REPO LINK]",
  },
  {
    title: "Portable UV-C + Multi-Stage Water Filtration Straw",
    desc: "Field-usable filtration straw pairing multi-stage media with UV-C sterilisation, modelled parametrically in CAD.",
    stack: ["OpenSCAD", "CAD", "Prototyping"],
    status: "PROTOTYPE",
    link: "[ADD GITHUB REPO LINK]",
  },
  {
    title: "PhytoSonic Index",
    desc: "NCSC 2026-27 proposal using IoT soundscape ecology to index plant and habitat health.",
    stack: ["IoT", "Sensors", "Data analysis"],
    status: "PROPOSAL",
    link: "[ADD PROPOSAL LINK]",
  },
  {
    title: "School Traffic Safety Proposal",
    desc: "Data-driven proposal led as Vice Captain covering bus stop placement, crossings and rumble strips.",
    stack: ["Field data", "Spreadsheets", "Systems thinking"],
    status: "PROPOSAL",
    link: "[ADD PROPOSAL LINK]",
  },
];

export function Projects() {
  const reduced = useReducedMotion();

  return (
    <motion.ul
      className="grid gap-4 sm:grid-cols-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ show: { transition: { staggerChildren: reduced ? 0 : 0.08 } } }}
    >
      {PROJECTS.map((p) => (
        <motion.li
          key={p.title}
          variants={{
            hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: reduced ? 0.01 : 0.45 }}
          whileHover={reduced ? undefined : { y: -4 }}
          whileTap={reduced ? undefined : { y: -4 }}
          className="group flex flex-col border border-border bg-surface p-5 transition-shadow duration-200 hover:glow-amber"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold tracking-tight">{p.title}</h3>
            <span
              className={`label-mono shrink-0 border px-2 py-1 transition-transform duration-150 group-hover:scale-105 ${STATUS_CLASS[p.status]}`}
            >
              {p.status}
            </span>
          </div>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li key={s} className="label-mono border border-border px-2 py-1 text-[10px]">
                {s}
              </li>
            ))}
          </ul>
          <p className="label-mono mt-4 text-[10px] text-muted-foreground/70">{p.link}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export function About() {
  const facts = [
    ["Role", "Student developer, Vice Captain"],
    ["School", "PM SHRI KV AFS Sulur, Coimbatore"],
    ["Focus", "Avionics, IoT, full-stack web, JEE prep"],
    ["Location", "Coimbatore, Tamil Nadu, India"],
  ];

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <Reveal>
        <p className="text-sm leading-relaxed text-muted-foreground">
          I'm Tanish, a Class 11 student at PM SHRI KV AFS Sulur in Coimbatore, balancing JEE
          preparation with hands-on engineering. As school Vice Captain I turn observations into
          proposals; as a builder I ship real systems — an avionics payload through IIT Kharagpur's
          iKITES internship and KRITI programme, an election platform used by my whole school, and a
          learning platform for KVS students. I'm currently deepening full-stack development through
          PW Earners.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <dl className="border border-border bg-surface">
          {facts.map(([k, v]) => (
            <div key={k} className="flex gap-4 border-b border-border p-4 last:border-b-0">
              <dt className="label-mono w-24 shrink-0">{k}</dt>
              <dd className="text-sm">{v}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  );
}
