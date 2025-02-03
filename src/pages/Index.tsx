import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Certificates } from "@/components/Certificates";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <main className="bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center justify-between py-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-primary hover:text-secondary transition-colors font-bold text-xl"
            >
              Deepak
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-primary hover:text-secondary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <ul className="hidden md:flex space-x-8">
              <NavItem onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</NavItem>
              <NavItem onClick={() => scrollToSection(aboutRef)}>About</NavItem>
              <NavItem onClick={() => scrollToSection(educationRef)}>Education</NavItem>
              <NavItem onClick={() => scrollToSection(projectsRef)}>Projects</NavItem>
              <NavItem onClick={() => scrollToSection(skillsRef)}>Skills</NavItem>
              <NavItem onClick={() => scrollToSection(certificatesRef)}>Certificates</NavItem>
              <NavItem onClick={() => scrollToSection(contactRef)}>Contact</NavItem>
            </ul>

            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm md:hidden border-t border-white/20">
                <ul className="flex flex-col py-4">
                  <MobileNavItem onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</MobileNavItem>
                  <MobileNavItem onClick={() => scrollToSection(aboutRef)}>About</MobileNavItem>
                  <MobileNavItem onClick={() => scrollToSection(educationRef)}>Education</MobileNavItem>
                  <MobileNavItem onClick={() => scrollToSection(projectsRef)}>Projects</MobileNavItem>
                  <MobileNavItem onClick={() => scrollToSection(skillsRef)}>Skills</MobileNavItem>
                  <MobileNavItem onClick={() => scrollToSection(certificatesRef)}>Certificates</MobileNavItem>
                  <MobileNavItem onClick={() => scrollToSection(contactRef)}>Contact</MobileNavItem>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <Hero />
        
        <div ref={aboutRef} className="scroll-mt-20">
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-foreground">About Me</h2>
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

// Helper components for navigation items
const NavItem = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <li>
    <button 
      onClick={onClick}
      className="text-primary hover:text-secondary transition-colors"
    >
      {children}
    </button>
  </li>
);

const MobileNavItem = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <li>
    <button 
      onClick={onClick}
      className="w-full text-left px-4 py-2 text-primary hover:bg-primary/5 transition-colors"
    >
      {children}
    </button>
  </li>
);

export default Index;
