
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Trophy, MapPin, Shield, Heart, Diamond, BadgeDollarSign, CheckCircle } from "lucide-react";

export function TimelineDemo() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Criamos um valor de motion para ser usado com useTransform
  const scrollProgressMotion = useMotionValue(0);
  
  // Agora podemos usar scrollYProgress para atualizar scrollProgressMotion
  React.useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(v => {
      scrollProgressMotion.set(v);
    });
    return () => unsubscribe();
  }, [scrollYProgress, scrollProgressMotion]);
  
  // Agora passamos o valor de motion para useTransform
  const lightRaysOpacity = useTransform(scrollProgressMotion, [0, 0.5, 1], [0, 1, 0]);
  const lightRaysScale = useTransform(scrollProgressMotion, [0, 0.5, 1], [0.5, 1.2, 0.5]);

  const data = [{
    title: "Localização Privilegiada",
    icon: <MapPin className="h-6 w-6 text-heitorai-green" />,
    content: <div className="w-full">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            O Condomínio Reserva Rio Uru Heitoraí está estrategicamente localizado em uma das regiões mais promissoras de Goiás, 
            com fácil acesso às principais vias e a apenas alguns minutos dos principais centros urbanos, combinando tranquilidade 
            e conveniência.
          </p>
          <div className="grid grid-cols-2 gap-4 w-full">
            <Card className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg relative group">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500 z-10"></div>
              <img alt="Vista panorâmica do empreendimento" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//ChatGPT%20Image%207%20de%20mai.%20de%202025,%2020_28_04.png" />
              <div className="absolute bottom-2 left-2 bg-heitorai-dark/70 backdrop-blur-sm text-white text-xs py-1 px-2 rounded-sm z-20">Vista Panorâmica</div>
            </Card>
            <Card className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg relative group">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500 z-10"></div>
              <img src="https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//bg_site%202.png" alt="Localização aérea" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute bottom-2 left-2 bg-heitorai-dark/70 backdrop-blur-sm text-white text-xs py-1 px-2 rounded-sm z-20">Vista Aérea</div>
            </Card>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["15 min de Heitoraí", "25 min de Itapuranga", "Acesso pavimentado", "Segurança 24h"].map((item, i) => (
              <Badge key={i} className="bg-heitorai-green/10 text-heitorai-dark border-heitorai-green/20 flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-heitorai-green" /> {item}
              </Badge>
            ))}
          </div>
        </div>
  }, {
    title: "Infraestrutura Premium",
    icon: <Trophy className="h-6 w-6 text-heitorai-green" />,
    content: <div className="w-full">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Todos os detalhes foram pensados para oferecer o máximo de conforto e sofisticação. Desde a infraestrutura 
            completa de água, energia e saneamento até os espaços de lazer exclusivos, cada elemento foi projetado para 
            proporcionar uma experiência de vida superior.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            <Card className="rounded-lg overflow-hidden p-6 h-28 md:h-44 w-full shadow-lg bg-gradient-to-br from-heitorai-light-green/20 to-transparent flex flex-col items-center justify-center group hover:shadow-xl transition-all duration-500">
              <div className="bg-white/80 rounded-full p-3 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-500">
                <Shield className="h-8 w-8 text-heitorai-green" />
              </div>
              <p className="text-heitorai-dark font-medium text-center mt-3">Segurança 24h</p>
            </Card>
            <Card className="rounded-lg overflow-hidden p-6 h-28 md:h-44 w-full shadow-lg bg-gradient-to-br from-heitorai-light-green/20 to-transparent flex flex-col items-center justify-center group hover:shadow-xl transition-all duration-500">
              <div className="bg-white/80 rounded-full p-3 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-500">
                <BadgeDollarSign className="h-8 w-8 text-heitorai-green" />
              </div>
              <p className="text-heitorai-dark font-medium text-center mt-3">Clube exclusivo</p>
            </Card>
            <Card className="rounded-lg overflow-hidden p-6 h-28 md:h-44 w-full shadow-lg bg-gradient-to-br from-heitorai-light-green/20 to-transparent flex flex-col items-center justify-center group hover:shadow-xl transition-all duration-500">
              <div className="bg-white/80 rounded-full p-3 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-500">
                <Diamond className="h-8 w-8 text-heitorai-green" />
              </div>
              <p className="text-heitorai-dark font-medium text-center mt-3">Áreas de lazer</p>
            </Card>
          </div>
          <div className="mt-6 p-4 bg-heitorai-green/5 border border-heitorai-green/10 rounded-lg">
            <h4 className="text-heitorai-dark font-semibold text-sm mb-2 flex items-center">
              <Trophy className="h-4 w-4 mr-2 text-heitorai-green" /> Diferenciais Premium
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-neutral-700">
              <li className="flex items-center"><CheckCircle className="h-3 w-3 mr-1 text-heitorai-green" /> Sistema inteligente de monitoramento</li>
              <li className="flex items-center"><CheckCircle className="h-3 w-3 mr-1 text-heitorai-green" /> Piscinas naturais privativas</li>
              <li className="flex items-center"><CheckCircle className="h-3 w-3 mr-1 text-heitorai-green" /> Wi-Fi em áreas comuns</li>
              <li className="flex items-center"><CheckCircle className="h-3 w-3 mr-1 text-heitorai-green" /> Área gourmet equipada</li>
              <li className="flex items-center"><CheckCircle className="h-3 w-3 mr-1 text-heitorai-green" /> Quadras esportivas</li>
              <li className="flex items-center"><CheckCircle className="h-3 w-3 mr-1 text-heitorai-green" /> Trilhas para caminhada</li>
            </ul>
          </div>
        </div>
  }, {
    title: "Sustentabilidade",
    icon: <Heart className="h-6 w-6 text-heitorai-green" />,
    content: <div className="w-full">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            O Heitoraí foi projetado para harmonizar desenvolvimento e preservação ambiental, criando um legado sustentável:
          </p>
          <div className="mb-8 px-2">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm my-2 bg-heitorai-light-green/10 p-2 rounded-sm"> 
              <span className="bg-heitorai-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">1</span> 
              Preservação de 60% da área verde nativa
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm my-2 bg-heitorai-light-green/10 p-2 rounded-sm"> 
              <span className="bg-heitorai-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">2</span> 
              Aproveitamento da topografia natural do terreno
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm my-2 bg-heitorai-light-green/10 p-2 rounded-sm"> 
              <span className="bg-heitorai-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span> 
              Sistema de captação e reuso de águas pluviais
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm my-2 bg-heitorai-light-green/10 p-2 rounded-sm"> 
              <span className="bg-heitorai-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">4</span> 
              Iluminação de baixo consumo em todas as áreas comuns
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm my-2 bg-heitorai-light-green/10 p-2 rounded-sm"> 
              <span className="bg-heitorai-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">5</span> 
              Estação de tratamento de esgoto ecológica
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <Card className="rounded-lg overflow-hidden h-24 md:h-44 lg:h-60 w-full shadow-lg bg-gradient-to-br from-heitorai-beige/30 to-transparent flex items-center justify-center relative group">
              <motion.div 
                className="absolute inset-0 origin-center"
                style={{ 
                  opacity: lightRaysOpacity,
                  scale: lightRaysScale,
                  background: "radial-gradient(circle at center, rgba(197,226,165,0.7) 0%, rgba(197,226,165,0) 70%)"
                }}
              />
              <div className="text-center p-4 relative z-10 group-hover:scale-105 transition-transform duration-500">
                <h4 className="text-heitorai-dark font-bold text-lg md:text-xl mb-2">+60%</h4>
                <p className="text-heitorai-dark font-medium">de área verde preservada</p>
                <Separator className="my-3 bg-heitorai-green/30 w-16 mx-auto" />
                <p className="text-xs text-heitorai-dark/70">Compromisso com a biodiversidade local</p>
              </div>
            </Card>
            <Card className="rounded-lg overflow-hidden h-24 md:h-44 lg:h-60 w-full shadow-lg bg-gradient-to-br from-heitorai-blue/20 to-transparent flex items-center justify-center relative group">
              <motion.div 
                className="absolute inset-0 origin-center"
                style={{ 
                  opacity: lightRaysOpacity,
                  scale: lightRaysScale,
                  background: "radial-gradient(circle at center, rgba(74,141,183,0.5) 0%, rgba(74,141,183,0) 70%)"
                }}
              />
              <div className="text-center p-4 relative z-10 group-hover:scale-105 transition-transform duration-500">
                <h4 className="text-heitorai-dark font-bold text-lg md:text-xl mb-2">Harmonia</h4>
                <p className="text-heitorai-dark font-medium">com o Rio Uru</p>
                <Separator className="my-3 bg-heitorai-green/30 w-16 mx-auto" />
                <p className="text-xs text-heitorai-dark/70">Acesso exclusivo às margens preservadas</p>
              </div>
            </Card>
          </div>
        </div>
  }, {
    title: "Investimento Inteligente",
    icon: <BadgeDollarSign className="h-6 w-6 text-heitorai-green" />,
    content: <div className="w-full">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            O Condomínio Reserva Rio Uru Heitoraí representa uma oportunidade única de investimento em um empreendimento 
            exclusivo em uma região de forte valorização. Com demanda crescente por imóveis de alto padrão em ambientes naturais 
            e proximidade às principais cidades de Goiás, seu investimento tem alto potencial de valorização.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <Card className="rounded-lg overflow-hidden p-6 h-32 md:h-44 w-full shadow-lg bg-gradient-to-br from-heitorai-green/10 to-transparent flex flex-col items-center justify-center relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-heitorai-green/80 via-heitorai-light-green to-transparent" />
              <h4 className="text-heitorai-dark font-bold text-2xl md:text-3xl mb-1 group-hover:text-heitorai-green transition-colors">12%</h4>
              <p className="text-heitorai-dark font-medium text-center">Valorização anual média esperada</p>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-8 rounded-full bg-gradient-to-b from-heitorai-green/10 to-transparent blur-xl opacity-70" />
            </Card>
            <Card className="rounded-lg overflow-hidden p-6 h-32 md:h-44 w-full shadow-lg bg-gradient-to-br from-heitorai-green/10 to-transparent flex flex-col items-center justify-center relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-heitorai-green/80 via-heitorai-light-green to-transparent" />
              <h4 className="text-heitorai-dark font-bold text-2xl md:text-3xl mb-1 group-hover:text-heitorai-green transition-colors">+40%</h4>
              <p className="text-heitorai-dark font-medium text-center">Acima da média de mercado</p>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-8 rounded-full bg-gradient-to-b from-heitorai-green/10 to-transparent blur-xl opacity-70" />
            </Card>
          </div>
          <div className="mt-8 p-4 bg-gradient-to-br from-heitorai-dark/5 to-transparent backdrop-blur-sm rounded-lg border border-heitorai-light-green/20">
            <h4 className="font-medium text-sm mb-3 text-heitorai-dark flex items-center">
              <BadgeDollarSign className="h-4 w-4 mr-1 text-heitorai-green" /> Vantagens para Investidores
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-md p-3 bg-white/50 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs font-medium text-heitorai-dark">Condições especiais de pagamento</p>
              </div>
              <div className="rounded-md p-3 bg-white/50 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs font-medium text-heitorai-dark">Assessoria jurídica gratuita</p>
              </div>
              <div className="rounded-md p-3 bg-white/50 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs font-medium text-heitorai-dark">Programa de indicação premiada</p>
              </div>
            </div>
          </div>
        </div>
  }];

  return <div className="w-full bg-white py-12" ref={containerRef}>
      <div className="container-custom max-w-5xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">Vantagens Exclusivas</h2>
          <p className="text-heitorai-dark/70 max-w-2xl mx-auto">
            Descubra os diferenciais que fazem do Condomínio Reserva Rio Uru Heitoraí um investimento e escolha de vida incomparáveis.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-heitorai-green to-transparent mx-auto mt-6" />
        </motion.div>
      </div>

      <div className="w-full">
        <Timeline data={data} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container-custom max-w-5xl mx-auto text-center mt-12"
      >
        <a href="#fale-conosco" className="inline-flex items-center bg-heitorai-green hover:bg-heitorai-dark text-white py-3 px-6 rounded-sm transition-colors group">
          <span>GARANTA SUA OPORTUNIDADE AGORA</span>
          <motion.div 
            className="ml-2"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.div>
        </a>
      </motion.div>
    </div>;
}
