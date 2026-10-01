import { ExternalLink, Github } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-border">
      <SectionLabel>Projects</SectionLabel>
      <h2 className="font-display text-3xl mb-10">Selected work</h2>

      <div className="space-y-6">
        {projects.map((p) => (
          <div key={p.name} className="border border-border rounded-xl transition hover:shadow-lg">
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-2xl">{p.name}</h3>
                <span className="font-mono text-xs text-inksoft">
                  {p.period} · {p.type}
                </span>
              </div>

              <p className="mt-4 text-inksoft">{p.description}</p>

              <div className="mt-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2.5 py-1 mr-2 mb-2 inline-block bg-papersoft border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs px-4 py-2.5 inline-flex items-center gap-2 bg-ink text-paper rounded-md"
                >
                  Live Demo <ExternalLink size={13} />
                </a>
                <a
                  href={p.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs px-4 py-2.5 inline-flex items-center gap-2 border border-ink text-ink rounded-md"
                >
                  <Github size={13} /> Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
