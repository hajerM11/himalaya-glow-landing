
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this to your backend
    console.log(formData);
    
    // Show success message
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Contáctanos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="mx-auto mb-4 text-himalaya-gold" />
              <p className="text-himalaya-gold-light">+34 900 123 456</p>
            </div>
            <div className="text-center">
              <Mail className="mx-auto mb-4 text-himalaya-gold" />
              <p className="text-himalaya-gold-light">info@luzhimalaya.com</p>
            </div>
            <div className="text-center">
              <MessageSquare className="mx-auto mb-4 text-himalaya-gold" />
              <p className="text-himalaya-gold-light">@luzhimalaya</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-himalaya-black/50 border-himalaya-gold/30 text-himalaya-gold"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-himalaya-black/50 border-himalaya-gold/30 text-himalaya-gold"
              />
            </div>
            
            <Input
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
              className="bg-himalaya-black/50 border-himalaya-gold/30 text-himalaya-gold"
            />
            
            <Textarea
              name="message"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-himalaya-black/50 border-himalaya-gold/30 text-himalaya-gold min-h-[150px]"
            />
            
            <Button 
              type="submit"
              className="w-full bg-himalaya-gold hover:bg-himalaya-gold/90 text-black"
            >
              Enviar mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
