
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Features = () => {
  const featureItems = [
    {
      title: "NATUREZA E RIO EXCLUSIVOS",
      icon: "🌿",
      description: "Um santuário natural com acesso privilegiado a águas cristalinas, onde cada amanhecer traz uma nova perspectiva de beleza e tranquilidade."
    }, 
    {
      title: "PAISAGISMO DE CLASSE MUNDIAL",
      icon: "🌳",
      description: "Jardins e áreas verdes projetados por especialistas, onde o verde e o azul do rio se entrelaçam em uma sinfonia visual que transforma cada vista em uma obra de arte viva."
    }, 
    {
      title: "PRIVACIDADE E EXCLUSIVIDADE",
      icon: "🔒",
      description: "Um refúgio para poucos, onde cada detalhe foi pensado para garantir sua privacidade e conforto, com segurança 24 horas e acesso controlado."
    }, 
    {
      title: "HARMONIA COM A NATUREZA",
      icon: "☯️",
      description: "Arquitetura biofílica que integra perfeitamente os espaços construídos com o ambiente natural, criando uma experiência de vida em perfeito equilíbrio."
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-heitokai-light-green/20 to-white">
      <div className="container-custom">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center font-serif text-3xl md:text-5xl text-heitokai-dark mb-16"
        >
          ONDE A NATUREZA ENCONTRA SEU ESTILO
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featureItems.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full border border-heitokai-light-green/30 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center h-full">
                  <motion.div 
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-5xl mb-6 bg-heitokai-light-green/30 p-4 rounded-full"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="font-serif text-center text-lg font-medium mb-4 text-heitokai-dark">
                    {feature.title}
                  </h3>
                  <p className="text-center text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="section-title">A oportunidade de uma vida</h3>
            <p className="mb-6 text-lg">
              O Condomínio Reserva Rio Uru Heitokai é uma declaração de valores. Muito além de um simples empreendimento imobiliário, é a concretização de um sonho de vida em perfeita comunhão com a natureza, sem abrir mão do conforto e da sofisticação.
            </p>
            <p className="text-lg">
              Com localização privilegiada e acesso exclusivo às margens do Rio Uru, cada lote é uma tela em branco para criar a casa dos seus sonhos, cercada pelos sons da natureza e pelo frescor das águas que banham esta terra abençoada.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="aspect-video rounded-lg overflow-hidden shadow-2xl"
          >
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 3 }}
              alt="Vista aérea do condomínio" 
              className="w-full h-full object-cover" 
              src="/lovable-uploads/d0cd53f7-90e4-4cb9-bbef-bc2228f62cde.jpg" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
