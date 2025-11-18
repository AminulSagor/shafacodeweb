import HeroSection from '@/components/home/hero';
import Offer from '@/components/home/offer';
import PortfolioSection from '@/components/home/portfolio';
import TechStack from '@/components/home/tech-stack';
import WhyChooseUs from '@/components/home/why-choose';

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <TechStack />
      <PortfolioSection />
      <Offer />
      <WhyChooseUs />
    </>
  );
};

export default Homepage;
