
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

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
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Card className="border border-heitokai-light-green/30 overflow-hidden shadow-lg bg-white/90 backdrop-blur-sm h-full">
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
              min={499}
              max={50000}
              step={100}
              value={[initialInvestment]}
              onValueChange={(value) => setInitialInvestment(value[0])}
              className="py-4"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="months">Período (meses)</Label>
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
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="appreciation">Taxa de Valorização Mensal</Label>
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
          </div>
          
          <div className="pt-4 border-t border-border">
            <div className="flex justify-between mb-2">
              <span className="text-muted-foreground">Valor Futuro Estimado:</span>
              <span className="font-semibold text-xl">{formatCurrency(futureValue)}</span>
            </div>
            
            <div className="text-xs text-muted-foreground mb-4 text-right">
              Sobre o valor inicial de {formatCurrency(propertyValue)} por lote
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
  );
};

export default InvestmentCalculator;
