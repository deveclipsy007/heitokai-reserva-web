
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-heitorai-dark to-black text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo e info da empresa */}
          <div className="md:col-span-4">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-2xl mb-4 text-white"
            >
              Condomínio Reserva Rio Uru
            </motion.h3>
            <p className="text-white/80 mb-6 text-sm">
              Venha viver em harmonia com a natureza em um dos projetos mais exclusivos de Goiás.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-heitorai-light-green" />
                <p className="text-sm text-white/80">Heitoraí, Goiás - Brasil</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-heitorai-light-green" />
                <p className="text-sm text-white/80">(62) 99999-9999</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-heitorai-light-green" />
                <p className="text-sm text-white/80">contato@4bincorporadora.com.br</p>
              </div>
            </div>
          </div>
          
          {/* Links úteis */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-lg mb-4 relative after:absolute after:content-[''] after:w-12 after:h-0.5 after:bg-heitorai-light-green after:-bottom-1 after:left-0">
              Links Úteis
            </h3>
            <ul className="space-y-2">
              {["Início", "Sobre", "Vantagens", "Mapa", "Contato"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-white/70 hover:text-heitorai-light-green transition-colors hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Informações legais */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-lg mb-4 relative after:absolute after:content-[''] after:w-12 after:h-0.5 after:bg-heitorai-light-green after:-bottom-1 after:left-0">
              Informações
            </h3>
            <ul className="space-y-2">
              {["Política de Privacidade", "Termos de Uso", "Financiamento", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/70 hover:text-heitorai-light-green transition-colors hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-4">
            <h3 className="font-serif text-lg mb-4 relative after:absolute after:content-[''] after:w-12 after:h-0.5 after:bg-heitorai-light-green after:-bottom-1 after:left-0">
              Newsletter
            </h3>
            <p className="text-sm text-white/80 mb-4">
              Receba novidades e atualizações sobre nossos empreendimentos.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-heitorai-light-green"
              />
              <Button className="bg-heitorai-green hover:bg-heitorai-light-green text-white">
                Assinar
              </Button>
            </div>
            
            <h3 className="font-serif text-lg mt-6 mb-4 relative after:absolute after:content-[''] after:w-12 after:h-0.5 after:bg-heitorai-light-green after:-bottom-1 after:left-0">
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-heitorai-green transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-heitorai-green transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-heitorai-green transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/20" />
        
        <div className="text-center text-xs text-white/70 space-y-2">
          <p>© {currentYear} Condomínio Reserva Rio Uru Heitoraí. Todos os direitos reservados.</p>
          <p className="max-w-3xl mx-auto">
            Imagens meramente ilustrativas. O empreendimento somente será comercializado após o registro do memorial 
            de incorporação no cartório de imóveis nos termos da Lei nº 4.591/64.
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center items-center mt-4"
          >
            <img 
              src="https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//4b_logo_sm.png" 
              alt="4B Incorporadora" 
              className="h-8 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            />
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
