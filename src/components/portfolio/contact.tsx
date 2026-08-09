import { useState } from "react";
import { Reveal } from "./section";

const EMAIL = "tanish@example.com"; // [ADD EMAIL ADDRESS]

export function Contact() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject || "Hello Tanish")}&body=${encodeURIComponent(message)}`;

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <Reveal>
        <dl className="border border-border bg-surface">
          {[
            ["Email", EMAIL, `mailto:${EMAIL}`],
            ["GitHub", "github.com/gvtanish", "[ADD GITHUB PROFILE LINK]"],
            ["LinkedIn", "[ADD LINKEDIN LINK]", "[ADD LINKEDIN LINK]"],
          ].map(([k, v, href]) => (
            <div key={k} className="flex gap-4 border-b border-border p-4 last:border-b-0">
              <dt className="label-mono w-20 shrink-0">{k}</dt>
              <dd className="text-sm break-all">
                <a
                  href={href}
                  className="transition-colors duration-150 hover:text-primary hover:underline"
                >
                  {v}
                </a>
              </dd>
            </div>
          ))}
        </dl>
        <p className="label-mono mt-4">Resume: [ADD RESUME PDF LINK]</p>
      </Reveal>

      <Reveal delay={0.1}>
        <form
          className="flex flex-col gap-4 border border-border bg-surface p-5"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailto;
          }}
        >
          <div>
            <label htmlFor="subject" className="label-mono">
              Subject
            </label>
            <input
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-2 w-full border border-border bg-background px-3 py-2 text-sm transition-colors duration-150 focus:border-primary focus:outline-none"
              placeholder="Collaboration / question"
            />
          </div>
          <div>
            <label htmlFor="message" className="label-mono">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full resize-none border border-border bg-background px-3 py-2 text-sm transition-colors duration-150 focus:border-primary focus:outline-none"
              placeholder="Write your transmission..."
            />
          </div>
          <button
            type="submit"
            className="label-mono border border-primary bg-primary px-4 py-2.5 text-primary-foreground transition-colors duration-150 hover:bg-transparent hover:text-primary"
          >
            Send via email
          </button>
        </form>
      </Reveal>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-6">
        <p className="label-mono">Log entry closed // Next update: ongoing</p>
        <p className="label-mono">© {new Date().getFullYear()} Tanish</p>
      </div>
    </footer>
  );
}
