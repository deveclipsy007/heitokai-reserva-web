
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
        isScrolled ? "bg-white py-2 shadow-md" : "bg-gradient-to-b from-[#0A2647]/80 to-transparent py-4"
      )}
    >
      <div
        className={cn(
          "container-custom flex justify-between items-center my-0 py-[5px]",
          isScrolled ? "" : ""
        )}
      >
        {/* Logo on the left */}
        <a href="#" className="flex items-center">
          <img
            alt="Reserva Rio Uru Heitokai"
            className="h-12 w-auto md:h-16"
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

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white overflow-hidden shadow-lg"
          >
            <motion.nav 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, staggerChildren: 0.1 }}
              className="flex flex-col gap-2 p-4"
            >
              {["INÍCIO", "SOBRE", "MAPA", "FALE CONOSCO"].map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  className="text-black font-medium hover:text-heitokai-green transition-colors py-3 px-4 border-b border-gray-100 last:border-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
