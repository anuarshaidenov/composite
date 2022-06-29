import AboutSection from '../components/sections/about-section/AboutSection';
import FeaturesSection from '../components/sections/features-section/FeaturesSection';
import GetStartedSection from '../components/sections/get-started-section/GetStartedSection';
import HeroSection from '../components/sections/hero-section/HeroSection';
import OffersSection from '../components/sections/offers-section/OffersSection';
import PathsSection from '../components/sections/paths-section/PathsSection';
import ToolsSection from '../components/sections/tools-section/ToolsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OffersSection />
      <FeaturesSection />
      <GetStartedSection />
      <ToolsSection />
      <PathsSection />
    </>
  );
}
