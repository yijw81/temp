import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    specialty: "치과",
    name: "스마일링 치과의원",
    desc: "개원 컨설팅부터 웹사이트, 인스타그램 콘텐츠까지 풀케어 패키지 적용",
    tags: ["개원 컨설팅", "웹사이트", "SNS 운영"],
    color: "from-blue-50 to-indigo-100",
    accent: "#4F6BF4",
    emoji: "🦷",
    result: "개원 3개월 만에 월 예약 300건 달성",
  },
  {
    specialty: "피부과",
    name: "클리어스킨 피부과",
    desc: "릴스·쇼츠 콘텐츠 제작과 게임형 이벤트로 팔로워 1만 명 돌파",
    tags: ["영상 콘텐츠", "인터랙티브 이벤트", "SNS"],
    color: "from-rose-50 to-pink-100",
    accent: "#E8537A",
    emoji: "✨",
    result: "인스타그램 팔로워 1만 달성",
  },
  {
    specialty: "한의원",
    name: "하늘빛 한의원",
    desc: "지역 특화 브랜딩과 블로그 운영으로 네이버 상위 노출 최적화",
    tags: ["브랜딩", "블로그 SEO", "웹사이트"],
    color: "from-green-50 to-emerald-100",
    accent: "#1F6F5C",
    emoji: "🌿",
    result: "네이버 '○○한의원' 1페이지 상위 노출",
  },
  {
    specialty: "정형외과",
    name: "굿본 정형외과",
    desc: "환자 신뢰도 중심의 전문의 콘텐츠와 치료 사례 영상 시리즈 제작",
    tags: ["전문의 콘텐츠", "영상 시리즈", "웹사이트"],
    color: "from-amber-50 to-orange-100",
    accent: "#F59E0B",
    emoji: "🦴",
    result: "문의 전화 월 150건 → 280건",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Portfolio</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            다양한 진료과목, 변하지 않는 퀄리티
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            진료과목에 맞는 맞춤 전략으로 각 병원의 특색을 살립니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${item.color} h-32 flex items-center justify-center relative`}>
                <span className="text-5xl">{item.emoji}</span>
                <span className="absolute top-3 left-3 bg-white/80 text-xs font-medium px-2 py-0.5 rounded-full text-foreground">
                  {item.specialty}
                </span>
                <div className="absolute top-3 right-3 w-7 h-7 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={14} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-1.5">{item.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.tags.map((tag) => (
                    <span key={tag} className="bg-secondary text-primary text-xs px-2 py-0.5 rounded-full border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="border-t border-border pt-3">
                  <p className="text-xs text-primary font-medium">📈 {item.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
