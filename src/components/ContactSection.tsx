import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Globe, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to bring your web application idea to life? Let's discuss how we can help 
            transform your vision into reality.
          </p>
        </div>
        
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">LinkSmart Technologies LLC</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Website</p>
                    <p className="text-muted-foreground">linksmarttechnologies.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">contact@linksmarttechnologies.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Business Type</p>
                    <p className="text-muted-foreground">Limited Liability Company</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom Web Application Development</li>
                <li>• React & TypeScript Development</li>
                <li>• E-commerce Platform Creation</li>
                <li>• Educational Technology Solutions</li>
                <li>• API Development & Integration</li>
                <li>• UI/UX Design & Implementation</li>
              </ul>
              
              <div className="mt-6">
                <Button 
                  className="w-full shadow-glow-primary hover:shadow-glow-accent transition-all duration-300"
                  onClick={() => window.open('mailto:contact@linksmarttechnologies.com', '_blank')}
                >
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;