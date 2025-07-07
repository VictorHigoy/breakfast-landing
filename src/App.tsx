import Hero from "./components/LandingPage/Hero";
import News from "./components/LandingPage/News";
import OurProducts from "./components/LandingPage/OurProducts";
import Fellowship from "./components/LandingPage/Fellowship";
import Footer from "./components/LandingPage/Footer";
function App() {
  return (
    <div className="bg-primary-bg h-screen w-full">
      <Hero />
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
