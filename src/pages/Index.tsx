import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;