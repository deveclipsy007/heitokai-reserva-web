
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Map from "@/components/Map";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { TimelineDemo } from "@/components/TimelineDemo";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AnimatedSection>
        <Features />
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <TimelineDemo />
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <Map />
      </AnimatedSection>
      <AnimatedSection delay={0.5}>
        <Contact />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
