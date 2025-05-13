
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Home, Trees, Sun, Waves, Map, MapPin, Graph, Wallet } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
  const annualValues = [];
  for (let i = 1; i <= Math.min(5, Math.ceil(months / 12)); i++) {
    const year = i;
    const yearlyGrowth = investmentValue * Math.pow(1 + appreciationRate / 100, i * 12) - investmentValue;
    annualValues.push({ year, value: yearlyGrowth });
  }
  
  // Elements to show based on progress level
  const showInfrastructure = progressLevel >= 2;
  const showProperties = progressLevel >= 3;
  const showCommerceAreas = progressLevel >= 4;
  const showFutureDevelopment = progressLevel >= 5;
  
  // Number of elements based on progress
  const infrastructureCount = Math.min(progressLevel * 2, 10);
  const propertyCount = Math.max(0, Math.min((progressLevel - 2) * 3, 12));
  const commerceCount = Math.max(0, Math.min((progressLevel - 3) * 2, 6));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border border-heitokai-light-green/30 bg-white/90 backdrop-blur-sm overflow-hidden shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Map className="h-5 w-5 text-heitokai-green" />
            Desenvolvimento e Valorização do Empreendimento
          </CardTitle>
          <CardDescription>
            Visualize o crescimento projetado do Condomínio Reserva Rio Uru
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-0">
            {/* Visualização do Empreendimento - 4/7 colunas */}
            <div className="col-span-1 lg:col-span-4 p-4">
              <div className="relative h-64 md:h-80 bg-gradient-to-b from-sky-50 to-heitokai-light-green/10 rounded-md overflow-hidden border border-heitokai-light-green/20">
                {/* Overlay do mapa topográfico */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InRvcG9ncmFwaGljIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPgogICAgICA8cGF0aCBkPSJNMCAwIEwxMCAwIEwxMCAxMCBMMjAgMTAgTDIwIDIwIEw0MCAyMCBMNDAgNDAgTDAgNDAgWiIgc3Ryb2tlPSIjMDgwIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIgLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCN0b3BvZ3JhcGhpYykiIC8+Cjwvc3ZnPg==')]"></div>
                
                {/* Demarcação do Terreno */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  className="absolute top-4 right-4 left-4 bottom-12 border-2 border-dashed border-heitokai-green/40 rounded-md"
                >
                  <div className="absolute -top-2 -left-2 h-4 w-4 bg-heitokai-green/30 rounded-full"></div>
                  <div className="absolute -top-2 -right-2 h-4 w-4 bg-heitokai-green/30 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 h-4 w-4 bg-heitokai-green/30 rounded-full"></div>
                  <div className="absolute -bottom-2 -right-2 h-4 w-4 bg-heitokai-green/30 rounded-full"></div>
                </motion.div>
                
                {/* Rio */}
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "70%", opacity: 0.8 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="absolute bottom-20 left-0 h-6 bg-blue-300/60 z-10"
                  style={{ 
                    borderRadius: "0 100px 100px 0",
                    filter: "blur(1px)"
                  }}
                >
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                      opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Waves className="text-blue-500/40 h-3 w-3" />
                  </motion.div>
                  
                  {/* Nome do Rio */}
                  <div className="absolute -top-5 left-1/4 text-[10px] font-medium text-blue-600/70 transform -rotate-3">
                    Rio Uru
                  </div>
                </motion.div>
                
                {/* Infraestrutura (estradas, etc) */}
                {showInfrastructure && (
                  <>
                    {/* Estrada Principal */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "75%", opacity: 0.9 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="absolute top-10 left-1/4 w-3 bg-gray-300/70 rounded-full overflow-hidden"
                    >
                      <motion.div
                        animate={{ y: [-5, 0, -5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-gray-300/10 via-gray-400/20 to-gray-300/10"
                      />
                      
                      {/* Linhas da Estrada */}
                      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/60 transform -translate-x-1/2" style={{ backgroundImage: 'linear-gradient(0deg, transparent 0%, transparent 40%, white 40%, white 60%, transparent 60%, transparent 100%)', backgroundSize: '2px 10px' }}></div>
                    </motion.div>
                    
                    {/* Estradas Secundárias */}
                    {[...Array(infrastructureCount)].map((_, i) => (
                      <motion.div
                        key={`road-${i}`}
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: `${20 + Math.random() * 30}%`, opacity: 0.7 }}
                        transition={{ duration: 0.6, delay: 0.8 + (i * 0.1) }}
                        className="absolute bg-gray-300/50 h-2 rounded-full"
                        style={{
                          top: `${30 + (i * 12)}%`,
                          right: `${5 + (i % 3) * 10}%`,
                          transform: `rotate(${-5 + (i % 3) * 5}deg)`,
                        }}
                      />
                    ))}
                  </>
                )}
                
                {/* Árvores de preservação */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`tree-perm-${i}`}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 0.9, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.2 + (0.05 * i),
                      ease: "easeOut" 
                    }}
                    className="absolute"
                    style={{
                      bottom: `${10 + Math.random() * 50}px`,
                      left: `${5 + Math.random() * 20}%`,
                      zIndex: Math.floor(Math.random() * 20) + 5
                    }}
                  >
                    <Trees 
                      className="text-green-700/80" 
                      size={16 + (i % 4) * 3} 
                    />
                  </motion.div>
                ))}
                
                {/* Propriedades construídas */}
                {showProperties && [...Array(propertyCount)].map((_, i) => (
                  <motion.div
                    key={`house-${i}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 1.0 + (0.1 * i),
                      ease: "easeOut" 
                    }}
                    className="absolute"
                    style={{
                      bottom: `${25 + Math.random() * 40}px`,
                      right: `${15 + Math.random() * 25 + (i % 3) * 15}%`,
                      zIndex: 30 + i
                    }}
                  >
                    <Home 
                      className="text-heitokai-dark/90" 
                      size={14 + (i % 5) * 2} 
                    />
                    
                    {/* Lote demarcado */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      transition={{ delay: 1.1 + (0.1 * i) }}
                      className="absolute -inset-1 -z-10 border border-heitokai-green/60 rounded-sm"
                    />
                  </motion.div>
                ))}
                
                {/* Áreas comerciais */}
                {showCommerceAreas && [...Array(commerceCount)].map((_, i) => (
                  <motion.div
                    key={`commerce-${i}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 1.5 + (0.15 * i),
                      ease: "easeOut" 
                    }}
                    className="absolute"
                    style={{
                      top: `${30 + (i % 3) * 15}%`,
                      left: `${30 + (i * 7)}%`,
                      zIndex: 35 + i
                    }}
                  >
                    <motion.div 
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      className="bg-heitokai-green/20 h-4 w-4 rounded-sm flex items-center justify-center"
                    >
                      <Wallet size={12} className="text-heitokai-green" />
                    </motion.div>
                    
                    {/* Área comercial demarcada */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.2 }}
                      transition={{ delay: 1.6 + (0.15 * i) }}
                      className="absolute -inset-2 -z-10 bg-heitokai-green/10 rounded-sm"
                    />
                  </motion.div>
                ))}
                
                {/* Desenvolvimentos futuros */}
                {showFutureDevelopment && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ duration: 1.2, delay: 1.8 }}
                      className="absolute top-5 right-6"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                        className="text-xs font-medium text-heitokai-green"
                      >
                        Fase 2
                      </motion.div>
                      
                      <motion.div
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                        className="absolute -inset-3 rounded-full border border-dashed border-heitokai-green/40"
                      />
                    </motion.div>
                    
                    {/* Localizador no mapa */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.7 }}
                      className="absolute bottom-4 right-4"
                    >
                      <div className="bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-md flex gap-1 items-center text-[10px] font-medium text-heitokai-dark">
                        <MapPin size={10} className="text-heitokai-green" />
                        Condomínio Reserva Rio Uru
                      </div>
                    </motion.div>
                  </>
                )}
                
                {/* Raios solares */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute top-3 right-[30%]"
                >
                  <Sun className="text-yellow-400/80 h-6 w-6" />
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 rounded-full bg-yellow-400/10"
                    style={{ filter: "blur(6px)" }}
                  />
                </motion.div>
                
                {/* Indicador de progresso */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={controls}
                  className="absolute bottom-2 left-0 right-0 flex justify-center"
                >
                  <div className="px-2 py-1 bg-white/80 backdrop-blur-sm shadow-sm rounded-full">
                    <div className="relative mb-1 text-center text-[10px] font-medium text-heitokai-dark/90 flex gap-1 items-center">
                      <Graph size={10} className="text-heitokai-green" />
                      Desenvolvimento: {Math.round(progressLevel * 20)}%
                    </div>
                    <motion.div 
                      className="h-1 bg-gradient-to-r from-heitokai-light-green to-heitokai-green rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, progressLevel * 20)}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
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
                    Com base nos parâmetros atuais da simulação
                  </p>
                </div>
                
                {/* Métricas Principais */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/60 backdrop-blur-sm border border-heitokai-light-green/20 rounded-md p-3">
                    <div className="text-xs text-heitokai-dark/70">ROI Anualizado</div>
                    <div className="text-xl font-semibold text-heitokai-dark">
                      {annualizedROI.toFixed(1)}%
                    </div>
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
                  <div className="text-xs font-medium text-heitokai-dark mb-2">Comparativo de Oportunidade</div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-heitokai-dark/70">Reserva Rio Uru</span>
                      <div className="flex-1 mx-2 h-3 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-heitokai-green"
                        />
                      </div>
                      <span className="font-semibold text-heitokai-dark">85%</span>
                    </div>
                    
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-heitokai-dark/70">Imóveis Urbanos</span>
                      <div className="flex-1 mx-2 h-3 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "45%" }}
                          transition={{ duration: 1, delay: 0.6 }}
                          className="h-full bg-gray-400"
                        />
                      </div>
                      <span className="font-semibold text-heitokai-dark">45%</span>
                    </div>
                    
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-heitokai-dark/70">Poupança</span>
                      <div className="flex-1 mx-2 h-3 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "15%" }}
                          transition={{ duration: 1, delay: 0.7 }}
                          className="h-full bg-gray-300"
                        />
                      </div>
                      <span className="font-semibold text-heitokai-dark">15%</span>
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
