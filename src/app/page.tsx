import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import PromoGrid from "@/components/PromoGrid";
import Footer from "@/components/Footer";
import { showcases } from "@/data/content";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {showcases.map((showcase) => (
          <ProductShowcase key={showcase.id} data={showcase} />
        ))}
        <PromoGrid />
      </main>
      <Footer />
    </>
  );
}
