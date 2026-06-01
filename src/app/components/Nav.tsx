import { useState, useEffect } from "react";

const navItems = [
  { label: "서비스 소개", href: "#target" },
  { label: "레퍼런스", href: "#references" },
  { label: "요금제", href: "#pricing" },
  { label: "문의하기", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#ffffff",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(0,0,0,0.06)",
        transition: "border-color 0.2s",
        fontFamily: "Pretendard, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              backgroundColor: "#111111",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="5" height="8" rx="1" fill="white" />
              <rect x="8" y="5" width="5" height="8" rx="1" fill="white" opacity="0.6" />
            </svg>
          </div>
          <span style={{ fontSize: 15, fontWeight: 700, color: "#111111", letterSpacing: "-0.02em" }}>
            클립메이커
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 40 }} className="hidden-mobile">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{
                fontSize: 14,
                color: "#444444",
                textDecoration: "none",
                fontWeight: 400,
                transition: "color 0.15s",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#111111")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444444")}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#ffffff",
              backgroundColor: "#111111",
              padding: "8px 18px",
              borderRadius: 6,
              textDecoration: "none",
              transition: "opacity 0.15s",
              letterSpacing: "-0.01em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            무료 상담
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "none",
          }}
        >
          <div style={{ width: 20, height: 1.5, backgroundColor: "#111", marginBottom: 5, transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <div style={{ width: 20, height: 1.5, backgroundColor: "#111", marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: "all 0.2s" }} />
          <div style={{ width: 20, height: 1.5, backgroundColor: "#111", transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid rgba(0,0,0,0.06)",
            padding: "16px 32px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
          className="show-mobile"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{ fontSize: 16, color: "#111111", textDecoration: "none", fontWeight: 500 }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
