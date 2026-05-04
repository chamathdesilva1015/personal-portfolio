import { useEffect, useRef, useState } from "react";

function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

const PROJECTS_DATA = [
  {
    id: "A",
    title: "CanAfford (The Financial Reality Engine)",
    github: "https://github.com/chamathdesilva1015/CanAfford",
    problem:
      "Fragmented rental data leads to 'Hidden Math' blindsiding tenants. Standard platforms ignore localized grocery inflation, transit deserts, and 'Legal Silos.'",
    implementation: [
      "Developed a Financial Reality Engine that intercepts searches to inject real-time StatCan inflation and transit data.",
      "Engineered a Legal Audit Agent using a constrained LLM pipeline to parse lease PDFs, flagging specific Ontario Residential Tenancies Act (RTA) violations with verified legal citations.",
      "Built a Bi-Directional State Management system in React to autonomously sync user preferences into a dynamic behavioral model.",
    ],
    metric:
      "Solves the Information Silo by unifying Financial, Geographic, and Legal data into one dashboard.",
    archFlow: null,
    images: [
      "/canafford1.png",
      "/canafford2.png",
      "/canafford3.png",
      "/canafford4.png",
      "/canafford5.png",
    ],
  },
  {
    id: "B",
    title: "VRE | Volatility & Risk Engine",
    github: "https://github.com/chamathdesilva1015/vre",
    problem:
      "Unstructured market listings for high-value hardware (GPUs) are rife with malformed data and fraud.",
    implementation: [
      "Built an 8-Phase OOP Pipeline in Python; each class is isolated for unit testing and fail-loudly logging.",
      "Implemented Z-Score Anomaly Detection (|Z| > 2) to isolate statistical outliers in real-time.",
      "Developed a Weighted Risk Matrix: Risk = (Price_Var × 0.7) + ((100 - Trust) × 0.3), binned into Low/Med/High/Critical.",
    ],
    metric:
      "Automated alerting for >3 critical anomalies with full Excel Audit Trails.",
    archFlow: null,
  },
  {
    id: "C",
    title: "Concurrent File Search Tool (C++)",
    github: "https://github.com/chamathdesilva1015/concurrent-file-search",
    problem:
      "Sequential I/O bottlenecks when searching massive datasets (1M+ lines).",
    implementation: [
      "Engineered a Custom Thread Pool from scratch using std::condition_variable and std::unique_lock.",
      "Implemented a RAII-managed Task Queue with mutex-protected result aggregation to prevent race conditions.",
      "Utilized C++17 std::filesystem for optimized recursive directory traversal.",
    ],
    metric: "Verified 6.63x speedup (1114ms → 168ms) using 10+ worker threads.",
    archFlow:
      "[FileSearcher] -> [ThreadPool (Mutex Locked Queue)] -> [10x WorkerThreads] -> [Atomic Result Aggregator]",
  },
  {
    id: "D",
    title: "Silva's Media Tracker",
    github: "https://github.com/chamathdesilva1015/media-tracker",
    problem:
      "Bloated tracking apps lack centralization with personal communication logs (Discord).",
    implementation: [
      "Built a FastAPI/SQLModel backend with discord_sync.py to ingest data via Regex-based API parsing.",
      "Developed a Fuzzy-Year Matching System (±2 years) to solve data deduplication from manual entry errors.",
      "UI optimized with Skeleton Loading States and Glassmorphism for high perceived performance.",
    ],
    metric: "Zero-overhead data ingestion from Discord message logs.",
    archFlow: null,
    images: [
      "/Silva's Media Tracker/1.png",
      "/Silva's Media Tracker/2.png",
      "/Silva's Media Tracker/3.png",
      "/Silva's Media Tracker/4.png",
      "/Silva's Media Tracker/5.png",
      "/Silva's Media Tracker/6.png",
      "/Silva's Media Tracker/7.png",
    ],
  },
  {
    id: "E",
    title: "AI/ML Stock Prediction Engine",
    github: "https://github.com/chamathdesilva1015/ai-ml-stock-prediction-web",
    problem:
      "Retail market analysis relies on lagging indicators, failing to capture complex, multi-variable technical patterns.",
    implementation: [
      "Built a Python prediction engine using ensemble machine learning models to forecast asset trends.",
      "Engineered a scalable feature pipeline utilizing quantitative metrics (e.g., RSI, MACD, Bollinger Bands).",
      "Deployed a full-stack web interface to visualize technical data and statistical model confidence in real-time."
    ],
    metric: "Automated functional feature engineering for predictive market analysis.",
    archFlow: null,
  },
];

function DocProject({ proj, index, visible }) {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div
      className={`border-b-2 border-border py-10 last:border-b-0 ${
        visible ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Header Column: ID, Title & Code Button */}
        <div className="lg:col-span-3 flex flex-col items-start gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-accent uppercase mb-1 block">
              PROJECT_{proj.id}
            </span>
            <h3 className="sans text-xl font-extrabold text-text-primary uppercase tracking-tight leading-tight">
              {proj.title}
            </h3>
          </div>
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-border hover:border-text-primary text-text-secondary hover:text-text-primary transition-colors duration-150 bg-bg-code text-[11px] font-mono font-semibold tracking-wider uppercase"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.333-1.723-1.333-1.723-1.089-.73.083-.715.083-.715 1.205.083 1.838 1.215 1.838 1.215 1.07 1.8 2.808 1.28 3.492.978.108-.76.418-1.28.762-1.575-2.665-.296-5.466-1.309-5.466-5.827 0-1.287.465-2.34 1.228-3.165-.123-.298-.532-1.497.117-3.12 0 0 1.001-.314 3.28 1.209A11.513 11.513 0 0112 6.844c1.02.005 2.047.136 3.006.398 2.277-1.523 3.276-1.209 3.276-1.209.651 1.623.242 2.822.12 3.12.765.825 1.226 1.878 1.226 3.165 0 4.53-2.805 5.527-5.475 5.818.43.364.823 1.084.823 2.185 0 1.577-.014 2.849-.014 3.236 0 .315.216.683.825.567C20.565 21.917 24 17.5 24 12.292 24 5.78 18.627.5 12 .5z" />
            </svg>
            SOURCE
          </a>
        </div>

        {/* Content Column: Problem, Implementation, Metric */}
        <div className="lg:col-span-9 flex flex-col gap-6">
          {/* Problem Statement */}
          <div>
            <span className="text-[10px] font-mono font-bold text-text-light uppercase tracking-widest border-b border-border pb-1 mb-2 block">
              1.0 Define Problem Context
            </span>
            <p className="font-mono text-sm text-text-primary leading-[1.7] border-l-2 border-accent pl-4">
              {proj.problem}
            </p>
          </div>

          {/* Implementation Detail */}
          <div className="bg-bg-white border-2 border-border p-5">
            <span className="text-[10px] font-mono font-bold text-text-light uppercase tracking-widest block mb-4 border-b border-grid pb-2">
              2.0 Implementation (The "Work")
            </span>
            <ul className="space-y-3 font-mono text-xs text-text-secondary">
              {proj.implementation.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0 select-none">▸</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            {proj.archFlow && (
              <div className="mt-5 p-3 bg-bg-code border border-dashed border-grid overflow-x-auto">
                <span className="text-[9px] font-mono tracking-widest text-text-muted uppercase block mb-1">
                  Architecture Flow:
                </span>
                <code className="text-[10px] font-mono text-accent whitespace-pre">
                  {proj.archFlow}
                </code>
              </div>
            )}
            
            {proj.images && (
              <div className="mt-5 border border-border bg-bg-code p-2 relative group">
                <img 
                  src={proj.images[currentImg]} 
                  alt={`Screenshot ${currentImg+1}`} 
                  className="w-full h-auto object-cover border border-grid max-h-[500px]" 
                />
                
                {proj.images.length > 1 && (
                  <>
                    <button 
                      onClick={() => setCurrentImg(p => (p > 0 ? p - 1 : proj.images.length - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white px-3 py-2 font-mono text-xs border border-white/20 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      &larr;
                    </button>
                    <button 
                      onClick={() => setCurrentImg(p => (p < proj.images.length - 1 ? p + 1 : 0))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white px-3 py-2 font-mono text-xs border border-white/20 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      &rarr;
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {proj.images.map((_, i) => (
                        <div key={i} className={`w-2 h-2 ${i === currentImg ? 'bg-accent' : 'bg-white/40'} shadow-sm`} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Technical Metric */}
          <div className="flex items-start gap-4">
            <div className="px-2 py-1 bg-text-primary text-bg-primary text-[10px] font-black font-mono tracking-widest uppercase shrink-0 mt-0.5">
              METRIC
            </div>
            <p className="font-mono text-xs sm:text-sm font-semibold tracking-wide text-text-primary">
              {proj.metric}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const visible = useInView(sectionRef);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative z-10 section-grid-border py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header Block */}
        <div className={`mb-12 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="flex items-center justify-between border-b-4 border-text-primary pb-4 mb-4">
            <div>
              <p className="text-[10px] font-mono font-bold tracking-[0.3em] text-accent uppercase mb-1">
                05// Active Engineering Log
              </p>
              <h2 className="sans text-4xl sm:text-5xl font-black text-text-primary uppercase tracking-tighter">
                Architecture &amp; Documentation
              </h2>
            </div>
          </div>
          <p className="text-sm font-mono text-text-secondary max-w-3xl leading-relaxed">
            Detailed breakdown of system architecture, concurrent workloads, and full-stack implementations. 
            Information density takes precedence over white space. Every project identifies a structural 
            problem and outlines the granular technical action taken to produce a measurable result.
          </p>
        </div>

        {/* Documentation Items */}
        <div className="border-t-2 border-text-primary pt-2">
          {PROJECTS_DATA.map((proj, idx) => (
            <DocProject key={proj.id} proj={proj} index={idx} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
