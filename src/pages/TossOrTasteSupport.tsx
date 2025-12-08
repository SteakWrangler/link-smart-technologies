import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TossOrTasteSupport = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              TossOrTaste Support
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Need help with TossOrTaste? We're here to assist you.
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Have questions about TossOrTaste? Experiencing issues? Need help getting started? 
                We're here to help! Send us an email and we'll get back to you as soon as possible.
              </p>
              <div className="bg-secondary/20 p-6 rounded-lg mb-6">
                <p className="text-lg font-medium mb-2">Contact us at:</p>
                <a 
                  href="mailto:linksmarttechllc@gmail.com" 
                  className="text-primary text-xl font-semibold hover:text-primary/80 transition-colors"
                >
                  linksmarttechllc@gmail.com
                </a>
              </div>
              <Button 
                onClick={() => window.open('mailto:linksmarttechllc@gmail.com', '_blank')}
                className="bg-primary hover:bg-primary/90"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Button>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <h3 className="text-2xl font-bold mb-6 text-center">Common Questions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">How do I use TossOrTaste?</h4>
                <p className="text-muted-foreground">
                  Simply open the app and start swiping! Swipe right on foods you like and left on foods you don't. 
                  The app will help you discover new foods based on your preferences.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Is my data safe?</h4>
                <p className="text-muted-foreground">
                  Yes! We take your privacy seriously. Check out our{" "}
                  <Link to="/tossortaste-privacy-policy" className="text-primary hover:text-primary/80 transition-colors">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link to="/tossortaste-terms-of-service" className="text-primary hover:text-primary/80 transition-colors">
                    Terms of Service
                  </Link>{" "}
                  for more information.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">I found a bug or issue</h4>
                <p className="text-muted-foreground">
                  Please email us with details about the issue you're experiencing, including your device type 
                  and what you were doing when the issue occurred.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TossOrTasteSupport;