import { useState, FormEvent } from "react";
import { Phone, Linkedin, Github, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { profile } from "../data";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL ?? ""}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 py-24 bg-contact text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
        <div>
          <div className="font-mono text-xs mb-4 text-[#8FA6E8]">Contact</div>
          <h2 className="font-display text-3xl md:text-4xl leading-snug max-w-md">
            Have a project in mind? Let's build it together.
          </h2>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`tel:${profile.phone}`}
              className="font-mono text-xs px-5 py-3 inline-flex items-center gap-2 bg-white text-[#14171F] rounded-md"
            >
              <Phone size={14} /> {profile.phoneDisplay}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-5 py-3 inline-flex items-center gap-2 border border-white rounded-md"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-5 py-3 inline-flex items-center gap-2 border border-white rounded-md"
            >
              <Github size={14} /> GitHub
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-mono text-xs text-white/60 block mb-1.5">Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent border border-white/25 px-4 py-2.5 outline-none focus:border-white transition"
            />
          </div>
          <div>
            <label className="font-mono text-xs text-white/60 block mb-1.5">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border border-white/25 px-4 py-2.5 outline-none focus:border-white transition"
            />
          </div>
          <div>
            <label className="font-mono text-xs text-white/60 block mb-1.5">Message</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border border-white/25 px-4 py-2.5 outline-none focus:border-white transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="font-mono text-xs px-5 py-3 inline-flex items-center gap-2 bg-brand-solid text-white rounded-md transition hover:opacity-90 disabled:opacity-60"
          >
            {status === "sending" && <Loader2 size={14} className="animate-spin" />}
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="font-mono text-xs flex items-center gap-2 text-emerald-400">
              <CheckCircle2 size={14} /> Message sent — thank you! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="font-mono text-xs flex items-center gap-2 text-red-400">
              <XCircle size={14} /> Something went wrong. Please email me directly at {profile.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
