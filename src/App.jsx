import "./App.css";
import Awards from "./Components/Awards";
import HeroSection from "./Components/HeroSection";
import CreatorSection from "./Components/CreatorSection";
import Demo from "./Components/Demo";
import Footer from "./Components/Footer";
import Formpage from "./Components/Formpage";
import Imagine from "../src/Components/Imagine"
import Testmonial from "./Components/Testmonial";

function App() {
  return (
    <>
      <HeroSection />
      <CreatorSection />
      <Awards />
      <Demo />
      <Testmonial/>
      <Imagine/>
      <Formpage />
      <Footer />
    </>
  );
}
export default App;
