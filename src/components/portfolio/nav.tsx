import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const LINKS = [
  { href: "#about", label: "§01 About" },
  { href: "#projects", label: "§02 Projects" },
  { href: "#achievements", label: "§03 Achievements" },
  { href: "#skills", label: "§04 Skills" },
  { href: "#contact", label: "§05 Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-b border-border bg-surface/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6"
      >
        <a
          href="#top"
          className="label-mono flex items-center gap-2 text-foreground transition-colors duration-150 hover:text-primary"
        >
          <span className="inline-flex size-7 items-center justify-center border border-primary text-primary">
            GT
          </span>
          <span className="hidden sm:inline">Tanish</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="label-mono transition-colors duration-150 hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="label-mono border border-primary px-3 py-2 text-primary transition-colors duration-150 hover:bg-primary hover:text-primary-foreground"
            >
              Resume / Contact
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center border border-border text-foreground transition-colors duration-150 hover:border-primary hover:text-primary md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? { opacity: 0 } : { x: "100%" }}
            animate={reduced ? { opacity: 1 } : { x: 0 }}
            exit={reduced ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration: reduced ? 0.01 : 0.28, ease: "easeOut" }}
            className="fixed inset-y-0 right-0 z-50 w-72 border-l border-border bg-surface p-6 pt-20 md:hidden"
          >
            <ul className="flex flex-col gap-5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="label-mono block transition-colors duration-150 hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="label-mono inline-block border border-primary px-3 py-2 text-primary"
                >
                  Resume / Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
