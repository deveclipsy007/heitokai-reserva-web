
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section 
      id="início" 
      className="relative min-h-screen bg-cover bg-center flex items-center overflow-hidden" 
      style={{
        backgroundImage: "url('https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//bg_site%202.png')",
        backgroundPosition: "center top"
      }}
    >
      <div className="absolute inset-0 bg-black/0 rounded-none" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
      />
      
      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center pt-24 md:pt-0">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={cn(
            "md:w-1/2 mb-10 md:mb-0",
            isMobile ? "hidden" : "block"
          )}
        >
          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 h-72 md:h-96 w-full rounded-lg overflow-hidden shadow-2xl">
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/lovable-uploads/d0cd53f7-90e4-4cb9-bbef-bc2228f62cde.jpg')"
              }}
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="md:w-1/2 md:pl-16 text-white rounded-xl py-[30px] px-4 md:px-8 bg-gradient-to-br from-white/30 to-white/5 backdrop-blur-md border border-white/10 shadow-lg"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-3xl md:text-5xl font-serif font-medium mb-4 text-white lg:text-5xl"
          >
            Áreas de até <br />
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.5,
                type: "spring",
                stiffness: 100
              }}
              className="text-4xl md:text-6xl lg:text-8xl inline-block"
            >
              800 m²
            </motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
            className="mb-10 max-w-lg text-white font-medium text-lg"
          >
            No Reserva Rio Uru Heitokai, a harmonia entre natureza e modernidade cria uma experiência única de vida. Cada elemento foi cuidadosamente planejado para oferecer conforto, exclusividade e uma conexão profunda com o ambiente natural.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full text-center md:text-left"
          >
            <a href="#contato" className="btn-primary block md:inline-block text-center w-full md:w-auto">
              CONHEÇA O FUTURO DO SEU LAR
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
