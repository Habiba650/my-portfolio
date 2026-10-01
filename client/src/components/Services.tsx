import { Sparkles } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { services } from "../data";

export default function Services() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 border-t border-border">
      <SectionLabel>Services</SectionLabel>
      <h2 className="font-display text-3xl mb-10">How I can help</h2>

      <div className="grid md:grid-cols-2 gap-5">
        {services.map((s) => (
          <div key={s} className="flex gap-3 p-4 bg-papersoft rounded-lg">
            <Sparkles size={16} className="text-brand-blue flex-shrink-0 mt-1" />
            <span className="text-ink">{s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
