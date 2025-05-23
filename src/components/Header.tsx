
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const menuItems = ["Inicio", "Productos", "Beneficios", "Testimonios", "Contacto"];
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12",
      isScrolled 
        ? "bg-himalaya-black/90 backdrop-blur-sm shadow-gold" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <div className={cn(
          "transition-all duration-500 flex items-center",
          isScrolled ? "scale-90" : "scale-100"
        )}>
          <a 
            href="#hero" 
            className="font-cinzel text-2xl md:text-3xl font-bold text-himalaya-gold hover:scale-105 transition-transform duration-300"
          >
            <span className="text-shadow-gold tracking-wider">Luz</span>
            <span className="font-light text-himalaya-gold-light">Himalaya</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-10">
          {menuItems.map((item, index) => (
            <a 
              key={index}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "font-cinzel text-sm font-medium tracking-wider transition-all duration-300 relative",
                "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[1px]",
                "after:w-0 after:bg-himalaya-gold after:transition-all after:duration-300 hover:after:w-full",
                "hover:text-himalaya-gold-light hover:scale-105"
              )}
            >
              {item}
            </a>
          ))}
        </nav>
        
        <button 
          className="md:hidden text-himalaya-gold hover:rotate-90 transition-all duration-300" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú"
        >
          <Menu size={24} />
        </button>
      </div>
      
      <div className={cn(
        "fixed inset-0 bg-himalaya-black/95 z-50 flex flex-col items-center justify-center space-y-8",
        "transition-all duration-500 transform backdrop-blur-lg",
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible translate-x-full"
      )}>
        <button 
          className="absolute top-6 right-6 text-himalaya-gold hover:rotate-90 transition-all duration-300" 
          onClick={() => setIsMenuOpen(false)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {menuItems.map((item, index) => (
          <a 
            key={index}
            href={`#${item.toLowerCase()}`}
            className="font-cinzel text-xl font-medium tracking-wider transition-all duration-300 hover:text-himalaya-gold hover:scale-110"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
}
