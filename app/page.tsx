import ChooseUs from "@/components/ChooseUs";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import FullyCustomize from "@/components/FullyCustomize";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Testimonials from "@/components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <ChooseUs />
      <FullyCustomize />
      <Testimonials />
      <Faq />
      <GetStarted />
      <Footer />
    </>
  );
}
