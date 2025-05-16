"use client";

import { useMotionValueEvent, useScroll, useTransform, motion, AnimatePresence, MotionValue, useMotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
interface TimelineEntry {
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}
export const Timeline = ({
  data
}: {
  data: TimelineEntry[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Create a MotionValue for the scroll progress
  const scrollProgressMotion = useMotionValue(0);
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
    const handleScroll = () => {
      if (!ref.current) return;

      // Calculate scroll progress for background effects
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Calculate how far the element is through the viewport
      // 0 = just entered bottom of viewport, 1 = just left top of viewport
      let progress = 1 - (elementTop + elementHeight) / (viewportHeight + elementHeight);
      progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1
      setScrollProgress(progress);
      scrollProgressMotion.set(progress); // Update the MotionValue

      const items = ref.current.querySelectorAll('.timeline-item');
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3) {
          setActiveIndex(index);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Update height on resize for responsive layouts
    const handleResize = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 80%"]
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Dynamic background properties based on scroll
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.15, 0.15, 0]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1.2, 1, 1, 1.2]);
  const backgroundRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);

  // Enhanced animation variants
  const lineVariants = {
    hidden: {
      height: 0
    },
    visible: (i: number) => ({
      height: "100%",
      transition: {
        delay: 0.2 * i,
        duration: 0.8,
        ease: "easeInOut"
      }
    })
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 * i,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };
  const iconVariants = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.4 * i,
        duration: 0.6,
        type: "spring",
        stiffness: 200
      }
    })
  };

  // Create a motion value for the scroll progress to use in light rays rotation
  const scrollProgressRotation = useTransform(scrollProgressMotion, [0, 1], [-10, 10]);

  // Generate random particles for the background animation
  const particles = Array.from({
    length: 15
  }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 3,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2
  }));
  return <div className="w-full bg-gradient-to-b from-white to-heitokai-beige/30 dark:from-neutral-950 dark:to-neutral-900 font-sans px-4 md:px-10 py-16 relative overflow-hidden" ref={containerRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient background that changes with scroll */}
        <motion.div className="absolute inset-0 bg-gradient-to-tr from-heitokai-green/5 via-heitokai-light-green/10 to-transparent" style={{
        opacity: backgroundOpacity,
        scale: backgroundScale,
        rotate: backgroundRotate
      }} />
        
        {/* Animated circles/particles */}
        {particles.map(particle => <motion.div key={particle.id} className="absolute rounded-full bg-heitokai-green/10 dark:bg-heitokai-light-green/10 blur-xl" style={{
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        width: `${particle.size}rem`,
        height: `${particle.size}rem`
      }} animate={{
        x: [`${Math.random() * 20 - 10}%`, `${Math.random() * 20 - 10}%`],
        y: [`${Math.random() * 20 - 10}%`, `${Math.random() * 20 - 10}%`],
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.2, 1]
      }} transition={{
        duration: particle.duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: particle.delay
      }} />)}
        
        {/* Light rays effect */}
        <motion.div className="absolute -top-[50%] left-[10%] w-[80%] h-[200%] bg-gradient-to-b from-heitokai-light-green/5 to-transparent" style={{
        rotate: scrollProgressRotation,
        opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.15, 0]),
        filter: "blur(50px)"
      }} />
      </div>

      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <motion.h2 initial={{
        opacity: 0,
        y: -20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7
      }} className="text-center font-serif text-3xl md:text-5xl mb-6 text-heitokai-dark dark:text-white max-w-4xl mx-auto">Vantagens Exclusivas Heitoraí</motion.h2>
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7,
        delay: 0.2
      }} className="text-center text-heitokai-dark/80 dark:text-neutral-300 text-sm md:text-base max-w-2xl mx-auto mb-16">Descubra o que torna o Reserva Rio Uru Heitoraí uma oportunidade única, combinando natureza preservada, infraestrutura de alto padrão e valorização excepcional para criar o refúgio perfeito para sua família e seu patrimônio.</motion.p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => <motion.div key={index} className={`timeline-item flex justify-start pt-10 md:pt-40 md:gap-10 ${activeIndex === index ? 'active' : ''}`} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{
        once: false,
        amount: 0.3
      }} custom={index}>
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <motion.div className="h-16 absolute left-2 md:left-2 w-16 rounded-full bg-white dark:bg-black flex items-center justify-center shadow-lg" initial={{
            scale: 0.8,
            opacity: 0
          }} whileInView={{
            scale: 1,
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.2 * index
          }}>
                <motion.div className={`h-10 w-10 rounded-full ${activeIndex === index ? 'bg-heitokai-green' : 'bg-heitokai-light-green/70'} dark:bg-neutral-800 border border-heitokai-green/30 dark:border-neutral-700 flex items-center justify-center`} animate={{
              scale: activeIndex === index ? [1, 1.2, 1] : 1,
              backgroundColor: activeIndex === index ? '#2A7A4B' : 'rgba(197, 226, 165, 0.7)'
            }} transition={{
              duration: 0.7,
              repeat: activeIndex === index ? Infinity : 0,
              repeatDelay: 2
            }}>
                  <motion.div variants={iconVariants} initial="hidden" whileInView="visible" custom={index}>
                    {item.icon}
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-heitokai-dark dark:text-neutral-500" animate={{
            x: activeIndex === index ? [0, 5, 0] : 0,
            color: activeIndex === index ? '#1E3A29' : '#4A4A4A'
          }} transition={{
            duration: 0.5
          }}>
                {item.title}
              </motion.h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <motion.h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-heitokai-dark dark:text-neutral-500" animate={{
            x: activeIndex === index ? [0, 5, 0] : 0,
            color: activeIndex === index ? '#1E3A29' : '#4A4A4A'
          }} transition={{
            duration: 0.5
          }}>
                {item.title}
              </motion.h3>
              <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3 + 0.1 * index
          }} className="w-full">
                {item.content}{" "}
              </motion.div>
            </div>
          </motion.div>)}
        <div style={{
        height: height + "px"
      }} className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-heitokai-light-green/30 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <motion.div style={{
          height: heightTransform,
          opacity: opacityTransform
        }} className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-heitokai-green via-heitokai-light-green to-transparent from-[0%] via-[10%] rounded-full glow" />
        </div>
        
        {/* Partículas decorativas animadas aprimoradas com efeitos de scroll */}
        <div className="absolute left-6 top-0 h-full pointer-events-none">
          {[...Array(15)].map((_, i) => <motion.div key={i} className="absolute w-3 h-3 rounded-full bg-heitokai-green/40 blur-sm" style={{
          top: `${i * 7 + Math.random() * 10}%`,
          left: `${Math.random() * 20 - 10}px`,
          filter: `blur(${2 + Math.random() * 3}px)`
        }} animate={{
          opacity: [0, 0.7, 0],
          y: [0, -20, 0],
          x: [0, Math.random() * 10 - 5, 0],
          scale: [0, 1, 0]
        }} transition={{
          duration: 5 + Math.random() * 2,
          delay: i * 0.4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }} />)}
        </div>
        
        {/* Elementos decorativos adicionais com movimento baseado no scroll */}
        <div className="absolute right-6 top-0 h-full pointer-events-none">
          {[...Array(8)].map((_, i) => <motion.div key={i} className="absolute rounded-full" style={{
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          top: `${i * 15 + Math.random() * 10}%`,
          right: `${Math.random() * 40}px`,
          backgroundColor: `rgba(197, 226, 165, ${0.3 + Math.random() * 0.4})`,
          filter: `blur(${1 + Math.random() * 2}px)`,
          x: useTransform(scrollYProgress, [0, 1], [0, Math.random() * 40 - 20]),
          y: useTransform(scrollYProgress, [0, 1], [0, Math.random() * 40 - 20])
        }} animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.3, 1]
        }} transition={{
          duration: 8 + Math.random() * 4,
          delay: i * 0.6,
          repeat: Infinity,
          repeatType: "reverse"
        }} />)}
        </div>
      </div>
      
      {/* Elemento de reflexo inferior com animação de scroll */}
      
      
      <style>{`
        .glow {
          box-shadow: 0 0 10px rgba(42, 122, 75, 0.6), 0 0 20px rgba(42, 122, 75, 0.3);
        }
      `}</style>
    </div>;
};