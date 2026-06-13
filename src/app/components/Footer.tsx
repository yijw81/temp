export function Footer() {
  return (
    <footer className="bg-foreground text-white/60 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div>
            <p className="text-white font-bold text-lg mb-2">MedLaunch</p>
            <p className="text-sm leading-relaxed max-w-xs">
              병원 개원·운영 컨설팅, 웹사이트 제작, 마케팅을 한 팀이 처음부터 끝까지 책임지는 파트너
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div className="flex flex-col gap-3">
              <p className="text-white font-medium">서비스</p>
              <a href="#consulting" className="hover:text-white transition-colors">개원·운영 컨설팅</a>
              <a href="#website" className="hover:text-white transition-colors">웹사이트 제작</a>
              <a href="#marketing" className="hover:text-white transition-colors">마케팅</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-white font-medium">회사</p>
              <a href="#portfolio" className="hover:text-white transition-colors">포트폴리오</a>
              <a href="#contact" className="hover:text-white transition-colors">문의</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-white font-medium">연락처</p>
              <p>contact@medlaunch.kr</p>
              <p>02-0000-0000</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs">
          <p>© 2024 MedLaunch. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <span>사업자등록번호: 000-00-00000</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
