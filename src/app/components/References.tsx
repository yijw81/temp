import { useState } from "react";

const categories = ["전체", "음식", "뷰티", "패션", "기타"];

const videos = [
  { id: 1, category: "음식", label: "카페 브랜딩", sub: "SNS 숏폼" },
  { id: 2, category: "뷰티", label: "스킨케어 브랜드", sub: "제품 소개" },
  { id: 3, category: "패션", label: "의류 쇼핑몰", sub: "시즌 룩북" },
  { id: 4, category: "음식", label: "베이커리 신메뉴", sub: "프로모션" },
  { id: 5, category: "기타", label: "온라인 강의", sub: "서비스 홍보" },
  { id: 6, category: "뷰티", label: "헤어살롱", sub: "포트폴리오" },
  { id: 7, category: "패션", label: "악세서리 브랜드", sub: "신상 소개" },
  { id: 8, category: "기타", label: "인테리어 스튜디오", sub: "공간 투어" },
  { id: 9, category: "음식", label: "레스토랑 오픈", sub: "이벤트 영상" },
];

const gradients = [
  "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
  "linear-gradient(135deg, #1c1c2e 0%, #2d2d44 100%)",
  "linear-gradient(135deg, #1a1c1a 0%, #2a2e2a 100%)",
  "linear-gradient(135deg, #1e1a18 0%, #2e2826 100%)",
  "linear-gradient(135deg, #1a1a20 0%, #28283a 100%)",
  "linear-gradient(135deg, #1c1a1c 0%, #2e2a2e 100%)",
  "linear-gradient(135deg, #181a1c 0%, #262a2e 100%)",
  "linear-gradient(135deg, #1a1c1a 0%, #2a2e2a 100%)",
  "linear-gradient(135deg, #1c1a18 0%, #2e2a26 100%)",
];

export function References() {
  const [activeCategory, setActiveCategory] = useState("전체");

  const filtered = activeCategory === "전체"
    ? videos
    : videos.filter((v) => v.category === activeCategory);

  return (
    <section
      id="references"
      style={{
        backgroundColor: "#ffffff",
        padding: "120px 32px",
        fontFamily: "Pretendard, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 56, textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: "#888888", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>
            PORTFOLIO
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
            작업 레퍼런스
          </h2>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                backgroundColor: activeCategory === cat ? "#111111" : "transparent",
                color: activeCategory === cat ? "#ffffff" : "#666666",
                border: activeCategory === cat ? "1.5px solid #111111" : "1.5px solid rgba(0,0,0,0.12)",
                borderRadius: 100,
                padding: "8px 20px",
                fontSize: 14,
                fontWeight: activeCategory === cat ? 600 : 400,
                cursor: "pointer",
                transition: "all 0.15s",
                fontFamily: "Pretendard, sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {filtered.map((video, i) => (
            <div
              key={video.id}
              style={{
                position: "relative",
                paddingBottom: "177.78%",
                borderRadius: 12,
                overflow: "hidden",
                cursor: "pointer",
                background: gradients[i % gradients.length],
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
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5 3.5L13 8L5 12.5V3.5Z" fill="white" />
                  </svg>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "24px 16px 16px",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
                }}
              >
                <p style={{ color: "#ffffff", fontSize: 13, fontWeight: 700, marginBottom: 2 }}>{video.label}</p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 11 }}>{video.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
