
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VideoSection = () => {
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
          videoRef.current.play().then(() => {
            console.log("Vídeo iniciado manualmente com sucesso");
            setVideoPlaying(true);
            setIsLoading(false);
          }).catch(error => {
            console.error("Erro ao reproduzir vídeo manualmente:", error);
            setVideoError("Erro ao reproduzir o vídeo");
            setIsLoading(false);
            toast({
              title: "Erro ao reproduzir vídeo",
              description: "Tente novamente ou verifique suas configurações de mídia",
              variant: "destructive"
            });
          });
        } else {
          // Se o vídeo não estiver pronto, aguarde o evento canplay
          const onCanPlay = () => {
            videoRef.current?.play().then(() => {
              console.log("Vídeo iniciado após carregar");
              setVideoPlaying(true);
              setIsLoading(false);
              videoRef.current?.removeEventListener('canplay', onCanPlay);
            }).catch(error => {
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
    <section className="py-16 bg-heitokai-beige/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.h2 
            className="section-title text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Conheça o Loteamento Uru
          </motion.h2>
          
          <motion.div 
            className="w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 h-60 md:h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                {videoError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
                    <p className="text-white text-center px-4">
                      {videoError}<br />
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
                  muted 
                  loop 
                  playsInline 
                  preload="auto" 
                  controls={false} 
                  onError={e => {
                    console.error("Erro de vídeo no evento:", e);
                    setVideoError("Erro ao carregar vídeo");
                    setVideoPlaying(false);
                    setIsLoading(false);
                  }} 
                  className="absolute inset-0 w-full h-full object-cover"
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
                {videoLoaded && !videoPlaying && !videoError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    {isLoading ? (
                      <motion.div 
                        className="w-16 h-16 md:w-20 md:h-20 bg-heitokai-green/90 rounded-full flex items-center justify-center" 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
