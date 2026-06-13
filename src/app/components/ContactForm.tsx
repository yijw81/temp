import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle } from "lucide-react";

const stages = ["개원 전", "운영 중"];
const concerns = [
  "입지 선정 & 인허가",
  "병원 웹사이트 제작",
  "SNS & 콘텐츠 마케팅",
  "영상 콘텐츠 제작",
  "환자 유입 증대",
  "브랜딩 & 디자인",
];

export function ContactForm() {
  const [form, setForm] = useState({
    hospitalName: "",
    phone: "",
    stage: "",
    concerns: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleConcern = (c: string) => {
    setForm((prev) => ({
      ...prev,
      concerns: prev.concerns.includes(c)
        ? prev.concerns.filter((x) => x !== c)
        : [...prev.concerns, c],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-primary">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지금, 무료 상담을 신청하세요
          </h2>
          <p className="text-white/70 leading-relaxed">
            전문가가 직접 연락드려 병원 상황에 맞는 솔루션을 안내해드립니다. 부담 없이 문의하세요.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-10 text-center"
          >
            <CheckCircle size={52} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">상담 신청이 완료되었습니다!</h3>
            <p className="text-muted-foreground">
              영업일 기준 1일 이내에 전문가가 직접 연락드립니다.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 flex flex-col gap-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">
                  병원명 <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  placeholder="예) 스마일링 치과의원"
                  required
                  value={form.hospitalName}
                  onChange={(e) => setForm((p) => ({ ...p, hospitalName: e.target.value }))}
                  className="border border-border rounded-xl px-4 py-3 text-sm bg-background placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">
                  연락처 <span className="text-accent">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="010-0000-0000"
                  required
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  className="border border-border rounded-xl px-4 py-3 text-sm bg-background placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">현재 단계</label>
              <div className="flex gap-3">
                {stages.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, stage: s }))}
                    className={`flex-1 py-3 rounded-xl border text-sm font-medium transition-all ${
                      form.stage === s
                        ? "border-primary bg-secondary text-primary"
                        : "border-border text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                주요 고민 <span className="text-muted-foreground font-normal">(복수 선택 가능)</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {concerns.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => toggleConcern(c)}
                    className={`px-3 py-2 rounded-xl border text-sm transition-all ${
                      form.concerns.includes(c)
                        ? "border-primary bg-secondary text-primary"
                        : "border-border text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground py-4 rounded-xl font-medium hover:bg-accent/90 transition-all hover:shadow-lg flex items-center justify-center gap-2 mt-2"
            >
              무료 상담 신청하기
              <Send size={16} />
            </button>

            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              입력하신 정보는 상담 목적으로만 사용되며, 개인정보 처리방침에 따라 보호됩니다.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
}
