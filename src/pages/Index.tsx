import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Certificates } from "@/components/Certificates";
import { useRef } from "react";

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-accent/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8 py-4">
            <li>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection(aboutRef)}
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection(educationRef)}
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                Education
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection(projectsRef)}
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection(skillsRef)}
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection(certificatesRef)}
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                Certificates
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection(contactRef)}
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="pt-16">
        <Hero />
        
        <div ref={aboutRef} className="scroll-mt-20">
          <section className="py-20 bg-primary/10">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8">About Me</h2>
              <p className="text-lg text-foreground/80">
                I'm Deepak Sharma, a Computer Science student passionate about creating innovative solutions through technology. 
                In my free time, I enjoy calisthenics exercises and running, which help me stay strong mentally and physically. 
                Feel free to reach out if you want to collaborate or just say hi!
              </p>
            </div>
          </section>
        </div>

        <div ref={educationRef} className="scroll-mt-20">
          <Education />
        </div>

        <div ref={projectsRef} className="scroll-mt-20">
          <Projects />
        </div>

        <div ref={skillsRef} className="scroll-mt-20">
          <Skills />
        </div>

        <div ref={certificatesRef} className="scroll-mt-20">
          <Certificates />
        </div>

        <div ref={contactRef} className="scroll-mt-20">
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default Index;