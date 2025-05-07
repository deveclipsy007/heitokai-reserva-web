
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
    
    // Set the background color of the body to white
    document.body.style.backgroundColor = "white";
    
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-heitokai-green origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <div className="w-full">
        <Hero />
      </div>
      
      <div id="sobre" className="w-full bg-white">
        <AnimatedSection className="relative z-10 bg-white w-full">
          <Features />
        </AnimatedSection>
      </div>
      
      <div className="w-full bg-white">
        <AnimatedSection delay={0.3} className="relative z-10 bg-white w-full">
          <TimelineDemo />
        </AnimatedSection>
      </div>
      
      <div id="mapa" className="w-full bg-white">
        <AnimatedSection delay={0.4} className="relative z-10 bg-white w-full">
          <Map />
        </AnimatedSection>
      </div>
      
      <div id="fale conosco" className="w-full bg-white">
        <AnimatedSection delay={0.5} className="relative z-10 bg-white w-full">
          <Contact />
        </AnimatedSection>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
