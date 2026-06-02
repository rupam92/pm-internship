import HomeSection from "@/components/Home/home";
import BenefitsSection from "@/components/Home/benefits";
import HowItWorksSection from "@/components/Home/howItWorks";
import TestimonialsSection from "@/components/Home/testimonials";
import FAQSection from "@/components/Home/faqs";
import CTABanner from "@/components/Home/ctaBanner";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </div>
  );
}
