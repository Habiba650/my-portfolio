import { ArrowUpRight } from "lucide-react";
import { profile, stats } from "../data";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-20 pb-16 grid-bg"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3">
          <div className="font-display font-semibold mb-5 text-brand-teal text-[clamp(1.35rem,3vw,2rem)] tracking-tight">
            {profile.role}
          </div>

          <h1 className="font-display font-semibold leading-[1.05] text-[clamp(2.4rem,6vw,4rem)] text-ink">
            {profile.name.split(" ").slice(0, 2).join(" ")}
            <br />
            {profile.name.split(" ").slice(2).join(" ")}
          </h1>

          <p className="mt-6 text-lg max-w-md text-inksoft">
            I build reliable web applications end to end — polished React interfaces on top of solid{" "}
            <span className="text-brand-blue font-semibold">.NET</span> backends.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="font-mono text-xs px-5 py-3 inline-flex items-center gap-2 bg-ink text-paper rounded-md transition hover:opacity-90"
            >
              View Projects <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full border border-dashed border-brand-blue scale-[1.14] opacity-30" />
            <img
              src={profileImg}
              alt={profile.name}
              className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover relative shadow-[0_24px_55px_-15px_rgba(41,82,204,0.5)]"
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-3 gap-4 border-t border-border pt-8">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-2xl md:text-3xl text-brand-blue">{s.number}</div>
            <div className="font-mono text-xs mt-1 text-inksoft">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
