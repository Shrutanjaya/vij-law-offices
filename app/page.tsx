import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PracticeAreas from "./components/PracticeAreas";
import Services from "./components/Services";
import ProBono from "./components/ProBono";
import Counsel from "./components/Counsel";
import LegalInsights from "./components/LegalInsights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Services />
        <ProBono />
        <Counsel />
        <LegalInsights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

