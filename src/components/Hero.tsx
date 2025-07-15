import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Content */}
      <div className="relative z-20 container-custom text-center px-4">
        <div className="animate-fade-up">
          {/* Profile Picture */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/d61e2c70-381a-4e73-9424-34acdeb268e2.png" 
              alt="Aditya Pande"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-lg border-4 border-primary/20"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Hi, I'm <span className="gradient-text">Aditya Pande</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-tech-dark mb-4 font-medium">
            Aspiring DevOps & Cloud Engineer
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Automating infrastructure, one container at a time. Passionate about CI/CD, 
            cloud architecture, and building scalable solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-tech-primary hover:bg-tech-secondary text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              View Resume
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="animate-bounce mt-16">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-tech-primary hover:text-tech-secondary transition-colors duration-300"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;