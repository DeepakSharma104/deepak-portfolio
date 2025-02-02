import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Welcome', 'To My Portfolio', 'I am Deepak Sharma'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-background">
      <div className="text-center animate-fade-up">
        <div className="mb-8">
          <img
            src="deepak1.jpg"
            alt="Deepak Sharma"
            className="w-32 h-32 rounded-full mx-auto shadow-lg object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
          <span ref={el}></span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
          A passionate Computer Science student and calisthenics enthusiast
        </p>
      </div>
    </section>
  );
};