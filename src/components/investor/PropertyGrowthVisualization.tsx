
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Home, Tree, Sun, Waves } from 'lucide-react';

interface PropertyGrowthVisualizationProps {
  investmentValue: number;
  months: number;
  appreciationRate: number;
  maxInvestment: number;
}

const PropertyGrowthVisualization = ({
  investmentValue,
  months,
  appreciationRate,
  maxInvestment
}: PropertyGrowthVisualizationProps) => {
  const controls = useAnimation();
  const [progressLevel, setProgressLevel] = useState(1);
  
  // Calculate the progress factor (0-1) based on investment and months
  useEffect(() => {
    // Combine investment amount, months and appreciation rate to determine growth level
    const investmentFactor = investmentValue / maxInvestment;
    const monthsFactor = Math.min(months / 60, 1); // Cap at 5 years (60 months)
    const appreciationFactor = appreciationRate / 5; // Assuming max is 5%
    
    // Combined weighted factor (emphasizing investment amount)
    const combinedFactor = (investmentFactor * 0.5) + (monthsFactor * 0.3) + (appreciationFactor * 0.2);
    
    // Determine progress level (1-5)
    const newLevel = Math.max(1, Math.min(5, Math.round(combinedFactor * 5)));
    
    setProgressLevel(newLevel);
    
    controls.start({
      scale: 1 + (combinedFactor * 0.15),
      opacity: 1,
      transition: { duration: 0.7, ease: "easeInOut" }
    });
  }, [investmentValue, months, appreciationRate, maxInvestment, controls]);
  
  // Elements to show based on progress level
  const showTrees = progressLevel >= 2;
  const showHouses = progressLevel >= 3;
  const showRiver = progressLevel >= 4;
  const showFutureDevelopment = progressLevel >= 5;
  
  // Number of elements based on progress
  const treeCount = Math.min(progressLevel * 3, 15);
  const houseCount = Math.max(0, Math.min((progressLevel - 2) * 2, 8));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Card className="border border-heitokai-light-green/30 bg-white/90 backdrop-blur-sm overflow-hidden shadow-md">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-heitokai-dark mb-3">
            Visualização do Desenvolvimento
          </h3>
          
          <div className="relative h-64 bg-gradient-to-b from-sky-50 to-heitokai-light-green/20 rounded-md overflow-hidden">
            {/* Base terrain */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-heitokai-light-green/30 to-heitokai-light-green/10" />
            
            {/* River */}
            {showRiver && (
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "70%" }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="absolute bottom-10 left-0 h-4 bg-blue-300/60 z-10"
                style={{ 
                  borderRadius: "0 100px 100px 0",
                  filter: "blur(1px)"
                }}
              >
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Waves className="text-blue-500/40 h-3 w-3" />
                </motion.div>
              </motion.div>
            )}
            
            {/* Trees */}
            {showTrees && [...Array(treeCount)].map((_, i) => (
              <motion.div
                key={`tree-${i}`}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 * i,
                  ease: "easeOut" 
                }}
                className="absolute"
                style={{
                  bottom: `${10 + Math.random() * 30}px`,
                  left: `${10 + Math.random() * 80}%`,
                  zIndex: Math.floor(Math.random() * 20)
                }}
              >
                <Tree 
                  className="text-green-600/90" 
                  size={16 + (i % 3) * 4} 
                />
              </motion.div>
            ))}
            
            {/* Houses */}
            {showHouses && [...Array(houseCount)].map((_, i) => (
              <motion.div
                key={`house-${i}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3 + (0.2 * i),
                  ease: "easeOut" 
                }}
                className="absolute"
                style={{
                  bottom: `${15 + Math.random() * 25}px`,
                  left: `${15 + (i * 10) + Math.random() * 5}%`,
                  zIndex: 20 + i
                }}
              >
                <Home 
                  className="text-heitokai-dark/80" 
                  size={18 + (i % 4) * 2} 
                />
              </motion.div>
            ))}
            
            {/* Future development indicators */}
            {showFutureDevelopment && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className="absolute top-5 right-10"
                >
                  <Sun className="text-yellow-400 h-8 w-8" />
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 rounded-full bg-yellow-400/20"
                    style={{ filter: "blur(8px)" }}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={controls}
                  className="absolute bottom-0 left-0 right-0 flex justify-center"
                >
                  <div className="relative mb-2 text-center">
                    <span className="text-xs font-semibold text-heitokai-dark/70">
                      Projeção de Desenvolvimento
                    </span>
                    <motion.div 
                      className="mt-1 h-1 bg-heitokai-green rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, progressLevel * 20)}%` }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                  </div>
                </motion.div>
              </>
            )}
            
            {/* Growth Animation Overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`pulse-${i}`}
                  className="absolute h-full w-full rounded-full border border-heitokai-green/30"
                  initial={{ scale: 0.6, opacity: 0.3 }}
                  animate={{ 
                    scale: 1 + (i * 0.2),
                    opacity: [0.2, 0, 0.2],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.8
                  }}
                />
              ))}
            </motion.div>
          </div>
          
          <div className="mt-4 text-center text-sm text-heitokai-dark/70">
            Visualize o crescimento do seu investimento no Condomínio Reserva Rio Uru Heitokai
            <motion.div 
              className="mt-1 h-1 bg-heitokai-green/40 rounded-full mx-auto"
              initial={{ width: "20%" }}
              animate={{ width: `${20 + (progressLevel * 15)}%` }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PropertyGrowthVisualization;
