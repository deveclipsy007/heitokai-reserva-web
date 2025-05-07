import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Adicionar funcionalidade de scroll suave para as âncoras
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        event.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId || '');
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    document.body.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 z-40 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom mx-auto">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img 
                src={isMobile 
                  ? "https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//Logo%204B%20Preto@2x.png"
                  : scrolled 
                    ? "https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//Logo%20Principal%204B%203%20cores@2x.png" 
                    : "/lovable-uploads/119c5dc0-5a7e-4226-b6e4-3ab042b944b2.png"} 
                alt="Reserva Rio Uru" 
                className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-16'}`} 
              />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-heitokai-dark hover:text-heitokai-green transition-colors">O Empreendimento</a>
            <a href="#mapa" className="text-heitokai-dark hover:text-heitokai-green transition-colors">Localização</a>
            <a href="#sobre-nos" className="text-heitokai-dark hover:text-heitokai-green transition-colors">Sobre Nós</a>
            <a href="#fale-conosco" className="text-heitokai-dark hover:text-heitokai-green transition-colors">Contato</a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-heitokai-dark hover:text-heitokai-green focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <div
            className={`fixed inset-0 z-50 bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-in-out transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
          >
            <div className="flex justify-between items-center p-5 border-b">
              <a href="/" className="flex items-center space-x-2">
                <img 
                  src="https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//Logo%204B%20Preto@2x.png"
                  alt="Reserva Rio Uru" 
                  className={`transition-all duration-300 ${scrolled ? 'h-8' : 'h-12'}`}
                />
              </a>
              <button
                className="rounded-md p-2 text-heitokai-dark focus:outline-none"
                onClick={toggleMenu}
              >
                <span className="sr-only">Fechar menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-col space-y-4 p-5">
              <a 
                href="#sobre" 
                className="px-3 py-2 text-lg font-medium text-heitokai-dark hover:text-heitokai-green"
                onClick={handleMenuItemClick}
              >
                O Empreendimento
              </a>
              <a 
                href="#mapa" 
                className="px-3 py-2 text-lg font-medium text-heitokai-dark hover:text-heitokai-green"
                onClick={handleMenuItemClick}
              >
                Localização
              </a>
              <a 
                href="#sobre-nos" 
                className="px-3 py-2 text-lg font-medium text-heitokai-dark hover:text-heitokai-green"
                onClick={handleMenuItemClick}
              >
                Sobre Nós
              </a>
              <a 
                href="#fale-conosco" 
                className="px-3 py-2 text-lg font-medium text-heitokai-dark hover:text-heitokai-green"
                onClick={handleMenuItemClick}
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
