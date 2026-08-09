import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { Section } from "@/components/portfolio/section";
import { About, Projects } from "@/components/portfolio/projects";
import { Achievements, Skills } from "@/components/portfolio/achievements";
import { Contact, Footer } from "@/components/portfolio/contact";

const TITLE = "G V Tanish Vettrivel | Full Stack Developer from Coimbatore";
const DESCRIPTION =
  "Class 11 student developer from PM SHRI KV  SULUR Coimbatore building full-stack applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gvtanish.github.io/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://gvtanish.github.io/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Tanish",
          jobTitle: "Student Developer",
          url: "https://gvtanish.github.io/",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          affiliation: { "@type": "EducationalOrganization", name: "PM SHRI KV SULUR" },
          knowsAbout: ["React", "Supabase", "Arduino", "Avionics", "IoT", "CAD"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Section id="about" index="01" title="About">
          <About />
        </Section>
        <Section id="projects" index="02" title="Projects">
          <Projects />
        </Section>
        <Section id="achievements" index="03" title="Achievements">
          <Achievements />
        </Section>
        <Section id="skills" index="04" title="Skills">
          <Skills />
        </Section>
        <Section id="contact" index="05" title="Contact">
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
