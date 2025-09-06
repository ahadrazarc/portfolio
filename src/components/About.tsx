import { MapPin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            {/* Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Abdul Ahad Raza</h3>
              <p className="text-lg text-primary font-medium">Computer Vision Engineer</p>

              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Rawalpindi, Pakistan</span>
              </div>

              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>ahadrazarc@gmail.com</span>
              </div>
            </div>

            {/* Bio */}
            <div className="prose prose-lg text-muted-foreground">
              <p style={{ textAlign: "justify" }}>
                I'm Abdul Ahad Raza, a Computer Vision Engineer with a Bachelor's degree in Computer Science from the
                National University of Modern Languages (NUML). I specialize in building intelligent systems that help computers understand the visual world.
                My expertise lies in real-time image processing, object detection, and deploying scalable ML pipelines.
                I’m driven by a deep interest in AI, and I continuously explore emerging technologies to design impactful solutions that make a difference.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/ahadrazarc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View LinkedIn
                </Button>
              </a>

              {/* CV Download Button */}
              <a href="/AbdulAhadRazaCV.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Download CV
                </Button>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <Card className="bg-secondary/20 border border-border">
                <CardContent className="p-6 text-center">
                  <h4 className="text-2xl font-bold text-primary">2+</h4>
                  <p className="text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="bg-secondary/20 border border-border">
                <CardContent className="p-6 text-center">
                  <h4 className="text-2xl font-bold text-primary">10+</h4>
                  <p className="text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
