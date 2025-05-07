
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Star, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Hero = () => {
  const isMobile = useIsMobile();

  return <section id="início" className="relative min-h-screen bg-cover bg-center flex flex-col items-center overflow-hidden pt-24 md:pt-32" style={{
    backgroundImage: "url('https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//bg_site%202.png')",
    backgroundPosition: "center top"
  }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10 mb-8">
        <motion.div initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 1,
        delay: 0.5
      }} className="w-full md:w-1/2 mb-10 md:mb-0 relative">
          {/* Promotional image */}
          <motion.img src="https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//ChatGPT%20Image%207%20de%20mai.%20de%202025,%2013_32_15.png" alt="Promotional image" className="absolute -left-10 top-1/2 -translate-y-1/2 w-[300px] h-[300px] object-contain z-20 rounded-lg hidden md:block" initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 1.3
        }} style={{
          transform: "translateY(-50%) rotate(-5deg)"
        }} />
        </motion.div>
        
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.8
      }} className="w-full md:w-1/2 md:pl-8 lg:pl-16 text-white rounded-xl py-6 md:py-[30px] px-4 md:px-8 relative bg-gradient-to-br from-white/40 to-white/30 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden">
          {/* Premium shine animation element */}
          <motion.div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-white to-transparent" style={{
          backgroundSize: "200% 100%"
        }} animate={{
          backgroundPosition: ["100% 0%", "-100% 0%"]
        }} transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 6,
          ease: "easeInOut"
        }} />
          
          {/* Subtle glowing particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => <motion.div key={i} className="absolute w-12 md:w-16 h-12 md:h-16 rounded-full bg-white/10 blur-xl" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }} animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1]
          }} transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "mirror",
            delay: i * 0.7
          }} />)}
          </div>

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
        }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-3 md:mb-4 text-zinc-950">
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
          }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl inline-block">
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
        }} className="mb-6 md:mb-10 max-w-lg font-medium text-base md:text-lg text-zinc-950">
            Loteamento premium ao lado rio Uru próximo da cidade de Heitoraí. Com acesso privilegiado ao cristalino Rio Uru, cada detalhe foi meticulosamente planejado para proporcionar uma experiência de vida sem igual, onde sofisticação e sustentabilidade caminham juntas.
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
          <motion.div className="absolute -bottom-6 -right-6 w-16 md:w-24 h-16 md:h-24 bg-heitokai-blue/10 rounded-full blur-xl" animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }} transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          
          <motion.div className="absolute -top-6 -left-6 w-14 md:w-20 h-14 md:h-20 bg-heitokai-green/10 rounded-full blur-xl" animate={{
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
      
      {/* Video section placed below the card */}
      <div className="container mx-auto px-4 mt-4 mb-16">
        <motion.div 
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 h-60 md:h-[400px] w-full rounded-lg overflow-hidden shadow-2xl">
            <video 
              autoPlay
              muted 
              loop 
              playsInline 
              preload="auto" 
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//IMG_8915.MP4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;
