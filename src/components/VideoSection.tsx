
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VideoLogEntry {
  timestamp: string;
  event: string;
  details?: string;
  error?: any;
}

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [videoLogs, setVideoLogs] = useState<VideoLogEntry[]>([]);
  const { toast } = useToast();

  // Função para adicionar entradas ao log
  const addToLog = (event: string, details?: string, error?: any) => {
    const timestamp = new Date().toISOString();
    const logEntry: VideoLogEntry = {
      timestamp,
      event,
      details,
      error
    };
    
    console.log(`Video Log [${timestamp}]: ${event}${details ? ` - ${details}` : ''}`);
    if (error) {
      console.error("Video Error:", error);
    }
    
    setVideoLogs(prev => [...prev, logEntry]);
    
    // Se for um erro, mostrar um toast
    if (error) {
      toast({
        title: `Erro no Vídeo: ${event}`,
        description: details || "Ocorreu um problema com o vídeo",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    const loadVideo = () => {
      if (videoRef.current) {
        try {
          addToLog("INIT", "Inicializando vídeo");
          // Reset video element
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
          videoRef.current.load();
          setVideoLoaded(true);
          addToLog("LOAD", "Vídeo inicializado com sucesso");
        } catch (error) {
          addToLog("ERROR", "Erro ao carregar vídeo", error);
          setVideoError("Erro ao carregar o vídeo");
        }
      } else {
        addToLog("ERROR", "Referência do vídeo não encontrada");
      }
    };
    
    loadVideo();
    const video = videoRef.current;
    if (video) {
      const handleError = (e: Event) => {
        const videoElement = e.target as HTMLVideoElement;
        const errorCode = videoElement.error ? videoElement.error.code : 'desconhecido';
        const errorMessage = videoElement.error ? videoElement.error.message : 'Erro não especificado';
        
        addToLog("ERROR", `Código: ${errorCode}, Mensagem: ${errorMessage}`, e);
        setVideoError("Erro no vídeo");
        setVideoPlaying(false);
        setIsLoading(false);
      };
      
      const handleCanPlay = () => {
        addToLog("CAN_PLAY", "Vídeo pode ser reproduzido");
        setIsLoading(false);
      };
      
      const handlePlaying = () => {
        addToLog("PLAYING", "Vídeo está reproduzindo");
        setVideoPlaying(true);
        setVideoLoaded(true);
        setIsLoading(false);
      };
      
      const handleWaiting = () => {
        addToLog("WAITING", "Vídeo está carregando");
        setIsLoading(true);
      };
      
      const handlePause = () => {
        addToLog("PAUSE", "Vídeo foi pausado");
        setVideoPlaying(false);
        setIsLoading(false);
      };
      
      const handleStalled = () => {
        addToLog("STALLED", "Vídeo travou durante o carregamento");
        setIsLoading(true);
      };
      
      const handleAbort = () => {
        addToLog("ABORT", "Carregamento do vídeo foi abortado");
      };
      
      const handleLoadStart = () => {
        addToLog("LOAD_START", "Iniciou o carregamento do vídeo");
        setIsLoading(true);
      };
      
      const handleEnded = () => {
        addToLog("ENDED", "Vídeo terminou a reprodução");
      };
      
      const handleSeeking = () => {
        addToLog("SEEKING", `Buscando posição: ${video.currentTime.toFixed(2)}s`);
      };
      
      const handleVolumeChange = () => {
        addToLog("VOLUME", `Volume alterado: ${video.volume.toFixed(2)}, Mudo: ${video.muted}`);
      };
      
      const handleProgress = () => {
        if (video.buffered.length > 0) {
          const bufferedEnd = video.buffered.end(video.buffered.length - 1);
          const duration = video.duration;
          const percentBuffered = (bufferedEnd / duration * 100).toFixed(2);
          addToLog("BUFFER", `Buffer: ${percentBuffered}%`);
        }
      };

      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('playing', handlePlaying);
      video.addEventListener('waiting', handleWaiting);
      video.addEventListener('pause', handlePause);
      video.addEventListener('stalled', handleStalled);
      video.addEventListener('abort', handleAbort);
      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('ended', handleEnded);
      video.addEventListener('seeking', handleSeeking);
      video.addEventListener('volumechange', handleVolumeChange);
      video.addEventListener('progress', handleProgress);
      
      return () => {
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('playing', handlePlaying);
        video.removeEventListener('waiting', handleWaiting);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('stalled', handleStalled);
        video.removeEventListener('abort', handleAbort);
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('ended', handleEnded);
        video.removeEventListener('seeking', handleSeeking);
        video.removeEventListener('volumechange', handleVolumeChange);
        video.removeEventListener('progress', handleProgress);
        
        addToLog("CLEANUP", "Removendo listeners do vídeo");
      };
    }
  }, []);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      try {
        setIsLoading(true);
        addToLog("PLAY_ATTEMPT", "Tentativa manual de reprodução");

        // Certifique-se de que o vídeo está pronto para ser reproduzido
        if (videoRef.current.readyState >= 2) {
          videoRef.current.play().then(() => {
            addToLog("PLAY_SUCCESS", "Vídeo iniciado manualmente com sucesso");
            setVideoPlaying(true);
            setIsLoading(false);
          }).catch(error => {
            addToLog("PLAY_ERROR", "Erro ao reproduzir vídeo manualmente", error);
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
          addToLog("WAITING_CANPLAY", `Estado atual: ${videoRef.current.readyState}`);
          const onCanPlay = () => {
            videoRef.current?.play().then(() => {
              addToLog("DELAYED_PLAY_SUCCESS", "Vídeo iniciado após carregar");
              setVideoPlaying(true);
              setIsLoading(false);
              videoRef.current?.removeEventListener('canplay', onCanPlay);
            }).catch(error => {
              addToLog("DELAYED_PLAY_ERROR", "Erro ao iniciar vídeo após carregamento", error);
              setVideoError("Erro ao iniciar o vídeo");
              setIsLoading(false);
              videoRef.current?.removeEventListener('canplay', onCanPlay);
            });
          };
          videoRef.current.addEventListener('canplay', onCanPlay);
          videoRef.current.load(); // Force reload
          addToLog("FORCE_RELOAD", "Forçando recarregamento do vídeo");
        }
      } catch (error) {
        addToLog("GENERAL_ERROR", "Erro ao tentar reproduzir", error);
        setVideoError("Erro ao iniciar o vídeo");
        setIsLoading(false);
      }
    } else {
      addToLog("REF_ERROR", "Referência de vídeo não disponível");
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
        onError={(e) => addToLog("JSX_ERROR", "Erro no elemento de vídeo", e)}
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
