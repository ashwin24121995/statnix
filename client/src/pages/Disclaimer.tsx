import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="py-16 bg-card border-b border-border">
          <div className="container">
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 text-foreground">
              Disclaimer
            </h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container max-w-3xl">
            <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  General Disclaimer
                </h2>
                <p>
                  The information provided on the Play By Stats website is for informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Limitation of Liability
                </h2>
                <p>
                  In no event will Play By Stats, its directors, employees, or agents be liable to you or any third party for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any (i) errors, mistakes, or inaccuracies of content, (ii) personal injury or property damage of any nature whatsoever, (iii) any unauthorized access to or use of our servers and any and all personal information stored therein, (iv) any interruption or cessation of transmission to or from our website, or (iv) any bugs, viruses, trojan horses, or the like which may be transmitted to or through our website by any third party.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  External Links Disclaimer
                </h2>
                <p>
                  The Play By Stats website may contain links to external websites that are not provided or maintained by or in any way affiliated with Play By Stats. Please note that Play By Stats does not endorse the contents of these external websites. The inclusion of any link does not imply endorsement by Play By Stats of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Professional Advice Disclaimer
                </h2>
                <p>
                  Nothing on this website should be construed as providing professional advice of any kind. The website is provided for entertainment purposes only. If you require professional advice (legal, financial, medical, etc.), please consult with a qualified professional.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Affiliate Links Disclaimer
                </h2>
                <p>
                  This website may contain affiliate links. Play By Stats may earn a commission from qualifying purchases made through these links. However, this does not affect the price you pay, and we only recommend products and services that we believe are of value to our users.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  User Testimonials Disclaimer
                </h2>
                <p>
                  Any testimonials, reviews, or case studies on this website reflect the individual experiences of the users who provided them. These testimonials are not necessarily representative of all users' experiences. Results may vary based on individual circumstances, effort, and other factors.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  No Warranty
                </h2>
                <p>
                  The materials on the Play By Stats website are provided on an 'as is' basis. Play By Stats makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about this Disclaimer, please contact us at:
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
