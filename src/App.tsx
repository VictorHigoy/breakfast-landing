import Hero from "./components/LandingPage/Hero";
import News from "./components/LandingPage/New";
import OurProducts from "./components/LandingPage/OurProducts";
import Fellowship from "./components/LandingPage/Fellowship";
function App() {
  return (
    <div className="bg-primary-bg h-screen w-full">
      <Hero />
      <OurProducts />
      <Fellowship />
      <News />
    </div>
  );
}

export default App;
