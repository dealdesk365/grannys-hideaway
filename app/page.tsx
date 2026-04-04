import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Vibe from "./components/Vibe";
import GrandmaViola from "./components/GrandmaViola";
import PropertyDetails from "./components/PropertyDetails";
import BaseCamp from "./components/BaseCamp";
import HouseRules from "./components/HouseRules";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Banner />
      <Hero />
      <Vibe />
      <GrandmaViola />
      <PropertyDetails />
      <BaseCamp />
      <HouseRules />
      <FAQ />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
