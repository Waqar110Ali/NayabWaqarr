import Hero from "../components/home/hero/Hero";
import Services from "../components/home/Services";
import Portfolio from "../components/home/Portfolio";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import LoopBorder from "../components/home/loopboard/LoopBorder";
import ImageSlider from "../components/home/slider/ImageSlider";
import StoryInlineSection from "../components/home/scroll/ScrollRevealSection";
import ParallaxCardsSection from "../components/home/parallax/parallaxCardsSection";
import OfferSection from "../components/home/offerSection/OfferSection";
import DomainsSection from "../components/home/domain/domainSection";
import DomainCardSection from "../components/home/DomainCardSection/DomainCardSection";
import ClientsSection from "../components/home/clients/clientsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <LoopBorder/>
      <ImageSlider/>
      <StoryInlineSection />
      <ParallaxCardsSection/>
      <OfferSection/>
    <DomainsSection />
    <DomainCardSection/>
 <ClientsSection/>
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
  
    </>
  );
}
