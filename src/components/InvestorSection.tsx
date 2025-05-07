
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { CreditCard, TrendingUp, PiggyBank, ChartBar } from "lucide-react";
import { cn } from "@/lib/utils";

const InvestorSection = () => {
  const [initialInvestment, setInitialInvestment] = useState(500000);
  const [years, setYears] = useState(5);
  const [appreciationRate, setAppreciationRate] = useState(12);
  
  const calculateFutureValue = () => {
    return initialInvestment * Math.pow(1 + appreciationRate / 100, years);
  };

  const calculateProfit = () => {
    return calculateFutureValue() - initialInvestment;
  };
  
  const futureValue = calculateFutureValue();
  const profit = calculateProfit();
  const roi = (profit / initialInvestment) * 100;
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  
  const statCards = [
    {
      title: "Valorização Anual",
      value: `${appreciationRate}%`,
      description: "Média de valorização na região",
      icon: <TrendingUp className="text-heitokai-green" />
    },
    {
      title: "Retorno sobre Investimento",
      value: `${roi.toFixed(0)}%`,
      description: `Em ${years} anos`,
      icon: <ChartBar className="text-heitokai-green" />
    },
    {
      title: "Lucro Estimado",
      value: formatCurrency(profit),
      description: `Em ${years} anos`,
      icon: <PiggyBank className="text-heitokai-green" />
    }
  ];

  return (
    <section id="investidores" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-heitokai-beige/20 to-white pointer-events-none -z-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-heitokai-light-green/20"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(40px)'
            }}
            animate={{
              x: [0, Math.random() * 30 - 15, 0],
              y: [0, Math.random() * 30 - 15, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative mb-16 flex flex-col items-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-heitokai-green/10 p-3 rounded-full mb-4"
          >
            <CreditCard className="text-heitokai-green h-6 w-6" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center font-serif text-3xl md:text-5xl text-heitokai-dark mb-6"
          >
            OPORTUNIDADE PREMIUM PARA INVESTIDORES
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-heitokai-green rounded-full mb-6"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center max-w-2xl text-heitokai-dark/80 mb-10"
          >
            O Condomínio Reserva Rio Uru Heitokai representa uma oportunidade única de investimento em um dos mercados imobiliários mais promissores do Brasil. A crescente demanda por propriedades exclusivas em Goiás, combinada com nossa localização privilegiada e compromisso com a natureza, cria um potencial de valorização excepcional.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="section-title relative mb-6">
              Por que investir no Heitokai?
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "30%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-heitokai-green to-transparent rounded-full"
              />
            </h3>
            
            <ul className="space-y-6">
              {[
                {
                  title: "Localização Estratégica",
                  description: "Situado em uma região de crescente valorização em Goiás, com acesso privilegiado ao Rio Uru e áreas de preservação ambiental."
                },
                {
                  title: "Demanda Crescente",
                  description: "O mercado goiano para propriedades premium em ambientes naturais está em franca expansão, com demanda superando a oferta."
                },
                {
                  title: "Infraestrutura Completa",
                  description: "Investimento já realizado em infraestrutura de alto padrão, reduzindo riscos e acelerando o retorno financeiro."
                },
                {
                  title: "Potencial de Valorização",
                  description: "Histórico de valorização acima da média do mercado imobiliário tradicional, com projeção de crescimento sustentado."
                }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 bg-heitokai-light-green/30 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="h-3 w-3 rounded-full bg-heitokai-green"></div>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-heitokai-dark font-medium mb-2">{item.title}</h4>
                    <p className="text-heitokai-dark/70">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-heitokai-light-green/20 to-heitokai-green/5 rounded-xl blur-xl -z-10"></div>
            
            <Card className="border border-heitokai-light-green/30 overflow-hidden shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Calculadora de Investimento</CardTitle>
                <CardDescription>Simule seu potencial retorno financeiro</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="investment">Investimento Inicial</Label>
                    <span className="font-medium text-heitokai-green">{formatCurrency(initialInvestment)}</span>
                  </div>
                  <Slider
                    id="investment"
                    min={300000}
                    max={2000000}
                    step={50000}
                    value={[initialInvestment]}
                    onValueChange={(value) => setInitialInvestment(value[0])}
                    className="py-4"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="years">Período (anos)</Label>
                    <span className="font-medium text-heitokai-green">{years} anos</span>
                  </div>
                  <Slider
                    id="years"
                    min={1}
                    max={20}
                    step={1}
                    value={[years]}
                    onValueChange={(value) => setYears(value[0])}
                    className="py-4"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="appreciation">Taxa de Valorização Anual</Label>
                    <span className="font-medium text-heitokai-green">{appreciationRate}%</span>
                  </div>
                  <Slider
                    id="appreciation"
                    min={5}
                    max={20}
                    step={1}
                    value={[appreciationRate]}
                    onValueChange={(value) => setAppreciationRate(value[0])}
                    className="py-4"
                  />
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Valor Futuro Estimado:</span>
                    <span className="font-semibold text-xl">{formatCurrency(futureValue)}</span>
                  </div>
                  
                  <div
                    className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, roi)}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-heitokai-green/70 to-heitokai-green"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {statCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border border-heitokai-light-green/30 h-full bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{card.title}</p>
                      <h4 className="text-3xl font-semibold text-heitokai-dark">{card.value}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{card.description}</p>
                    </div>
                    <div className="p-3 bg-heitokai-light-green/20 rounded-full">
                      {card.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-heitokai-dark mb-6">
              Momento ideal para investir
            </h3>
            
            <p className="text-heitokai-dark/80 mb-8">
              O preço atual dos lotes representa uma excelente oportunidade de entrada, com alto potencial de valorização diante da crescente demanda por propriedades exclusivas em ambientes naturais privilegiados em Goiás. Não perca a chance de fazer parte deste empreendimento único com condições especiais para investidores.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group overflow-hidden relative"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                FALE COM UM CONSULTOR DE INVESTIMENTOS
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-heitokai-dark transition-all duration-300 -z-0 group-hover:h-full"></span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
