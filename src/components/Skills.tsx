import { motion } from 'framer-motion';

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Python", level: 75 },
  { name: "SQL", level: 70 },
  { name: "Git", level: 65 }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <motion.div
                className="h-2 bg-secondary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <motion.div
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};