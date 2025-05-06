
import { MapPin } from "lucide-react";

const Map = () => {
  const urbanFeatures = [
    {
      icon: "🏡",
      title: "Planejamento Urbano",
      description: "O empreendimento urbano é projetado para garantir qualidade de vida com excelente harmonia e ecologia."
    },
    {
      icon: "🌳",
      title: "Paisagismo",
      description: "O condomínio conta com inúmeras áreas verdes e projeto paisagístico de engenharia e arquitetura."
    }
  ];

  return (
    <section id="mapa" className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-center font-serif text-3xl md:text-4xl text-heitokai-dark mb-4">
          PLANEJAMENTO URBANO E PAISAGISMO
        </h2>
        
        <div className="flex justify-center mb-12">
          <div className="w-20 h-1 bg-heitokai-green"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {urbanFeatures.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="text-3xl mr-4">{feature.icon}</div>
              <div>
                <h3 className="font-serif text-xl font-medium mb-2 text-heitokai-dark">
                  {feature.title}
                </h3>
                <p className="text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-heitokai-light-green/20 p-4 md:p-8 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl font-medium mb-4 text-heitokai-dark">
                Condomínio Reserva<br />
                Rio Uru Heitokai
              </h3>
              <div className="flex items-start mb-4">
                <MapPin className="text-heitokai-green mr-2 mt-1" size={16} />
                <p className="text-sm">
                  Localizado em uma região privilegiada, próximo à natureza e com fácil acesso à cidade.
                </p>
              </div>
              <p className="text-sm mb-4">
                O empreendimento está estrategicamente posicionado para oferecer o melhor da vida em contato com a natureza sem abrir mão das facilidades urbanas.
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-medium">ALLAN SÁVIO</p>
                  <p className="text-xs">ARQUITETO E URBANISTA</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-square relative rounded-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                alt="Mapa do condomínio" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-full">
                  <p className="font-serif font-medium">Mapa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
