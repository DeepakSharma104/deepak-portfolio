import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Scientific Calculator",
    description: "A scientific calculator built with HTML, CSS, and JS",
    image: "certificates/Screenshot 2024-11-22 182325.png",
    link: "https://deepaksharma104.github.io/scientific-calculator/"
  },
  {
    title: "Online Jewellery Shop",
    description: "E-commerce platform built with HTML, CSS, JS, PHP, and MySQL",
    image: "placeholder.svg",
    link: "https://deepaura.infinityfreeapp.com"
  },
  {
    title: "DeepTech Institution",
    description: "Educational platform using HTML, CSS, JS, PHP, and SQL",
    image: "placeholder.svg",
    link: "https://deeptech12.infinityfreeapp.com"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary px-4 py-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};