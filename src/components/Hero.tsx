import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, User } from 'lucide-react';

export const Hero = () => {  
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Welcome', 'To My Portfolio', 'This is Deepak Sharma'],
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
    <section className="min-h-screen flex items-start pt-24 justify-center bg-gradient-to-b from-[#F1F0FB] via-[#E5DEFF] to-[#D6BCFA]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div 
            className="mb-12"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
              <img src="/assets/profile.jpg" alt="me" className="w-48 h-48 rounded-full object-cover relative z-10" />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#6E59A5] to-[#9b87f5]">
            <span ref={el}></span>
          </h1>
          <p className="text-xl md:text-2xl text-[#1A1F2C]/80 max-w-2xl mx-auto px-4 mb-16 leading-relaxed">
            A passionate Computer Science student and calisthenics enthusiast
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <motion.button
              whileHover={{ y: -5 }}
              className="text-center group"
              onClick={() => scrollToSection('about')}
            >
              <div className="bg-white/80 p-6 rounded-2xl mb-3 group-hover:bg-primary/10 transition-colors shadow-lg backdrop-blur-sm">
                <User className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm font-medium text-[#1A1F2C]">About Me</span>
            </motion.button>
            <motion.button
              whileHover={{ y: -5 }}
              className="text-center group"
              onClick={() => scrollToSection('education')}
            >
              <div className="bg-white/80 p-6 rounded-2xl mb-3 group-hover:bg-primary/10 transition-colors shadow-lg backdrop-blur-sm">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm font-medium text-[#1A1F2C]">Education</span>
            </motion.button>
            <motion.button
              whileHover={{ y: -5 }}
              className="text-center group"
              onClick={() => scrollToSection('projects')}
            >
              <div className="bg-white/80 p-6 rounded-2xl mb-3 group-hover:bg-primary/10 transition-colors shadow-lg backdrop-blur-sm">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm font-medium text-[#1A1F2C]">Projects</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};