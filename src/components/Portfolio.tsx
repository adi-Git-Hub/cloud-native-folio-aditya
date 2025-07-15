import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Rocket, Wrench } from "lucide-react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-gradient-to-br from-tech-light to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-dark mb-6">
            Latest <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world DevOps implementations and infrastructure solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-primary to-tech-secondary mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Placeholder Project Cards */}
          {[1, 2, 3].map((index) => (
            <Card key={index} className="card-hover border-0 bg-white/80 backdrop-blur-sm group">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-tech-accent to-tech-light h-48 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <Wrench className="h-12 w-12 text-tech-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-tech-primary font-medium">Project {index}</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-tech-dark mb-3">
                  DevOps Pipeline Project
                </h3>
                
                <p className="text-gray-600 mb-4">
                  Complete CI/CD implementation with automated testing, deployment, and monitoring.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="tech-badge text-xs">AWS</Badge>
                  <Badge className="tech-badge text-xs">Docker</Badge>
                  <Badge className="tech-badge text-xs">Jenkins</Badge>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Coming Soon Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-tech-primary to-tech-secondary text-white border-0">
            <CardContent className="p-12 text-center">
              <div className="animate-float">
                <Rocket className="h-16 w-16 mx-auto mb-6" />
              </div>
              
              <h3 className="text-3xl font-bold mb-4">
                Exciting Projects Coming Soon!
              </h3>
              
              <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                I'm currently working on real-world DevOps pipelines, cloud infrastructure 
                automation, and container orchestration projects that will be showcased here.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">Multi-Cloud Infrastructure</h4>
                  <p className="text-sm opacity-80">
                    Terraform-based infrastructure provisioning across AWS, with automated scaling and monitoring.
                  </p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">Kubernetes Migration</h4>
                  <p className="text-sm opacity-80">
                    Complete application containerization and migration to Kubernetes with service mesh.
                  </p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">CI/CD Automation</h4>
                  <p className="text-sm opacity-80">
                    Enterprise-grade Jenkins pipelines with automated testing and deployment strategies.
                  </p>
                </div>
              </div>
              
              <Button 
                size="lg" 
                variant="secondary"
                className="mt-8 bg-white text-tech-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl"
              >
                Follow My Journey
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;