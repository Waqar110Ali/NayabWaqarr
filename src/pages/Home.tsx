import Hero from "../components/home/hero/Hero";
import Services from "../components/home/Services";
import Portfolio from "../components/home/Portfolio";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import LoopBorder from "../components/home/loopboard/LoopBorder";
import ImageSlider from "../components/home/slider/ImageSlider";

export default function Home() {
  return (
    <>
      <Hero />
      <LoopBorder/>
      <ImageSlider/>
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
  
    </>
  );
}
