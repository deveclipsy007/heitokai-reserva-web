
const Features = () => {
  const featureItems = [
    {
      title: "NATUREZA E RIO EXCLUSIVO E PRESERVADO",
      icon: "🌿",
      description: "Localizado em uma região privilegiada no coração da natureza, o condomínio oferece acesso exclusivo a um rio preservado e exuberante."
    },
    {
      title: "ESPAÇO VERDE DE ALTO VALOR PAISAGÍSTICO",
      icon: "🌳",
      description: "O empreendimento possui um desenho natural onde o verde e o rio são protagonistas, criando um ambiente contemplativo para o lazer."
    },
    {
      title: "PRIVACIDADE E QUALIDADE IMPECÁVEL",
      icon: "🔒",
      description: "O Reserva Rio Uru Heitokai é um projeto pensado para oferecer o máximo em privacidade e qualidade de vida, com infraestrutura completa."
    },
    {
      title: "EQUILÍBRIO E HARMONIA COM A NATUREZA",
      icon: "☯️",
      description: "Aqui o contato com a natureza é privilegiado e cada detalhe foi planejado para criar um estilo de vida equilibrado e sustentável."
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-heitokai-light-green/30">
      <div className="container-custom">
        <h2 className="text-center font-serif text-3xl md:text-4xl text-heitokai-dark mb-12">
          UM LUGAR FEITO COM TALENTO E EMPREENDEDORISMO
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureItems.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-serif text-center text-lg font-medium mb-3 text-heitokai-dark">
                {feature.title}
              </h3>
              <p className="text-center text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="section-title">Não perca o momento</h3>
            <p className="mb-6">
              O Condomínio Reserva Rio Uru Heitokai é mais que um empreendimento imobiliário, é um estilo de vida em comunhão com a natureza. Projetado para valorizar o melhor da experiência de viver bem, com conforto e em harmonia com o ambiente.
            </p>
            <p>
              Localizado em uma região privilegiada, com acesso exclusivo ao rio e cercado por áreas verdes preservadas, o condomínio oferece uma experiência única de moradia sustentável e sofisticada.
            </p>
          </div>
          
          <div className="aspect-video bg-gray-200 rounded-sm overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
              alt="Vista aérea do condomínio" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
