
import { cn } from "@/lib/utils";
import AnimatedObserver from "./AnimatedObserver";

// Données des produits (normalement viendrait d'une API)
const products = [
  {
    id: 1,
    name: "Lampe Himalaya Classique",
    price: "79,90 €",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    description: "Notre modèle emblématique, taillé à la main dans le sel rose de l'Himalaya."
  },
  {
    id: 2,
    name: "Lampe Délicate",
    price: "59,90 €",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    description: "Format compact idéal pour les petits espaces, avec une lueur douce et apaisante."
  },
  {
    id: 3,
    name: "Lampe Majestic",
    price: "129,90 €",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    description: "Imposante et raffinée, cette lampe crée une ambiance incomparable dans votre intérieur."
  },
  {
    id: 4,
    name: "Lampe Zen",
    price: "89,90 €",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    description: "Forme épurée pour une ambiance méditative et relaxante."
  }
];

export default function ProductsSection() {
  return (
    <section id="produits" className="py-24 bg-himalaya-black relative">
      {/* Background decorative element */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-himalaya-black/0 to-himalaya-black/100"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-himalaya-black/0 to-himalaya-black/100"></div>
      
      <div className="container px-6 md:px-12 mx-auto">
        <AnimatedObserver>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Nos Créations</h2>
        </AnimatedObserver>
        <AnimatedObserver className="reveal-delay-1">
          <p className="text-center text-himalaya-gold-light mb-16 max-w-2xl mx-auto">
            Chaque lampe est unique, taillée à la main dans un bloc de sel cristallin 
            extrait des mines ancestrales de l'Himalaya.
          </p>
        </AnimatedObserver>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {products.map((product, index) => (
            <AnimatedObserver 
              key={product.id} 
              className={`reveal-delay-${index + 1}`}
            >
              <div className={cn(
                "group relative bg-gradient-to-b from-himalaya-black to-[#191919]",
                "border border-himalaya-gold/20 rounded-sm overflow-hidden",
                "transition-all duration-500 hover:border-himalaya-gold/60",
                "glow-on-hover"
              )}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-himalaya-black/90 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-cinzel mb-2">{product.name}</h3>
                  <p className="text-himalaya-gold-light text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-cinzel">{product.price}</span>
                    <button className={cn(
                      "px-4 py-2 bg-transparent border border-himalaya-gold text-himalaya-gold",
                      "transition-colors duration-300 hover:bg-himalaya-gold/10 font-cinzel text-sm"
                    )}>
                      Découvrir
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedObserver>
          ))}
        </div>
        
        <AnimatedObserver className="mt-16 text-center">
          <a 
            href="#contact" 
            className={cn(
              "inline-block px-8 py-4 bg-gold-gradient bg-size-200 bg-pos-0",
              "text-himalaya-black font-cinzel font-medium",
              "transition-all duration-500 hover:bg-pos-100 hover:shadow-[0_5px_20px_rgba(212,175,55,0.4)]"
            )}
          >
            Voir toute la collection
          </a>
        </AnimatedObserver>
      </div>
    </section>
  );
}
