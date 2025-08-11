import { Card } from "@/components/ui/card";

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
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8">Our Services</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div className="text-left">
                    <h4 className="font-semibold">Custom Web Application Development</h4>
                    <p className="text-muted-foreground text-sm">Tailored web applications built from the ground up to meet your specific needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div className="text-left">
                    <h4 className="font-semibold">React & TypeScript Development</h4>
                    <p className="text-muted-foreground text-sm">Modern, scalable applications using the latest React ecosystem and TypeScript.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div className="text-left">
                    <h4 className="font-semibold">Progressive Web App Development</h4>
                    <p className="text-muted-foreground text-sm">Fast, reliable web apps that work offline and provide native app experiences.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div className="text-left">
                    <h4 className="font-semibold">Database Design & Integration</h4>
                    <p className="text-muted-foreground text-sm">Efficient data management solutions with modern database technologies.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div className="text-left">
                    <h4 className="font-semibold">Full-Stack Application Solutions</h4>
                    <p className="text-muted-foreground text-sm">Complete end-to-end development from frontend interfaces to backend services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div className="text-left">
                    <h4 className="font-semibold">API Development & Integration</h4>
                    <p className="text-muted-foreground text-sm">RESTful APIs and third-party service integrations for seamless connectivity.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div className="text-left">
                    <h4 className="font-semibold">UI/UX Design & Implementation</h4>
                    <p className="text-muted-foreground text-sm">Beautiful, intuitive user interfaces designed for optimal user experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div className="text-left">
                    <h4 className="font-semibold">Performance Optimization</h4>
                    <p className="text-muted-foreground text-sm">Speed and efficiency improvements for existing applications.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg font-medium mb-2">Email us at</p>
              <p className="text-muted-foreground text-lg">linksmarttechlc@gmail.com</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;