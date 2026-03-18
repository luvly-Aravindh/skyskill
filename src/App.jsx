import "./App.css";
import HeroSection from "./Components/HeroSection";
import CreatorSection from "./Components/CreatorSection";
import ProgramsSection from "./Components/ProgramsSection";

function App() {
  return (
    <>
      {/* HERO — LOAD IMMEDIATELY */}
    <HeroSection  />
    <CreatorSection />
    <ProgramsSection />
    </>
  );
}

export default App;
