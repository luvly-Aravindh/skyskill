import "./App.css";
import HeroSection from "./Components/HeroSection";
import CreatorSection from "./Components/CreatorSection";
import ProgramsSection from "./Components/ProgramsSection";
import WhyChooseSection from "./Components/WhyChooseSection";
import EcosystemSection from "./Components/EcosystemSection";

function App() {
  return (
    <>
      {/* HERO — LOAD IMMEDIATELY */}
    <HeroSection  />
    <CreatorSection />
    <ProgramsSection />
    <WhyChooseSection />
    <EcosystemSection />
    </>
  );
}

export default App;
