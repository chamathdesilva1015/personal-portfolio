import { useEffect, useRef, useState } from "react";

function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

/* ── Configurable bio ──────────────────────────────── */
const BIO = {
  name: "Chamath De Silva",
  paragraphs: [
    "I'm a Level 3 Computer Science student at McMaster University. My work focuses on building resilient, high-performance applications and scaling complex systems. I thrive on diving deep into the architecture—whether that means optimizing concurrent memory management in C++ or structuring programmatic data pipelines—to deliver complete, production-ready solutions.",
    "My engineering approach is rooted in solving concrete problems through scalable architecture and measurable data. From developing concurrent file search tools in C++ to engineering automated market risk engines and Python-based NLP pipelines, I focus on building systems that process complex data reliably. I'm drawn to practical coding, especially when it involves automating tedious workflows or simplifying complex problems into elegant, deployable tools."
  ],
  details: [
    { key: "INSTITUTION", value: "McMaster University" },
    { key: "PROGRAM", value: "B.A.Sc Honours Computer Science (Co-op)" },
    { key: "LEVEL", value: "Level 3 | Graduation 2027" },
    { key: "LOCATION", value: "Hamilton, Ontario (L8S 4L8)" },
    { key: "STATUS", value: "Open to Opportunities" },
  ],
};

export default function About() {
  const sectionRef = useRef(null);
  const visible = useInView(sectionRef);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-10 section-grid-border py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section header */}
        <div className={`mb-14 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-[10px] font-mono font-semibold tracking-[0.3em] text-text-light uppercase mb-2">
            02// About
          </p>
          <span className="accent-bar" />
          <h2 className="sans text-3xl sm:text-4xl md:text-5xl font-black text-text-primary uppercase tracking-tight">
            Background
          </h2>
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: headshot placeholder */}
          <div className={`lg:col-span-2 ${visible ? "animate-fade-up-delay-1" : "opacity-0"}`}>
            <div className="relative w-full aspect-[3/4] bg-neutral-100 border border-border">
              {/* Replace this with an <img> tag pointing to your headshot */}
              <img src="/headshot.jpeg" alt="Chamath De Silva" className="absolute inset-0 w-full h-full object-cover" />
              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent" />
            </div>

            {/* Metadata strip */}
            <div className="mt-3 border border-border bg-bg-code px-3 py-2">
              {BIO.details.map(({ key, value }) => (
                <p key={key} className="text-[11px] font-mono text-text-muted leading-relaxed">
                  <span className="text-accent font-semibold">{key}:</span> {value}
                </p>
              ))}
            </div>
          </div>

          {/* Right: bio */}
          <div className={`lg:col-span-3 pb-8 ${visible ? "animate-fade-up-delay-2" : "opacity-0"}`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-6 gap-2">
              <h3 className="sans text-xl sm:text-2xl font-extrabold text-text-primary uppercase tracking-tight">
                {BIO.name}
              </h3>
              <p className="text-[9px] font-mono tracking-[0.2em] text-text-light uppercase bg-bg-code border border-grid px-2 py-1">
                LOC: HAMILTON, ON // McMaster University // L3 CS
              </p>
            </div>

            <div className="space-y-4 border-l-2 border-border pl-5">
              {BIO.paragraphs.map((p, i) => (
                <p key={i} className="text-sm text-text-secondary leading-[1.8]">
                  {p}
                </p>
              ))}
            </div>



            {/* Coursework block */}
            <div className="mt-6 border border-border bg-bg-code px-4 py-3">
              <p className="text-[10px] font-mono font-bold tracking-[0.15em] text-text-light uppercase mb-2">
                Relevant Coursework
              </p>
              <p className="text-xs font-mono text-text-secondary leading-relaxed">
                Operating Systems | Data Structures and Algorithms | Software Testing | Networks and Security
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
