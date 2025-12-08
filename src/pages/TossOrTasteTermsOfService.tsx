import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TossOrTasteTermsOfService = () => {
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
              TossOrTaste Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Please read these terms carefully before using the app.
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By downloading, accessing, or using TossOrTaste ("the App"), you agree to be bound by these 
                  Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground mb-4">
                  TossOrTaste is a food discovery application that helps users make dining decisions through 
                  an interactive swiping interface. The App allows users to save favorites, track preferences, 
                  and receive personalized food recommendations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground mb-4">
                  To access certain features of the App, you may be required to create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. User Conduct</h2>
                <p className="text-muted-foreground mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Use the App for any unlawful purpose or in violation of these Terms</li>
                  <li>Attempt to gain unauthorized access to any portion of the App</li>
                  <li>Interfere with or disrupt the App or servers connected to the App</li>
                  <li>Use any automated means to access the App without our permission</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  The App and its original content, features, and functionality are owned by Link Smart Technologies LLC 
                  and are protected by international copyright, trademark, patent, trade secret, and other intellectual 
                  property laws. You may not copy, modify, distribute, sell, or lease any part of our App without 
                  prior written consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Third-Party Services</h2>
                <p className="text-muted-foreground mb-4">
                  The App may contain links to or integrate with third-party websites or services that are not 
                  owned or controlled by Link Smart Technologies LLC. We have no control over, and assume no 
                  responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground mb-4">
                  THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, 
                  EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, 
                  FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL 
                  BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, LINK SMART TECHNOLOGIES LLC SHALL NOT BE LIABLE FOR 
                  ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS 
                  OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR 
                  OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE APP.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>
                <p className="text-muted-foreground mb-4">
                  You agree to defend, indemnify, and hold harmless Link Smart Technologies LLC and its officers, 
                  directors, employees, and agents from and against any claims, liabilities, damages, losses, and 
                  expenses arising out of or in any way connected with your access to or use of the App or your 
                  violation of these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">10. App Store Terms</h2>
                <p className="text-muted-foreground mb-4">
                  If you downloaded the App from the Apple App Store, you acknowledge and agree that:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>These Terms are between you and Link Smart Technologies LLC, not Apple Inc.</li>
                  <li>Apple has no obligation to provide maintenance or support for the App</li>
                  <li>In the event of any failure to conform to any applicable warranty, you may notify Apple for a refund of the purchase price (if applicable); Apple has no other warranty obligation</li>
                  <li>Apple is not responsible for addressing any claims relating to the App</li>
                  <li>Apple is a third-party beneficiary of these Terms and may enforce them against you</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
                <p className="text-muted-foreground mb-4">
                  We may terminate or suspend your account and access to the App immediately, without prior notice 
                  or liability, for any reason, including if you breach these Terms. Upon termination, your right 
                  to use the App will immediately cease.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
                <p className="text-muted-foreground mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, 
                  without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">13. Changes to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                  we will provide at least 30 days' notice prior to any new terms taking effect. Your continued 
                  use of the App after any changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">14. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
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
                  These Terms of Service were last updated on {new Date().toLocaleDateString()}.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TossOrTasteTermsOfService;
