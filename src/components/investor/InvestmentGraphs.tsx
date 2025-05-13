
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Legend
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";

interface InvestmentGraphsProps {
  investmentData: any[];
  breakdownData: any[];
  chartConfig: any;
  formatCurrency: (value: number) => string;
  months: number;
}

const InvestmentGraphs = ({
  investmentData,
  chartConfig,
  formatCurrency,
  months
}: InvestmentGraphsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Card className="border border-heitokai-light-green/30 bg-white/90 backdrop-blur-sm overflow-hidden shadow-md h-full">
        <CardHeader>
          <CardTitle className="text-lg">Crescimento ao Longo do Tempo</CardTitle>
          <CardDescription>Projeção de valorização em {months} meses</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer 
            config={chartConfig} 
            className="w-full aspect-[4/3] md:aspect-video"
          >
            <LineChart data={investmentData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="mes" 
                label={{ value: 'Meses', position: 'insideBottom', offset: -15 }}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                tickFormatter={(value) => `R$${value.toLocaleString()}`}
                width={60} 
                tick={{ fontSize: 12 }}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent 
                    formatter={(value) => formatCurrency(Number(value))} 
                  />
                }
              />
              <Legend verticalAlign="top" height={36} />
              <Line 
                type="monotone" 
                dataKey="investimento" 
                name="Investimento Inicial" 
                strokeDasharray="5 5"
                stroke="#d1d5db"
                strokeWidth={2}
                dot={false}
                animationDuration={1500}
              />
              <Line 
                type="monotone" 
                dataKey="valor"
                name="Valor do Investimento" 
                stroke="#16A34A" 
                strokeWidth={2}
                activeDot={{ r: 6, fill: "#16A34A", stroke: "#fff", strokeWidth: 2 }}
                animationDuration={2000}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default InvestmentGraphs;
