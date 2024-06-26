import CertificatesSection from "./sections/certificates-section";
import FeaturedWorkSection from "./sections/featured-work-section";
import { HeroSection } from "./sections/hero-section";


export default function Home() {

  return (
    <>
    <HeroSection />
    <FeaturedWorkSection />
    <CertificatesSection /> 
    </>
  );
}