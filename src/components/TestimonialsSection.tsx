
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import AnimatedObserver from "./AnimatedObserver";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Données des témoignages (normalement viendrait d'une API)
const testimonials = [
  {
    id: 1,
    name: "Marie L.",
    location: "Paris",
    text: "Depuis que j'ai installé ma lampe LuzHimalaya dans ma chambre, mon sommeil s'est considérablement amélioré. La lueur chaude et apaisante crée une ambiance parfaite pour la détente."
  },
  {
    id: 2,
    name: "Thomas B.",
    location: "Lyon",
    text: "J'utilise ma lampe lors de mes séances de méditation et la différence est incroyable. L'atmosphère qu'elle crée est véritablement propice à la concentration et à la sérénité."
  },
  {
    id: 3,
    name: "Sophie D.",
    location: "Bordeaux",
    text: "Non seulement ces lampes sont magnifiques, mais depuis que j'en ai placé dans mon salon, l'air semble plus frais et mes allergies se sont atténuées. Un achat que je ne regrette absolument pas !"
  },
  {
    id: 4,
    name: "Laurent M.",
    location: "Marseille",
    text: "Le service client est impeccable et la lampe que j'ai reçue dépasse mes attentes. Un véritable objet d'art qui apporte une touche unique à mon intérieur."
  },
  {
    id: 5,
    name: "Isabelle R.",
    location: "Nantes",
    text: "Cadeau parfait pour ma fille qui souffrait d'anxiété. Elle est conquise par sa lampe qui l'aide à se détendre avant de dormir. Merci LuzHimalaya pour ce produit exceptionnel."
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const slideWidth = 100; // percentage

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this with the transition duration
  };

  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="témoignages" className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-himalaya-black/30 to-transparent"></div>
      
      {/* Quote marks decoration */}
      <div className="absolute top-20 left-10 text-himalaya-gold/5 text-9xl font-serif">"</div>
      <div className="absolute bottom-20 right-10 text-himalaya-gold/5 text-9xl font-serif">"</div>
      
      <div className="container px-6 md:px-12 mx-auto">
        <AnimatedObserver className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Ce qu'ils en disent</h2>
        </AnimatedObserver>
        <AnimatedObserver className="text-center reveal-delay-1">
          <p className="text-himalaya-gold-light max-w-2xl mx-auto mb-16">
            Découvrez les témoignages de nos clients satisfaits par les bienfaits 
            et la beauté de nos lampes en sel de l'Himalaya.
          </p>
        </AnimatedObserver>
        
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Carousel container */}
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className={cn(
                    "bg-gradient-to-br from-[#161616] to-[#0c0c0c]",
                    "border border-himalaya-gold/20 p-8 md:p-10 rounded-sm",
                    "shadow-gold"
                  )}>
                    <p className="text-himalaya-gold-light text-lg md:text-xl italic mb-6">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-himalaya-gold/20 flex items-center justify-center">
                        <span className="text-himalaya-gold font-cinzel text-xl">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-cinzel text-himalaya-gold">{testimonial.name}</h4>
                        <p className="text-himalaya-gold-light text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button 
              onClick={goToPrev} 
              className="p-2 border border-himalaya-gold/30 rounded-full text-himalaya-gold transition-all duration-300 hover:bg-himalaya-gold/10 hover:border-himalaya-gold"
              disabled={isAnimating}
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    currentIndex === index 
                      ? "bg-himalaya-gold w-4" 
                      : "bg-himalaya-gold/30 hover:bg-himalaya-gold/50"
                  )}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={goToNext} 
              className="p-2 border border-himalaya-gold/30 rounded-full text-himalaya-gold transition-all duration-300 hover:bg-himalaya-gold/10 hover:border-himalaya-gold"
              disabled={isAnimating}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
