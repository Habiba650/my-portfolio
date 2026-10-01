import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS: [string, string][] = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Projects", "projects"],
  ["Achievements", "achievements"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-border shadow-[0_1px_12px_rgba(20,23,31,0.04)]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold text-ink">
          Habiba<span className="text-brand-blue">.</span>
        </a>

        <nav className="hidden lg:flex gap-7">
          {NAV_LINKS.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="font-mono text-xs uppercase tracking-wide text-inksoft hover:text-brand-blue transition"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="lg:hidden text-ink" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden px-6 pb-4 flex flex-col gap-3 border-t border-border">
          {NAV_LINKS.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="font-mono text-xs uppercase pt-3 text-inksoft"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
