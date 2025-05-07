
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Award, Star, Sparkles, Play, Loader } from "lucide-react";
import { Badge } from "./ui/badge";
import { useRef, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const loadVideo = () => {
      if (videoRef.current) {
        try {
          // Reset video element
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
          videoRef.current.load();
          setVideoLoaded(true);
        } catch (error) {
          console.error("Erro ao carregar vídeo:", error);
          setVideoError("Erro ao carregar o vídeo");
        }
      }
    };
    
    loadVideo();
    
    const video = videoRef.current;
    if (video) {
      const handleError = (e: Event) => {
        console.error('Erro de vídeo:', e);
        setVideoError("Erro no vídeo");
        setVideoPlaying(false);
        setIsLoading(false);
      };
      
      const handleCanPlay = () => {
        console.log('Vídeo pode ser reproduzido');
        setIsLoading(false);
      };
      
      const handlePlaying = () => {
        console.log('Vídeo está reproduzindo');
        setVideoPlaying(true);
        setVideoLoaded(true);
        setIsLoading(false);
      };
      
      const handleWaiting = () => {
        console.log('Vídeo está carregando...');
        setIsLoading(true);
      };
      
      const handlePause = () => {
        console.log('Vídeo foi pausado');
        setVideoPlaying(false);
        setIsLoading(false);
      };

      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('playing', handlePlaying);
      video.addEventListener('waiting', handleWaiting);
      video.addEventListener('pause', handlePause);
      
      return () => {
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('playing', handlePlaying);
        video.removeEventListener('waiting', handleWaiting);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, []);
  
  const handlePlayVideo = () => {
    if (videoRef.current) {
      try {
        setIsLoading(true);
        
        // Certifique-se de que o vídeo está pronto para ser reproduzido
        if (videoRef.current.readyState >= 2) {
          videoRef.current.play()
            .then(() => {
              console.log("Vídeo iniciado manualmente com sucesso");
              setVideoPlaying(true);
              setIsLoading(false);
            })
            .catch(error => {
              console.error("Erro ao reproduzir vídeo manualmente:", error);
              setVideoError("Erro ao reproduzir o vídeo");
              setIsLoading(false);
              toast({
                title: "Erro ao reproduzir vídeo",
                description: "Tente novamente ou verifique suas configurações de mídia",
                variant: "destructive",
              });
            });
        } else {
          // Se o vídeo não estiver pronto, aguarde o evento canplay
          const onCanPlay = () => {
            videoRef.current?.play()
              .then(() => {
                console.log("Vídeo iniciado após carregar");
                setVideoPlaying(true);
                setIsLoading(false);
                videoRef.current?.removeEventListener('canplay', onCanPlay);
              })
              .catch(error => {
                console.error("Erro ao iniciar vídeo após carregamento:", error);
                setVideoError("Erro ao iniciar o vídeo");
                setIsLoading(false);
                videoRef.current?.removeEventListener('canplay', onCanPlay);
              });
          };
          
          videoRef.current.addEventListener('canplay', onCanPlay);
          videoRef.current.load(); // Force reload
        }
      } catch (error) {
        console.error("Erro ao tentar reproduzir:", error);
        setVideoError("Erro ao iniciar o vídeo");
        setIsLoading(false);
      }
    }
  };
  
  return (
    <section 
      id="início" 
      className="relative min-h-screen bg-cover bg-center flex items-center overflow-hidden" 
      style={{
        backgroundImage: "url('https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//bg_site%202.png')",
        backgroundPosition: "center top"
      }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <motion.div 
          initial={{
            opacity: 0,
            x: -50
          }} 
          animate={{
            opacity: 1,
            x: 0
          }} 
          transition={{
            duration: 1,
            delay: 0.5
          }} 
          className={cn("md:w-1/2 mb-10 md:mb-0 relative", isMobile ? "hidden" : "block")}
        >
          {/* Promotional image positioned to extend out from the video container */}
          <motion.img 
            src="https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//ChatGPT%20Image%207%20de%20mai.%20de%202025,%2013_32_15.png"
            alt="Promotional image"
            className="absolute -left-10 top-1/2 -translate-y-1/2 w-[300px] h-[300px] object-contain z-20 rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            style={{
              transform: "translateY(-50%) rotate(-5deg)",
            }}
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
              {videoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
                  <p className="text-white text-center px-4">
                    {videoError}<br/>
                    <button 
                      className="mt-2 px-3 py-1 bg-heitokai-green/80 rounded-md hover:bg-heitokai-green"
                      onClick={() => {
                        setVideoError(null);
                        if (videoRef.current) {
                          videoRef.current.load();
                          handlePlayVideo();
                        }
                      }}
                    >
                      Tentar novamente
                    </button>
                  </p>
                </div>
              )}
              
              <video 
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                loop
                playsInline
                preload="auto"
                controls={false}
                onError={(e) => {
                  console.error("Erro de vídeo no evento:", e);
                  setVideoError("Erro ao carregar vídeo");
                  setVideoPlaying(false);
                  setIsLoading(false);
                }}
              >
                <source src="https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//IMG_8915.MP4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
              
              {!videoLoaded && !videoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-12 h-12 border-4 border-heitokai-green/80 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {/* Botão de play no centro do vídeo */}
              {(videoLoaded && !videoPlaying && !videoError) && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  {isLoading ? (
                    <motion.div 
                      className="w-16 h-16 md:w-20 md:h-20 bg-heitokai-green/90 rounded-full flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Loader className="h-8 w-8 md:h-10 md:w-10 text-white" strokeWidth={2} />
                    </motion.div>
                  ) : (
                    <motion.button
                      onClick={handlePlayVideo}
                      className="w-16 h-16 md:w-20 md:h-20 bg-heitokai-green/90 rounded-full flex items-center justify-center hover:bg-heitokai-green transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <Play className="h-8 w-8 md:h-10 md:w-10 text-white" fill="white" strokeWidth={1} />
                    </motion.button>
                  )}
                </div>
              )}
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
    </section>
  );
};

export default Hero;
