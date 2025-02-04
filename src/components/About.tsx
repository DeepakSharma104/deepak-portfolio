import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#D6BCFA] to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#6E59A5] to-[#9b87f5]">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary/10"
          >
            <p className="text-lg text-[#1A1F2C]/80 leading-relaxed">
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