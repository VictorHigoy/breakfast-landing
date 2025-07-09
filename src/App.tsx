import Hero from "./components/LandingPage/Hero";
import News from "./components/LandingPage/News";
import OurProducts from "./components/LandingPage/OurProducts";
import Fellowship from "./components/LandingPage/Fellowship";
import Footer from "./components/LandingPage/Footer";
import Glitch from "./components/LandingPage/GlitchEffect";
import { useEffect, useState } from "react";

function App() {
  const [isGlitchOpen, setIsGlitchOpen] = useState(false);
  console.log(isGlitchOpen);
  useEffect(() => {
    if (isGlitchOpen) {
      const timer = setTimeout(() => {
        setIsGlitchOpen(false);
      }, 2000);

      // Cleanup in case component unmounts before 3s
      return () => clearTimeout(timer);
    }
  }, [isGlitchOpen]);

  return (
    <div className="bg-primary-bg h-screen w-full">
      {isGlitchOpen && (
        <div className="relative z-[9999] flex items-center justify-center bg-black">
          <Glitch />
        </div>
      )}
      <Hero setIsGlitchOpen={setIsGlitchOpen} />
      <OurProducts />
      <Fellowship />
      <News />
      <div className="w-full overflow-hidden">
        <Footer />
      </div>
    </div>
  );
}

export default App;
