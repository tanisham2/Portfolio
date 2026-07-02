import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4 text-center px-4">
      <p className="font-mono text-7xl font-bold gradient-text">404</p>
      <h1 className="text-2xl font-bold text-[var(--foreground)]">
        Page not found
      </h1>
      <p className="text-[var(--muted)] text-sm">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-4 px-5 py-2.5 bg-[var(--accent)] text-white rounded-lg text-sm font-medium hover:bg-[var(--accent-dark)] transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}