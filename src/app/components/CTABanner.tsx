export function CTABanner() {
  const handleScroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#111111",
        padding: "120px 32px",
        textAlign: "center",
        fontFamily: "Pretendard, sans-serif",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <p style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
          GET STARTED
        </p>
        <h2
          style={{
            fontSize: "clamp(36px, 6vw, 60px)",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          지금 바로 시작해보세요
        </h2>
        <p style={{ fontSize: 18, fontWeight: 300, color: "rgba(255,255,255,0.5)", marginBottom: 48, letterSpacing: "-0.01em" }}>
          첫 상담은 무료입니다
        </p>
        <button
          onClick={handleScroll}
          style={{
            backgroundColor: "#ffffff",
            color: "#111111",
            border: "none",
            borderRadius: 8,
            padding: "16px 40px",
            fontSize: 15,
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "-0.01em",
            transition: "opacity 0.15s",
            fontFamily: "Pretendard, sans-serif",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          문의하기
        </button>
      </div>
    </section>
  );
}
