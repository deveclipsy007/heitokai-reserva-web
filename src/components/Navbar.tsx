
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
        isScrolled ? "py-2" : "bg-transparent py-4"
      )}
    >
      <div
        className={cn(
          "container-custom flex justify-between items-center my-0 py-[5px]"
        )}
      >
        {/* Logo on the left */}
        <a href="#" className="flex items-center">
          <img
            alt="Reserva Rio Uru Heitokai"
            className="h-12 md:h-16 w-auto"
            src={
              isScrolled
                ? "https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//Logo%20Principal%204B%203%20cores@2x.png"
                : "https://cnkcoxooaetehlufjwbr.supabase.co/storage/v1/object/public/avatars//Logo%20Principal%204B%203%20cores%20branco@2x.png"
            }
          />
        </a>

        {/* Desktop Menu moved to the right */}
        <nav className="hidden md:flex gap-8">
          {["INÍCIO", "SOBRE", "MAPA", "FALE CONOSCO"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "font-medium hover:text-heitokai-green transition-colors",
                isScrolled ? "text-black" : "text-white"
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
          className={cn("md:hidden", isScrolled ? "text-black" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white p-6 shadow-lg absolute w-full">
          <nav className="flex flex-col gap-6">
            {["INÍCIO", "SOBRE", "MAPA", "FALE CONOSCO"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black text-lg font-medium hover:text-heitokai-green transition-colors"
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
