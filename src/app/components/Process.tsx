const steps = [
  {
    num: "01",
    title: "의뢰 접수",
    desc: "브랜드 정보와 원하는 콘셉트를 알려주세요",
  },
  {
    num: "02",
    title: "콘셉트 기획",
    desc: "AI와 전문 기획자가 방향성을 함께 설계합니다",
  },
  {
    num: "03",
    title: "영상 제작",
    desc: "기획안을 바탕으로 고품질 숏폼을 제작합니다",
  },
  {
    num: "04",
    title: "납품 & 수정",
    desc: "최종 영상을 전달하고 수정 요청을 반영합니다",
  },
];

export function Process() {
  return (
    <section
      style={{
        backgroundColor: "#f9f9f9",
        padding: "120px 32px",
        fontFamily: "Pretendard, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 72, textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: "#888888", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>
            HOW IT WORKS
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
            이렇게 진행돼요
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 0,
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                padding: "0 24px",
              }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: 28,
                    right: "-8%",
                    width: "16%",
                    height: 1,
                    backgroundColor: "rgba(0,0,0,0.12)",
                    zIndex: 1,
                  }}
                  className="process-connector"
                />
              )}

              {/* Circle */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  backgroundColor: "#111111",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  zIndex: 2,
                  position: "relative",
                }}
              >
                <span style={{ color: "#ffffff", fontSize: 13, fontWeight: 700, letterSpacing: "0.02em" }}>
                  {step.num}
                </span>
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#111111", letterSpacing: "-0.02em", marginBottom: 10 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 14, fontWeight: 400, color: "#777777", lineHeight: 1.65, letterSpacing: "-0.01em" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-connector { display: none !important; }
        }
      `}</style>
    </section>
  );
}
