import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Certificates } from "@/components/Certificates";
import { About } from "@/components/About";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <main className="bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/10 shadow-sm">
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
              <NavItem onClick={() => scrollToSection('skills')}>Skills</NavItem>
              <NavItem onClick={() => scrollToSection('certificates')}>Certificates</NavItem>
              <NavItem onClick={() => scrollToSection('contact')}>Contact</NavItem>
            </ul>

            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm md:hidden border-t border-primary/10">
                <ul className="flex flex-col py-4">
                  <MobileNavItem onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</MobileNavItem>
                  <MobileNavItem onClick={() => scrollToSection('skills')}>Skills</MobileNavItem>
                  <MobileNavItem onClick={() => scrollToSection('certificates')}>Certificates</MobileNavItem>
                  <MobileNavItem onClick={() => scrollToSection('contact')}>Contact</MobileNavItem>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <Hero />
        <div id="about" className="scroll-mt-20">
          <About />
        </div>
        <div id="education" className="scroll-mt-20">
          <Education />
        </div>
        <div id="projects" className="scroll-mt-20">
          <Projects />
        </div>
        <div id="skills" className="scroll-mt-20">
          <Skills />
        </div>
        <div id="certificates" className="scroll-mt-20">
          <Certificates />
        </div>
        <div id="contact" className="scroll-mt-20">
          <Contact />
        </div>
      </div>
    </main>
  );
};

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
