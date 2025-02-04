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
            className="mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="me.jpg"
              alt="deepak sharma"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto shadow-xl object-cover border-4 border-accent"
            />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            <span ref={el}></span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto px-4 mb-12">
            A passionate Computer Science student and calisthenics enthusiast
          </p>
          <div className="flex justify-center gap-8 mt-8">
            <motion.button
              whileHover={{ y: -5 }}
              className="text-center"
              onClick={() => scrollToSection('about')}
            >
              <div className="bg-primary/10 p-4 rounded-full mb-2 hover:bg-primary/20 transition-colors">
                <User className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-foreground">About Me</span>
            </motion.button>
            <motion.button
              whileHover={{ y: -5 }}
              className="text-center"
              onClick={() => scrollToSection('education')}
            >
              <div className="bg-primary/10 p-4 rounded-full mb-2 hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-foreground">Education</span>
            </motion.button>
            <motion.button
              whileHover={{ y: -5 }}
              className="text-center"
              onClick={() => scrollToSection('projects')}
            >
              <div className="bg-primary/10 p-4 rounded-full mb-2 hover:bg-primary/20 transition-colors">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-foreground">Projects</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};