import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, User } from 'lucide-react';

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-start pt-16 justify-center bg-gradient-to-b from-white via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div 
            className="mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="me.jpg"
              alt="deepak sharma"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto shadow-xl object-cover border-4 border-primary/20"
            />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            <span ref={el}></span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto px-4 mb-16 leading-relaxed">
            A passionate Computer Science student and calisthenics enthusiast
          </p>
          <div className="flex justify-center gap-12 mt-8">
            <motion.button
              whileHover={{ y: -5 }}
              className="text-center group"
              onClick={() => scrollToSection('about')}
            >
              <div className="bg-primary/10 p-5 rounded-full mb-3 group-hover:bg-primary/20 transition-colors">
                <User className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">About Me</span>
            </motion.button>
            <motion.button
              whileHover={{ y: -5 }}
              className="text-center group"
              onClick={() => scrollToSection('education')}
            >
              <div className="bg-primary/10 p-5 rounded-full mb-3 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Education</span>
            </motion.button>
            <motion.button
              whileHover={{ y: -5 }}
              className="text-center group"
              onClick={() => scrollToSection('projects')}
            >
              <div className="bg-primary/10 p-5 rounded-full mb-3 group-hover:bg-primary/20 transition-colors">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Projects</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};