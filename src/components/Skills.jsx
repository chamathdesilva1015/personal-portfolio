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

/* ── Relational Skill Matrix Data ──────────────────── */
const SKILL_CATEGORIES = [
  {
    title: "LANGUAGES & TECHNOLOGIES",
    codeSnippet: "int main(int argc, char *argv[])",
    skills: [
      { id: "cpp", name: "C++", tag: "PRIMARY", relations: ["linux", "gdb", "valgrind", "make", "raii", "multi-thread", "sync"] },
      { id: "python", name: "Python", tag: "PRIMARY", relations: ["flask", "django", "pytorch", "tensorflow", "ml-feat", "gemini", "backboard"] },
      { id: "java", name: "Java", tag: "PRIMARY", relations: ["spring", "multi-thread"] },
      { id: "js", name: "JavaScript", tag: "PRIMARY", relations: ["react", "nextjs"] },
      { id: "ts", name: "TypeScript", tag: "GROWING", relations: ["react", "nextjs"] },
      { id: "sql", name: "SQL", tag: "DATA", relations: ["flask", "django"] },
      { id: "haskell", name: "Haskell", tag: "ACADEMIC", relations: [] },
      { id: "r", name: "R", tag: "STATISTICAL", relations: ["ml-feat"] },
      { id: "csharp", name: "C#", tag: "APPLIED", relations: [] },
    ],
  },
  {
    title: "SYSTEMS & TOOLS",
    codeSnippet: "void systems_ops(int sys_id)",
    skills: [
      { id: "linux", name: "Linux (Ubuntu)", tag: "PRIMARY", relations: ["cpp", "docker", "gdb", "make", "valgrind", "vultr", "cicd"] },
      { id: "docker", name: "Docker", tag: "DEPLOY", relations: ["linux", "cicd", "vultr", "flask", "django", "spring"] },
      { id: "git", name: "Git", tag: "DAILY", relations: ["cicd", "agile"] },
      { id: "gdb", name: "GDB", tag: "DEBUG", relations: ["cpp", "linux"] },
      { id: "valgrind", name: "Valgrind", tag: "MEMORY", relations: ["cpp", "linux"] },
      { id: "make", name: "Make/CMake", tag: "BUILD", relations: ["cpp", "linux"] },
      { id: "packet-tracer", name: "Cisco Packet Tracer", tag: "NETWORK", relations: ["ospf"] },
      { id: "ospf", name: "OSPF/DHCP Routing", tag: "PROTOCOL", relations: ["packet-tracer"] },
    ],
  },
  {
    title: "APIs & FRAMEWORKS",
    codeSnippet: "app.listen(PORT, () => init())",
    skills: [
      { id: "react", name: "React", tag: "PRIMARY", relations: ["js", "ts", "nextjs", "rest"] },
      { id: "nextjs", name: "Next.js", tag: "FULLSTACK", relations: ["react", "ts", "js", "rest"] },
      { id: "flask", name: "Flask", tag: "API", relations: ["python", "sql", "rest", "docker"] },
      { id: "django", name: "Django", tag: "BACKEND", relations: ["python", "sql", "rest", "docker"] },
      { id: "spring", name: "Spring Boot", tag: "ENTERPRISE", relations: ["java", "rest", "docker"] },
      { id: "pytorch", name: "PyTorch", tag: "ML", relations: ["python", "ml-feat"] },
      { id: "tensorflow", name: "TensorFlow", tag: "ML", relations: ["python", "ml-feat"] },
      { id: "gemini", name: "Google Gemini", tag: "LLM", relations: ["python", "rest"] },
      { id: "vultr", name: "Vultr", tag: "CLOUD", relations: ["docker", "linux", "cicd"] },
      { id: "backboard", name: "Backboard API", tag: "DATA", relations: ["python", "rest"] },
    ],
  },
  {
    title: "CORE CONCEPTS",
    codeSnippet: "pthread_create(&tid, NULL, fn, arg)",
    skills: [
      { id: "multi-thread", name: "Multi-threaded Programming", tag: "SYSTEMS", relations: ["cpp", "java", "sync"] },
      { id: "raii", name: "RAII Resource Management", tag: "C++", relations: ["cpp"] },
      { id: "sync", name: "Synchronization (Mutexes/Atomics)", tag: "CONCURRENCY", relations: ["cpp", "multi-thread"] },
      { id: "tapaal", name: "Formal Verification (Petri Nets)", tag: "TAPAAL", relations: [] },
      { id: "ml-feat", name: "AI/ML Feature Engineering", tag: "DATA", relations: ["python", "r", "pytorch", "tensorflow"] },
      { id: "cicd", name: "CI/CD Pipelines", tag: "DEVOPS", relations: ["git", "docker", "vultr", "linux"] },
      { id: "rest", name: "REST API Design", tag: "ARCHITECTURE", relations: ["flask", "django", "spring", "react", "nextjs"] },
      { id: "agile", name: "Agile/Scrum", tag: "PROCESS", relations: ["git"] },
    ],
  },
];

function SkillCard({ category, index, visible, hoveredSkill, setHoveredSkill, searchQuery }) {
  return (
    <div
      className={`border border-border bg-bg-white transition-colors duration-200 ${
        visible ? "animate-fade-up" : "opacity-0"
      } ${!hoveredSkill && !searchQuery ? "hover:border-neutral-400" : ""}`}
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
        {category.skills.map((skill) => {
          // Determine search visibility
          const query = searchQuery.toLowerCase();
          const matchesSearch = !query || skill.name.toLowerCase().includes(query) || skill.tag.toLowerCase().includes(query);

          // Determine hover relational state
          let interactionState = "default";
          if (hoveredSkill) {
            if (hoveredSkill.id === skill.id) {
              interactionState = "active";
            } else if (hoveredSkill.relations.includes(skill.id)) {
              interactionState = "related";
            } else {
              interactionState = "dimmed";
            }
          }

          // If it doesn't match search, force dim (overrides hover state visually)
          if (!matchesSearch) {
            interactionState = "dimmed";
          }

          // Compute dynamic classes
          let containerClasses = "border-b border-dashed border-grid last:border-b-0 py-1.5 transition-all duration-300 flex items-center justify-between group cursor-pointer ";
          let textClasses = "text-xs font-mono transition-colors duration-300 ";
          let tagClasses = "text-[9px] font-mono font-semibold tracking-[0.1em] px-1.5 py-0.5 transition-all duration-300 shrink-0 ml-2 border ";

          if (interactionState === "active") {
            containerClasses += "bg-accent/5 px-2 -mx-2 border-accent/20 ";
            textClasses += "text-accent font-bold ";
            tagClasses += "text-accent border-accent bg-accent/10 ";
          } else if (interactionState === "related") {
            containerClasses += "bg-text-primary/5 px-2 -mx-2 border-text-primary/20 ";
            textClasses += "text-text-primary font-bold ";
            tagClasses += "text-text-primary border-text-primary bg-text-primary/5 ";
          } else if (interactionState === "dimmed") {
            containerClasses += "opacity-20 pointer-events-none ";
            textClasses += "text-text-secondary ";
            tagClasses += "text-text-light border-border ";
          } else {
            // Default
            textClasses += "text-text-secondary group-hover:text-text-primary ";
            tagClasses += "text-text-light border-border group-hover:text-accent group-hover:border-accent ";
          }

          return (
            <div
              key={skill.id}
              className={containerClasses}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <span className={textClasses}>{skill.name}</span>
              <span className={tagClasses}>[{skill.tag}]</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const visible = useInView(sectionRef);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="sans text-3xl sm:text-4xl md:text-5xl font-black text-text-primary uppercase tracking-tight">
                Technical Expertise
              </h2>
              <p className="mt-3 text-sm font-mono text-text-muted max-w-2xl leading-relaxed">
                A structured overview of languages, tools, frameworks, and core concepts.
                Hover over any skill to map its usage context and relational ecosystem across my workflow.
              </p>
            </div>
            
            {/* Terminal Search Filter */}
            <div className="w-full md:w-72 border border-border bg-bg-white p-1 focus-within:border-accent transition-colors flex items-center shadow-sm">
              <span className="text-accent font-mono font-bold pl-2 pr-2 select-none">&gt; grep -i</span>
              <input 
                type="text" 
                className="w-full bg-transparent border-none outline-none font-mono text-xs text-text-primary placeholder:text-text-light py-1.5 focus:ring-0"
                placeholder='"skill or context"'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                spellCheck="false"
              />
              <span className={`w-2 h-4 bg-accent animate-pulse mr-2 ${searchQuery ? 'opacity-0' : 'opacity-100'}`} />
            </div>
          </div>
        </div>

        {/* 4-quadrant matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-border relative">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCard 
              key={cat.title} 
              category={cat} 
              index={i} 
              visible={visible} 
              hoveredSkill={hoveredSkill}
              setHoveredSkill={setHoveredSkill}
              searchQuery={searchQuery}
            />
          ))}
        </div>

        {/* Footer note */}
        <p className={`mt-4 text-[10px] font-mono text-text-light ${visible ? "animate-fade-up-delay-3" : "opacity-0"}`}>
          * Dynamic mapping initialized. Tags represent usage frequency and domain context, not proficiency level.
          Continuously expanding — last updated {new Date().toLocaleDateString("en-CA")}.
        </p>
      </div>
    </section>
  );
}
