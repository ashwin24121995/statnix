import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="py-16 bg-card border-b border-border">
          <div className="container">
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 text-foreground">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container max-w-3xl">
            <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  1. Introduction
                </h2>
                <p>
                  Play By Stats ("we," "us," "our," or "Company") operates the playbystats.com website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  2. Information Collection and Use
                </h2>
                <p>
                  We collect several different types of information for various purposes to provide and improve our Service to you.
                </p>
                <h3 className="font-display font-semibold text-lg text-foreground mt-4 mb-2">
                  Types of Data Collected:
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personal Data: Name, email address, usage data</li>
                  <li>Usage Data: Pages visited, time spent, interactions with features</li>
                  <li>Technical Data: IP address, browser type, device information</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  3. Use of Data
                </h2>
                <p>
                  Play By Stats uses the collected data for various purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To allow you to participate in interactive features of our Service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  4. Security of Data
                </h2>
                <p>
                  The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  5. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  6. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-4">
                  <strong className="text-foreground">Email:</strong> support@playbystats.com<br />
                  <strong className="text-foreground">Address:</strong> C/O N K SHARMA SEC 9 TYPE, BT QR NO 463, HEC, Dhurwa, Ranchi, Ranchi-834004, Jharkhand
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
