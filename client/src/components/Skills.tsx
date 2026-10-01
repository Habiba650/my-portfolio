import { Languages, Code2, HeartHandshake, Wrench } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { skillGroups } from "../data";

const ICONS = [Languages, Code2, HeartHandshake, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20 border-t border-border">
      <SectionLabel>Skills</SectionLabel>
      <h2 className="font-display text-3xl mb-10">What I work with</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          return (
            <div
              key={group.title}
              className="p-6 border border-border rounded-xl transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-papersoft border border-border">
                  <Icon size={18} className="text-brand-blue" />
                </div>
                <h3 className="font-display text-xl">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-xs px-3 py-1.5 rounded-full bg-papersoft border border-border text-inksoft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
