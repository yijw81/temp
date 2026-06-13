<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  CheckCircle,
  ChevronDown,
  Code2,
  Gamepad2,
  Globe,
  MapPin,
  Megaphone,
  Menu,
  Play,
  Quote,
  Rocket,
  Send,
  Settings,
  Share2,
  Smartphone,
  Stethoscope,
  TrendingUp,
  Video,
  X,
} from 'lucide-vue-next'

const navItems = [
  { label: '개원·운영 컨설팅', href: '#consulting' },
  { label: '웹사이트 제작', href: '#website' },
  { label: '마케팅', href: '#marketing' },
  { label: '포트폴리오', href: '#portfolio' },
  { label: '문의', href: '#contact' },
]

const services = [
  { icon: Building2, title: '개원·운영 컨설팅', desc: '입지 선정부터 인허가, 운영 효율화까지 — 병원 경영의 처음과 끝을 함께합니다', items: ['입지 분석 & 상권 조사', '인허가 절차 대행', '운영 프로세스 설계', '수익 구조 최적화'], id: 'consulting' },
  { icon: Globe, title: '웹사이트·소개페이지 제작', desc: '신뢰감 있는 디자인과 빠른 속도로, 우리 병원만의 온라인 첫인상을 만듭니다', items: ['병원 맞춤 디자인', '모바일 최적화', 'SEO 기본 세팅', '빠른 로딩 속도'], id: 'website' },
  { icon: Megaphone, title: '마케팅 (영상·SNS·게임형 콘텐츠)', desc: '짧은 영상부터 인터랙티브 콘텐츠까지, 환자의 시선을 끄는 콘텐츠를 기획·제작합니다', items: ['릴스/쇼츠 제작', 'SNS 채널 운영', '게임형 인터랙티브 콘텐츠', '광고 성과 분석'], id: 'marketing' },
]

const steps = [
  { icon: MapPin, title: '개원 준비', desc: '입지 분석, 인허가, 초기 브랜딩', detail: '상권 분석부터 인허가 서류, 인테리어 방향까지 개원의 A to Z를 함께 설계합니다.' },
  { icon: Rocket, title: '오픈', desc: '웹사이트·SNS 채널 세팅, 오프닝 마케팅', detail: '병원 웹사이트와 SNS 채널을 준비하고, 개원 첫날부터 환자 유입을 만들어냅니다.' },
  { icon: Settings, title: '안정화', desc: '운영 프로세스 점검, 데이터 기반 개선', detail: '오픈 후 운영 데이터를 분석하고 환자 동선, 예약 흐름, 콘텐츠 성과를 최적화합니다.' },
  { icon: TrendingUp, title: '성장', desc: '콘텐츠 확장, 브랜드 인지도 강화', detail: '지역 내 인지도를 높이고, 충성 환자를 늘리는 장기 브랜딩 전략을 실행합니다.' },
]

const videoSamples = [
  { id: 1, title: '치과 개원 스토리', label: '릴스 · 45sec', color: 'from-emerald-400 to-teal-600', icon: '🦷' },
  { id: 2, title: '피부과 시술 Before/After', label: '쇼츠 · 30sec', color: 'from-rose-400 to-pink-600', icon: '✨' },
  { id: 3, title: '한의원 브랜드 필름', label: '릴스 · 60sec', color: 'from-amber-400 to-orange-600', icon: '🌿' },
]
const demoTabs = [
  { id: 'quiz', label: '건강 퀴즈', icon: Gamepad2 },
  { id: 'symptom', label: '증상 체크', icon: Smartphone },
  { id: 'share', label: 'SNS 공유', icon: Share2 },
]
const quizQuestions = [
  { q: '최근 잇몸이 자주 붓거나 피가 나시나요?', options: ['자주 그렇다', '가끔 그렇다', '거의 없다'], hint: '잇몸 질환 조기 발견이 중요합니다' },
  { q: '피부 트러블이나 색소 침착으로 고민이 있으신가요?', options: ['심한 편이다', '조금 있다', '거의 없다'], hint: '피부과 전문 상담을 권장드립니다' },
  { q: '어깨나 허리 통증이 일상생활을 방해하나요?', options: ['매우 그렇다', '간헐적으로', '거의 없다'], hint: '정형외과 전문의와 상담해보세요' },
]
const symptoms = ['두통·어지러움', '피부 트러블', '관절·근육통', '소화불량', '잇몸·치아 통증', '피로·체력 저하']
const channels = ['카카오톡', '인스타그램', '네이버 블로그']

const portfolioItems = [
  { specialty: '치과', name: '스마일링 치과의원', desc: '개원 컨설팅부터 웹사이트, 인스타그램 콘텐츠까지 풀케어 패키지 적용', tags: ['개원 컨설팅', '웹사이트', 'SNS 운영'], color: 'from-blue-50 to-indigo-100', emoji: '🦷', result: '개원 3개월 만에 월 예약 300건 달성' },
  { specialty: '피부과', name: '클리어스킨 피부과', desc: '릴스·쇼츠 콘텐츠 제작과 게임형 이벤트로 팔로워 1만 명 돌파', tags: ['영상 콘텐츠', '인터랙티브 이벤트', 'SNS'], color: 'from-rose-50 to-pink-100', emoji: '✨', result: '인스타그램 팔로워 1만 달성' },
  { specialty: '한의원', name: '하늘빛 한의원', desc: '지역 특화 브랜딩과 블로그 운영으로 네이버 상위 노출 최적화', tags: ['브랜딩', '블로그 SEO', '웹사이트'], color: 'from-green-50 to-emerald-100', emoji: '🌿', result: "네이버 '○○한의원' 1페이지 상위 노출" },
  { specialty: '정형외과', name: '굿본 정형외과', desc: '환자 신뢰도 중심의 전문의 콘텐츠와 치료 사례 영상 시리즈 제작', tags: ['전문의 콘텐츠', '영상 시리즈', '웹사이트'], color: 'from-amber-50 to-orange-100', emoji: '🦴', result: '문의 전화 월 150건 → 280건' },
]

const members = [
  { icon: Code2, role: '개발팀', tagline: '안정적이고 빠른 웹 구축', desc: 'Vue.js 기반의 빠르고 안정적인 병원 웹사이트를 제작합니다. 모바일 최적화와 SEO까지 책임집니다.', skills: ['Vue.js', '모바일 최적화', 'SEO 세팅', '성능 최적화'], color: 'bg-blue-50', iconColor: 'text-blue-600' },
  { icon: Video, role: '영상 전문가', tagline: '시선을 사로잡는 콘텐츠 제작', desc: '릴스·쇼츠부터 브랜드 필름까지, 환자의 시선을 멈추게 하는 영상 콘텐츠를 기획하고 제작합니다.', skills: ['릴스/쇼츠 제작', '편집·색보정', '스크립트 기획', '음악 라이선스'], color: 'bg-rose-50', iconColor: 'text-rose-600' },
  { icon: Stethoscope, role: '병원 운영 전문가', tagline: '현장을 아는 운영 노하우', desc: '실제 병원 경영 현장 경험을 바탕으로 인허가, 수익 구조, 환자 관리 프로세스를 함께 설계합니다.', skills: ['인허가 대행', '수익 구조 설계', '환자 관리 시스템', '의료법 준수'], color: 'bg-green-50', iconColor: 'text-emerald-600' },
]

const testimonials = [
  { text: '오픈 준비 과정에서 신경 쓸 게 너무 많았는데, 처음부터 끝까지 함께해줘서 든든했어요. 인허가 서류부터 개원 마케팅까지 정말 아무것도 놓치지 않았습니다.', name: '김○○ 원장', hospital: '스마일링 치과의원', specialty: '치과', rating: 5 },
  { text: 'SNS 콘텐츠 반응이 확실히 달라졌습니다. 이전엔 그냥 올리는 수준이었는데, 이제는 환자분들이 직접 공유해주실 정도예요. 팔로워도 꾸준히 늘고 있습니다.', name: '이○○ 원장', hospital: '클리어스킨 피부과', specialty: '피부과', rating: 5 },
  { text: '웹사이트만 바꿨는데 문의 전화가 늘었어요. 예전 사이트는 답답해 보인다는 피드백이 많았는데, 새로 만들고 나서 첫인상이 달라졌다는 말을 자주 듣습니다.', name: '박○○ 원장', hospital: '굿본 정형외과', specialty: '정형외과', rating: 5 },
]

const plans = [
  { name: '베이직', subtitle: '온라인 첫걸음', desc: '온라인 존재감을 갖추고 싶은 병원에게', price: '문의', features: ['병원 웹사이트 제작', '모바일 최적화', '기본 SNS 채널 세팅', '카카오 채널 연동', '1개월 A/S 보장'], cta: '상담 신청', highlighted: false },
  { name: '스탠다드', subtitle: '성장 패키지', desc: '꾸준한 환자 유입과 브랜딩이 필요한 병원에게', price: '문의', features: ['베이직 패키지 전체 포함', 'SNS 월간 운영 (인스타·블로그)', '릴스/쇼츠 월 2편 제작', '성과 월간 리포트', '3개월 A/S 보장'], cta: '추천 패키지 신청', highlighted: true, badge: '추천' },
  { name: '프리미엄', subtitle: '풀케어 패키지', desc: '처음부터 끝까지 전담 관리가 필요한 병원에게', price: '문의', features: ['스탠다드 패키지 전체 포함', '개원·운영 컨설팅 전담', '인터랙티브 마케팅 콘텐츠', '전담 마케팅팀 운영', '무제한 A/S & 월간 미팅'], cta: '상담 신청', highlighted: false },
]

const concerns = ['입지 선정 & 인허가', '병원 웹사이트 제작', 'SNS & 콘텐츠 마케팅', '영상 콘텐츠 제작', '환자 유입 증대', '브랜딩 & 디자인']
const stages = ['개원 전', '운영 중']

const scrolled = ref(false)
const menuOpen = ref(false)
const activeTab = ref('quiz')
const quizStep = ref(0)
const selected = ref<string | null>(null)
const showResult = ref(false)
const submitted = ref(false)
const form = reactive({ hospitalName: '', phone: '', stage: '', concerns: [] as string[] })
const currentQuestion = computed(() => quizQuestions[quizStep.value])

const onScroll = () => { scrolled.value = window.scrollY > 20 }
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll) })
onUnmounted(() => window.removeEventListener('scroll', onScroll))

function resetQuiz() { quizStep.value = 0; selected.value = null; showResult.value = false }
function selectTab(tabId: string) { activeTab.value = tabId; resetQuiz() }
function handleAnswer(option: string) {
  selected.value = option
  window.setTimeout(() => {
    if (quizStep.value < quizQuestions.length - 1) { quizStep.value += 1; selected.value = null }
    else showResult.value = true
  }, 600)
}
function toggleConcern(concern: string) {
  form.concerns = form.concerns.includes(concern) ? form.concerns.filter((item) => item !== concern) : [...form.concerns, concern]
}
function handleSubmit() { submitted.value = true }
</script>

<template>
  <div class="min-h-screen bg-background">
    <header :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-border shadow-sm' : 'bg-transparent']">
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" class="text-primary font-bold text-xl tracking-tight">MedLaunch</a>
        <nav class="hidden md:flex items-center gap-8">
          <a v-for="item in navItems" :key="item.href" :href="item.href" class="text-sm text-muted-foreground hover:text-foreground transition-colors">{{ item.label }}</a>
        </nav>
        <div class="flex items-center gap-3">
          <a href="#contact" class="hidden md:inline-flex bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors">무료 상담</a>
          <button class="md:hidden p-2 text-foreground" aria-label="메뉴 열기" @click="menuOpen = !menuOpen"><X v-if="menuOpen" :size="20" /><Menu v-else :size="20" /></button>
        </div>
      </div>
      <div v-if="menuOpen" class="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4">
        <a v-for="item in navItems" :key="item.href" :href="item.href" class="text-sm text-muted-foreground hover:text-foreground transition-colors" @click="menuOpen = false">{{ item.label }}</a>
        <a href="#contact" class="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium text-center" @click="menuOpen = false">무료 상담</a>
      </div>
    </header>

    <main>
      <section class="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden bg-background">
        <div class="absolute inset-0 opacity-30" :style="{ backgroundImage: 'linear-gradient(to right, #E5E7E3 1px, transparent 1px), linear-gradient(to bottom, #E5E7E3 1px, transparent 1px)', backgroundSize: '48px 48px' }" />
        <div class="absolute inset-0 pointer-events-none" :style="{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(31,111,92,0.07) 0%, transparent 70%)' }" />
        <div class="relative max-w-4xl mx-auto text-center">
          <div class="animate-fade-up"><span class="inline-flex items-center gap-2 bg-secondary text-primary text-sm px-3 py-1 rounded-full mb-8 border border-primary/20"><span class="w-1.5 h-1.5 bg-accent rounded-full" />개원부터 성장까지, 원스톱 파트너</span></div>
          <h1 class="animate-fade-up animation-delay-100 text-4xl md:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">병원 개원부터 운영,<br />마케팅까지—<br /><span class="text-primary">한 팀이 끝까지 책임집니다</span></h1>
          <p class="animate-fade-up animation-delay-200 text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">개발 · 영상 · 병원 운영 전문가가 모인 단 하나의 파트너</p>
          <div class="animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contact" class="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-medium hover:bg-accent/90 transition-all hover:shadow-lg hover:-translate-y-0.5">무료 상담 신청하기<ArrowRight :size="16" /></a>
            <a href="#services" class="inline-flex items-center justify-center gap-2 border border-border bg-card text-foreground px-6 py-3 rounded-xl font-medium hover:border-primary/40 hover:bg-secondary transition-colors">서비스 살펴보기</a>
          </div>
          <div class="animate-fade-in animation-delay-700 mt-16 flex flex-col items-center gap-2 text-muted-foreground"><span class="text-xs tracking-widest uppercase">스크롤</span><ChevronDown :size="16" class="animate-bounce" /></div>
        </div>
        <div class="relative mt-16 w-full max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 grid grid-cols-3 divide-x divide-border animate-fade-up animation-delay-500">
          <div v-for="stat in [{ value: '150+', label: '개원 지원 병원' }, { value: '98%', label: '고객 재계약률' }, { value: '3인 전담팀', label: '처음부터 끝까지' }]" :key="stat.label" class="flex flex-col items-center gap-1 px-4"><span class="text-2xl md:text-3xl font-bold text-primary">{{ stat.value }}</span><span class="text-xs text-muted-foreground text-center">{{ stat.label }}</span></div>
        </div>
      </section>

      <section id="services" class="py-24 px-6 bg-background"><div class="max-w-6xl mx-auto"><SectionTitle eyebrow="Services" title="3가지 핵심 서비스" text="개원 준비부터 환자 유입까지, 필요한 모든 것을 한 팀에서 해결합니다" /><div class="grid md:grid-cols-3 gap-6"><div v-for="(svc, i) in services" :id="svc.id" :key="svc.id" class="bg-card border border-border rounded-2xl p-8 flex flex-col gap-6 hover:border-primary/30 hover:shadow-md transition-all group animate-fade-up" :style="{ animationDelay: `${i * 100}ms` }"><div class="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors"><component :is="svc.icon" :size="22" class="text-primary" /></div><div><h3 class="text-lg font-bold text-foreground mb-2">{{ svc.title }}</h3><p class="text-muted-foreground text-sm leading-relaxed">{{ svc.desc }}</p></div><ul class="flex flex-col gap-2 mt-auto"><li v-for="item in svc.items" :key="item" class="flex items-center gap-2 text-sm text-foreground"><span class="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />{{ item }}</li></ul></div></div></div></section>

      <section class="py-24 px-6 bg-secondary"><div class="max-w-6xl mx-auto"><SectionTitle eyebrow="Process" title="4단계 성장 로드맵" text="개원 준비부터 지속 성장까지, 각 단계에서 필요한 전문가가 함께합니다" /><div class="relative"><div class="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border" /><div class="grid md:grid-cols-4 gap-8"><div v-for="(step, i) in steps" :key="step.title" class="flex flex-col items-center text-center gap-4 animate-fade-up" :style="{ animationDelay: `${i * 120}ms` }"><div class="relative"><div class="w-20 h-20 bg-card border border-border rounded-2xl flex items-center justify-center shadow-sm"><component :is="step.icon" :size="28" class="text-primary" /></div><span class="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold">{{ i + 1 }}</span></div><div><h3 class="font-bold text-foreground mb-1">{{ step.title }}</h3><p class="text-primary text-sm font-medium mb-2">{{ step.desc }}</p><p class="text-muted-foreground text-xs leading-relaxed">{{ step.detail }}</p></div></div></div></div></div></section>

      <section class="py-24 px-6 bg-background"><div class="max-w-6xl mx-auto"><SectionTitle eyebrow="Demo" title="직접 확인해보세요" text="우리가 만드는 콘텐츠를 미리 체험해볼 수 있습니다" /><div class="grid md:grid-cols-2 gap-10 items-start"><div class="flex flex-col gap-4"><p class="text-sm font-medium text-muted-foreground mb-2">영상 콘텐츠 샘플</p><div v-for="video in videoSamples" :key="video.id" class="relative flex items-center gap-4 bg-card border border-border rounded-2xl p-4 cursor-pointer hover:border-primary/30 hover:shadow-md transition-all group hover:scale-[1.02]"><div :class="['w-16 h-20 rounded-xl bg-gradient-to-br flex items-center justify-center text-2xl flex-shrink-0', video.color]">{{ video.icon }}</div><div class="flex-1"><p class="font-medium text-foreground">{{ video.title }}</p><p class="text-xs text-muted-foreground mt-0.5">{{ video.label }}</p><p class="text-xs text-primary mt-1">추후 실제 영상으로 교체 예정</p></div><div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors"><Play :size="14" class="text-primary group-hover:text-white ml-0.5" /></div></div></div><div class="bg-card border border-border rounded-2xl overflow-hidden"><div class="flex border-b border-border"><button v-for="tab in demoTabs" :key="tab.id" :class="['flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors', activeTab === tab.id ? 'border-b-2 border-primary text-primary bg-secondary' : 'text-muted-foreground hover:text-foreground']" @click="selectTab(tab.id)"><component :is="tab.icon" :size="14" />{{ tab.label }}</button></div><div class="p-6 min-h-64"><Transition name="fade" mode="out-in"><div v-if="activeTab === 'quiz'" key="quiz" class="flex flex-col gap-4"><div v-if="showResult" class="text-center py-4"><div class="text-4xl mb-3">🎉</div><p class="font-bold text-foreground mb-2">건강 체크 완료!</p><p class="text-sm text-muted-foreground mb-4">전문의 상담을 통해 정확한 진단을 받아보세요.</p><button class="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors" @click="resetQuiz">다시 시작</button></div><template v-else><div class="flex items-center justify-between mb-2"><span class="text-xs text-muted-foreground">{{ quizStep + 1 }} / {{ quizQuestions.length }}</span><div class="flex gap-1"><div v-for="(_, i) in quizQuestions" :key="i" :class="['h-1 w-8 rounded-full transition-colors', i <= quizStep ? 'bg-primary' : 'bg-border']" /></div></div><p class="font-medium text-foreground leading-snug">{{ currentQuestion.q }}</p><div class="flex flex-col gap-2"><button v-for="opt in currentQuestion.options" :key="opt" :disabled="!!selected" :class="['w-full text-left px-4 py-3 rounded-xl border text-sm transition-all', selected === opt ? 'border-primary bg-secondary text-primary font-medium' : 'border-border hover:border-primary/40 hover:bg-secondary']" @click="handleAnswer(opt)">{{ opt }}</button></div><p class="text-xs text-muted-foreground mt-1">{{ currentQuestion.hint }}</p></template></div><div v-else-if="activeTab === 'symptom'" key="symptom" class="flex flex-col gap-3"><p class="text-sm font-medium text-foreground">어떤 증상이 있으신가요?</p><label v-for="symptom in symptoms" :key="symptom" class="flex items-center gap-3 cursor-pointer group"><input type="checkbox" class="accent-primary w-4 h-4" /><span class="text-sm text-foreground group-hover:text-primary transition-colors">{{ symptom }}</span></label><button class="mt-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors">병원 추천받기 →</button><p class="text-xs text-muted-foreground">※ 이 기능은 실제 서비스 예시입니다</p></div><div v-else key="share" class="flex flex-col items-center gap-4 py-4 text-center"><div class="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center"><Share2 :size="28" class="text-primary" /></div><p class="font-medium text-foreground">SNS 공유 콘텐츠 예시</p><p class="text-sm text-muted-foreground leading-relaxed max-w-xs">환자가 자발적으로 공유하는 인터랙티브 콘텐츠로 바이럴 효과를 만들어냅니다. 건강 퀴즈, 증상 체커, 이벤트 페이지 등 다양한 형태로 제작됩니다.</p><div class="flex gap-2 flex-wrap justify-center"><span v-for="channel in channels" :key="channel" class="bg-secondary text-primary text-xs px-3 py-1 rounded-full border border-primary/20">{{ channel }}</span></div><p class="text-xs text-muted-foreground">※ 추후 실제 콘텐츠로 교체 예정</p></div></Transition></div></div></div></div></section>

      <section id="portfolio" class="py-24 px-6 bg-secondary"><div class="max-w-6xl mx-auto"><SectionTitle eyebrow="Portfolio" title="다양한 진료과목, 변하지 않는 퀄리티" text="진료과목에 맞는 맞춤 전략으로 각 병원의 특색을 살립니다" /><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5"><div v-for="(item, i) in portfolioItems" :key="item.name" class="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all group cursor-pointer animate-fade-up" :style="{ animationDelay: `${i * 100}ms` }"><div :class="['bg-gradient-to-br h-32 flex items-center justify-center relative', item.color]"><span class="text-5xl">{{ item.emoji }}</span><span class="absolute top-3 left-3 bg-white/80 text-xs font-medium px-2 py-0.5 rounded-full text-foreground">{{ item.specialty }}</span><div class="absolute top-3 right-3 w-7 h-7 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><ArrowUpRight :size="14" /></div></div><div class="p-5"><h3 class="font-bold text-foreground mb-1.5">{{ item.name }}</h3><p class="text-sm text-muted-foreground leading-relaxed mb-3">{{ item.desc }}</p><div class="flex flex-wrap gap-1.5 mb-3"><span v-for="tag in item.tags" :key="tag" class="bg-secondary text-primary text-xs px-2 py-0.5 rounded-full border border-border">{{ tag }}</span></div><div class="border-t border-border pt-3"><p class="text-xs text-primary font-medium">📈 {{ item.result }}</p></div></div></div></div></div></section>

      <section class="py-24 px-6 bg-background"><div class="max-w-6xl mx-auto"><SectionTitle eyebrow="Team" title="세 명의 전문가, 하나의 팀" text="처음 계약부터 마지막 결과까지, 동일한 3인 팀이 일관성 있게 책임집니다" /><div class="grid md:grid-cols-3 gap-6"><div v-for="(m, i) in members" :key="m.role" class="bg-card border border-border rounded-2xl p-8 flex flex-col gap-5 hover:shadow-md transition-all animate-fade-up" :style="{ animationDelay: `${i * 100}ms` }"><div :class="['w-14 h-14 rounded-2xl flex items-center justify-center', m.color]"><component :is="m.icon" :size="26" :class="m.iconColor" /></div><div><p class="text-xs text-muted-foreground font-medium tracking-widest uppercase mb-1">{{ m.role }}</p><h3 class="text-lg font-bold text-foreground mb-2">{{ m.tagline }}</h3><p class="text-sm text-muted-foreground leading-relaxed">{{ m.desc }}</p></div><div class="flex flex-wrap gap-2 mt-auto"><span v-for="skill in m.skills" :key="skill" class="bg-secondary text-primary text-xs px-2.5 py-1 rounded-full">{{ skill }}</span></div></div></div></div></section>

      <section class="py-24 px-6 bg-secondary"><div class="max-w-6xl mx-auto"><SectionTitle eyebrow="Reviews" title="원장님들의 이야기" text="실제 함께한 원장님들의 솔직한 후기입니다 (추후 실제 후기로 교체 예정)" /><div class="grid md:grid-cols-3 gap-6"><div v-for="(t, i) in testimonials" :key="t.name" class="bg-card border border-border rounded-2xl p-7 flex flex-col gap-5 hover:shadow-md transition-all animate-fade-up" :style="{ animationDelay: `${i * 100}ms` }"><Quote :size="24" class="text-primary/30" /><p class="text-foreground leading-relaxed flex-1 text-sm">&quot;{{ t.text }}&quot;</p><div class="flex items-center gap-1 mb-1"><span v-for="idx in t.rating" :key="idx" class="text-amber-400 text-sm">★</span></div><div class="border-t border-border pt-4 flex items-center gap-3"><div class="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-sm">{{ t.specialty[0] }}</div><div><p class="font-medium text-foreground text-sm">{{ t.name }}</p><p class="text-xs text-muted-foreground">{{ t.hospital }}</p></div></div></div></div></div></section>

      <section class="py-24 px-6 bg-background"><div class="max-w-6xl mx-auto"><SectionTitle eyebrow="Pricing" title="병원에 맞는 패키지" text="모든 패키지는 무료 상담 후 병원 상황에 맞게 조율됩니다" /><div class="grid md:grid-cols-3 gap-6"><div v-for="(plan, i) in plans" :key="plan.name" :class="['relative bg-card rounded-2xl p-8 flex flex-col gap-6 transition-all animate-fade-up', plan.highlighted ? 'border-2 border-accent shadow-lg shadow-accent/10 scale-[1.02]' : 'border border-border hover:shadow-md']" :style="{ animationDelay: `${i * 100}ms` }"><span v-if="plan.badge" class="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">{{ plan.badge }}</span><div><p class="text-xs text-muted-foreground font-medium tracking-widest uppercase">{{ plan.name }}</p><h3 class="text-xl font-bold text-foreground mt-1">{{ plan.subtitle }}</h3><p class="text-sm text-muted-foreground mt-2 leading-relaxed">{{ plan.desc }}</p></div><div class="border-t border-border pt-4"><p class="text-sm text-muted-foreground mb-1">가격</p><p class="text-2xl font-bold text-primary">{{ plan.price }} <span class="text-sm font-normal text-muted-foreground">— 무료 상담 후 안내</span></p></div><ul class="flex flex-col gap-3 flex-1"><li v-for="feature in plan.features" :key="feature" class="flex items-start gap-2.5 text-sm text-foreground"><Check :size="15" class="text-primary mt-0.5 flex-shrink-0" />{{ feature }}</li></ul><a href="#contact" :class="['block text-center py-3 rounded-xl font-medium text-sm transition-all', plan.highlighted ? 'bg-accent text-accent-foreground hover:bg-accent/90' : 'bg-secondary text-primary hover:bg-primary hover:text-white border border-primary/20']">{{ plan.cta }}</a></div></div></div></section>

      <section id="contact" class="py-24 px-6 bg-primary"><div class="max-w-2xl mx-auto"><div class="text-center mb-12"><h2 class="text-3xl md:text-4xl font-bold text-white mb-4">지금, 무료 상담을 신청하세요</h2><p class="text-white/70 leading-relaxed">전문가가 직접 연락드려 병원 상황에 맞는 솔루션을 안내해드립니다. 부담 없이 문의하세요.</p></div><div v-if="submitted" class="bg-white rounded-2xl p-10 text-center animate-fade-up"><CheckCircle :size="52" class="text-primary mx-auto mb-4" /><h3 class="text-xl font-bold text-foreground mb-2">상담 신청이 완료되었습니다!</h3><p class="text-muted-foreground">영업일 기준 1일 이내에 전문가가 직접 연락드립니다.</p></div><form v-else class="bg-white rounded-2xl p-8 flex flex-col gap-6 animate-fade-up" @submit.prevent="handleSubmit"><div class="grid sm:grid-cols-2 gap-4"><div class="flex flex-col gap-1.5"><label class="text-sm font-medium text-foreground">병원명 <span class="text-accent">*</span></label><input v-model="form.hospitalName" type="text" placeholder="예) 스마일링 치과의원" required class="border border-border rounded-xl px-4 py-3 text-sm bg-background placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" /></div><div class="flex flex-col gap-1.5"><label class="text-sm font-medium text-foreground">연락처 <span class="text-accent">*</span></label><input v-model="form.phone" type="tel" placeholder="010-0000-0000" required class="border border-border rounded-xl px-4 py-3 text-sm bg-background placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" /></div></div><div class="flex flex-col gap-2"><label class="text-sm font-medium text-foreground">현재 단계</label><div class="flex gap-3"><button v-for="stage in stages" :key="stage" type="button" :class="['flex-1 py-3 rounded-xl border text-sm font-medium transition-all', form.stage === stage ? 'border-primary bg-secondary text-primary' : 'border-border text-muted-foreground hover:border-primary/40']" @click="form.stage = stage">{{ stage }}</button></div></div><div class="flex flex-col gap-2"><label class="text-sm font-medium text-foreground">주요 고민 <span class="text-muted-foreground font-normal">(복수 선택 가능)</span></label><div class="flex flex-wrap gap-2"><button v-for="concern in concerns" :key="concern" type="button" :class="['px-3 py-2 rounded-xl border text-sm transition-all', form.concerns.includes(concern) ? 'border-primary bg-secondary text-primary' : 'border-border text-muted-foreground hover:border-primary/40']" @click="toggleConcern(concern)">{{ concern }}</button></div></div><button type="submit" class="w-full bg-accent text-accent-foreground py-4 rounded-xl font-medium hover:bg-accent/90 transition-all hover:shadow-lg flex items-center justify-center gap-2 mt-2">무료 상담 신청하기<Send :size="16" /></button><p class="text-xs text-muted-foreground text-center leading-relaxed">입력하신 정보는 상담 목적으로만 사용되며, 개인정보 처리방침에 따라 보호됩니다.</p></form></div></section>
    </main>

    <footer class="bg-foreground text-white/60 py-12 px-6"><div class="max-w-6xl mx-auto"><div class="flex flex-col md:flex-row justify-between gap-8 mb-8"><div><p class="text-white font-bold text-lg mb-2">MedLaunch</p><p class="text-sm leading-relaxed max-w-xs">병원 개원·운영 컨설팅, 웹사이트 제작, 마케팅을 한 팀이 처음부터 끝까지 책임지는 파트너</p></div><div class="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm"><div class="flex flex-col gap-3"><p class="text-white font-medium">서비스</p><a href="#consulting" class="hover:text-white transition-colors">개원·운영 컨설팅</a><a href="#website" class="hover:text-white transition-colors">웹사이트 제작</a><a href="#marketing" class="hover:text-white transition-colors">마케팅</a></div><div class="flex flex-col gap-3"><p class="text-white font-medium">회사</p><a href="#portfolio" class="hover:text-white transition-colors">포트폴리오</a><a href="#contact" class="hover:text-white transition-colors">문의</a></div><div class="flex flex-col gap-3"><p class="text-white font-medium">연락처</p><p>contact@medlaunch.kr</p><p>02-0000-0000</p></div></div></div><div class="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs"><p>© 2024 MedLaunch. All rights reserved.</p><div class="flex gap-4"><a href="#" class="hover:text-white transition-colors">이용약관</a><a href="#" class="hover:text-white transition-colors">개인정보처리방침</a><span>사업자등록번호: 000-00-00000</span></div></div></div></footer>
  </div>
</template>

<script lang="ts">
export default {
  components: {
    SectionTitle: {
      props: { eyebrow: String, title: String, text: String },
      template: `<div class="text-center mb-16"><span class="text-primary text-sm font-medium tracking-widest uppercase">{{ eyebrow }}</span><h2 class="mt-3 text-3xl md:text-4xl font-bold text-foreground">{{ title }}</h2><p class="mt-4 text-muted-foreground max-w-xl mx-auto">{{ text }}</p></div>`,
    },
  },
}
</script>

<style scoped>
@keyframes fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-up { animation: fade-up 0.7s ease both; }
.animate-fade-in { animation: fade-in 1s ease both; }
.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-300 { animation-delay: 300ms; }
.animation-delay-500 { animation-delay: 500ms; }
.animation-delay-700 { animation-delay: 700ms; }
.fade-enter-active,
.fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; transform: translateY(8px); }
</style>
