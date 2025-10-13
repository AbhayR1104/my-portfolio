import { Mail, Github, Linkedin, Download, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm currently seeking full-time opportunities in Software Development and Data Science. 
          Let's discuss how I can contribute to your team!
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a 
            href="tel:+16319869023"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card hover:bg-card/80 transition-colors"
          >
            <Phone className="h-5 w-5 text-primary" />
            <span className="font-mono">+1 (631) 986-9023</span>
          </a>
          <a 
            href="mailto:abhayrusa@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card hover:bg-card/80 transition-colors"
          >
            <Mail className="h-5 w-5 text-accent" />
            <span>abhayrusa@gmail.com</span>
          </a>
        </div>
        
        <div className="bg-card rounded-2xl p-8 md:p-12 card-glow mb-8">
          <div className="flex justify-center mb-8">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="/AbhayRaviKumar.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center pt-6 border-t border-border">
            <a 
              href="https://github.com/AbhayR1104" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/abhay-ravi-kumar-0b6447191/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
        
        <footer className="text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Abhay Ravi Kumar. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
