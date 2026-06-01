const plans = [
  {
    name: "베이직",
    price: "550,000",
    features: ["영상 4편/월", "수정 1회"],
    highlight: false,
  },
  {
    name: "스탠다드",
    price: "690,000",
    features: ["영상 4편/월", "수정 2회", "자막 · BGM 포함"],
    highlight: false,
  },
  {
    name: "프로",
    price: "890,000",
    features: ["스탠다드 플랜 전체", "SNS 1곳 업로드 대행", "월간 성과 리포트"],
    highlight: true,
    badge: "추천",
  },
  {
    name: "프리미엄",
    price: "1,290,000",
    features: ["스탠다드 플랜 전체", "SNS 1곳 풀 관리", "댓글 모니터링"],
    highlight: false,
  },
];

const addons = [
  { name: "캐릭터 생성", price: "200,000~" },
  { name: "나레이션 추가", price: "80,000/편" },
  { name: "추가 수정", price: "50,000/회" },
  { name: "영상 추가", price: "120,000/편" },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        backgroundColor: "#ffffff",
        padding: "120px 32px",
        fontFamily: "Pretendard, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 64, textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: "#888888", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>
            PRICING
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
            요금제
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginBottom: 16,
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                position: "relative",
                backgroundColor: plan.highlight ? "#111111" : "#ffffff",
                border: plan.highlight ? "2px solid #111111" : "1.5px solid rgba(0,0,0,0.08)",
                borderRadius: 16,
                padding: "40px 32px",
                transition: "box-shadow 0.2s, transform 0.2s",
                transform: plan.highlight ? "translateY(-6px)" : "none",
                boxShadow: plan.highlight ? "0 24px 60px rgba(0,0,0,0.14)" : "none",
              }}
              onMouseEnter={(e) => {
                if (!plan.highlight) e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.07)";
              }}
              onMouseLeave={(e) => {
                if (!plan.highlight) e.currentTarget.style.boxShadow = "none";
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#ffffff",
                    color: "#111111",
                    border: "1.5px solid #111111",
                    borderRadius: 100,
                    padding: "4px 14px",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: plan.highlight ? "rgba(255,255,255,0.6)" : "#888888",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {plan.name}
              </p>

              <div style={{ marginBottom: 32 }}>
                <span style={{ fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 800, color: plan.highlight ? "#ffffff" : "#111111", letterSpacing: "-0.03em" }}>
                  ₩{plan.price}
                </span>
                <span style={{ fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.5)" : "#888888", marginLeft: 4 }}>
                  /월
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
                {plan.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill={plan.highlight ? "rgba(255,255,255,0.15)" : "#f0f0f0"} />
                      <path d="M4 7L6 9L10 5" stroke={plan.highlight ? "#ffffff" : "#111111"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.85)" : "#444444", letterSpacing: "-0.01em" }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: 8,
                  border: plan.highlight ? "none" : "1.5px solid rgba(0,0,0,0.12)",
                  backgroundColor: plan.highlight ? "#ffffff" : "transparent",
                  color: plan.highlight ? "#111111" : "#111111",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  letterSpacing: "-0.01em",
                  transition: "opacity 0.15s",
                  fontFamily: "Pretendard, sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                시작하기
              </button>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: 13, color: "#888888", marginBottom: 72, letterSpacing: "-0.01em" }}>
          SNS 2곳 이상은 별도 견적 문의
        </p>

        {/* Add-ons */}
        <div
          style={{
            backgroundColor: "#f9f9f9",
            borderRadius: 16,
            padding: "40px 40px",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#111111", letterSpacing: "-0.025em", marginBottom: 28 }}>
            추가 옵션
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 16,
            }}
          >
            {addons.map((addon) => (
              <div
                key={addon.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#ffffff",
                  borderRadius: 10,
                  padding: "16px 20px",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 500, color: "#333333", letterSpacing: "-0.01em" }}>
                  {addon.name}
                </span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#111111", letterSpacing: "-0.01em" }}>
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
