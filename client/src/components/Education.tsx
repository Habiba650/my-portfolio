import { GraduationCap, Building2 } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-20 border-t border-border">
      <SectionLabel>Education</SectionLabel>
      <h2 className="font-display text-3xl mb-10">Academic background</h2>

      <div className="space-y-5">
        {education.map((e) => (
          <div
            key={e.degree}
            className="flex flex-col sm:flex-row sm:items-center gap-5 p-6 md:p-8 border border-border rounded-xl bg-papersoft transition hover:shadow-lg"
          >
            <div className="w-14 h-14 flex-shrink-0 rounded-xl flex items-center justify-center bg-paper border border-border">
              <GraduationCap size={26} className="text-brand-blue" />
            </div>
            <div className="flex-1">
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-border bg-paper text-brand-teal">
                {e.level}
              </span>
              <h3 className="font-display text-2xl mt-3">{e.degree}</h3>
              <div className="font-mono text-sm mt-2 flex items-center gap-2 text-inksoft">
                <Building2 size={15} className="text-brand-blue" /> {e.school}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
