import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ahadrazarc@gmail.com",
      link: "mailto:ahadrazarc@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Rawalpindi, Pakistan",
      link: null
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/ahadrazarc",
      link: "https://www.linkedin.com/in/ahadrazarc"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/ahadrazarc",
      link: "https://github.com/ahadrazarc"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, or just having a conversation about technology.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're looking for a machine learning engineer, have a computer vision project in mind, 
                or just want to network with fellow developers, I'd love to hear from you. Feel free to reach out 
                through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="p-3 bg-gradient-logo rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-5 h-5 text-background" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{info.title}</p>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
