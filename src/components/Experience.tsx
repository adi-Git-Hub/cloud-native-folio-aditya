import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "DevOps Intern",
      company: "Hisan Labs Pvt. Ltd.",
      duration: "Dec 2024 – Sept 2025",
      type: "Full-time Internship",
      location: "Remote",
      description: "Gaining hands-on experience in modern DevOps practices, cloud deployment strategies, and automation workflows.",
      responsibilities: [
        "Implementing CI/CD pipelines using Jenkins and GitHub Actions",
        "Managing cloud infrastructure on AWS with focus on scalability",
        "Containerizing applications using Docker and orchestrating with Kubernetes",
        "Automating deployment processes and infrastructure provisioning",
        "Monitoring system performance and implementing logging solutions",
        "Collaborating with development teams to optimize deployment workflows"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Linux", "Git"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-tech-light to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-dark mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building real-world expertise in DevOps and cloud engineering
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-primary to-tech-secondary mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover border-0 bg-white/80 backdrop-blur-sm mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="bg-tech-accent p-2 rounded-lg mr-3">
                        <Briefcase className="h-5 w-5 text-tech-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-tech-dark">{exp.title}</h3>
                    </div>
                    
                    <h4 className="text-xl text-tech-primary font-semibold mb-3">{exp.company}</h4>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                      <Badge variant="outline" className="text-tech-primary border-tech-primary">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-tech-dark mb-3">Key Responsibilities:</h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-tech-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-lg font-semibold text-tech-dark mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="border-2 border-dashed border-tech-primary/30 bg-tech-accent/20">
            <CardContent className="p-8 text-center">
              <div className="bg-tech-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Briefcase className="h-8 w-8 text-tech-primary" />
              </div>
              <h3 className="text-xl font-semibold text-tech-dark mb-2">Looking for New Opportunities</h3>
              <p className="text-gray-600">
                Open to exciting DevOps and Cloud Engineering roles where I can contribute 
                my skills and continue growing professionally.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;