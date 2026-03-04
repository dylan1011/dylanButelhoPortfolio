import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="page-wrap bg-[var(--portfolio-bg)] dark:bg-[var(--portfolio-black)]">
      <div className="max-w-4xl mx-auto section-padding pt-4 lg:pt-6 pb-16 lg:pb-[120px] px-6 lg:px-12">
        <div className="section-header flex flex-wrap gap-8">
          <div>
            <p className="section-label">Writing</p>
            <h1 className="section-title">
              <span className="accent-blue">Blog</span>
            </h1>
          </div>
        </div>
        <div className="py-16 rounded-lg border border-black/[0.08] dark:border-white/10 bg-[var(--portfolio-white)] dark:bg-[var(--portfolio-black)] flex flex-col items-center justify-center text-center">
          <p className="section-sub max-w-none mb-6">Coming soon.</p>
          <Link href="/" className="font-mono text-[0.72rem] font-bold tracking-wide text-[var(--portfolio-blue)] hover:underline no-underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
