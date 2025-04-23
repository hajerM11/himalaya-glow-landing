
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function CommentForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this to your backend
    console.log({ name, comment, rating });
    
    // Show success message
    toast({
      title: "¡Gracias por tu comentario!",
      description: "Tu opinión es muy importante para nosotros.",
    });
    
    // Reset form
    setName("");
    setComment("");
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-himalaya-black/50 border-himalaya-gold/30 text-himalaya-gold"
        />
      </div>
      
      <div>
        <Textarea
          placeholder="Comparte tu experiencia..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="bg-himalaya-black/50 border-himalaya-gold/30 text-himalaya-gold min-h-[120px]"
        />
      </div>
      
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className="focus:outline-none"
          >
            <svg
              className={`w-6 h-6 ${
                star <= rating ? "text-yellow-500" : "text-gray-400"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        ))}
      </div>
      
      <Button 
        type="submit"
        className="w-full bg-himalaya-gold hover:bg-himalaya-gold/90 text-black"
      >
        Enviar comentario
      </Button>
    </form>
  );
}
