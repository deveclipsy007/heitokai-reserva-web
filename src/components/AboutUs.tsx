import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Building, Users, Heart } from "lucide-react";

const AboutUs = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3
  });
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // Animation variants for various elements
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Card animation enhancements
  const cardHoverVariants = {
    initial: {
      scale: 1,
      y: 0,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)"
    },
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.98,
      boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  // Enhanced card variants with 3D effects
  const enhancedCardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: -15,
      z: -100
    },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      z: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.2 + 0.3
      }
    })
  };

  // Icon animation - fixed typings for repeatType
  const iconVariants: Variants = {
    initial: { scale: 1, rotate: 0 },
    animate: { 
      scale: [1, 1.2, 1], 
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse", // Fixed: Using a valid literal type instead of string
        ease: "easeInOut"
      }
    }
  };

  return <div className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden" id="sobre-nos">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({
        length: 15
      }).map((_, index) => <motion.div key={index} className="absolute rounded-full bg-heitokai-light-green/20" style={{
        width: Math.random() * 100 + 50,
        height: Math.random() * 100 + 50,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        x: [0, Math.random() * 100 - 50],
        y: [0, Math.random() * 100 - 50]
      }} transition={{
        duration: Math.random() * 20 + 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }} />)}
      </div>

      <div className="container-custom relative z-10">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="text-center mb-16">
          <motion.h2 variants={itemVariants} className="section-title relative inline-block">
            Sobre Nós
            <motion.span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-heitokai-green to-heitokai-light-green" initial={{
            width: 0
          }} animate={{
            width: "100%"
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }} />
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle mt-4">
            Tradição, inovação e excelência em incorporações de alto padrão
          </motion.p>
          <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-gray-600 mt-6">
            A 4B Incorporadora é parte da BPS HOLDING, grupo empresarial com sólida trajetória no mercado brasileiro, 
            dedicada à criação de empreendimentos exclusivos que unem sofisticação, sustentabilidade e valorização patrimonial.
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={controls} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div variants={itemVariants} whileHover={{
          y: -10
        }} className="relative">
            <Card className="h-full border-none shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <motion.div initial={{
                rotate: -5
              }} animate={{
                rotate: 0
              }} transition={{
                duration: 0.5
              }} className="mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-heitokai-green to-heitokai-light-green text-white mb-4">
                    <Building size={30} />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-serif font-medium mb-4 text-heitokai-dark">Nossa História</h3>
                <p className="text-gray-600">
                  A BPS HOLDING nasce de uma jornada empresarial de mais de seis décadas, unificando diversos 
                  segmentos de sucesso em uma plataforma sólida de investimentos. Com atuação diversificada no comércio, 
                  agropecuária, mercado imobiliário, educação e saúde, o grupo gera mais de 300 empregos e mantém presença 
                  significativa em diversos estados brasileiros. Como parte deste legado de excelência, a 4B Incorporadora 
                  surge como a mais recente expressão da visão inovadora e compromisso com a qualidade que definem a história 
                  do grupo.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{
          y: -10
        }} className="relative">
            <Card className="h-full border-none shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <motion.div initial={{
                rotate: 5
              }} animate={{
                rotate: 0
              }} transition={{
                duration: 0.5
              }} className="mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-heitokai-green to-heitokai-light-green text-white mb-4">
                    <Trophy size={30} />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-serif font-medium mb-4 text-heitokai-dark">Nossa Missão</h3>
                <p className="text-gray-600">
                  Nossa missão é desenvolver empreendimentos imobiliários que transcendem o conceito tradicional de moradia, 
                  criando espaços que harmonizam luxo, conforto e responsabilidade ambiental. Cada projeto é concebido como 
                  um legado para as próximas gerações, com atenção meticulosa aos detalhes e compromisso inabalável com 
                  a excelência.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Numbers section with animated counting and enhanced animations */}
        <motion.div variants={containerVariants} initial="hidden" animate={controls} className="bg-gradient-to-br from-heitorai-green to-heitorai-dark rounded-lg p-10 text-white shadow-2xl relative overflow-hidden mb-20">
          {/* Improved overlay gradient with better opacity and depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-heitorai-green/40 to-heitorai-dark/80 backdrop-blur-[2px] opacity-80" />
          
          {/* Enhanced particle effects for the numbers section */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({length: 8}).map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: Math.random() * 60 + 20,
                  height: Math.random() * 60 + 20,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 50 - 25],
                  y: [0, Math.random() * 50 - 25],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 8 + 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {[{
            icon: Building,
            number: 35,
            text: "Empreendimentos Entregues"
          }, {
            icon: Users,
            number: 2500,
            text: "Famílias Atendidas"
          }, {
            icon: Heart,
            number: 15,
            text: "Projetos Socioambientais"
          }, {
            icon: Trophy,
            number: 12,
            text: "Prêmios de Excelência"
          }].map((item, index) => (
              <motion.div 
                key={index} 
                custom={index}
                variants={enhancedCardVariants}
                whileHover="hover"
                whileTap="tap"
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center bg-heitorai-dark/40 backdrop-blur-sm py-6 px-4 rounded-lg border border-white/10 hover:border-heitorai-light-green/30 transition-all duration-300 shadow-lg"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 shadow-inner relative overflow-hidden"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 25px rgba(255,255,255,0.4)"
                  }}
                >
                  {/* Glowing circle behind icon */}
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-heitorai-light-green/10"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <item.icon size={30} className="text-heitorai-light-green" />
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  className="text-4xl font-bold mb-2 font-serif"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: index * 0.2 + 0.5, 
                      duration: 0.5 
                    } 
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 2,
                      delay: index * 0.2 + 1
                    }}
                  >
                    {item.number}+
                  </motion.span>
                </motion.h3>
                
                <motion.p 
                  className="text-white/90"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    transition: { delay: index * 0.2 + 1.2 }
                  }}
                >
                  {item.text}
                </motion.p>
                
                {/* Additional 3D effect elements */}
                <motion.div
                  className="absolute inset-0 rounded-lg border border-white/10 z-[-1]"
                  style={{ 
                    transform: "translateZ(-10px)",
                    transformStyle: "preserve-3d"
                  }}
                  animate={{
                    boxShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 15px rgba(197,226,165,0.2)", "0px 0px 0px rgba(255,255,255,0)"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={controls} className="relative rounded-lg overflow-hidden">
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h3 className="text-2xl font-serif font-medium text-heitokai-dark">Nosso Compromisso</h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            title: "Sustentabilidade",
            description: "Comprometidos com práticas sustentáveis, desde a escolha de materiais até sistemas de energia renovável e gestão de recursos naturais."
          }, {
            title: "Inovação",
            description: "Buscamos constantemente novas tecnologias e soluções arquitetônicas para oferecer o que há de mais avançado em conforto e segurança."
          }, {
            title: "Excelência",
            description: "Cada detalhe é meticulosamente planejado e executado para garantir a mais alta qualidade em todos os aspectos do empreendimento."
          }].map((item, index) => <motion.div key={index} variants={itemVariants} whileHover={{
            y: -10
          }} className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border-t-4 border-heitokai-green">
                <h4 className="text-xl font-medium mb-4 text-heitokai-dark font-serif">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </div>;
};

export default AboutUs;
