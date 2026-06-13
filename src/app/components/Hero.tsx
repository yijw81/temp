import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden bg-background">
      {/* subtle grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, #E5E7E3 1px, transparent 1px), linear-gradient(to bottom, #E5E7E3 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(31,111,92,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-secondary text-primary text-sm px-3 py-1 rounded-full mb-8 border border-primary/20">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            개원부터 성장까지, 원스톱 파트너
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6"
        >
          병원 개원부터 운영,
          <br />
          마케팅까지—
          <br />
          <span className="text-primary">한 팀이 끝까지 책임집니다</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          개발 · 영상 · 병원 운영 전문가가 모인 단 하나의 파트너
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-medium hover:bg-accent/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            무료 상담 신청하기
            <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border border-border bg-card text-foreground px-6 py-3 rounded-xl font-medium hover:border-primary/40 hover:bg-secondary transition-colors"
          >
            서비스 살펴보기
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">스크롤</span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.div>
      </div>

      {/* stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative mt-16 w-full max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 grid grid-cols-3 divide-x divide-border"
      >
        {[
          { value: "150+", label: "개원 지원 병원" },
          { value: "98%", label: "고객 재계약률" },
          { value: "3인 전담팀", label: "처음부터 끝까지" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 px-4">
            <span className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</span>
            <span className="text-xs text-muted-foreground text-center">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
