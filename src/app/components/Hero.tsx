export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        paddingTop: 160,
        paddingBottom: 120,
        textAlign: "center",
        fontFamily: "Pretendard, sans-serif",
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            backgroundColor: "#f4f4f4",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 100,
            padding: "6px 14px",
            marginBottom: 40,
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#111111" }} />
          <span style={{ fontSize: 12, fontWeight: 500, color: "#555555", letterSpacing: "0.02em" }}>
            AI 기반 마케팅 영상 제작 서비스
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 68px)",
            fontWeight: 800,
            color: "#111111",
            lineHeight: 1.15,
            letterSpacing: "-0.035em",
            marginBottom: 28,
          }}
        >
          10초짜리 영상 하나가
          <br />
          브랜드를 바꿉니다
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2vw, 19px)",
            fontWeight: 300,
            color: "#666666",
            lineHeight: 1.7,
            marginBottom: 48,
            letterSpacing: "-0.01em",
          }}
        >
          AI로 만드는 마케팅 영상 — 매달 4편, 정액제로
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 80 }}>
          <button
            onClick={() => handleScroll("#pricing")}
            style={{
              backgroundColor: "#111111",
              color: "#ffffff",
              border: "none",
              borderRadius: 8,
              padding: "14px 28px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "-0.01em",
              transition: "opacity 0.15s",
              fontFamily: "Pretendard, sans-serif",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            요금제 보기
          </button>
          <button
            onClick={() => handleScroll("#references")}
            style={{
              backgroundColor: "transparent",
              color: "#111111",
              border: "1.5px solid #111111",
              borderRadius: 8,
              padding: "14px 28px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "-0.01em",
              transition: "background 0.15s, color 0.15s",
              fontFamily: "Pretendard, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#111111";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#111111";
            }}
          >
            레퍼런스 보기
          </button>
        </div>

        {/* Video placeholder */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
            backgroundColor: "#1a1a1a",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 24px 80px rgba(0,0,0,0.12)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.12)",
                border: "1.5px solid rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)")}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M7 4.5L18 11L7 17.5V4.5Z" fill="white" />
              </svg>
            </div>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, letterSpacing: "0.04em" }}>
              서비스 소개 영상
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
