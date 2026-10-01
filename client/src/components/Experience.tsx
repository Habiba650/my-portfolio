import { Briefcase } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20 border-t border-border">
      <SectionLabel>Experience</SectionLabel>
      <h2 className="font-display text-3xl mb-10">Where I&apos;ve worked</h2>

      <ol className="relative border-l border-border ml-3 space-y-10">
        {experience.map((e) => (
          <li key={e.title} className="pl-8 relative">
            <span className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-paper border border-border flex items-center justify-center">
              <Briefcase size={12} className="text-brand-blue" />
            </span>
            <div className="font-mono text-xs text-brand-teal">{e.tag}</div>
            <h3 className="font-display text-xl mt-1">{e.title}</h3>
            <div className="font-mono text-xs mt-1 mb-3 text-inksoft">{e.org}</div>
            <p className="text-inksoft max-w-2xl">{e.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
