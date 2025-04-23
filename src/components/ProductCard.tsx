
import { Button } from "./ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  image: string;
  rating: number;
  discount?: number;
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  description,
  image,
  rating,
  discount
}: ProductCardProps) {
  return (
    <div className={cn(
      "group relative bg-gradient-to-b from-himalaya-black to-[#191919]",
      "border border-himalaya-gold/20 rounded-sm overflow-hidden",
      "transition-all duration-500 hover:border-himalaya-gold/60",
      "hover:shadow-[0_0_15px_5px_rgba(212,175,55,0.2)]"
    )}>
      {discount && (
        <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-sm z-10">
          -{discount}%
        </div>
      )}
      
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-himalaya-black/90 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={cn(
                "fill-current",
                i < rating ? "text-yellow-500" : "text-gray-500"
              )}
            />
          ))}
        </div>
        
        <h3 className="text-xl font-cinzel mb-2">{name}</h3>
        <p className="text-himalaya-gold-light text-sm mb-4">{description}</p>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xl font-cinzel">{price}</span>
            {originalPrice && (
              <span className="ml-2 text-sm line-through text-himalaya-gold-light">
                {originalPrice}
              </span>
            )}
          </div>
          <Button 
            className="bg-himalaya-gold hover:bg-himalaya-gold/90 text-black"
            size="sm"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Añadir
          </Button>
        </div>
      </div>
    </div>
  );
}
