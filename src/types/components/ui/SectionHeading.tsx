interface Props {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ label, title, subtitle }: Props) {
  return (
    <div className="mb-14 text-center">
      <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase text-[var(--accent)] bg-[var(--accent-muted)] px-3 py-1 rounded-full mb-4">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--muted)] max-w-xl mx-auto text-sm sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}