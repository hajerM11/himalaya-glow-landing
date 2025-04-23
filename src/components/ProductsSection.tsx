import AnimatedObserver from "./AnimatedObserver";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "Lámpara Himalaya Clásica",
    price: "79,90 €",
    originalPrice: "99,90 €",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Nuestro modelo emblemático, tallado a mano en sal rosa del Himalaya.",
    rating: 5,
    discount: 20
  },
  {
    id: 2,
    name: "Lámpara Delicada",
    price: "59,90 €",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Formato compacto ideal para espacios pequeños, con un resplandor suave y relajante.",
    rating: 4
  },
  {
    id: 3,
    name: "Lámpara Majestosa",
    price: "129,90 €",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Imposante y raffinada, esta lámpara crea una atmósfera incomparable en tu interior.",
    rating: 5
  },
  {
    id: 4,
    name: "Lámpara Zen",
    price: "89,90 €",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Forma pura para una atmósfera meditativa y relajante.",
    rating: 4
  }
];

const specialOffers = [
  {
    title: "¡Oferta de lanzamiento!",
    description: "20% de descuento en tu primera compra",
    code: "BIENVENIDO20",
    expiry: "Limitado"
  },
  {
    title: "Pack Bienestar",
    description: "Llévate 2 lámparas y ahorra un 25%",
    code: "PACK2X1",
    expiry: "Tiempo limitado"
  }
];

export default function ProductsSection() {
  return (
    <section id="productos" className="py-24 bg-himalaya-black relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-himalaya-black/0 to-himalaya-black/100"></div>
      
      <div className="container px-6 md:px-12 mx-auto">
        <AnimatedObserver>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Nuestras Creaciones
          </h2>
        </AnimatedObserver>
        
        <AnimatedObserver className="reveal-delay-1">
          <p className="text-center text-himalaya-gold-light mb-16 max-w-2xl mx-auto">
            Cada lámpara es única, tallada a mano en un bloque de sal cristalina 
            extraída de las ancestrales minas del Himalaya.
          </p>
        </AnimatedObserver>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {specialOffers.map((offer, index) => (
            <AnimatedObserver 
              key={index}
              className={`reveal-delay-${index + 1}`}
            >
              <div className={cn(
                "border border-himalaya-gold/30 p-8",
                "bg-gradient-to-r from-[#111] to-[#191919]",
                "hover:border-himalaya-gold/60 transition-all duration-300"
              )}>
                <h3 className="text-2xl font-cinzel mb-4">{offer.title}</h3>
                <p className="text-himalaya-gold-light mb-4">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-himalaya-gold-light">Código: </span>
                    <span className="font-mono text-himalaya-gold">{offer.code}</span>
                  </div>
                  <span className="text-sm text-himalaya-gold-light">{offer.expiry}</span>
                </div>
              </div>
            </AnimatedObserver>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {products.map((product, index) => (
            <AnimatedObserver 
              key={product.id}
              className={`reveal-delay-${index + 1}`}
            >
              <ProductCard {...product} />
            </AnimatedObserver>
          ))}
        </div>
        
        <AnimatedObserver className="mt-16 text-center">
          <Button 
            className={cn(
              "px-8 py-4 bg-gold-gradient bg-size-200 bg-pos-0",
              "text-himalaya-black font-cinzel font-medium",
              "transition-all duration-500 hover:bg-pos-100",
              "hover:shadow-[0_5px_20px_rgba(212,175,55,0.4)]"
            )}
          >
            Ver toda la colección
          </Button>
        </AnimatedObserver>
      </div>
    </section>
  );
}
