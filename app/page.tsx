import Banner from "./components/Banner";
import Hero from "./components/Hero";
import GrandmaViola from "./components/GrandmaViola";
import PropertySnapshot from "./components/PropertySnapshot";
import BaseCamp from "./components/BaseCamp";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Banner />
      <Hero />
      <GrandmaViola />
      <PropertySnapshot />
      <BaseCamp />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
