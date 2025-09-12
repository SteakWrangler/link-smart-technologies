import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TossOrTastePrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/tossortaste-support" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
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
                  To provide you with personalized features, TossOrTaste collects and stores the following information:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Email address and name for account creation and authentication</li>
                  <li>Your food preferences and favorites you save in the app</li>
                  <li>Your swipe history and interaction data to improve your experience</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  This information is used solely to provide app functionality such as saving your preferences, 
                  maintaining your favorites list, and personalizing your food recommendations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Data Storage</h2>
                <p className="text-muted-foreground mb-4">
                  Your data is securely stored using Supabase, a trusted database service. All data is encrypted 
                  and stored in secure servers. We implement industry-standard security measures to protect your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect exclusively for app functionality:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>To provide personalized food recommendations</li>
                  <li>To save and retrieve your favorite recipes and restaurants</li>
                  <li>To maintain your swipe history for better suggestions</li>
                  <li>To authenticate your account and ensure data security</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, rent, or trade your personal information to third parties. Your data is used 
                  solely for the purpose of providing TossOrTaste's features and is not shared with advertisers 
                  or other companies for marketing purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We take your data security seriously. Your information is protected through encryption, 
                  secure authentication, and regular security updates. Access to your data is strictly limited 
                  to what's necessary for app functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Access your personal data stored in the app</li>
                  <li>Request deletion of your account and associated data</li>
                  <li>Update or correct your personal information</li>
                  <li>Export your data in a portable format</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  To exercise these rights, please contact us using the information provided below.
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