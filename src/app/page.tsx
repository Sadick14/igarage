import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ServicesSection from '@/components/sections/services';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import TestimonialsSection from '@/components/sections/testimonials';
import FaqSection from '@/components/sections/faq';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <ContactSection />
    </div>
  );
}
