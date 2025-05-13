
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calculator, Download } from "lucide-react";

interface InvestmentCalculatorProps {
  initialInvestment: number;
  setInitialInvestment: (value: number) => void;
  months: number;
  setMonths: (value: number) => void;
  appreciationRate: number;
  setAppreciationRate: (value: number) => void;
  propertyValue: number;
  futureValue: number;
  formatCurrency: (value: number) => string;
  roi: number;
}

const InvestmentCalculator = ({
  initialInvestment,
  setInitialInvestment,
  months,
  setMonths,
  appreciationRate,
  setAppreciationRate,
  propertyValue,
  futureValue,
  formatCurrency,
  roi
}: InvestmentCalculatorProps) => {
  // Calcula o lucro estimado
  const profit = futureValue - initialInvestment;
  
  // Calcula o ROI anualizado
  const annualizedROI = ((1 + appreciationRate / 100) ** 12 - 1) * 100;
  
  // Valor mensal (caso o investidor queira parcelar)
  const monthlyPayment = initialInvestment / 12;
  
  // Função simular download de PDF
  const handleDownloadSimulation = () => {
    const element = document.createElement('a');
    // Normalmente aqui teria uma geração de PDF real, mas para o exemplo apenas criamos um elemento falso
    element.setAttribute('href', '#');
    element.setAttribute('download', 'simulacao_investimento_heitokai.pdf');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="h-full"
    >
      <Card className="border border-heitokai-light-green/30 overflow-hidden shadow-lg bg-white/90 backdrop-blur-sm h-full">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-heitokai-light-green/20 rounded-full">
              <Calculator className="h-4 w-4 text-heitokai-green" />
            </div>
            <div>
              <CardTitle className="text-lg">Calculadora de Investimento</CardTitle>
              <CardDescription>Simule seu retorno financeiro</CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="investment" className="text-sm">Investimento Inicial</Label>
              <span className="font-medium text-heitokai-green">{formatCurrency(initialInvestment)}</span>
            </div>
            <Slider
              id="investment"
              min={499}
              max={50000}
              step={100}
              value={[initialInvestment]}
              onValueChange={(value) => setInitialInvestment(value[0])}
              className="py-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Mínimo: R$499</span>
              <span>Máximo: R$50.000</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="months" className="text-sm">Período de Investimento</Label>
              <span className="font-medium text-heitokai-green">{months} meses</span>
            </div>
            <Slider
              id="months"
              min={1}
              max={120}
              step={1}
              value={[months]}
              onValueChange={(value) => setMonths(value[0])}
              className="py-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 mês</span>
              <span>10 anos</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="appreciation" className="text-sm">Taxa de Valorização Mensal</Label>
              <span className="font-medium text-heitokai-green">{appreciationRate}%</span>
            </div>
            <Slider
              id="appreciation"
              min={0.5}
              max={5}
              step={0.1}
              value={[appreciationRate]}
              onValueChange={(value) => setAppreciationRate(value[0])}
              className="py-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0.5%</span>
              <span>5%</span>
            </div>
          </div>
          
          <div className="pt-4 border-t border-border/30 grid grid-cols-2 gap-4">
            <div className="p-3 bg-gradient-to-br from-heitokai-light-green/10 to-white rounded-md border border-heitokai-light-green/20">
              <div className="text-xs text-muted-foreground">Valor Futuro</div>
              <div className="font-semibold text-lg">{formatCurrency(futureValue)}</div>
            </div>
            
            <div className="p-3 bg-gradient-to-br from-heitokai-light-green/10 to-white rounded-md border border-heitokai-light-green/20">
              <div className="text-xs text-muted-foreground">Lucro Estimado</div>
              <div className="font-semibold text-lg text-green-600">{formatCurrency(profit)}</div>
            </div>
            
            <div className="p-3 bg-gradient-to-br from-heitokai-light-green/10 to-white rounded-md border border-heitokai-light-green/20">
              <div className="text-xs text-muted-foreground">ROI do Período</div>
              <div className="font-semibold text-lg flex items-center gap-1">
                {roi.toFixed(1)}%
                <TrendingUp className="h-3 w-3 text-heitokai-green" />
              </div>
            </div>
            
            <div className="p-3 bg-gradient-to-br from-heitokai-light-green/10 to-white rounded-md border border-heitokai-light-green/20">
              <div className="text-xs text-muted-foreground">ROI Anualizado</div>
              <div className="font-semibold text-lg">{annualizedROI.toFixed(1)}%/ano</div>
            </div>
          </div>
          
          <div className="bg-gray-50 -mx-6 -mb-6 px-6 py-4 border-t border-border/30 mt-4">
            <div className="flex justify-between mb-3 items-center">
              <div>
                <div className="text-xs text-muted-foreground">Investimento Mensal</div>
                <div className="font-medium">{formatCurrency(monthlyPayment)}<span className="text-xs text-muted-foreground">/mês</span></div>
              </div>
              
              <Button variant="outline" size="sm" className="text-xs flex gap-1 items-center" onClick={handleDownloadSimulation}>
                <Download className="h-3 w-3" />
                PDF
              </Button>
            </div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(100, roi)}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ maxWidth: '100%' }}
              className="h-2 bg-gradient-to-r from-heitokai-light-green to-heitokai-green rounded-full overflow-hidden"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default InvestmentCalculator;
