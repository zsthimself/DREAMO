import HeroSection from "@/components/sections/HeroSection";
import PioneeringSection from "@/components/sections/PioneeringSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowToUseSection from "@/components/sections/HowToUseSection";
import AdvancedFeaturesSection from "@/components/sections/AdvancedFeaturesSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import DemoSection from "@/components/sections/DemoSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Layout from "@/components/layout/Layout";

export const dynamic = "force-static";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <PioneeringSection />
      <FeaturesSection />
      <HowToUseSection />
      <AdvancedFeaturesSection />
      <StatisticsSection />
      <DemoSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
}
