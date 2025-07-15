import { Github, Mail, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-dark text-white">
      <div className="container-custom px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Aditya Pande</h3>
            <p className="text-gray-300 leading-relaxed">
              Aspiring DevOps Engineer passionate about automation, cloud technologies, 
              and building scalable infrastructure solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-tech-accent transition-colors duration-300">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-tech-accent transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-tech-accent transition-colors duration-300">
                  Experience
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-tech-accent transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-tech-accent transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:aditya.r.pande@outlook.com" 
                className="flex items-center text-gray-300 hover:text-tech-accent transition-colors duration-300"
              >
                <Mail className="h-4 w-4 mr-2" />
                aditya.r.pande@outlook.com
              </a>
              
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://github.com/adi-Git-Hub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-tech-primary transition-colors duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded-lg hover:bg-tech-primary transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Aditya Pande. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;