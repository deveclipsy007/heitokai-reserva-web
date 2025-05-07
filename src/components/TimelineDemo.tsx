
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
            O Condomínio Reserva Rio Uru Heitokai inicia sua fase de implementação com foco em preservação ambiental e infraestrutura de alto padrão, estabelecendo novos parâmetros de qualidade na região.
          </p>
          <div className="grid grid-cols-2 gap-4 w-full">
            <Card className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg">
              <img 
                src="https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//bg_site%202.png" 
                alt="Vista panorâmica do empreendimento" 
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
            Conclusão dos estudos de impacto ambiental e aprovação do projeto nos órgãos competentes, garantindo o desenvolvimento sustentável do condomínio em harmonia com o ecossistema local.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Desenvolvimento do conceito Heitokai - integração perfeita entre tecnologia avançada de infraestrutura e respeito aos recursos naturais, criando um ambiente exclusivo para um estilo de vida superior.
          </p>
          <div className="grid grid-cols-2 gap-4 w-full">
            <Card className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg">
              <div className="bg-heitokai-green/20 h-full w-full flex items-center justify-center">
                <p className="text-heitokai-dark font-medium text-center p-4">Certificação ambiental completa</p>
              </div>
            </Card>
            <Card className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg">
              <div className="bg-heitokai-light-green/30 h-full w-full flex items-center justify-center">
                <p className="text-heitokai-dark font-medium text-center p-4">Masterplan aprovado</p>
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
            O desenvolvimento do Condomínio Reserva Rio Uru Heitokai segue com estas importantes fases:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Infraestrutura de padrão internacional
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Clube privativo com vista para o Rio Uru
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Preservação de 60% da área verde nativa
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Lotes premium com até 800m²
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Sistema de segurança e controle de acesso avançado
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <Card className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg bg-heitokai-beige/30 flex items-center justify-center">
              <p className="text-heitokai-dark font-medium text-center p-4">Pré-lançamento exclusivo</p>
            </Card>
            <Card className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg bg-heitokai-blue/20 flex items-center justify-center">
              <p className="text-heitokai-dark font-medium text-center p-4">Entrega das obras de infraestrutura</p>
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
