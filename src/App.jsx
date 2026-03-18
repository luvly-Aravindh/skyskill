import "./App.css";
import HeroSection from "./Components/HeroSection";
import CreatorSection from "./Components/CreatorSection";
import ProgramsSection from "./Components/ProgramsSection";
import WhyChooseSection from "./Components/WhyChooseSection";
import EcosystemSection from "./Components/EcosystemSection";
import CareersSection from "./Components/CareersSection";

function App() {
  return (
    <>
      {/* HERO — LOAD IMMEDIATELY */}
    <HeroSection  />
    <CreatorSection />
    <ProgramsSection />
    <WhyChooseSection />
    <EcosystemSection />
    <CareersSection />
    </>
  );
}

export default App;
