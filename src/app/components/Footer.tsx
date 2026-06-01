const navItems = [
  { label: "서비스 소개", href: "#target" },
  { label: "레퍼런스", href: "#references" },
  { label: "요금제", href: "#pricing" },
  { label: "문의하기", href: "#contact" },
];

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid rgba(0,0,0,0.07)",
        padding: "48px 32px",
        fontFamily: "Pretendard, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 24,
              height: 24,
              backgroundColor: "#111111",
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="5" height="8" rx="1" fill="white" />
              <rect x="8" y="5" width="5" height="8" rx="1" fill="white" opacity="0.6" />
            </svg>
          </div>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#111111", letterSpacing: "-0.02em" }}>
            클립메이커
          </span>
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{
                fontSize: 13,
                color: "#888888",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#111111")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888888")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p style={{ fontSize: 12, color: "#bbbbbb", letterSpacing: "-0.01em" }}>
          © 2024 클립메이커. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
