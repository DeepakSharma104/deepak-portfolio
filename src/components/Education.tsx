import { motion } from "framer-motion";

export const Education = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border"
          >
            <h3 className="text-xl font-semibold text-accent mb-2">Current Education</h3>
            <p className="text-foreground/80">
              Pursuing a degree in Computer Science at GC University Hyderabad. My education has provided me with a strong foundation in Python and web development skills.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border"
          >
            <h3 className="text-xl font-semibold text-accent mb-2">College</h3>
            <p className="text-foreground/80">
              Completed my engineering degree at Government Degree College Tandojam in 2022.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-background/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border"
          >
            <h3 className="text-xl font-semibold text-accent mb-2">School</h3>
            <p className="text-foreground/80">
              Completed my schooling at AL Fareed Public High School Tandojam in 2019.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};