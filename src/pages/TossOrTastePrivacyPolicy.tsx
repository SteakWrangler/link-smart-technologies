import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TossOrTastePrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/tossorTaste-support" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Support
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              TossOrTaste Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your privacy is important to us.
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  TossOrTaste is designed with your privacy in mind. We do not collect, store, or share any personal 
                  information about you. The app operates entirely on your device.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Data Storage</h2>
                <p className="text-muted-foreground mb-4">
                  Any preferences or data you generate while using TossOrTaste is stored locally on your device only. 
                  We do not have access to this information, nor do we transmit it to our servers or any third parties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground mb-4">
                  TossOrTaste does not integrate with any third-party analytics, advertising, or data collection services. 
                  Your usage of the app is completely private.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not share, sell, rent, or trade any user data because we simply don't collect any. 
                  Your privacy is fully protected.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Security</h2>
                <p className="text-muted-foreground mb-4">
                  Since all data remains on your device, the security of your information is in your control. 
                  We recommend keeping your device secure with appropriate locks and security measures.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground mb-4">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                  with an updated effective date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <a 
                    href="mailto:linksmarttechllc@gmail.com" 
                    className="text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    linksmarttechllc@gmail.com
                  </a>
                </div>
              </section>

              <div className="border-t border-border pt-6 mt-8">
                <p className="text-sm text-muted-foreground text-center">
                  This privacy policy was last updated on {new Date().toLocaleDateString()}.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TossOrTastePrivacyPolicy;