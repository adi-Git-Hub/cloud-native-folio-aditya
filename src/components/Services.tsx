import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  GitBranch, 
  Container, 
  Server, 
  Settings,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "DevOps Consulting",
      description: "Strategic guidance on DevOps implementation, best practices, and organizational transformation.",
      features: [
        "DevOps strategy development",
        "Process optimization",
        "Tool selection and integration",
        "Team training and mentoring"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure Setup",
      description: "Design and implement scalable, secure cloud infrastructure on AWS with best practices.",
      features: [
        "AWS architecture design",
        "Auto-scaling configuration",
        "Security and compliance setup",
        "Cost optimization strategies"
      ]
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipeline Setup",
      description: "Build robust continuous integration and deployment pipelines for faster, reliable releases.",
      features: [
        "Jenkins pipeline configuration",
        "GitHub Actions workflows",
        "Automated testing integration",
        "Deployment automation"
      ]
    },
    {
      icon: Container,
      title: "Kubernetes & Docker Deployment",
      description: "Containerize applications and orchestrate them with Kubernetes for maximum scalability.",
      features: [
        "Application containerization",
        "Kubernetes cluster setup",
        "Service mesh implementation",
        "Container monitoring"
      ]
    },
    {
      icon: Server,
      title: "Linux Server Management",
      description: "Professional Linux server administration, optimization, and maintenance services.",
      features: [
        "Server configuration and hardening",
        "Performance monitoring",
        "Security audits",
        "Backup and disaster recovery"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-dark mb-6">
            Services <span className="gradient-text">Offered</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive DevOps and cloud engineering solutions to accelerate your digital transformation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-primary to-tech-secondary mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-0 bg-gradient-to-br from-white to-gray-50 h-full group">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="bg-tech-accent p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-tech-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-tech-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex-1">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-tech-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-white group mt-auto"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-tech-primary to-tech-secondary text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Infrastructure?</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Let's discuss how modern DevOps practices and cloud technologies can accelerate 
                your development process and improve your system reliability.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-tech-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl"
              >
                Get Started Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;