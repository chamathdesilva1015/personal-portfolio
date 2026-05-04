import { useEffect, useRef, useState } from "react";

function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

/* ── Configurable social links ─────────────────────── */
const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/chamathdesilva1015",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.333-1.723-1.333-1.723-1.089-.73.083-.715.083-.715 1.205.083 1.838 1.215 1.838 1.215 1.07 1.8 2.808 1.28 3.492.978.108-.76.418-1.28.762-1.575-2.665-.296-5.466-1.309-5.466-5.827 0-1.287.465-2.34 1.228-3.165-.123-.298-.532-1.497.117-3.12 0 0 1.001-.314 3.28 1.209A11.513 11.513 0 0112 6.844c1.02.005 2.047.136 3.006.398 2.277-1.523 3.276-1.209 3.276-1.209.651 1.623.242 2.822.12 3.12.765.825 1.226 1.878 1.226 3.165 0 4.53-2.805 5.527-5.475 5.818.43.364.823 1.084.823 2.185 0 1.577-.014 2.849-.014 3.236 0 .315.216.683.825.567C20.565 21.917 24 17.5 24 12.292 24 5.78 18.627.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/chamath-de-silva",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:chamathdesilva975@gmail.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

const CERTIFICATIONS = [
  "Google Project Management",
  "CS50: Introduction to Cybersecurity",
  "UofT Machine Learning",
  "CS50x: Computer Science",
];

export default function Contact() {
  const sectionRef = useRef(null);
  const visible = useInView(sectionRef);
  const year = new Date().getFullYear();
  const buildDate = new Date().toLocaleDateString("en-CA");

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="relative z-10 section-grid-border"
    >
      {/* Contact section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* Section header */}
          <div className={`mb-12 ${visible ? "animate-fade-up" : "opacity-0"}`}>
            <p className="text-[10px] font-mono font-semibold tracking-[0.3em] text-text-light uppercase mb-2">
              06// Connect
            </p>
            <span className="accent-bar" />
            <h2 className="sans text-3xl sm:text-4xl md:text-5xl font-black text-text-primary uppercase tracking-tight">
              Get In Touch
            </h2>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${visible ? "animate-fade-up-delay-1" : "opacity-0"}`}>
            {/* Left: text */}
            <div>
              <p className="text-sm font-mono text-text-secondary leading-[1.8] max-w-md">
                I&apos;m always open to new opportunities, co-op placements, collaborations, or
                conversations about systems engineering, constrained AI pipelines, and open-source
                tooling. Based in Ontario — reach out through any channel below.
              </p>

              {/* Direct Info */}
              <div className="mt-6 border-t border-dashed border-grid pt-4 max-w-md text-xs font-mono text-text-secondary leading-relaxed">
                <p className="mb-1"><span className="text-text-primary font-bold">Email: </span>chamathdesilva975@gmail.com</p>
                <p className="mb-1"><span className="text-text-primary font-bold">Location: </span>Hamilton, Ontario</p>
                <p className="text-text-light mt-4 italic">* Typical response time &lt; 24h</p>
              </div>
            </div>

            {/* Right: large icon buttons */}
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 border border-border bg-bg-white px-5 py-4 hover:border-neutral-400 transition-all duration-150"
                >
                  <div className="text-text-light group-hover:text-accent transition-colors duration-150">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold tracking-[0.1em] text-text-primary uppercase">
                      {label}
                    </p>
                    <p className="text-[10px] font-mono text-text-light">
                      {href.replace("mailto:", "").replace("https://", "")}
                    </p>
                  </div>
                  <svg className="w-4 h-4 ml-auto text-text-light group-hover:text-accent group-hover:translate-x-1 transition-all duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Utilitarian footer bar ─────────────────── */}
      <div className="border-t border-border bg-bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-5">
          {/* Education line */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-dashed border-grid">
            <p className="text-[11px] font-mono text-text-secondary">
              <span className="text-accent font-semibold">EDUCATION:</span> Candidate for B.A.Sc, McMaster University | Graduation 2027
            </p>
            <p className="text-[10px] font-mono text-text-light">
              Hamilton, Ontario (L8S 4L8)
            </p>
          </div>

          {/* Certifications row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4">
            <span className="text-[10px] font-mono font-semibold text-text-light tracking-wider uppercase">
              Certified:
            </span>
            {CERTIFICATIONS.map((cert) => (
              <span key={cert} className="text-[10px] font-mono text-text-muted">
                {cert}
              </span>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[10px] font-mono text-text-light tracking-wide">
              &copy; {year} Chamath De Silva. Built with React + Tailwind CSS.
            </p>
            <p className="text-[10px] font-mono text-text-light tracking-wide">
              v1.2-beta | git:a7b8c9d | Last Updated: {buildDate}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
