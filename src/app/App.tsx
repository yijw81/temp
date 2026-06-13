import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { InteractiveDemo } from "./components/InteractiveDemo";
import { Portfolio } from "./components/Portfolio";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <InteractiveDemo />
        <Portfolio />
        <Team />
        <Testimonials />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
