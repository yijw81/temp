import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "오픈 준비 과정에서 신경 쓸 게 너무 많았는데, 처음부터 끝까지 함께해줘서 든든했어요. 인허가 서류부터 개원 마케팅까지 정말 아무것도 놓치지 않았습니다.",
    name: "김○○ 원장",
    hospital: "스마일링 치과의원",
    specialty: "치과",
    rating: 5,
  },
  {
    text: "SNS 콘텐츠 반응이 확실히 달라졌습니다. 이전엔 그냥 올리는 수준이었는데, 이제는 환자분들이 직접 공유해주실 정도예요. 팔로워도 꾸준히 늘고 있습니다.",
    name: "이○○ 원장",
    hospital: "클리어스킨 피부과",
    specialty: "피부과",
    rating: 5,
  },
  {
    text: "웹사이트만 바꿨는데 문의 전화가 늘었어요. 예전 사이트는 답답해 보인다는 피드백이 많았는데, 새로 만들고 나서 첫인상이 달라졌다는 말을 자주 듣습니다.",
    name: "박○○ 원장",
    hospital: "굿본 정형외과",
    specialty: "정형외과",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Reviews</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">원장님들의 이야기</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            실제 함께한 원장님들의 솔직한 후기입니다 (추후 실제 후기로 교체 예정)
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-7 flex flex-col gap-5 hover:shadow-md transition-all"
            >
              <Quote size={24} className="text-primary/30" />
              <p className="text-foreground leading-relaxed flex-1 text-sm">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <span key={idx} className="text-amber-400 text-sm">★</span>
                ))}
              </div>
              <div className="border-t border-border pt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-sm">
                  {t.specialty[0]}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.hospital}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
