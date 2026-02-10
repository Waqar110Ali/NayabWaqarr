import Hero from "../components/home/hero/Hero";
import LoopBorder from "../components/home/loopboard/LoopBorder";
import ImageSlider from "../components/home/slider/ImageSlider";
import StoryInlineSection from "../components/home/scroll/ScrollRevealSection";
import ParallaxCardsSection from "../components/home/parallax/parallaxCardsSection";
import OfferSection from "../components/home/offerSection/OfferSection";
import DomainsSection from "../components/home/domain/domainSection";
import DomainCardSection from "../components/home/DomainCardSection/DomainCardSection";
import ClientsSection from "../components/home/clients/clientsSection";
import FaqSection from "../components/home/faq/FAQ";
import ContactSection from "../components/home/contact/contactsection";

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
 <FaqSection/>
 <ContactSection/>  
    </>
  );
}
