
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, ArrowUp, BarChart3, Wallet, PiggyBank, Percent, ChartBar, Home, Trees, Shield } from 'lucide-react';

interface PropertyGrowthVisualizationProps {
  investmentValue: number;
  months: number;
  appreciationRate: number;
  maxInvestment: number;
}

const PropertyGrowthVisualization = ({
  investmentValue,
  months,
  appreciationRate,
  maxInvestment
}: PropertyGrowthVisualizationProps) => {
  const controls = useAnimation();
  const [progressLevel, setProgressLevel] = useState(1);
  
  // Calculate the progress factor based on investment and months
  useEffect(() => {
    // Combine investment amount, months and appreciation rate to determine growth level
    const investmentFactor = investmentValue / maxInvestment;
    const monthsFactor = Math.min(months / 60, 1); // Cap at 5 years (60 months)
    const appreciationFactor = appreciationRate / 5; // Assuming max is 5%
    
    // Combined weighted factor
    const combinedFactor = (investmentFactor * 0.5) + (monthsFactor * 0.3) + (appreciationFactor * 0.2);
    
    // Determine progress level (1-5)
    const newLevel = Math.max(1, Math.min(5, Math.round(combinedFactor * 5)));
    
    setProgressLevel(newLevel);
    
    controls.start({
      scale: 1 + (combinedFactor * 0.15),
      opacity: 1,
      transition: { duration: 0.7, ease: "easeInOut" }
    });
  }, [investmentValue, months, appreciationRate, maxInvestment, controls]);
  
  // Calculate ROI and valuation metrics for display
  const annualizedROI = ((1 + appreciationRate / 100) ** 12 - 1) * 100;
  const totalValuation = investmentValue * (Math.pow(1 + appreciationRate / 100, months) - 1);
  
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL',
      maximumFractionDigits: value < 1000 ? 2 : 0
    }).format(value);
  };

  // Calculate future value for different time periods
  const calculateFutureValue = (months: number) => {
    return investmentValue * Math.pow(1 + appreciationRate / 100, months);
  };
  
  // Calculate market comparisons (percentages)
  const investmentReturn = (calculateFutureValue(months) / investmentValue - 1) * 100;
  const traditionalInvestmentReturn = months * 0.6; // Simplified model: 0.6% monthly
  const savingsReturn = months * 0.3; // Simplified model: 0.3% monthly
  
  // Vantagens de investir no Rio Uru - dados para os tópicos
  const advantages = [
    {
      icon: <Home className="h-6 w-6 text-heitokai-green" />,
      title: "Localização Privilegiada",
      description: "Área com potencial de valorização superior devido à proximidade com recursos naturais e desenvolvimento planejado.",
      highlight: `+${Math.round(appreciationRate * 1.5)}% ao ano`
    },
    {
      icon: <Trees className="h-6 w-6 text-heitokai-green" />,
      title: "Sustentabilidade Ambiental",
      description: "Investimento em um empreendimento que preserva o meio ambiente, garantindo valor a longo prazo.",
      highlight: "Preservação garantida"
    },
    {
      icon: <Shield className="h-6 w-6 text-heitokai-green" />,
      title: "Segurança Patrimonial",
      description: "Propriedade com documentação e garantias jurídicas completas para proteção do seu investimento.",
      highlight: "100% seguro"
    },
    {
      icon: <ChartBar className="h-6 w-6 text-heitokai-green" />,
      title: "Retorno Superior",
      description: "Desempenho histórico do empreendimento supera outros tipos de investimentos tradicionais.",
      highlight: `${annualizedROI.toFixed(1)}% ao ano`
    }
  ];
  
  // Animações para os elementos monetários flutuantes
  const floatingElements = [
    { delay: 0, duration: 2.5, x: -10 },
    { delay: 0.3, duration: 2.2, x: 5 },
    { delay: 0.7, duration: 2.8, x: -8 },
    { delay: 1.1, duration: 2.4, x: 12 },
    { delay: 0.5, duration: 2.7, x: -5 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border border-heitokai-light-green/30 bg-white/90 backdrop-blur-sm overflow-hidden shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <BarChart3 className="h-5 w-5 text-heitokai-green" />
            Vantagens de Investir no Rio Uru
          </CardTitle>
          <CardDescription>
            Conheça os diferenciais que tornam este investimento uma oportunidade única
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-0">
            {/* Vantagens de Investir - 4/7 colunas */}
            <div className="col-span-1 lg:col-span-4 p-4">
              <div className="relative h-64 md:h-80 bg-gradient-to-b from-white to-heitokai-light-green/10 rounded-md overflow-hidden border border-heitokai-light-green/20 p-4">
                {/* Título principal */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-heitokai-dark">Benefícios do Investimento</h3>
                  <p className="text-xs text-heitokai-dark/70">
                    Descubra por que o Condomínio Reserva Rio Uru é uma escolha inteligente
                  </p>
                </div>
                
                {/* Lista de vantagens com animações */}
                <div className="space-y-3">
                  {advantages.map((advantage, index) => (
                    <motion.div
                      key={`advantage-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 * index }}
                      className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-2 rounded-md border border-heitokai-light-green/20"
                    >
                      <motion.div 
                        className="p-2 bg-heitokai-light-green/20 rounded-full flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {advantage.icon}
                      </motion.div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-medium text-heitokai-dark">{advantage.title}</h4>
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + (0.2 * index), duration: 0.3 }}
                            className="bg-heitokai-green/10 px-2 py-0.5 rounded-full"
                          >
                            <span className="text-xs font-semibold text-heitokai-green">
                              {advantage.highlight}
                            </span>
                          </motion.div>
                        </div>
                        <p className="text-xs text-heitokai-dark/70 mt-1">{advantage.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Animação dos elementos monetários flutuantes */}
                {floatingElements.map((element, index) => (
                  <motion.div
                    key={`coin-${index}`}
                    className="absolute"
                    style={{ 
                      bottom: `${(index + 1) * 10}%`, 
                      left: `${10 + (index * 15)}%` 
                    }}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ 
                      y: [0, -80, -160],
                      opacity: [1, 1, 0]
                    }}
                    transition={{ 
                      duration: element.duration,
                      delay: element.delay,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-heitokai-green/90 rounded-full text-white shadow-lg">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                  </motion.div>
                ))}
                
                {/* Indicador de valorização */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={controls}
                  className="absolute bottom-2 right-2"
                >
                  <div className="px-2 py-1 bg-white/80 backdrop-blur-sm shadow-sm rounded-full flex items-center gap-1">
                    <TrendingUp size={12} className="text-heitokai-green" />
                    <span className="text-xs font-medium text-heitokai-dark/90">
                      Oportunidade: {progressLevel}/5
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Métricas e Números - 3/7 colunas */}
            <div className="col-span-1 lg:col-span-3 bg-gradient-to-br from-heitokai-light-green/10 to-white p-4">
              <div className="space-y-4">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-heitokai-dark mb-1">Projeção de Valorização</h4>
                  <p className="text-xs text-heitokai-dark/70">
                    Baseada em {months} meses de investimento a {appreciationRate}% ao mês
                  </p>
                </div>
                
                {/* Métricas Principais */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/60 backdrop-blur-sm border border-heitokai-light-green/20 rounded-md p-3">
                    <div className="text-xs text-heitokai-dark/70">ROI Anualizado</div>
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
                      className="text-xl font-semibold text-heitokai-dark flex items-center"
                    >
                      {annualizedROI.toFixed(1)}%
                      <ArrowUp className="h-4 w-4 text-heitokai-green ml-1" />
                    </motion.div>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm border border-heitokai-light-green/20 rounded-md p-3">
                    <div className="text-xs text-heitokai-dark/70">Período de Retorno</div>
                    <div className="text-xl font-semibold text-heitokai-dark">
                      {Math.ceil(100 / appreciationRate)} meses
                    </div>
                  </div>
                </div>
                
                {/* Dados Adicionais */}
                <div className="bg-white/60 backdrop-blur-sm border border-heitokai-light-green/20 rounded-md p-3">
                  <div className="text-xs font-medium text-heitokai-dark mb-2 flex items-center gap-1">
                    <PiggyBank className="h-3 w-3 text-heitokai-green" />
                    <span>Comparativo de Oportunidade</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-heitokai-dark/70">Reserva Rio Uru</span>
                      <div className="flex-1 mx-2 h-3 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(100, investmentReturn)}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-heitokai-green"
                        />
                      </div>
                      <span className="font-semibold text-heitokai-dark">{investmentReturn.toFixed(1)}%</span>
                    </div>
                    
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-heitokai-dark/70">Imóveis Urbanos</span>
                      <div className="flex-1 mx-2 h-3 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(100, traditionalInvestmentReturn)}%` }}
                          transition={{ duration: 1, delay: 0.6 }}
                          className="h-full bg-gray-400"
                        />
                      </div>
                      <span className="font-semibold text-heitokai-dark">{traditionalInvestmentReturn.toFixed(1)}%</span>
                    </div>
                    
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-heitokai-dark/70">Poupança</span>
                      <div className="flex-1 mx-2 h-3 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(100, savingsReturn)}%` }}
                          transition={{ duration: 1, delay: 0.7 }}
                          className="h-full bg-gray-300"
                        />
                      </div>
                      <span className="font-semibold text-heitokai-dark">{savingsReturn.toFixed(1)}%</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-2 border-t border-heitokai-light-green/10 flex justify-between items-center">
                    <div className="text-[10px] text-heitokai-dark/70">Rendimento mensal</div>
                    <div className="flex items-center gap-1 bg-heitokai-light-green/20 px-2 py-0.5 rounded-full">
                      <Percent className="h-3 w-3 text-heitokai-green" />
                      <span className="text-[10px] font-medium text-heitokai-green">{appreciationRate.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm border border-heitokai-light-green/20 rounded-md p-3">
                  <div className="text-xs text-heitokai-dark/70 mb-1">Valor Futuro Projetado</div>
                  <motion.div
                    key={`${investmentValue}-${months}-${appreciationRate}`}
                    initial={{ opacity: 0.5, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl font-semibold text-heitokai-green"
                  >
                    {formatCurrency(calculateFutureValue(months))}
                  </motion.div>
                  <div className="flex justify-between mt-2 text-[10px] text-heitokai-dark/60">
                    <span>Investimento inicial: {formatCurrency(investmentValue)}</span>
                    <span>Após {months} meses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PropertyGrowthVisualization;
