import SectionLabel from "./SectionLabel";
import { about, usp } from "../data";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <SectionLabel>About</SectionLabel>

      <div className="grid md:grid-cols-3 gap-10">
        <h2 className="font-display text-3xl md:col-span-1 leading-tight">{about.heading}</h2>
        <div className="md:col-span-2 space-y-4 text-base text-inksoft">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div className="mt-12 p-6 md:p-8 bg-papersoft border border-border rounded-xl">
        <div className="font-mono text-xs mb-3 text-brand-blue">UNIQUE VALUE</div>
        <p className="font-display text-xl md:text-2xl leading-snug">"{usp.en}"</p>
      </div>
    </section>
  );
}
