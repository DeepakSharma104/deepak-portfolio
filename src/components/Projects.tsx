import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Scientific Calculator",
    description: "A scientific calculator built with modern web technologies, featuring a clean interface and comprehensive mathematical functions.",
    image: "certificates/Screenshot 2024-11-22 182325.png",
    link: "https://deepaksharma104.github.io/scientific-calculator/",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Online Jewellery Shop",
    description: "A full-stack e-commerce platform for jewelry, featuring user authentication, product catalog, and secure checkout.",
   video: "Screen Recording 2025-01-08 222039.mp4",
    link: "https://deepaura.infinityfreeapp.com",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
  },
  {
    title: "DeepTech Institution",
    description: "An educational platform providing online courses and resources for students, with user management and content delivery system.",
    video: "Screen Recording 2025-01-08 222039.mp4",
    link: "https://deeptech12.infinityfreeapp.com",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-primary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                  <a
                    href="https://github.com/deepaksharma104"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
