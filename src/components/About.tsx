import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border"
          >
            <p className="text-foreground/80 leading-relaxed">
              I am a passionate Computer Science student with a deep interest in web development
              and software engineering. When I'm not coding, I enjoy practicing calisthenics,
              which helps me maintain a balanced lifestyle and stay focused on my goals.
              I believe in continuous learning and pushing my limits, both in technology and
              physical fitness.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};