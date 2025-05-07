
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="w-full">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            O Reserva Rio Uru Heitokai inicia seu desenvolvimento com foco em sustentabilidade e design biofílico
          </p>
          <div className="grid grid-cols-2 gap-4 w-full">
            <Card className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg">
              <img 
                src="https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//bg_site%202.png" 
                alt="Vista do empreendimento" 
                className="h-full w-full object-cover"
              />
            </Card>
            <Card className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg">
              <img 
                src="https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//Logo%20Principal%204B%203%20cores@2x.png" 
                alt="Logo Heitokai" 
                className="h-full w-full object-contain p-4"
              />
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="w-full">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Fase de planejamento e estudos técnicos para implementação do condomínio com princípios de harmonia e valorização da natureza.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Desenvolvimento do conceito Heitokai - onde natureza e modernidade se encontram em perfeito equilíbrio.
          </p>
          <div className="grid grid-cols-2 gap-4 w-full">
            <Card className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg">
              <div className="bg-heitokai-green/20 h-full w-full flex items-center justify-center">
                <p className="text-heitokai-dark font-medium text-center p-4">Estudos de impacto ambiental</p>
              </div>
            </Card>
            <Card className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg">
              <div className="bg-heitokai-light-green/30 h-full w-full flex items-center justify-center">
                <p className="text-heitokai-dark font-medium text-center p-4">Planejamento urbanístico</p>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: "Próximas etapas",
      content: (
        <div className="w-full">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            O projeto continua em desenvolvimento com as seguintes etapas:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Infraestrutura completa
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Áreas de lazer integradas à natureza
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Preservação de áreas verdes
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Lotes com até 800m²
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Acesso exclusivo para moradores
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <Card className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg bg-heitokai-beige/30 flex items-center justify-center">
              <p className="text-heitokai-dark font-medium text-center p-4">Lançamento</p>
            </Card>
            <Card className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg bg-heitokai-blue/20 flex items-center justify-center">
              <p className="text-heitokai-dark font-medium text-center p-4">Entrega das primeiras unidades</p>
            </Card>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full bg-white">
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
