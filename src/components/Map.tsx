
import { MapPin } from "lucide-react";

const Map = () => {
  return (
    <section id="mapa" className="py-16 bg-heitokai-beige/50">
      <div className="container-custom">
        <h2 className="text-center font-serif text-3xl md:text-4xl text-heitokai-dark mb-4">
          PLANEJAMENTO URBANO E PAISAGISMO:
        </h2>
        
        <div className="flex justify-center mb-12">
          <div className="w-20 h-1 bg-heitokai-green"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-start">
          {/* Coluna da esquerda - Allan Sávio */}
          <div className="relative bg-heitokai-dark/95 text-white p-6 rounded-sm overflow-hidden">
            <img 
              src="https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//Background%20(1).png" 
              alt="Rio Uru vista aérea"
              className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
            />
            <div className="relative z-10">
              <p className="text-heitokai-light-green font-serif uppercase text-lg mb-6 mt-40">ALLAN SÁVIO</p>
              <p className="text-xs uppercase mb-4">ARQUITETO E URBANISTA</p>
              <p className="text-sm italic">
                "É com grande satisfação que expressamos nossos sinceros..."
              </p>
            </div>
          </div>
          
          {/* Coluna do meio - Informações */}
          <div className="flex flex-col space-y-8">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img 
                src="https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//Logo%20horizontal@2x%201.png" 
                alt="Logo Condomínio Reserva Rio Uru Heitokai"
                className="h-auto max-w-full"
              />
            </div>
            
            {/* Características */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-heitokai-beige p-3 rounded-full mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#2A7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-sm mb-3">
                  O planejamento urbano é projetado para garantir qualidade de vida com perfeita harmonia e beleza.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-heitokai-beige p-3 rounded-full mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z" stroke="#2A7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V6" stroke="#2A7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6C13.6569 6 15 4.65685 15 3C15 1.34315 13.6569 0 12 0C10.3431 0 9 1.34315 9 3C9 4.65685 10.3431 6 12 6Z" stroke="#2A7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-sm mb-3">
                  Empreendimento com sistema de paisagismo completo, fruto de engenheiros e arquitetos.
                </p>
              </div>
            </div>
            
            {/* Formulário de contato */}
            <div className="mt-8">
              <h3 className="text-center text-lg font-medium mb-6">Entre em contato e receba mais informações</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Nome *" 
                    className="px-4 py-2 border border-gray-300 rounded-sm w-full"
                  />
                  <input 
                    type="email" 
                    placeholder="Email *" 
                    className="px-4 py-2 border border-gray-300 rounded-sm w-full"
                  />
                </div>
                
                <div className="flex">
                  <div className="bg-gray-100 px-3 py-2 border border-gray-300 rounded-sm rounded-r-none flex items-center">
                    <span>+55</span>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Telefone *" 
                    className="px-4 py-2 border border-gray-300 rounded-sm rounded-l-none w-full"
                  />
                </div>
                
                <div className="flex items-center">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms" className="text-sm">Aceito os termos e condições</label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 bg-heitokai-light-green text-heitokai-dark font-medium rounded-sm hover:bg-heitokai-light-green/80 transition-colors"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
          
          {/* Coluna da direita - Mapa do condomínio */}
          <div className="relative rounded-full overflow-hidden">
            <img 
              src="https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//Frame%203.png" 
              alt="Mapa do condomínio" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
