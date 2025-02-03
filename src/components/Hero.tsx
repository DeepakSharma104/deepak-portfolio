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

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary via-primary to-background">
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
  src="src/me.jpg" // Replace "your-image.jpg" with your actual image filename
  alt="Aman sharma"
  className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto shadow-xl object-cover border-4 border-accent"
/
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            <span ref={el}></span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 mb-8">
            A passionate Computer Science student and calisthenics enthusiast
          </p>
          <div className="flex justify-center gap-8 mt-8">
            <motion.div whileHover={{ y: -5 }} className="text-center">
              <div className="bg-primary p-4 rounded-full mb-2">
                <User className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm">About Me</span>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="text-center">
              <div className="bg-primary p-4 rounded-full mb-2">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm">Education</span>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="text-center">
              <div className="bg-primary p-4 rounded-full mb-2">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm">Projects</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
