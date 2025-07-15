import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Send,
  MapPin
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a backend service
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aditya.r.pande@outlook.com",
      href: "mailto:aditya.r.pande@outlook.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7498463025",
      href: "tel:+917498463025"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "adi-Git-Hub",
      href: "https://github.com/adi-Git-Hub"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-dark mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your next DevOps project? Let's connect and explore how we can work together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-primary to-tech-secondary mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-hover border-0 bg-gradient-to-br from-white to-gray-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-tech-dark mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="border-gray-200 focus:border-tech-primary focus:ring-tech-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="border-gray-200 focus:border-tech-primary focus:ring-tech-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how I can help..."
                    rows={6}
                    required
                    className="border-gray-200 focus:border-tech-primary focus:ring-tech-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-tech-primary hover:bg-tech-secondary text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="card-hover border-0 bg-gradient-to-br from-tech-primary to-tech-secondary text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-lg opacity-90 mb-8">
                  I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                  or share knowledge about DevOps and cloud technologies.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 group"
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm opacity-80">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8 text-center">
                <div className="bg-tech-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Linkedin className="h-8 w-8 text-tech-primary" />
                </div>
                <h3 className="text-xl font-semibold text-tech-dark mb-2">Professional Network</h3>
                <p className="text-gray-600 mb-4">
                  Connect with me on LinkedIn for professional updates and industry insights.
                </p>
                <Button 
                  variant="outline" 
                  className="border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-white"
                >
                  Connect on LinkedIn
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;