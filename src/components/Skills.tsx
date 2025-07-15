import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Container, 
  Terminal, 
  GitBranch, 
  Server, 
  Monitor,
  Settings,
  Database
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: ["AWS", "EC2", "S3", "Lambda", "CloudFormation", "IAM"],
      color: "bg-blue-500"
    },
    {
      icon: Container,
      title: "Containerization",
      skills: ["Docker", "Kubernetes", "Docker Compose", "Container Registry"],
      color: "bg-cyan-500"
    },
    {
      icon: GitBranch,
      title: "CI/CD",
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Pipeline Automation"],
      color: "bg-green-500"
    },
    {
      icon: Terminal,
      title: "Operating Systems",
      skills: ["Linux", "Ubuntu", "CentOS", "Shell Scripting", "Bash"],
      color: "bg-gray-700"
    },
    {
      icon: Settings,
      title: "Infrastructure as Code",
      skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi"],
      color: "bg-purple-500"
    },
    {
      icon: Monitor,
      title: "Monitoring & Logging",
      skills: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch"],
      color: "bg-orange-500"
    },
    {
      icon: Server,
      title: "Version Control",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket"],
      color: "bg-red-500"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-dark mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for modern DevOps and cloud engineering
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-primary to-tech-secondary mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover border-0 bg-gradient-to-br from-white to-gray-50 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`${category.color} p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-tech-dark ml-3">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="tech-badge text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-tech-primary to-tech-secondary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg opacity-90">
              Staying current with the latest DevOps trends, tools, and best practices. 
              Currently exploring advanced Kubernetes patterns and cloud-native architectures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;