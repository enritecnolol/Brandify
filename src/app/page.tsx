import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProcessSection from "../components/home/ProcessSection";
import CtaSection from "../components/home/CtaSection";
import InstagramCarousel from "../components/home/InstagramCarousel";
import PortfolioSection from "../components/home/PortfolioSection";
import SocialServicesSection from "../components/home/SocialServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <InstagramCarousel />
      <WhyChooseUs />
      <SocialServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <CtaSection />
    </main>
  );
}
