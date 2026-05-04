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
    title: "Architect",
    github: "https://github.com/chamathdesilva1015/architect",
    problem: "The 'Blank Page' problem causes significant friction when launching complex systems, leading to inconsistent architecture and slowed development velocity.",
    solution: "A data-driven Scaffolding Engine using Jinja2 templates to generate performance-first, decoupled boilerplate across multiple languages (Python, C++, JS).",
    function: "Enables users to rapidly sketch ideas (SKETCH.md) and instantly generate verified architectural blueprints for web apps, ML pipelines, or concurrent systems.",
    highlights: [
      "Engineered a 'Founder's Vault' to persist technical history using a local JSON-based state management system.",
      "Implemented a Live-Serve automation layer using Python's http.server and webbrowser modules.",
      "Strict separation of concerns between Domain, API, and UI layers in all generated output."
    ],
    collaborators: "Solo Project",
    metric: "Go from 'Idea Sketch' to 'Running Web App' in < 10 seconds.",
    archFlow: "[User Command] -> [Typer CLI] -> [Jinja2 Render Engine] -> [Founder's Vault (JSON Log)] -> [File System Injection]",
  },
  {
    id: "B",
    title: "CanAfford",
    github: "https://github.com/chamathdesilva1015/CanAfford",
    problem: "Fragmented rental data leads to 'Hidden Math' blindsiding tenants. Standard platforms ignore localized inflation, transit deserts, and legal lease traps.",
    solution: "A localized real estate engine that aggregates StatCan inflation data, real-time transit costs, and uses constrained LLMs to audit lease contracts for legal red flags.",
    function: "Computes the 'True Cost' of survival in a property and acts as a digital paralegal to void illegal lease clauses using the Ontario RTA as a knowledge base.",
    highlights: [
      "Engineered an AI Lease Advocate using Gemini 2.5 Flash with strict JSON schemas to strip away hallucinations.",
      "Built a Bi-Directional State Management system with Backboard API to autonomously sync revealed user behaviors.",
      "Integrated ElevenLabs Voice AI to generate accessible audio briefs of dense financial and legal audits."
    ],
    collaborators: "Solo Project",
    metric: "Unifies Financial, Geographic, and Legal silos into a single high-density dashboard.",
    archFlow: "[Rent Data] + [StatCan API] + [Legal PDF] -> [Gemini Analytical Engine] -> [Backboard Memory Vault]",
    images: [
      "/canafford1.png",
      "/canafford2.png",
      "/canafford3.png",
      "/canafford4.png",
      "/canafford5.png",
    ],
  },
  {
    id: "C",
    title: "Volatility Risk Engine",
    github: "https://github.com/chamathdesilva1015/volatility-risk-engine",
    problem: "Unstructured market listings for high-value hardware (GPUs) are rife with malformed data and fraud, making safe purchase decisions difficult.",
    solution: "An automated 8-phase Python OOP pipeline that cleans noisy data, detects statistical anomalies, and generates weighted risk scores.",
    function: "Monitors asset markets to isolate fraudulent or malformed listings and produces professional-grade Excel audit trails with visual volatility charts.",
    highlights: [
      "Implemented Z-Score Anomaly Detection (|Z| > 2) to isolate price outliers in real-time.",
      "Developed a Weighted Risk Matrix combining price variance and seller trust scores into a 4-tier risk classification.",
      "Automated PDF/PNG dashboard generation using Matplotlib and Seaborn for technical trend visualization."
    ],
    collaborators: "Solo Project",
    metric: "Automated alerting for >3 critical anomalies with full Excel Audit Trails.",
    archFlow: "[Raw Listings] -> [OOP Cleaning Class] -> [Statistical Analyzer] -> [Risk Matrix] -> [Excel/PNG Output]",
  },
  {
    id: "D",
    title: "Concurrent File Search",
    github: "https://github.com/chamathdesilva1015/concurrent-file-search",
    problem: "Sequential I/O bottlenecks cause massive slowdowns when searching for keywords across large-scale directory trees (1M+ lines of text).",
    solution: "A high-performance C++17 system utilizing a custom thread pool architecture to parallelize file I/O and keyword matching.",
    function: "Recursively traverses complex file systems to find string matches, utilizing all available CPU cores to minimize search latency.",
    highlights: [
      "Engineered a custom Thread Pool from scratch using std::condition_variable and std::unique_lock.",
      "Implemented a RAII-managed task queue with mutex-protected result aggregation to prevent race conditions.",
      "Utilized C++17 std::filesystem for optimized, non-blocking directory traversal."
    ],
    collaborators: "Solo Project",
    metric: "Verified 6.63x speedup (1114ms → 168ms) using custom thread pool optimization.",
    archFlow: "[FileSearcher] -> [ThreadPool (Mutex Locked Queue)] -> [WorkerThreads] -> [Atomic Result Aggregator]",
  },
  {
    id: "E",
    title: "Silva's Media Tracker",
    github: "https://github.com/chamathdesilva1015/Silvas-Media-Tracker",
    problem: "Mainstream trackers lack high data density and custom statistical taste-profiling, offering generic interfaces that don't satisfy power users.",
    solution: "A standalone, 100% decoupled system with a FastAPI backend and a high-density Vanilla JS frontend optimized for micro-grid display.",
    function: "Automatically enriches user ratings with TMDB/Jikan metadata and calculates custom 'Passion-Volume' indices to visualize personal genre trends.",
    highlights: [
      "Developed custom taste-modeling algorithms to dynamically analyze genre and director preferences.",
      "Built a Glassmorphism-styled SPA optimized for both mobile micro-grids and 5-column widescreen density.",
      "Integrated a high-availability Supabase PostgreSQL layer for persistent, cloud-based data storage."
    ],
    collaborators: "Solo Project",
    metric: "100% standalone V10 architecture utilizing a fully decoupled REST backend.",
    archFlow: "[Frontend SPA] -> [FastAPI REST Layer] -> [TMDB/Jikan API] -> [Supabase PostgreSQL]",
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
    id: "F",
    title: "AI/ML Stock Prediction",
    github: "https://github.com/chamathdesilva1015/ai-ml-stock-prediction-web",
    problem: "Retail market analysis often relies on lagging indicators, failing to capture the complex technical patterns visible in historical price movements.",
    solution: "An end-to-end ML pipeline that engineers advanced features and utilizes ensemble learning to forecast short-term asset trends.",
    function: "Ingests market data, calculates quantitative metrics (RSI, MACD, Bollinger Bands), and visualizes model confidence for 1-day and 5-day forecasts.",
    highlights: [
      "Built a prediction engine using Random Forest and Gradient Boosting ensembles for robust inference.",
      "Engineered a scalable feature pipeline for automated technical indicator generation from raw price data.",
      "Implemented a modular 'Offline Training / Online Inference' structure to ensure rapid deployment of new models."
    ],
    collaborators: "Solo Project",
    metric: "Automated functional feature engineering for predictive market analysis.",
    archFlow: "[yfinance Data] -> [Feature Pipeline] -> [Ensemble Model] -> [Streamlit UI]",
  },
];

function DocProject({ proj, index, visible }) {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div
      className={`border-b-2 border-border py-12 last:border-b-0 ${
        visible ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Header Column: ID, Title & Source */}
        <div className="lg:col-span-3 flex flex-col items-start gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-accent uppercase mb-1 block">
              PROJECT_{proj.id}
            </span>
            <h3 className="sans text-xl font-extrabold text-text-primary uppercase tracking-tight leading-tight">
              {proj.title}
            </h3>
            <p className="mt-2 text-[10px] font-mono text-text-muted font-bold italic">
              // {proj.collaborators}
            </p>
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

        {/* Content Column */}
        <div className="lg:col-span-9 flex flex-col gap-8">
          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest mb-2 block border-b border-grid pb-1">
                01. Problem Statement
              </span>
              <p className="font-mono text-xs text-text-primary leading-relaxed">
                {proj.problem}
              </p>
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-text-primary uppercase tracking-widest mb-2 block border-b border-grid pb-1">
                02. Engineering Solution
              </span>
              <p className="font-mono text-xs text-text-primary leading-relaxed italic">
                {proj.solution}
              </p>
            </div>
          </div>

          {/* Functionality */}
          <div>
            <span className="text-[10px] font-mono font-bold text-text-light uppercase tracking-widest mb-2 block border-b border-grid pb-1">
              03. Operational Summary
            </span>
            <p className="font-mono text-xs text-text-secondary leading-relaxed">
              {proj.function}
            </p>
          </div>

          {/* Technical Highlights */}
          <div className="bg-bg-code border border-border p-5">
            <span className="text-[10px] font-mono font-bold text-text-light uppercase tracking-widest block mb-4 border-b border-grid pb-2">
              04. Technical Highlights
            </span>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 font-mono text-[11px] text-text-secondary">
              {proj.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0 select-none">▸</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            
            {proj.archFlow && (
              <div className="mt-5 p-3 bg-white border border-dashed border-border overflow-x-auto">
                <span className="text-[9px] font-mono tracking-widest text-text-muted uppercase block mb-1">
                  Architecture Flow:
                </span>
                <code className="text-[10px] font-mono text-accent whitespace-pre">
                  {proj.archFlow}
                </code>
              </div>
            )}
            
            {proj.images && (
              <div className="mt-5 border border-border bg-white p-2 relative group">
                <img 
                  src={proj.images[currentImg]} 
                  alt={`Screenshot ${currentImg+1}`} 
                  className="w-full h-auto object-contain border border-grid max-h-[450px]" 
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
                        <div key={i} className={`w-1.5 h-1.5 ${i === currentImg ? 'bg-accent' : 'bg-white/40'} shadow-sm`} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Technical Metric */}
          <div className="flex items-start gap-4 border-t border-grid pt-4">
            <div className="px-2 py-0.5 bg-accent text-white text-[9px] font-black font-mono tracking-widest uppercase shrink-0 mt-0.5">
              RESULT
            </div>
            <p className="font-mono text-xs font-bold tracking-tight text-text-primary">
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
                Engineering Portfolio
              </h2>
            </div>
          </div>
          <p className="text-sm font-mono text-text-secondary max-w-3xl leading-relaxed">
            A comprehensive record of systems development, automated data pipelines, and full-stack architecture. 
            Every log identifies a specific structural problem and outlines the technical action taken 
            to produce a measurable result.
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
