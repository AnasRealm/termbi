import { MainLayout } from '../../../shared/layouts/main-layout/MainLayout';
import Hero from '../componats/hero/Hero';
import FeaturesSection from '../componats/features-section/FeaturesSection';
import WhyTermbi from '../componats/why-termbi/WhyTermbi';
import TrustedRestaurants from '../componats/trusted-restaurants/TrustedRestaurants';
import Pricing from '../componats/pricing/Pricing';

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <WhyTermbi />
      <TrustedRestaurants />
      <Pricing />
      <FeaturesSection />
    </MainLayout>
  );
}