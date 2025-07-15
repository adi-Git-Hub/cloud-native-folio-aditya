import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-tech-light to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-dark mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-primary to-tech-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm an aspiring DevOps Engineer with a passion for automation, infrastructure scaling, 
                and cloud-native development. Currently pursuing my B.Tech in Artificial Intelligence 
                while gaining hands-on experience with cutting-edge DevOps technologies.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                My journey in technology is driven by curiosity and a desire to build efficient, 
                scalable systems. I thrive in collaborative environments and enjoy the challenge 
                of solving complex infrastructure problems. When I'm not automating deployments 
                or optimizing CI/CD pipelines, you'll find me exploring new cloud technologies 
                or contributing to open-source projects.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm particularly interested in public speaking and sharing knowledge with the 
                tech community. I believe in the power of teamwork and continuous learning 
                to drive innovation in the DevOps space.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="card-hover border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-tech-accent p-3 rounded-xl">
                    <GraduationCap className="h-6 w-6 text-tech-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-tech-dark mb-2">Education</h3>
                    <p className="text-tech-primary font-medium">B.Tech in Artificial Intelligence</p>
                    <p className="text-gray-600">G.H. Raisoni College of Engineering and Management</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      2022 – 2026
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-tech-accent p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-tech-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-tech-dark mb-2">Current Role</h3>
                    <p className="text-tech-primary font-medium">DevOps Intern</p>
                    <p className="text-gray-600">Hisan Labs Pvt. Ltd.</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      Dec 2024 – Sept 2025
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-gradient-to-r from-tech-primary to-tech-secondary p-6 rounded-2xl text-white">
              <h3 className="text-xl font-semibold mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-sm">
                <li>• Full-time DevOps Intern with hands-on experience</li>
                <li>• Passionate about automation and cloud technologies</li>
                <li>• Active in public speaking and team collaboration</li>
                <li>• Focused on continuous learning and innovation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;