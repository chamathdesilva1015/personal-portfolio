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

/* ── Certification data ────────────────────────────── */
const CERTIFICATIONS = [
  {
    title: "Certified Associate in Project Management (CAPM)®",
    issuer: "Project Management Institute (PMI)",
    year: "Ongoing",
    focus: [
      "Predictive & Plan-Based Methodologies: Mastering Waterfall lifecycle processes, scope management, and critical path scheduling.",
      "Agile Frameworks & Adaptive Delivery: Application of Scrum roles, artifacts, events, and Lean/Kanban methodologies.",
      "Business Analysis Frameworks: Needs assessment, stakeholder requirements elicitation, and validation in project environments.",
    ],
  },
  {
    title: "Foundations of Risk Management Course",
    issuer: "University of Toronto",
    year: "Ongoing / Exp. July 2026",
    focus: [
      "Enterprise Risk Management (ERM): Identifying and assessing risks from a comprehensive, organization-wide perspective.",
      "Risk Identification & Analysis: Utilizing tools like risk registers and heat mapping to analyze qualitative and quantitative impact.",
      "Global Standards & Control: Application of international risk frameworks and oversight mechanisms for governance and control.",
    ],
  },
  {
    title: "Google Project Management",
    issuer: "Google (Coursera)",
    year: "May 2026",
    focus: [
      "Traditional & Agile Project Management: Scrum frameworks, sprint planning, and Agile execution.",
      "Strategic planning and execution: Risk management matrices, stakeholder communication, and quality assurance.",
      "Process improvement and organizational dynamics: Navigating team leadership and utilizing project management software.",
    ],
  },
  {
    title: "CS50: Introduction to Cybersecurity",
    issuer: "Harvard University",
    year: "Feb 2026",
    focus: [
      "High-level and low-level threats: Securing systems against SQL injection, cross-site scripting (XSS), and buffer overflows.",
      "Applied Cryptography: Implementation of hashing algorithms, symmetric/asymmetric encryption, and digital signatures.",
      "Network and Systems Security: Threat modeling, risk assessment, and identity/access management protocols.",
    ],
  },
  {
    title: "Machine Learning Course",
    issuer: "University of Toronto",
    year: "Feb 2026",
    focus: [
      "Production-ready ML workflows: model serialization, versioning, CI/CD integration for training pipelines.",
      "Ethical AI deployment: bias auditing, fairness metrics, and responsible model governance frameworks.",
      "Experimental reproducibility: seed management, deterministic training, and structured experiment tracking.",
    ],
  },
  {
    title: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University",
    year: "2026",
    focus: [
      "Low-level programming in C: memory management, pointers, and data structures (hash tables, tries, linked lists).",
      "Algorithmic efficiency: Analyzing time/space complexity (Big O notation) for searching and sorting algorithms.",
      "Full-stack web development: Integrating Python, SQL, JavaScript, HTML, and CSS to build dynamic web applications.",
    ],
  },
  {
    title: "CS109x: Introduction to Data Science with Python",
    issuer: "Harvard University",
    year: "Aug 2025",
    focus: [
      "Advanced feature engineering using Scikit-learn pipelines: encoding strategies, scaling, dimensionality reduction (PCA).",
      "Statistical modeling: regression analysis, hypothesis testing, Bayesian inference, and probabilistic reasoning.",
      "Complex data visualization with Matplotlib, Seaborn, and Pandas for multi-dimensional exploratory analysis.",
    ],
  },
  {
    title: "Machine Learning",
    issuer: "University of Waterloo",
    year: "Aug 2025",
    focus: [
      "Neural network architectures: Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), and Transformer models.",
      "Unsupervised clustering methods including k-means and DBSCAN for pattern discovery in unlabeled datasets.",
      "Predictive performance optimization through hyperparameter tuning, cross-validation, and ensemble learning strategies.",
    ],
  },
  {
    title: "Google Cybersecurity",
    issuer: "Google (Coursera)",
    year: "May 2025",
    focus: [
      "Security Information and Event Management (SIEM): log ingestion, correlation rules, and alert triage workflows using Splunk/Chronicle.",
      "Incident response orchestration: detection, containment, eradication, recovery, and lessons learned lifecycle.",
      "Linux/Bash security scripting: automated log analysis, file integrity monitoring, and access control auditing.",
    ],
  },
  {
    title: "Introduction to Python 3 Programming",
    issuer: "Education to Go",
    year: "Apr 2019",
    focus: [
      "Foundational Python syntax: control flow, looping mechanisms, and modular function design.",
      "Data structure manipulation: utilizing lists, dictionaries, tuples, and sets for effective data storage.",
      "Object-Oriented basic concepts and procedural programming paradigms.",
    ],
  },
];

export default function Certifications() {
  const sectionRef = useRef(null);
  const visible = useInView(sectionRef);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative z-10 section-grid-border py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section header */}
        <div className={`mb-14 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-[10px] font-mono font-semibold tracking-[0.3em] text-text-light uppercase mb-2">
            04// Credentials
          </p>
          <span className="accent-bar" />
          <h2 className="sans text-3xl sm:text-4xl md:text-5xl font-black text-text-primary uppercase tracking-tight">
            Certifications
          </h2>
          <p className="mt-3 text-sm font-mono text-text-muted max-w-2xl leading-relaxed">
            Supplementary credentials spanning machine learning, cybersecurity, and data science.
            Each certificate represents focused study with specific technical outcomes listed below.
          </p>
        </div>

        {/* Certification list */}
        <div className="flex flex-col gap-0 border border-border">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={cert.title}
              className={`border-b border-border last:border-b-0 bg-bg-white hover:bg-bg-code transition-colors duration-150 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 md:px-8 py-4 border-b border-dashed border-grid">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-text-light mt-0.5">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <div>
                    <h3 className="sans text-sm font-extrabold text-text-primary uppercase tracking-tight">
                      {cert.title}
                    </h3>
                    <p className="text-[11px] font-mono text-text-muted mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-semibold text-text-light border border-border px-2 py-0.5 shrink-0 self-start sm:self-center">
                  {cert.year}
                </span>
              </div>

              {/* Focus areas */}
              <div className="px-4 md:px-8 py-4 pl-12">
                <p className="text-[9px] font-mono font-bold tracking-[0.2em] text-accent uppercase mb-2">
                  Key Focus Areas:
                </p>
                <ul className="space-y-1.5">
                  {cert.focus.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-accent text-[10px] mt-[3px] shrink-0">▸</span>
                      <span className="text-xs font-mono text-text-secondary leading-[1.7]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className={`mt-4 text-[10px] font-mono text-text-light ${visible ? "animate-fade-up-delay-3" : "opacity-0"}`}>
          Certificates available for verification upon request.
        </p>
      </div>
    </section>
  );
}
