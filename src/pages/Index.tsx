
import { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useSpring } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import ChatBubble from "@/components/ChatBot/ChatBubble";

// Importação com lazy loading para melhorar o carregamento inicial
const Hero = lazy(() => import("@/components/Hero"));
const Features = lazy(() => import("@/components/Features"));
const Map = lazy(() => import("@/components/Map"));
const Contact = lazy(() => import("@/components/Contact"));
const AboutUs = lazy(() => import("@/components/AboutUs"));
const TimelineDemo = lazy(() => import("@/components/TimelineDemo").then(module => ({ default: module.TimelineDemo })));
const InvestorSection = lazy(() => import("@/components/InvestorSection"));

// Componente de carregamento com animação
const LoadingFallback = () => (
  <div className="w-full h-60 flex items-center justify-center">
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{ 
        repeat: Infinity, 
        duration: 1.5,
        ease: "easeInOut" 
      }}
      className="flex flex-col items-center"
    >
      <div className="w-16 h-16 border-4 border-heitorai-green/30 border-t-heitorai-green rounded-full animate-spin mb-4" />
      <p className="text-heitorai-dark/70 text-sm">Carregando...</p>
    </motion.div>
  </div>
);

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Set the background color of the body to white
    document.body.style.backgroundColor = "white";
    
    // Adiciona classe de scroll suave
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.body.style.backgroundColor = "";
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* Barra de progresso de scroll elegante */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-heitorai-green via-heitorai-light-green to-heitorai-green origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <div className="w-full">
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
        </Suspense>
      </div>
      
      <div id="sobre" className="w-full bg-white">
        <AnimatedSection className="relative z-10 bg-white w-full" lightEffect={true}>
          <Suspense fallback={<LoadingFallback />}>
            <Features />
          </Suspense>
        </AnimatedSection>
      </div>
      
      <div id="vantagens" className="w-full bg-white">
        <AnimatedSection delay={0.3} className="relative z-10 bg-white w-full">
          <Suspense fallback={<LoadingFallback />}>
            <TimelineDemo />
          </Suspense>
        </AnimatedSection>
      </div>
      
      <div id="investidores" className="w-full bg-white">
        <AnimatedSection delay={0.35} className="relative z-10 bg-white w-full" lightEffect={true}>
          <Suspense fallback={<LoadingFallback />}>
            <InvestorSection />
          </Suspense>
        </AnimatedSection>
      </div>
      
      <div id="mapa" className="w-full bg-white">
        <AnimatedSection delay={0.4} className="relative z-10 bg-white w-full">
          <Suspense fallback={<LoadingFallback />}>
            <Map />
          </Suspense>
        </AnimatedSection>
      </div>
      
      <div id="sobre-nos" className="w-full bg-white">
        <AnimatedSection delay={0.5} className="relative z-10 bg-white w-full" lightEffect={true}>
          <Suspense fallback={<LoadingFallback />}>
            <AboutUs />
          </Suspense>
        </AnimatedSection>
      </div>
      
      <div id="fale-conosco" className="w-full bg-white">
        <AnimatedSection delay={0.6} className="relative z-10 bg-white w-full">
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        </AnimatedSection>
      </div>
      
      {/* Botão de "voltar ao topo" */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollYProgress.get() > 0.1 ? 1 : 0 }}
        className="fixed right-6 bottom-20 z-40 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-heitorai-dark hover:bg-heitorai-green hover:text-white transition-colors duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </motion.button>
      
      <Footer />
      
      {/* ChatBot */}
      <ChatBubble />
    </div>
  );
};

export default Index;
