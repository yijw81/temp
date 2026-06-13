import { motion } from "motion/react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "베이직",
    subtitle: "온라인 첫걸음",
    desc: "온라인 존재감을 갖추고 싶은 병원에게",
    price: "문의",
    features: [
      "병원 웹사이트 제작",
      "모바일 최적화",
      "기본 SNS 채널 세팅",
      "카카오 채널 연동",
      "1개월 A/S 보장",
    ],
    cta: "상담 신청",
    highlighted: false,
  },
  {
    name: "스탠다드",
    subtitle: "성장 패키지",
    desc: "꾸준한 환자 유입과 브랜딩이 필요한 병원에게",
    price: "문의",
    features: [
      "베이직 패키지 전체 포함",
      "SNS 월간 운영 (인스타·블로그)",
      "릴스/쇼츠 월 2편 제작",
      "성과 월간 리포트",
      "3개월 A/S 보장",
    ],
    cta: "추천 패키지 신청",
    highlighted: true,
    badge: "추천",
  },
  {
    name: "프리미엄",
    subtitle: "풀케어 패키지",
    desc: "처음부터 끝까지 전담 관리가 필요한 병원에게",
    price: "문의",
    features: [
      "스탠다드 패키지 전체 포함",
      "개원·운영 컨설팅 전담",
      "인터랙티브 마케팅 콘텐츠",
      "전담 마케팅팀 운영",
      "무제한 A/S & 월간 미팅",
    ],
    cta: "상담 신청",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Pricing</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">병원에 맞는 패키지</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            모든 패키지는 무료 상담 후 병원 상황에 맞게 조율됩니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-card rounded-2xl p-8 flex flex-col gap-6 transition-all ${
                plan.highlighted
                  ? "border-2 border-accent shadow-lg shadow-accent/10 scale-[1.02]"
                  : "border border-border hover:shadow-md"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
              <div>
                <p className="text-xs text-muted-foreground font-medium tracking-widest uppercase">{plan.name}</p>
                <h3 className="text-xl font-bold text-foreground mt-1">{plan.subtitle}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{plan.desc}</p>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground mb-1">가격</p>
                <p className="text-2xl font-bold text-primary">
                  {plan.price}{" "}
                  <span className="text-sm font-normal text-muted-foreground">— 무료 상담 후 안내</span>
                </p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check size={15} className="text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-medium text-sm transition-all ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-secondary text-primary hover:bg-primary hover:text-white border border-primary/20"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
