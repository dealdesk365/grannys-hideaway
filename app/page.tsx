import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Vibe from "./components/Vibe";
import PropertyDetails from "./components/PropertyDetails";
import BaseCamp from "./components/BaseCamp";
import HouseRules from "./components/HouseRules";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Banner />
      <Hero />
      <Vibe />
      <PropertyDetails />
      <BaseCamp />
      <HouseRules />
      <Contact />
      <Footer />
    </main>
  );
}
