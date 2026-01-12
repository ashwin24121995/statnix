import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1a0a2e' }}>
      <Header />

      <main className="flex-1">
        <section
          className="relative min-h-[40vh] flex items-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/privacy-security-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26, 10, 46, 0.95), rgba(26, 10, 46, 0.8))' }} />
          <div className="container relative z-10 py-16">
            <h1 className="heading-casino text-5xl md:text-6xl mb-6 text-white font-display italic">
              Privacy <span style={{ color: '#f7a600' }}>Policy</span>
            </h1>
            <p className="text-xl text-gray-300">Your privacy and data security are our top priorities</p>
            <p className="text-gray-400 mt-2">Last updated: January 2026</p>
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: '#1a0a2e' }}>
          <div className="container max-w-4xl">
            <div className="space-y-8 text-gray-400">
              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  1. Introduction
                </h2>
                <p className="leading-relaxed">
                  STATNIX, operated by CC INNOVATIONS (OPC) PRIVATE LIMITED, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, protect, and disclose your personal information when you use our Service.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  2. Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-white mb-3">Personal Information:</h3>
                    <ul className="space-y-2 ml-4">
                      <li>Name, email address, password, profile information</li>
                      <li>Contact information and communication preferences</li>
                      <li>Feedback, messages, and support inquiries</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-white mb-3">Automatically Collected Data:</h3>
                    <ul className="space-y-2 ml-4">
                      <li>Usage data: pages visited, games played, time spent</li>
                      <li>Technical data: IP address, browser type, device information</li>
                      <li>Cookies and tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  3. How We Use Your Information
                </h2>
                <ul className="space-y-2 ml-4">
                  <li>To provide and maintain our gaming services</li>
                  <li>To process transactions and send service updates</li>
                  <li>To improve and optimize our platform</li>
                  <li>To detect fraud and ensure security</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  4. Data Security
                </h2>
                <p className="leading-relaxed mb-4">
                  We implement advanced security measures including SSL/TLS encryption, firewalls, and regular security audits to protect your personal information.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  5. Information Sharing
                </h2>
                <p className="leading-relaxed mb-4">
                  We do not sell your personal information. We may share it with service providers, when legally required, or in case of business transfer.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  6. Your Rights
                </h2>
                <ul className="space-y-2 ml-4">
                  <li>Right to access your personal data</li>
                  <li>Right to correct inaccurate information</li>
                  <li>Right to request deletion of your data</li>
                  <li>Right to opt out of marketing communications</li>
                </ul>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  7. Cookies & Tracking
                </h2>
                <p className="leading-relaxed">
                  We use cookies for essential functionality and analytics. You can control cookies through your browser settings.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  8. Children's Privacy
                </h2>
                <p className="leading-relaxed">
                  Our Service is not intended for children under 18. We do not knowingly collect information from children.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  9. Contact Us
                </h2>
                <p className="leading-relaxed mb-2">For privacy concerns, contact us at:</p>
                <p>privacy@statnix.com</p>
                <p>CC INNOVATIONS (OPC) PRIVATE LIMITED</p>
                <p>C/O N K SHARMA, SEC 9 TYPE, BT QR NO 463, HEC, Dhurwa, Ranchi - 834004, Jharkhand, India</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
