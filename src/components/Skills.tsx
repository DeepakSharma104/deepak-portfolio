import { motion } from 'framer-motion';

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "SQL",
  "Git",
  "Photo and Video Editing",
  "MS Office"
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="font-medium text-accent-foreground">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};