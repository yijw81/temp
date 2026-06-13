import { motion } from "motion/react";
import { Building2, Globe, Megaphone } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "개원·운영 컨설팅",
    desc: "입지 선정부터 인허가, 운영 효율화까지 — 병원 경영의 처음과 끝을 함께합니다",
    items: ["입지 분석 & 상권 조사", "인허가 절차 대행", "운영 프로세스 설계", "수익 구조 최적화"],
    id: "consulting",
  },
  {
    icon: Globe,
    title: "웹사이트·소개페이지 제작",
    desc: "신뢰감 있는 디자인과 빠른 속도로, 우리 병원만의 온라인 첫인상을 만듭니다",
    items: ["병원 맞춤 디자인", "모바일 최적화", "SEO 기본 세팅", "빠른 로딩 속도"],
    id: "website",
  },
  {
    icon: Megaphone,
    title: "마케팅 (영상·SNS·게임형 콘텐츠)",
    desc: "짧은 영상부터 인터랙티브 콘텐츠까지, 환자의 시선을 끄는 콘텐츠를 기획·제작합니다",
    items: ["릴스/쇼츠 제작", "SNS 채널 운영", "게임형 인터랙티브 콘텐츠", "광고 성과 분석"],
    id: "marketing",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Services</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">3가지 핵심 서비스</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            개원 준비부터 환자 유입까지, 필요한 모든 것을 한 팀에서 해결합니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              id={svc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-6 hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <svc.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{svc.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
              </div>
              <ul className="flex flex-col gap-2 mt-auto">
                {svc.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
