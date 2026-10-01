export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-xs mb-4 inline-block px-2 py-1 border border-border text-brand-teal tracking-wide">
      {children}
    </div>
  );
}
