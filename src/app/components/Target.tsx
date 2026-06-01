export function Target() {
  return (
    <section
      id="target"
      style={{
        backgroundColor: "#f9f9f9",
        padding: "120px 32px",
        fontFamily: "Pretendard, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 64, textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: "#888888", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>
            FOR WHO
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
            이런 분들을 위해 만들었습니다
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          <TargetCard
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="9 22 9 12 15 12 15 22" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            tag="소상공인"
            headline="SNS에 올릴 영상, 매번 고민되셨죠?"
            desc="촬영 장비도, 편집 기술도 필요 없습니다. 브랜드 정보만 알려주시면 매달 전문 마케팅 영상을 제작해드립니다."
          />
          <TargetCard
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="#111111" strokeWidth="1.5" />
                <path d="M8 21h8M12 17v4" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            }
            tag="스타트업"
            headline="콘텐츠 팀 없이도 브랜드 영상이 필요하신가요?"
            desc="팀 리소스 없이 브랜딩 콘텐츠를 운영하세요. 정액제로 예산을 예측하고 콘텐츠 공백을 없애드립니다."
          />
        </div>
      </div>
    </section>
  );
}

function TargetCard({ icon, tag, headline, desc }: { icon: React.ReactNode; tag: string; headline: string; desc: string }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid rgba(0,0,0,0.07)",
        borderRadius: 16,
        padding: "48px 40px",
        transition: "box-shadow 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.06)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      <div
        style={{
          width: 48,
          height: 48,
          backgroundColor: "#f4f4f4",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 28,
        }}
      >
        {icon}
      </div>
      <p style={{ fontSize: 12, fontWeight: 600, color: "#888888", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>
        {tag}
      </p>
      <h3 style={{ fontSize: 22, fontWeight: 700, color: "#111111", letterSpacing: "-0.025em", lineHeight: 1.35, marginBottom: 16 }}>
        {headline}
      </h3>
      <p style={{ fontSize: 15, fontWeight: 400, color: "#666666", lineHeight: 1.7, letterSpacing: "-0.01em" }}>
        {desc}
      </p>
    </div>
  );
}
