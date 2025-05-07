
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Map from "@/components/Map";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { TimelineDemo } from "@/components/TimelineDemo";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll para ancoragem
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-heitokai-green origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navbar />
      <Hero />
      
      <AnimatedSection className="relative z-10">
        <Features />
      </AnimatedSection>
      
      <AnimatedSection delay={0.3} className="relative z-10">
        <TimelineDemo />
      </AnimatedSection>
      
      <AnimatedSection delay={0.4} className="relative z-10">
        <Map />
      </AnimatedSection>
      
      <AnimatedSection delay={0.5} className="relative z-10">
        <Contact />
      </AnimatedSection>
      
      <Footer />
    </div>
  );
};

export default Index;
