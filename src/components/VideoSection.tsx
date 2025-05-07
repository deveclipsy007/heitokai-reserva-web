
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
    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 h-full w-full rounded-lg overflow-hidden shadow-2xl">
      <video 
        ref={videoRef}
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
      
      {videoError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <p className="text-white text-center p-4">{videoError}</p>
        </div>
      )}
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <Loader className="h-8 w-8 text-white animate-spin" />
        </div>
      )}
    </div>
  );
};

export default VideoSection;
