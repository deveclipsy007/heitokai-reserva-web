import { MapPin, Navigation, Compass, Route } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Map = () => {
  return (
    <section id="mapa" className="py-16 bg-heitokai-beige/50">
      <div className="container-custom">
        <h2 className="text-center font-serif text-3xl md:text-4xl text-heitokai-dark mb-4">
          LOCALIZAÇÃO ESTRATÉGICA E MASTERPLAN EXCLUSIVO
        </h2>
        
        <div className="flex justify-center mb-10">
          <div className="w-20 h-1 bg-heitokai-green"></div>
        </div>
        
        {/* Etapas do projeto */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-heitokai-green text-white mb-3">
                <Compass className="h-8 w-8" />
              </div>
              <div className="absolute top-0 right-0 w-5 h-5 rounded-full bg-heitokai-light-green text-heitokai-dark flex items-center justify-center text-xs font-bold">1</div>
            </div>
            <h4 className="text-heitokai-dark font-medium mb-1">Planejamento Sustentável</h4>
            <p className="text-sm text-gray-600">Análise completa para preservação ambiental</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-heitokai-green text-white mb-3">
                <MapPin className="h-8 w-8" />
              </div>
              <div className="absolute top-0 right-0 w-5 h-5 rounded-full bg-heitokai-light-green text-heitokai-dark flex items-center justify-center text-xs font-bold">2</div>
            </div>
            <h4 className="text-heitokai-dark font-medium mb-1">Zoneamento Estratégico</h4>
            <p className="text-sm text-gray-600">Distribuição ideal de áreas privativas e comuns</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-heitokai-green text-white mb-3">
                <Route className="h-8 w-8" />
              </div>
              <div className="absolute top-0 right-0 w-5 h-5 rounded-full bg-heitokai-light-green text-heitokai-dark flex items-center justify-center text-xs font-bold">3</div>
            </div>
            <h4 className="text-heitokai-dark font-medium mb-1">Infraestrutura Premium</h4>
            <p className="text-sm text-gray-600">Sistemas subterrâneos e vias pavimentadas</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-heitokai-green text-white mb-3">
                <Navigation className="h-8 w-8" />
              </div>
              <div className="absolute top-0 right-0 w-5 h-5 rounded-full bg-heitokai-light-green text-heitokai-dark flex items-center justify-center text-xs font-bold">4</div>
            </div>
            <h4 className="text-heitokai-dark font-medium mb-1">Paisagismo Integrado</h4>
            <p className="text-sm text-gray-600">Preservação da flora nativa em todo o projeto</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-start">
          {/* Coluna da esquerda - Allan Sávio */}
          <Card className="overflow-hidden border-none shadow-md">
            <div className="relative h-[450px] bg-heitokai-dark/95 text-white overflow-hidden">
              <img 
                src="https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//Background%20(1).png" 
                alt="Rio Uru vista aérea"
                className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
              />
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div className="flex items-center space-x-2 mt-4">
                  <div className="w-10 h-1 bg-heitokai-light-green"></div>
                  <span className="text-xs uppercase tracking-wider text-heitokai-light-green">Excelência em Planejamento</span>
                </div>
                
                <div className="mt-auto">
                  <p className="text-heitokai-light-green font-serif uppercase text-lg mb-4">ALLAN SÁVIO</p>
                  <p className="text-xs uppercase mb-4 font-light tracking-wider">ARQUITETO E URBANISTA PREMIADO</p>
                  <Separator className="my-4 bg-white/20" />
                  <p className="text-sm italic">
                    "O Reserva Rio Uru Heitokai representa o ápice do planejamento urbano sustentável, onde cada detalhe foi pensado para garantir o equilíbrio perfeito entre conforto moderno e preservação ambiental, criando um legado para as futuras gerações."
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-heitokai-light-green/30 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-heitokai-light-green" />
                    </div>
                    <p className="ml-3 text-xs">Masterplan Premiado<br/>Internacionalmente</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="border border-heitokai-green/20 bg-white shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-heitokai-beige p-3 rounded-full mb-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#2A7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="font-medium text-heitokai-dark mb-2">Planejamento Urbano</h4>
                    <p className="text-sm mb-3 text-gray-600">
                      Projetado para garantir qualidade de vida com perfeita harmonia e beleza natural.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-heitokai-green/20 bg-white shadow-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-heitokai-beige p-3 rounded-full mb-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z" stroke="#2A7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 16V6" stroke="#2A7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 6C13.6569 6 15 4.65685 15 3C15 1.34315 13.6569 0 12 0C10.3431 0 9 1.34315 9 3C9 4.65685 10.3431 6 12 6Z" stroke="#2A7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="font-medium text-heitokai-dark mb-2">Paisagismo Completo</h4>
                    <p className="text-sm mb-3 text-gray-600">
                      Sistema de paisagismo exclusivo, fruto do trabalho de engenheiros e arquitetos renomados.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Formulário de contato */}
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="pt-6">
                <h3 className="text-center text-lg font-medium mb-6 text-heitokai-dark">Entre em contato e receba mais informações</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      type="text" 
                      placeholder="Nome *" 
                      className="border-heitokai-green/30 focus-visible:ring-heitokai-green"
                    />
                    <Input 
                      type="email" 
                      placeholder="Email *" 
                      className="border-heitokai-green/30 focus-visible:ring-heitokai-green"
                    />
                  </div>
                  
                  <div className="flex">
                    <div className="bg-gray-100 px-3 py-2 border border-heitokai-green/30 rounded-l-md flex items-center">
                      <span className="text-gray-500">+55</span>
                    </div>
                    <Input 
                      type="tel" 
                      placeholder="Telefone *" 
                      className="rounded-l-none border-heitokai-green/30 focus-visible:ring-heitokai-green"
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" id="terms" className="mr-2 accent-heitokai-green" />
                    <label htmlFor="terms" className="text-sm text-gray-600">Aceito os termos e condições</label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full py-6 bg-heitokai-light-green text-heitokai-dark font-medium hover:bg-heitokai-light-green/90 transition-colors"
                  >
                    Enviar
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Coluna da direita - Mapa do condomínio */}
          <Card className="overflow-hidden border-none shadow-lg bg-white p-4">
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md z-10">
                <MapPin className="h-5 w-5 text-heitokai-green" />
              </div>
              <div className="absolute top-4 left-4 bg-heitokai-green/90 px-3 py-1 rounded-full text-white text-xs font-medium z-10">
                Visualização do Terreno
              </div>
              <img 
                src="https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//Frame%203.png" 
                alt="Mapa do condomínio" 
                className="w-full h-auto object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-heitokai-dark/80 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-medium">Reserva Rio Uru</p>
                    <p className="text-white/80 text-xs">Visualização Aérea</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <p className="text-white text-xs">2023 © Heitokai</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Informações adicionais */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-heitokai-beige flex items-center justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2A7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="#2A7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-medium text-heitokai-dark mb-2">Cronograma Preciso</h4>
              <p className="text-sm text-gray-600">
                Entrega da infraestrutura completa prevista para 2026, com acompanhamento em tempo real do desenvolvimento das obras
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-heitokai-beige flex items-center justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#2A7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01L9 11.01" stroke="#2A7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-medium text-heitokai-dark mb-2">Documentação Completa</h4>
              <p className="text-sm text-gray-600">
                Todas as licenças ambientais e urbanísticas aprovadas, garantindo segurança jurídica total para seu investimento
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-heitokai-beige flex items-center justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#2A7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="#2A7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#2A7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 3.13C17.8604 3.35031 18.623 3.85071 19.1676 4.55232C19.7122 5.25392 20.0078 6.11683 20.0078 7.005C20.0078 7.89318 19.7122 8.75608 19.1676 9.45769C18.623 10.1593 17.8604 10.6597 17 10.88" stroke="#2A7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-medium text-heitokai-dark mb-2">Equipe de Excelência</h4>
              <p className="text-sm text-gray-600">
                Incorporadora com mais de 20 anos de experiência em empreendimentos de alto padrão e equipe multidisciplinar premiada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
