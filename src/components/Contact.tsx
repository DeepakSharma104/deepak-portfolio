import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-accent" />
              <span>deepaksharma@email.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-accent" />
              <span>+92 343 2527807</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-accent" />
              <span>Hyderabad, Pakistan</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61557710879300"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary hover:bg-accent transition-colors duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/blac.kbodyradiation/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary hover:bg-accent transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/deepak-sharma-615212287/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary hover:bg-accent transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@DeepTech-r8w"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary hover:bg-accent transition-colors duration-300"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};