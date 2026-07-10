import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import MoleOrGopher from "@/components/sections/MoleOrGopher";
import ShopCategories from "@/components/sections/ShopCategories";
import HowItWorks from "@/components/sections/HowItWorks";
import Heritage from "@/components/sections/Heritage";
import Testimonials from "@/components/sections/Testimonials";
import SignupFooter from "@/components/sections/SignupFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <TrustStrip />
        <MoleOrGopher />
        <ShopCategories />
        <HowItWorks />
        <Heritage />
        <Testimonials />
        <SignupFooter />
      </main>
    </>
  );
}
