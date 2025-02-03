import { motion } from "framer-motion";

export const Certificates = () => {
  const certificates = [
    {
      title: "Web Development Certification",
      issuer: "FreeCodeCamp",
      date: "2023",
      image: "certificates/web-dev-cert.jpg"
    },
    {
      title: "Python Programming",
      issuer: "Google developer student clubes",
      date: "2023",
      image: "src/1705756696599.jpeg"
    },
    {
      title: "JavaScript Algorithms",
      issuer: "HackerRank",
      date: "2023",
      image: "certificates/js-cert.jpg"
    }
  ];

  return (
    <section className="py-20 bg-primary/10">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-foreground"
        >
          Certificates & Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/20"
            >
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{cert.title}</h3>
              <p className="text-foreground/80">{cert.issuer}</p>
              <p className="text-sm text-foreground/60">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
