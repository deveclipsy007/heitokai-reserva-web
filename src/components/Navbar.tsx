
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center">
          <h1 className={cn(
            "font-serif font-bold text-xl transition-all duration-300",
            isScrolled ? "text-heitokai-green" : "text-white"
          )}>
            Reserva Rio Uru Heitokai
          </h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {["INÍCIO", "SOBRE", "MAPA", "FALE CONOSCO"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "font-medium hover:text-heitokai-green transition-colors",
                isScrolled ? "text-heitokai-dark" : "text-white"
              )}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "md:hidden",
            isScrolled ? "text-heitokai-dark" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-md">
          <nav className="flex flex-col gap-4">
            {["INÍCIO", "SOBRE", "MAPA", "FALE CONOSCO"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-heitokai-dark font-medium hover:text-heitokai-green transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
