import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Smartphone, Gamepad2, Share2 } from "lucide-react";

// Placeholder video cards (replace with real content)
const videoSamples = [
  {
    id: 1,
    title: "치과 개원 스토리",
    label: "릴스 · 45sec",
    color: "from-emerald-400 to-teal-600",
    icon: "🦷",
  },
  {
    id: 2,
    title: "피부과 시술 Before/After",
    label: "쇼츠 · 30sec",
    color: "from-rose-400 to-pink-600",
    icon: "✨",
  },
  {
    id: 3,
    title: "한의원 브랜드 필름",
    label: "릴스 · 60sec",
    color: "from-amber-400 to-orange-600",
    icon: "🌿",
  },
];

const demoTabs = [
  { id: "quiz", label: "건강 퀴즈", icon: Gamepad2 },
  { id: "symptom", label: "증상 체크", icon: Smartphone },
  { id: "share", label: "SNS 공유", icon: Share2 },
];

const quizQuestions = [
  {
    q: "최근 잇몸이 자주 붓거나 피가 나시나요?",
    options: ["자주 그렇다", "가끔 그렇다", "거의 없다"],
    hint: "잇몸 질환 조기 발견이 중요합니다",
  },
  {
    q: "피부 트러블이나 색소 침착으로 고민이 있으신가요?",
    options: ["심한 편이다", "조금 있다", "거의 없다"],
    hint: "피부과 전문 상담을 권장드립니다",
  },
  {
    q: "어깨나 허리 통증이 일상생활을 방해하나요?",
    options: ["매우 그렇다", "간헐적으로", "거의 없다"],
    hint: "정형외과 전문의와 상담해보세요",
  },
];

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState("quiz");
  const [quizStep, setQuizStep] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (opt: string) => {
    setSelected(opt);
    setTimeout(() => {
      if (quizStep < quizQuestions.length - 1) {
        setQuizStep((s) => s + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 600);
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setSelected(null);
    setShowResult(false);
  };

  const current = quizQuestions[quizStep];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Demo</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">직접 확인해보세요</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            우리가 만드는 콘텐츠를 미리 체험해볼 수 있습니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Video samples */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-muted-foreground mb-2">영상 콘텐츠 샘플</p>
            {videoSamples.map((video) => (
              <motion.div
                key={video.id}
                whileHover={{ scale: 1.02 }}
                className="relative flex items-center gap-4 bg-card border border-border rounded-2xl p-4 cursor-pointer hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div
                  className={`w-16 h-20 rounded-xl bg-gradient-to-br ${video.color} flex items-center justify-center text-2xl flex-shrink-0`}
                >
                  {video.icon}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{video.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{video.label}</p>
                  <p className="text-xs text-primary mt-1">추후 실제 영상으로 교체 예정</p>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <Play size={14} className="text-primary group-hover:text-white ml-0.5" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Interactive demo */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {/* Tab bar */}
            <div className="flex border-b border-border">
              {demoTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); resetQuiz(); }}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "border-b-2 border-primary text-primary bg-secondary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon size={14} />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-6 min-h-64">
              <AnimatePresence mode="wait">
                {activeTab === "quiz" && (
                  <motion.div
                    key="quiz"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-4"
                  >
                    {showResult ? (
                      <div className="text-center py-4">
                        <div className="text-4xl mb-3">🎉</div>
                        <p className="font-bold text-foreground mb-2">건강 체크 완료!</p>
                        <p className="text-sm text-muted-foreground mb-4">
                          전문의 상담을 통해 정확한 진단을 받아보세요.
                        </p>
                        <button
                          onClick={resetQuiz}
                          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                        >
                          다시 시작
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-muted-foreground">
                            {quizStep + 1} / {quizQuestions.length}
                          </span>
                          <div className="flex gap-1">
                            {quizQuestions.map((_, i) => (
                              <div
                                key={i}
                                className={`h-1 w-8 rounded-full transition-colors ${
                                  i <= quizStep ? "bg-primary" : "bg-border"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="font-medium text-foreground leading-snug">{current.q}</p>
                        <div className="flex flex-col gap-2">
                          {current.options.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => handleAnswer(opt)}
                              disabled={!!selected}
                              className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                                selected === opt
                                  ? "border-primary bg-secondary text-primary font-medium"
                                  : "border-border hover:border-primary/40 hover:bg-secondary"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{current.hint}</p>
                      </>
                    )}
                  </motion.div>
                )}

                {activeTab === "symptom" && (
                  <motion.div
                    key="symptom"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-3"
                  >
                    <p className="text-sm font-medium text-foreground">어떤 증상이 있으신가요?</p>
                    {["두통·어지러움", "피부 트러블", "관절·근육통", "소화불량", "잇몸·치아 통증", "피로·체력 저하"].map((s) => (
                      <label key={s} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="accent-primary w-4 h-4" />
                        <span className="text-sm text-foreground group-hover:text-primary transition-colors">{s}</span>
                      </label>
                    ))}
                    <button className="mt-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors">
                      병원 추천받기 →
                    </button>
                    <p className="text-xs text-muted-foreground">※ 이 기능은 실제 서비스 예시입니다</p>
                  </motion.div>
                )}

                {activeTab === "share" && (
                  <motion.div
                    key="share"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-4 py-4 text-center"
                  >
                    <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center">
                      <Share2 size={28} className="text-primary" />
                    </div>
                    <p className="font-medium text-foreground">SNS 공유 콘텐츠 예시</p>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                      환자가 자발적으로 공유하는 인터랙티브 콘텐츠로 바이럴 효과를 만들어냅니다.
                      건강 퀴즈, 증상 체커, 이벤트 페이지 등 다양한 형태로 제작됩니다.
                    </p>
                    <div className="flex gap-2 flex-wrap justify-center">
                      {["카카오톡", "인스타그램", "네이버 블로그"].map((ch) => (
                        <span key={ch} className="bg-secondary text-primary text-xs px-3 py-1 rounded-full border border-primary/20">
                          {ch}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">※ 추후 실제 콘텐츠로 교체 예정</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
