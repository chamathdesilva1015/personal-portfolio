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

/* ── Skill matrix data ─────────────────────────────── */
const SKILL_CATEGORIES = [
  {
    title: "LANGUAGES & TECHNOLOGIES",
    codeSnippet: "int main(int argc, char *argv[])",
    skills: [
      { name: "C++", tag: "PRIMARY" },
      { name: "Python", tag: "PRIMARY" },
      { name: "Java", tag: "PRIMARY" },
      { name: "JavaScript", tag: "PRIMARY" },
      { name: "TypeScript", tag: "GROWING" },
      { name: "SQL", tag: "DATA" },
      { name: "Haskell", tag: "ACADEMIC" },
      { name: "R", tag: "STATISTICAL" },
      { name: "C#", tag: "APPLIED" },
    ],
  },
  {
    title: "SYSTEMS & TOOLS",
    codeSnippet: "void systems_ops(int sys_id)",
    skills: [
      { name: "Linux (Ubuntu)", tag: "PRIMARY" },
      { name: "Docker", tag: "DEPLOY" },
      { name: "Git", tag: "DAILY" },
      { name: "GDB", tag: "DEBUG" },
      { name: "Valgrind", tag: "MEMORY" },
      { name: "Make/CMake", tag: "BUILD" },
      { name: "Cisco Packet Tracer", tag: "NETWORK" },
      { name: "OSPF/DHCP Routing", tag: "PROTOCOL" },
    ],
  },
  {
    title: "APIs & FRAMEWORKS",
    codeSnippet: "app.listen(PORT, () => init())",
    skills: [
      { name: "React", tag: "PRIMARY" },
      { name: "Next.js", tag: "FULLSTACK" },
      { name: "Flask", tag: "API" },
      { name: "Django", tag: "BACKEND" },
      { name: "Spring Boot", tag: "ENTERPRISE" },
      { name: "PyTorch", tag: "ML" },
      { name: "TensorFlow", tag: "ML" },
      { name: "Google Gemini", tag: "LLM" },
      { name: "Vultr", tag: "CLOUD" },
      { name: "Backboard API", tag: "DATA" },
    ],
  },
  {
    title: "CORE CONCEPTS",
    codeSnippet: "pthread_create(&tid, NULL, fn, arg)",
    skills: [
      { name: "Multi-threaded Programming", tag: "SYSTEMS" },
      { name: "RAII Resource Management", tag: "C++" },
      { name: "Synchronization (Mutexes/Atomics)", tag: "CONCURRENCY" },
      { name: "Formal Verification (Petri Nets)", tag: "TAPAAL" },
      { name: "AI/ML Feature Engineering", tag: "DATA" },
      { name: "CI/CD Pipelines", tag: "DEVOPS" },
      { name: "REST API Design", tag: "ARCHITECTURE" },
      { name: "Agile/Scrum", tag: "PROCESS" },
    ],
  },
];

function SkillCard({ category, index, visible }) {
  return (
    <div
      className={`border border-border bg-bg-white hover:border-neutral-400 transition-colors duration-200 ${
        visible ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Card header */}
      <div className="border-b border-border px-5 py-4">
        <p className="text-[10px] font-mono text-text-light tracking-wider mb-1">
          QUADRANT_{String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="sans text-sm font-extrabold text-text-primary tracking-[0.08em] uppercase">
          {category.title}
        </h3>
        <p className="mt-2 text-[11px] font-mono text-accent bg-bg-code border border-border px-2 py-1 inline-block">
          {category.codeSnippet}
        </p>
      </div>

      {/* Skill rows */}
      <div className="px-5 py-4">
        {category.skills.map(({ name, tag }) => (
          <div
            key={name}
            className="flex items-center justify-between py-1.5 border-b border-dashed border-grid last:border-b-0 group"
          >
            <span className="text-xs font-mono text-text-secondary group-hover:text-text-primary transition-colors duration-150">
              {name}
            </span>
            <span className="text-[9px] font-mono font-semibold tracking-[0.1em] text-text-light border border-border px-1.5 py-0.5 group-hover:text-accent group-hover:border-accent transition-all duration-150 shrink-0 ml-2">
              [{tag}]
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const visible = useInView(sectionRef);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative z-10 section-grid-border py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section header */}
        <div className={`mb-14 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-[10px] font-mono font-semibold tracking-[0.3em] text-text-light uppercase mb-2">
            03// Capabilities
          </p>
          <span className="accent-bar" />
          <h2 className="sans text-3xl sm:text-4xl md:text-5xl font-black text-text-primary uppercase tracking-tight">
            Technical Expertise
          </h2>
          <p className="mt-3 text-sm font-mono text-text-muted max-w-2xl leading-relaxed">
            A structured overview of languages, tools, frameworks, and core concepts.
            Each skill is tagged with its primary usage context within my workflow.
          </p>
        </div>

        {/* 4-quadrant matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-border">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} visible={visible} />
          ))}
        </div>

        {/* Footer note */}
        <p className={`mt-4 text-[10px] font-mono text-text-light ${visible ? "animate-fade-up-delay-3" : "opacity-0"}`}>
          * Tags represent usage frequency and domain context, not proficiency level.
          Continuously expanding — last updated {new Date().toLocaleDateString("en-CA")}.
        </p>
      </div>
    </section>
  );
}
