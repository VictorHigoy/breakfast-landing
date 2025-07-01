import Hero from "./components/LandingPage/Hero";
import News from "./components/LandingPage/New";
import OurProducts from "./components/LandingPage/OurProducts";

function App() {
  return (
    <div className="bg-primary-bg h-screen w-full">
      <Hero />
      <OurProducts />
      <News />
    </div>
  );
}

export default App;
