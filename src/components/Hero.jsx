/* ── Configurable logo/org entries ──────────────── */
const LOGOS = [
  "McMASTER UNIVERSITY",
  "UNIVERSITY OF WATERLOO",
  "HARVARD UNIVERSITY",
  "UNIVERSITY OF TORONTO",
  "GOOGLE",
  "IEEE",
];

export default function Hero() {
  return (
    <section id="home" className="relative z-10">
      {/* ── Text content ────────────────────────── */}
      <div className="relative w-full pt-32 pb-16 sm:pb-20 px-4 md:px-8 border-b section-grid-border">
        <div className="mx-auto max-w-7xl w-full">
            {/* Section marker */}
            <p className="animate-fade-up text-[11px] font-mono font-semibold tracking-[0.3em] text-text-light mb-2 uppercase">
              01// Portfolio
            </p>
            <p className="animate-fade-up text-[11px] font-mono tracking-[0.15em] text-text-secondary mb-4">
              Software &amp; Systems Engineering | Distributed Systems | Automation &amp; ML
            </p>

            {/* Main heading */}
            <h1 className="animate-fade-up-delay-1 sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-text-primary uppercase">
              Software Engineering &amp;<br />
              <span className="text-accent">Technical Architecture</span>
            </h1>

            {/* Blurb */}
            <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-sm sm:text-base font-mono text-text-secondary leading-relaxed">
              I'm a third-year CS student at McMaster University. I spend most of my time building concurrent systems, data pipelines, and web platforms. Whether it's writing threaded C++ tools or deploying ML models, I care about how things work under the hood and what they actually achieve.
            </p>

            {/* ── Button stack ─────────────────────── */}
            <div className="animate-fade-up-delay-3 mt-8 flex flex-col sm:flex-row flex-wrap items-start gap-3">
              {/* Red CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-150 border-2 border-accent"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                GET IN TOUCH
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/chamath-de-silva"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border hover:border-text-primary text-text-secondary hover:text-text-primary bg-bg-code text-xs font-bold tracking-[0.15em] uppercase transition-all duration-150"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LINKEDIN
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/chamathdesilva1015"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border hover:border-text-primary text-text-secondary hover:text-text-primary bg-bg-code text-xs font-bold tracking-[0.15em] uppercase transition-all duration-150"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.333-1.723-1.333-1.723-1.089-.73.083-.715.083-.715 1.205.083 1.838 1.215 1.838 1.215 1.07 1.8 2.808 1.28 3.492.978.108-.76.418-1.28.762-1.575-2.665-.296-5.466-1.309-5.466-5.827 0-1.287.465-2.34 1.228-3.165-.123-.298-.532-1.497.117-3.12 0 0 1.001-.314 3.28 1.209A11.513 11.513 0 0112 6.844c1.02.005 2.047.136 3.006.398 2.277-1.523 3.276-1.209 3.276-1.209.651 1.623.242 2.822.12 3.12.765.825 1.226 1.878 1.226 3.165 0 4.53-2.805 5.527-5.475 5.818.43.364.823 1.084.823 2.185 0 1.577-.014 2.849-.014 3.236 0 .315.216.683.825.567C20.565 21.917 24 17.5 24 12.292 24 5.78 18.627.5 12 .5z" />
                </svg>
                GITHUB
              </a>

              {/* Resume */}
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border hover:border-text-primary text-text-secondary hover:text-text-primary bg-bg-code text-xs font-bold tracking-[0.15em] uppercase transition-all duration-150"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                DOWNLOAD RESUME
              </a>
            </div>
          </div>
        </div>

      {/* ── Logo bar ──────────────────────────────── */}
      <div className="relative z-10 border-t border-b border-border bg-bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-4 flex items-center gap-8 overflow-x-auto">
          <span className="text-[10px] font-mono text-text-light tracking-wider uppercase shrink-0">
            Certified&nbsp;By:
          </span>
          {LOGOS.map((name) => (
            <span
              key={name}
              className="text-[11px] font-mono font-semibold tracking-[0.12em] text-text-muted uppercase shrink-0 hover:text-text-primary transition-colors duration-150"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
