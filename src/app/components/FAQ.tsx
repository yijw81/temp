import { useState } from "react";

const faqs = [
  {
    q: "수정은 몇 회까지 가능한가요?",
    a: "요금제별로 상이합니다. 베이직은 1회, 스탠다드 이상은 2회 기본 제공됩니다. 추가 수정은 건당 50,000원에 제공됩니다.",
  },
  {
    q: "저작권은 누구에게 있나요?",
    a: "납품 완료 및 결제가 확인된 시점부터 모든 저작권은 의뢰인에게 귀속됩니다. 클립메이커는 포트폴리오 목적으로만 활용하며, 사전 동의 없이 제3자에게 공개하지 않습니다.",
  },
  {
    q: "납기일은 얼마나 걸리나요?",
    a: "콘셉트 기획 확정 후 영업일 기준 5~7일 이내 납품을 원칙으로 합니다. 수정 요청 시 영업일 2~3일이 추가됩니다.",
  },
  {
    q: "영상 길이는 어떻게 되나요?",
    a: "기본 제공 영상은 15~60초 사이의 숏폼 콘텐츠입니다. 60초 이상의 롱폼 영상은 별도 견적으로 제공 가능합니다.",
  },
  {
    q: "촬영 없이도 영상 제작이 가능한가요?",
    a: "네, 가능합니다. 보유하신 사진·영상 소스를 활용하거나, AI 생성 비주얼과 스톡 영상을 활용해 제작합니다. 별도 촬영이 없어도 퀄리티 높은 영상을 만들 수 있습니다.",
  },
  {
    q: "중도 해지는 가능한가요?",
    a: "월 단위 구독 서비스로, 다음 달 결제 전에 해지를 요청하시면 자동으로 구독이 종료됩니다. 당월 이용분에 대한 환불은 어렵습니다.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        backgroundColor: "#f9f9f9",
        padding: "120px 32px",
        fontFamily: "Pretendard, sans-serif",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ marginBottom: 64, textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: "#888888", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>
            FAQ
          </p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#111111", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
            자주 묻는 질문
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderTop: "1px solid rgba(0,0,0,0.08)",
                ...(i === faqs.length - 1 ? { borderBottom: "1px solid rgba(0,0,0,0.08)" } : {}),
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  padding: "24px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "Pretendard, sans-serif",
                  gap: 16,
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 600, color: "#111111", letterSpacing: "-0.015em", lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  style={{
                    flexShrink: 0,
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                    color: "#888888",
                  }}
                >
                  <path d="M4 6.5L9 11.5L14 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div
                style={{
                  maxHeight: openIndex === i ? 200 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#666666",
                    lineHeight: 1.75,
                    letterSpacing: "-0.01em",
                    paddingBottom: 24,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
