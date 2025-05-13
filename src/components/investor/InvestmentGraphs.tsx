
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
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, PieChart as PieChartIcon, BarChart2 } from "lucide-react";

interface InvestmentGraphsProps {
  investmentData: any[];
  breakdownData: any[];
  chartConfig: any;
  formatCurrency: (value: number) => string;
  months: number;
}

const InvestmentGraphs = ({
  investmentData,
  breakdownData,
  chartConfig,
  formatCurrency,
  months
}: InvestmentGraphsProps) => {
  // Calculando dados adicionais para gráfico de barras
  const barChartData = [];
  const yearlyIntervals = Math.ceil(months / 12);
  for (let i = 0; i <= yearlyIntervals; i++) {
    const monthIndex = i * 12;
    if (monthIndex <= months) {
      const monthData = investmentData[Math.min(monthIndex, investmentData.length - 1)];
      barChartData.push({
        name: i === 0 ? 'Início' : `Ano ${i}`,
        valor: monthData.valor,
        investimento: monthData.investimento,
        lucro: monthData.valor - monthData.investimento
      });
    }
  }
  
  // Cores para o gráfico de pizza
  const COLORS = ['#d1d5db', '#16A34A'];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Card className="border border-heitokai-light-green/30 bg-white/90 backdrop-blur-sm overflow-hidden shadow-md h-full">
        <CardHeader>
          <CardTitle className="text-lg">Análise de Investimento</CardTitle>
          <CardDescription>Projeção financeira em {months} meses</CardDescription>
          
          <Tabs defaultValue="line" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-2">
              <TabsTrigger value="line" className="text-xs flex gap-1 items-center">
                <TrendingUp className="h-3 w-3" />
                <span>Crescimento</span>
              </TabsTrigger>
              <TabsTrigger value="pie" className="text-xs flex gap-1 items-center">
                <PieChartIcon className="h-3 w-3" />
                <span>Composição</span>
              </TabsTrigger>
              <TabsTrigger value="bar" className="text-xs flex gap-1 items-center">
                <BarChart2 className="h-3 w-3" />
                <span>Comparativo</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="line">
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
                    domain={['dataMin', 'dataMax']}
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
            </TabsContent>
            
            <TabsContent value="pie">
              <div className="w-full aspect-[4/3] md:aspect-video overflow-hidden flex items-center justify-center pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={breakdownData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      animationDuration={1500}
                    >
                      {breakdownData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="bar">
              <div className="w-full aspect-[4/3] md:aspect-video overflow-hidden">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={barChartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `R$${value >= 1000 ? (value/1000).toFixed(0) + 'k' : value}`} />
                    <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                    <Legend verticalAlign="top" height={36} />
                    <Bar dataKey="lucro" name="Lucro" fill="#86EFAC" stackId="a" animationDuration={1500} />
                    <Bar dataKey="investimento" name="Investimento Inicial" fill="#d1d5db" stackId="a" animationDuration={1500} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardHeader>
        
        {/* Notas sobre os gráficos */}
        <CardContent className="text-xs text-muted-foreground border-t border-border/30 pt-2">
          <p>Esta visualização representa uma projeção baseada nos parâmetros atuais. Consulte nossos especialistas para uma análise personalizada.</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default InvestmentGraphs;
