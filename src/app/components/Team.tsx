import { motion } from "motion/react";
import { Code2, Video, Stethoscope } from "lucide-react";

const members = [
  {
    icon: Code2,
    role: "개발팀",
    tagline: "안정적이고 빠른 웹 구축",
    desc: "React, Next.js 기반의 빠르고 안정적인 병원 웹사이트를 제작합니다. 모바일 최적화와 SEO까지 책임집니다.",
    skills: ["React / Next.js", "모바일 최적화", "SEO 세팅", "성능 최적화"],
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Video,
    role: "영상 전문가",
    tagline: "시선을 사로잡는 콘텐츠 제작",
    desc: "릴스·쇼츠부터 브랜드 필름까지, 환자의 시선을 멈추게 하는 영상 콘텐츠를 기획하고 제작합니다.",
    skills: ["릴스/쇼츠 제작", "편집·색보정", "스크립트 기획", "음악 라이선스"],
    color: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: Stethoscope,
    role: "병원 운영 전문가",
    tagline: "현장을 아는 운영 노하우",
    desc: "실제 병원 경영 현장 경험을 바탕으로 인허가, 수익 구조, 환자 관리 프로세스를 함께 설계합니다.",
    skills: ["인허가 대행", "수익 구조 설계", "환자 관리 시스템", "의료법 준수"],
    color: "bg-green-50",
    iconColor: "text-emerald-600",
  },
];

export function Team() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Team</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">세 명의 전문가, 하나의 팀</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            처음 계약부터 마지막 결과까지, 동일한 3인 팀이 일관성 있게 책임집니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <motion.div
              key={m.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-5 hover:shadow-md transition-all"
            >
              <div className={`w-14 h-14 ${m.color} rounded-2xl flex items-center justify-center`}>
                <m.icon size={26} className={m.iconColor} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium tracking-widest uppercase mb-1">{m.role}</p>
                <h3 className="text-lg font-bold text-foreground mb-2">{m.tagline}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {m.skills.map((skill) => (
                  <span key={skill} className="bg-secondary text-primary text-xs px-2.5 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
