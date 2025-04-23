
import { useEffect, useRef, ReactNode } from "react";

interface AnimatedObserverProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}

export default function AnimatedObserver({ 
  children, 
  className = "",
  threshold = 0.1,
  delay = 0
}: AnimatedObserverProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (ref.current) {
              ref.current.classList.add("reveal-visible");
            }
          }, delay);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: threshold,
      }
    );
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);
  
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
