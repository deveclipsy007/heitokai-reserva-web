
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, ArrowUp, BarChart3, Wallet, PiggyBank, Percent } from 'lucide-react';

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
  
  // Calculate the progress factor (0-1) based on investment and months
  useEffect(() => {
    // Combine investment amount, months and appreciation rate to determine growth level
    const investmentFactor = investmentValue / maxInvestment;
    const monthsFactor = Math.min(months / 60, 1); // Cap at 5 years (60 months)
    const appreciationFactor = appreciationRate / 5; // Assuming max is 5%
    
    // Combined weighted factor (emphasizing investment amount)
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
  
  // Calculate year-by-year growth for the bar chart
  const annualValues = [];
  for (let i = 1; i <= Math.min(5, Math.ceil(months / 12)); i++) {
    const year = i;
    const yearlyGrowth = investmentValue * Math.pow(1 + appreciationRate / 100, i * 12) - investmentValue;
    annualValues.push({ year, value: yearlyGrowth });
  }
  
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
  
  // Monthly growth visualization data
  const monthlyGrowthData = [];
  for (let i = 0; i <= Math.min(months, 12); i += 3) {
    const monthlyValue = calculateFutureValue(i);
    monthlyGrowthData.push({
      label: i === 0 ? 'Início' : `${i}m`,
      value: monthlyValue
    });
  }
  
  // Calculate market comparisons (percentages)
  const investmentReturn = (calculateFutureValue(months) / investmentValue - 1) * 100;
  const traditionaInvestmentReturn = months * 0.6; // Simplified model: 0.6% monthly
  const savingsReturn = months * 0.3; // Simplified model: 0.3% monthly

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
            Desenvolvimento e Valorização do Investimento
          </CardTitle>
          <CardDescription>
            Visualize o crescimento projetado do seu investimento no Condomínio Reserva Rio Uru
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-0">
            {/* Visualização do Crescimento do Investimento - 4/7 colunas */}
            <div className="col-span-1 lg:col-span-4 p-4">
              <div className="relative h-64 md:h-80 bg-gradient-to-b from-white to-heitokai-light-green/10 rounded-md overflow-hidden border border-heitokai-light-green/20 p-4">
                {/* Título principal */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-heitokai-dark">Evolução do Capital</h3>
                  <p className="text-xs text-heitokai-dark/70">
                    Acompanhe o crescimento do seu investimento ao longo do tempo
                  </p>
                </div>
                
                {/* Barra de progresso principal animada */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-heitokai-dark">Investimento Inicial</span>
                    <span className="text-sm font-medium text-heitokai-green">
                      {formatCurrency(investmentValue)}
                    </span>
                  </div>
                  <div className="h-6 bg-gray-100 rounded-full overflow-hidden relative">
                    <motion.div 
                      initial={{ width: "5%" }}
                      animate={{ width: `${Math.min(100, (calculateFutureValue(months) / (investmentValue * 2)) * 100)}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-heitokai-light-green to-heitokai-green rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-semibold text-heitokai-dark flex items-center gap-1">
                        <ArrowUp className="h-3 w-3 text-heitokai-green" />
                        {formatCurrency(calculateFutureValue(months))}
                        <span className="text-heitokai-green ml-1">
                          (+{investmentReturn.toFixed(1)}%)
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Barras de progresso para diferentes períodos */}
                <div className="space-y-4">
                  {[6, 12, 24, 36].map((period, index) => {
                    if (period <= months) {
                      const futureValue = calculateFutureValue(period);
                      const growth = ((futureValue / investmentValue) - 1) * 100;
                      return (
                        <div key={`period-${period}`} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-heitokai-dark/80">{period} meses</span>
                            <span className="font-medium text-heitokai-dark">{formatCurrency(futureValue)}</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.min(100, growth)}%` }}
                              transition={{ 
                                duration: 1.2, 
                                delay: 0.2 + (index * 0.1),
                                ease: "easeOut" 
                              }}
                              className="h-full bg-heitokai-green/70"
                            />
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
                
                {/* Indicador de valorização */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={controls}
                  className="absolute bottom-2 right-2"
                >
                  <div className="px-2 py-1 bg-white/80 backdrop-blur-sm shadow-sm rounded-full flex items-center gap-1">
                    <TrendingUp size={12} className="text-heitokai-green" />
                    <span className="text-xs font-medium text-heitokai-dark/90">
                      Valorização: {(appreciationRate * months).toFixed(1)}% no período
                    </span>
                  </div>
                </motion.div>
                
                {/* Animação de crescimento */}
                {monthlyGrowthData.map((data, index) => {
                  const delay = index * 0.1;
                  const size = 10 + (index * 5);
                  const opacity = 0.1 + (index * 0.05);
                  
                  return (
                    <motion.div
                      key={`growth-${index}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0, opacity, 0],
                        scale: [0, 1, 1.5], 
                      }}
                      transition={{ 
                        delay: delay,
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-heitokai-green/20"
                      style={{ 
                        width: size, 
                        height: size,
                        zIndex: index
                      }}
                    />
                  );
                })}
                
                {/* Ícone de carteira no centro */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-md"
                >
                  <Wallet className="h-8 w-8 text-heitokai-green" />
                </motion.div>
              </div>
            </div>
            
            {/* Métricas e Números - 3/7 colunas */}
            <div className="col-span-1 lg:col-span-3 bg-gradient-to-br from-heitokai-light-green/10 to-white p-4">
              <div className="space-y-4">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-heitokai-dark mb-1">Projeção de Valorização</h4>
                  <p className="text-xs text-heitokai-dark/70">
                    Com base nos parâmetros atuais da simulação
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
                
                {/* Gráfico de barras anual */}
                <div className="bg-white/60 backdrop-blur-sm border border-heitokai-light-green/20 rounded-md p-3">
                  <div className="text-xs text-heitokai-dark/70 mb-2">Projeção Anual (R$)</div>
                  
                  <div className="relative h-24">
                    <div className="absolute left-0 right-0 bottom-0 border-t border-dashed border-heitokai-dark/20 h-0"></div>
                    
                    <div className="flex justify-between items-end h-full">
                      {annualValues.map((yearData, index) => {
                        const maxValue = Math.max(...annualValues.map(a => a.value));
                        const heightPercent = (yearData.value / maxValue) * 100;
                        
                        return (
                          <div key={index} className="flex flex-col items-center">
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: `${heightPercent}%`, opacity: 1 }}
                              transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                              className="w-6 bg-gradient-to-t from-heitokai-green to-heitokai-light-green rounded-t-sm"
                            />
                            <div className="text-[10px] text-heitokai-dark/70 mt-1">
                              Ano {yearData.year}
                            </div>
                          </div>
                        );
                      })}
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
                          animate={{ width: `${Math.min(100, traditionaInvestmentReturn)}%` }}
                          transition={{ duration: 1, delay: 0.6 }}
                          className="h-full bg-gray-400"
                        />
                      </div>
                      <span className="font-semibold text-heitokai-dark">{traditionaInvestmentReturn.toFixed(1)}%</span>
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
                    <div className="text-[10px] text-heitokai-dark/70">Rentabilidade mensal média</div>
                    <div className="flex items-center gap-1 bg-heitokai-light-green/20 px-2 py-0.5 rounded-full">
                      <Percent className="h-3 w-3 text-heitokai-green" />
                      <span className="text-[10px] font-medium text-heitokai-green">{appreciationRate.toFixed(1)}%</span>
                    </div>
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
