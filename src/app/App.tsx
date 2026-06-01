import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Target } from "./components/Target";
import { References } from "./components/References";
import { Process } from "./components/Process";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <Nav />
      <main>
        <Hero />
        <Target />
        <References />
        <Process />
        <Pricing />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
