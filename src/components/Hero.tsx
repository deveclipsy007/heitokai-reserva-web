
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section 
      id="início" 
      className="relative min-h-screen bg-cover bg-center flex items-center" 
      style={{
        backgroundImage: "url('https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//bg_site%202.png')",
        backgroundPosition: isMobile ? "75% center" : "center top"
      }}
    >
      <div className="absolute inset-0 bg-black/0 rounded-none" />
      
      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center px-4">
        <div className="md:w-1/2 mb-6 md:mb-0 hidden md:block">
          {/* Placeholder para um possível vídeo ou slideshow - hidden on mobile */}
          <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 h-72 md:h-96 w-full rounded-sm"></div>
        </div>
        
        <div className="w-full md:w-1/2 md:pl-16 text-white rounded-xl py-6 md:py-[30px] bg-white/[0.47]">
          <h2 className="text-2xl md:text-5xl font-serif font-medium mb-4 text-zinc-900 lg:text-5xl">
            Áreas de até <br />
            <span className="text-4xl md:text-6xl lg:text-8xl">800 m²</span>
          </h2>
          
          <p className="mb-6 md:mb-10 max-w-lg text-black font-medium text-base md:text-lg">
            No condomínio Reserva Rio Uru Heitokai, reside uma declaração de valores fundamentada na harmonia entre inovação e tradição, plenitude e sustentabilidade.
          </p>
          
          <a href="#contato" className="btn-primary w-full text-center md:w-auto">
            QUERO CONHECER
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
