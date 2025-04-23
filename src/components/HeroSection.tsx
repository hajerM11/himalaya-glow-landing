
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import AnimatedObserver from "./AnimatedObserver";

export default function HeroSection() {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="accueil" 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundImage: `url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-himalaya-black/70 via-himalaya-black/80 to-himalaya-black"></div>
      
      {/* Parallax elements */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ 
          backgroundImage: `radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)`,
          transform: `translateY(${offset * 0.2}px)` 
        }}
      ></div>
      
      <div className="container relative z-10 px-6 md:px-12 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedObserver>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Illuminez votre intérieur</span> 
              <span className="bg-gold-gradient text-transparent bg-clip-text">avec la lumière naturelle</span>
            </h1>
          </AnimatedObserver>
          
          <AnimatedObserver className="reveal-delay-1">
            <p className="text-xl md:text-2xl text-himalaya-gold-light mb-8 font-light">
              Découvrez nos lampes de sel de l'Himalaya avec LED, alliant bien-être et élégance
            </p>
          </AnimatedObserver>
          
          <AnimatedObserver className="reveal-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#produits" 
              className={cn(
                "px-8 py-4 rounded-sm bg-himalaya-gold text-himalaya-black font-cinzel font-medium",
                "transition-all duration-300 transform hover:translate-y-[-2px]",
                "shadow-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.6)]"
              )}
            >
              Découvrir nos produits
            </a>
            <a 
              href="#bienfaits" 
              className={cn(
                "px-8 py-4 rounded-sm bg-transparent text-himalaya-gold border border-himalaya-gold",
                "font-cinzel font-medium transition-all duration-300 hover:bg-himalaya-gold/10"
              )}
            >
              Leurs bienfaits
            </a>
          </AnimatedObserver>
          
          <AnimatedObserver className="reveal-delay-3 pt-12">
            <div className="animate-bounce flex justify-center">
              <a href="#produits" className="flex flex-col items-center text-himalaya-gold-light">
                <span className="text-sm font-light mb-2">Découvrir</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </AnimatedObserver>
        </div>
      </div>
    </section>
  );
}
