import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <WhyChooseUs />
        <ServicesSection />
        <HowItWorks />
        <BeforeAfterGallery />
        <Testimonials />
        <FAQSection />
        <BookingSection />
      </main>
      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
};

export default Index;
