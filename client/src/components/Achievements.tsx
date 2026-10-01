import { useState } from "react";
import SectionLabel from "./SectionLabel";
import { achievements } from "../data";
import certCSharp from "../assets/cert-csharp.png";
import certSql from "../assets/cert-sql.png";

const IMAGES: Record<string, string> = {
  "cert-csharp.png": certCSharp,
  "cert-sql.png": certSql,
};

export default function Achievements() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="achievements" className="max-w-5xl mx-auto px-6 py-20 border-t border-border">
      <SectionLabel>Achievements</SectionLabel>
      <h2 className="font-display text-3xl mb-10">Certifications</h2>

      <div className="grid md:grid-cols-2 gap-5">
        {achievements.map((c) => (
          <button
            key={c.title}
            onClick={() => setActive(IMAGES[c.image])}
            className="text-left border border-border rounded-xl overflow-hidden transition hover:shadow-lg"
          >
            <img src={IMAGES[c.image]} alt={c.title} className="w-full h-40 object-cover object-top" />
            <div className="p-5">
              <h3 className="font-display text-base leading-snug">{c.title}</h3>
              <div className="font-mono text-xs mt-2 text-inksoft">{c.org}</div>
              <div className="font-mono text-xs mt-1 text-brand-teal">
                {c.score} · {c.date}
              </div>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <img src={active} alt="Certificate" className="max-w-3xl w-full rounded shadow-2xl" />
        </div>
      )}
    </section>
  );
}
