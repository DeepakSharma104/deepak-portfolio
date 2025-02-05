import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, Download } from 'lucide-react';
import { Button } from './ui/button';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-accent rounded-full group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Email</span>
                <span className="text-muted-foreground">deepaksharma@email.com</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-accent rounded-full group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Phone</span>
                <span className="text-muted-foreground">+92 343 2527807</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-accent rounded-full group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Location</span>
                <span className="text-muted-foreground">Hyderabad, Pakistan</span>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <a href="/DEEPAK SHARMA.pdf" download>
                <Button className="gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-6">Connect with me</h3>
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ y: -5 }}
                href="https://www.facebook.com/profile.php?id=61557710879300"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="https://www.instagram.com/blac.kbodyradiation/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="https://www.linkedin.com/in/deepak-sharma-615212287/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="https://www.youtube.com/@DeepTech-r8w"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};