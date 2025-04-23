
import AnimatedObserver from "./AnimatedObserver";
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "Purification de l'air",
    description: "Les lampes de sel libèrent des ions négatifs qui neutralisent les polluants atmosphériques, rafraîchissent l'air et réduisent l'électricité statique.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
      </svg>
    )
  },
  {
    title: "Réduction du stress",
    description: "La douce lueur ambrée crée une atmosphère apaisante qui favorise la relaxation, améliore l'humeur et contribue à réduire l'anxiété.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    )
  },
  {
    title: "Amélioration du sommeil",
    description: "En neutralisant les champs électromagnétiques et en produisant une lumière chaude, les lampes de sel créent un environnement propice à un sommeil réparateur.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    )
  },
  {
    title: "Ambiance unique",
    description: "Chaque lampe diffuse une lumière chaude et apaisante qui transforme instantanément l'ambiance de votre intérieur en un havre de paix.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    )
  }
];

export default function BenefitsSection() {
  return (
    <section id="bienfaits" className="py-24 bg-gradient-to-b from-[#111111] to-[#0A0A0A] relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[radial-gradient(circle,rgba(212,175,55,0.04)_0%,transparent_70%)]"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)]"></div>
      
      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <AnimatedObserver className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Les Bienfaits Naturels</h2>
        </AnimatedObserver>
        <AnimatedObserver className="text-center reveal-delay-1">
          <p className="text-himalaya-gold-light max-w-2xl mx-auto mb-16">
            Au-delà de leur beauté incomparable, les lampes de sel de l'Himalaya 
            offrent de nombreux bienfaits pour votre santé et votre bien-être.
          </p>
        </AnimatedObserver>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {benefits.map((benefit, index) => (
            <AnimatedObserver 
              key={index}
              className={`reveal-delay-${index % 2 === 0 ? '1' : '2'}`}
              threshold={0.2}
            >
              <div className={cn(
                "flex flex-col md:flex-row gap-6 p-6 h-full",
                "bg-gradient-to-br from-[#131313] to-[#0c0c0c]",
                "border-l-2 border-himalaya-gold/30",
                "transition-all duration-300 hover:border-himalaya-gold"
              )}>
                <div className="text-himalaya-gold flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-cinzel mb-2">{benefit.title}</h3>
                  <p className="text-himalaya-gold-light">{benefit.description}</p>
                </div>
              </div>
            </AnimatedObserver>
          ))}
        </div>
        
        <AnimatedObserver className="mt-20 p-8 border border-himalaya-gold/20 bg-himalaya-black/50 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-cinzel mb-4">Un Héritage Millénaire</h3>
          <p className="text-himalaya-gold-light italic">
            "Extraites des anciennes mines de sel situées au cœur de la chaîne himalayenne, 
            nos lampes sont composées de cristaux formés il y a plus de 250 millions d'années. 
            Chaque pièce raconte une histoire ancestrale."
          </p>
        </AnimatedObserver>
      </div>
    </section>
  );
}
