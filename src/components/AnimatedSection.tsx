
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  lightEffect?: boolean;
}

const AnimatedSection = ({ 
  children, 
  className, 
  delay = 0.2, 
  lightEffect = false 
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const isInView = useInView(ref, { once: false, amount: 0.1 }); // Reduced threshold to improve mobile visibility
  
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
    
    // Update height on resize for responsive layouts
    const handleResize = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 80%"], // Adjusted for better mobile visibility
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  return (
    <div ref={containerRef} className="relative bg-white w-full">
      {/* Light beams effect when section becomes visible */}
      {lightEffect && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div className="absolute -top-20 left-1/4 w-40 h-96 bg-gradient-to-b from-heitorai-light-green/30 via-heitorai-light-green/10 to-transparent blur-3xl transform -rotate-12 rounded-full" />
          <div className="absolute top-40 right-1/4 w-40 h-96 bg-gradient-to-b from-heitorai-blue/20 via-heitorai-blue/5 to-transparent blur-3xl transform rotate-12 rounded-full" />
        </motion.div>
      )}

      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay }}
        className={className}
      >
        {children}
      </motion.section>
      
      {/* Animated scrolling line */}
      <div
        style={{
          height: height + "px",
        }}
        className="absolute left-4 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-heitorai-light-green/30 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
      >
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-heitorai-green via-heitorai-light-green to-transparent from-[0%] via-[10%] rounded-full"
        />
      </div>
      
      {/* Animated dot following the scroll progress */}
      <motion.div
        style={{
          top: heightTransform,
          opacity: opacityTransform,
        }}
        className="absolute left-4 md:left-8 w-3 h-3 rounded-full bg-heitorai-green shadow-lg shadow-heitorai-green/30 -translate-x-[5px] -translate-y-[6px] hidden md:block"
      />
    </div>
  );
};

export default AnimatedSection;
