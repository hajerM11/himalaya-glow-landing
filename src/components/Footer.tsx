
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Twitter } from "lucide-react";
import AnimatedObserver from "./AnimatedObserver";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-[#111111] to-[#070707] pt-16 pb-8 relative">
      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-himalaya-gold/50 to-transparent"></div>
      
      <div className="container px-6 md:px-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo and About */}
          <AnimatedObserver className="col-span-1 md:col-span-1 lg:col-span-1">
            <a href="#hero" className="font-cinzel text-2xl font-bold text-himalaya-gold inline-block mb-4">
              <span className="text-shadow-gold">Luz</span>
              <span className="font-light text-himalaya-gold-light">Himalaya</span>
            </a>
            <p className="text-himalaya-gold-light/80 text-sm mb-6">
              Importateur français de lampes de sel de l'Himalaya avec LED, 
              certifiées et sélectionnées avec soin pour leur qualité exceptionnelle.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-himalaya-gold/70 hover:text-himalaya-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-himalaya-gold/70 hover:text-himalaya-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-himalaya-gold/70 hover:text-himalaya-gold transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </AnimatedObserver>
          
          {/* Navigation */}
          <AnimatedObserver className="col-span-1 md:col-span-1 lg:col-span-1 reveal-delay-1">
            <h3 className="font-cinzel text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              {["Accueil", "Produits", "Bienfaits", "Témoignages", "Contact"].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className={cn(
                      "text-himalaya-gold-light/80 hover:text-himalaya-gold transition-colors duration-300",
                      "flex items-center"
                    )}
                  >
                    <span className="w-1 h-1 bg-himalaya-gold mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedObserver>
          
          {/* Contact */}
          <AnimatedObserver className="col-span-1 md:col-span-1 lg:col-span-1 reveal-delay-2">
            <h3 className="font-cinzel text-lg mb-6">Contact</h3>
            <ul className="space-y-3 text-himalaya-gold-light/80">
              <li>contact@luzhimalaya.fr</li>
              <li>+33 (0)1 23 45 67 89</li>
              <li>42 Rue de la Lumière<br/>75001 Paris, France</li>
            </ul>
          </AnimatedObserver>
          
          {/* Newsletter */}
          <AnimatedObserver className="col-span-1 md:col-span-3 lg:col-span-1 reveal-delay-3">
            <h3 className="font-cinzel text-lg mb-6">Newsletter</h3>
            <p className="text-himalaya-gold-light/80 text-sm mb-4">
              Recevez en avant-première nos nouveautés et promotions exclusives.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className={cn(
                  "px-4 py-3 bg-[#161616] border border-himalaya-gold/30",
                  "text-himalaya-gold-light placeholder:text-himalaya-gold-light/50",
                  "focus:outline-none focus:border-himalaya-gold transition-colors duration-300",
                  "flex-grow"
                )}
                required
              />
              <button 
                type="submit" 
                className={cn(
                  "px-6 py-3 bg-himalaya-gold text-himalaya-black font-cinzel",
                  "transition-all duration-300 hover:bg-himalaya-gold-dark"
                )}
              >
                S'abonner
              </button>
            </form>
          </AnimatedObserver>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-himalaya-gold/10 text-center text-himalaya-gold-light/60 text-sm">
          <p>© {new Date().getFullYear()} LuzHimalaya. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
