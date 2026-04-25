import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "CERTS", href: "#certifications" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 font-mono ${
        scrolled
          ? "bg-bg-nav backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <a
          href="#home"
          className="text-sm font-bold tracking-widest text-text-primary hover:text-accent transition-colors duration-150 uppercase"
        >
          &lt;CDS<span className="text-accent">_</span>COMPSCI&gt;
        </a>

        {/* Build stamp */}
        <span className="hidden lg:inline text-[10px] text-text-light tracking-wider font-mono">
          v1.2-beta | git:a7b8c9d
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="px-3 py-2 text-[11px] font-semibold tracking-[0.15em] text-text-secondary hover:text-accent transition-colors duration-150 border-r border-border last:border-r-0"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] p-2 group"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span
            className={`block h-[1.5px] w-5 bg-text-primary transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-text-primary transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-text-primary transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[52px] bg-bg-primary/98 backdrop-blur-sm transition-all duration-200 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-start gap-0 pt-8 px-8">
          {NAV_LINKS.map(({ label, href }, i) => (
            <li key={href} className="w-full border-b border-border">
              <a
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block py-4 text-xs font-bold tracking-[0.2em] text-text-secondary hover:text-accent transition-colors duration-150"
              >
                {String(i + 1).padStart(2, "0")}// {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
