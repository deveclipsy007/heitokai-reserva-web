
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section 
      id="início" 
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ 
        backgroundImage: "url('/lovable-uploads/93354d8c-7ef0-4550-8edb-2cac4af265a6.png')"
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          {/* Placeholder para um possível vídeo ou slideshow */}
          <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 h-72 md:h-96 w-full rounded-sm"></div>
        </div>
        
        <div className="md:w-1/2 md:pl-16 text-white">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium mb-4">
            Áreas de até <br />
            <span className="text-4xl md:text-6xl lg:text-7xl">800 m²</span>
          </h2>
          
          <p className="mb-8 text-lg max-w-lg">
            No condomínio Reserva Rio Uru Heitokai, reside uma declaração de valores fundamentada na harmonia entre inovação e tradição, plenitude e sustentabilidade.
          </p>
          
          <p className="mb-6">
            <span className="font-serif text-xl mr-4">694 m²</span>
            <span className="font-serif text-xl">1 Mi</span>
          </p>
          
          <a href="#contato" className="btn-primary">
            QUERO CONHECER
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
