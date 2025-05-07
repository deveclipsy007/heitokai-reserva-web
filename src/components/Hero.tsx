
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Award, Star, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";
import { useRef, useEffect } from "react";

const Hero = () => {
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Initialize video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);
  
  return <section id="início" className="relative min-h-screen bg-cover bg-center flex items-center overflow-hidden" style={{
    backgroundImage: "url('https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//bg_site%202.png')",
    backgroundPosition: "center top"
  }}>
      <div className="absolute inset-0 bg-black/0 rounded-none" />
      
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1.5
    }} className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      
      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between pt-24 md:pt-0 gap-8">
        <motion.div initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 1,
        delay: 0.5
      }} className={cn("md:w-1/2 mb-10 md:mb-0 relative", isMobile ? "hidden" : "block")}>
          {/* Promotional image positioned in front of the video container */}
          <motion.img 
            src="https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//ChatGPT%20Image%207%20de%20mai.%20de%202025,%2013_32_15.png"
            alt="Promotional image"
            className="absolute top-4 left-0 w-[200px] h-[200px] object-cover transform -translate-x-1/4 z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          />
          
          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 h-72 md:h-96 w-full rounded-lg overflow-hidden shadow-2xl">
            <motion.div 
              initial={{
                scale: 1.2,
                opacity: 0
              }} 
              animate={{
                scale: 1,
                opacity: 1
              }} 
              transition={{
                duration: 1.5,
                delay: 1
              }} 
              className="absolute inset-0 flex items-center justify-center"
            >
              <video 
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                loop
                playsInline
                autoPlay
              >
                <source src="https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//IMG_8915.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{
            opacity: 0,
            y: 30
          }} 
          animate={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            duration: 1,
            delay: 0.8
          }} 
          className="md:w-1/2 md:pl-8 lg:pl-16 text-white rounded-xl py-[30px] px-4 md:px-8 relative bg-gradient-to-br from-white/40 to-white/30 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden"
        >
          {/* Premium shine animation element */}
          <motion.div 
            className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-white to-transparent"
            style={{ backgroundSize: "200% 100%" }}
            animate={{
              backgroundPosition: ["100% 0%", "-100% 0%"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 6,
              ease: "easeInOut",
            }}
          />
          
          {/* Subtle glowing particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={i}
                className="absolute w-16 h-16 rounded-full bg-white/10 blur-xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: i * 0.7,
                }}
              />
            ))}
          </div>

          {/* Premium seal element */}
          <motion.div initial={{
          rotate: -15,
          scale: 0,
          opacity: 0
        }} animate={{
          rotate: 0,
          scale: 1,
          opacity: 1
        }} transition={{
          delay: 2.5,
          duration: 0.7,
          type: "spring",
          stiffness: 120
        }} className="absolute -right-6 -top-6 flex items-center justify-center">
            <div className="relative">
              
              
            </div>
          </motion.div>

          {/* Badge element */}
          <motion.div initial={{
          y: -20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          delay: 2,
          duration: 0.5
        }} className="mb-2">
            <Badge className="bg-heitokai-green/90 text-white px-3 py-1 gap-1 uppercase text-xs font-semibold">
              <Sparkles className="h-3 w-3" /> Exclusivo
            </Badge>
          </motion.div>
          
          <motion.h2 initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 1.2
        }} className="text-3xl md:text-5xl font-serif font-medium mb-4 text-zinc-950 lg:text-3xl">
            Terrenos exclusivos de até <br />
            <motion.span initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 1.5,
            type: "spring",
            stiffness: 100
          }} className="text-4xl md:text-6xl lg:text-8xl inline-block">
              800 m²
            </motion.span>
          </motion.h2>
          
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 1.7
        }} className="mb-10 max-w-lg font-medium text-lg text-zinc-950">
            No Condomínio Reserva Rio Uru Heitokai, exclusividade encontra natureza preservada. Com acesso privilegiado ao cristalino Rio Uru, cada detalhe foi meticulosamente planejado para proporcionar uma experiência de vida sem igual, onde sofisticação e sustentabilidade caminham juntas.
          </motion.p>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 2
        }} className="w-full text-center md:text-left">
            <motion.a href="#contato" className="btn-primary block md:inline-block text-center w-full md:w-auto relative group overflow-hidden" whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(42, 122, 75, 0.3)"
          }} whileTap={{
            scale: 0.95
          }}>
              <motion.span className="relative z-10 flex items-center justify-center gap-2">
                GARANTA SEU LOTE PREMIUM
                <Star className="w-4 h-4" />
              </motion.span>
              <motion.div className="absolute bottom-0 left-0 h-1 w-full bg-white/30" initial={{
              width: "0%"
            }} whileHover={{
              width: "100%"
            }} transition={{
              duration: 0.3
            }} />
            </motion.a>
          </motion.div>
            
          {/* Floating elements for premium feeling */}
          <motion.div className="absolute -bottom-6 -right-6 w-24 h-24 bg-heitokai-blue/10 rounded-full blur-xl" animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }} transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          
          <motion.div className="absolute -top-6 -left-6 w-20 h-20 bg-heitokai-green/10 rounded-full blur-xl" animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5]
        }} transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }} />
        </motion.div>
      </div>
    </section>;
};
export default Hero;
