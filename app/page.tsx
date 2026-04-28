import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Counsel from "./components/Counsel";
import PracticeAreas from "./components/PracticeAreas";
import Services from "./components/Services";
import ProBono from "./components/ProBono";
import About from "./components/About";
import LegalInsights from "./components/LegalInsights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Counsel />
        <PracticeAreas />
        <Services />
        <ProBono />
        <About />
        <LegalInsights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


