import { motion } from "motion/react";
import { MapPin, Rocket, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    step: "01",
    title: "개원 준비",
    desc: "입지 분석, 인허가, 초기 브랜딩",
    detail: "상권 분석부터 인허가 서류, 인테리어 방향까지 개원의 A to Z를 함께 설계합니다.",
  },
  {
    icon: Rocket,
    step: "02",
    title: "오픈",
    desc: "웹사이트·SNS 채널 세팅, 오프닝 마케팅",
    detail: "병원 웹사이트와 SNS 채널을 준비하고, 개원 첫날부터 환자 유입을 만들어냅니다.",
  },
  {
    icon: Settings,
    step: "03",
    title: "안정화",
    desc: "운영 프로세스 점검, 데이터 기반 개선",
    detail: "오픈 후 운영 데이터를 분석하고 환자 동선, 예약 흐름, 콘텐츠 성과를 최적화합니다.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "성장",
    desc: "콘텐츠 확장, 브랜드 인지도 강화",
    detail: "지역 내 인지도를 높이고, 충성 환자를 늘리는 장기 브랜딩 전략을 실행합니다.",
  },
];

export function Process() {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Process</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">4단계 성장 로드맵</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            개원 준비부터 지속 성장까지, 각 단계에서 필요한 전문가가 함께합니다
          </p>
        </div>

        <div className="relative">
          {/* connector line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-card border border-border rounded-2xl flex items-center justify-center shadow-sm">
                    <step.icon size={28} className="text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{step.desc}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
