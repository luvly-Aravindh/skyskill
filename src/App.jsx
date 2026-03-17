import { Suspense, lazy } from "react";
import "./App.css";
import HeroSection from "./Components/HeroSection"
import CreatorSection from "./Components/CreatorSection";

function App() {
  return (
    <>
      {/* HERO — LOAD IMMEDIATELY */}
    <HeroSection  />
    <CreatorSection />
    </>
  );
}

export default App;
