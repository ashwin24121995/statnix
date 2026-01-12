import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1a0a2e' }}>
      <Header />

      <main className="flex-1">
        <section
          className="relative min-h-[40vh] flex items-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/terms-legal-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26, 10, 46, 0.95), rgba(26, 10, 46, 0.8))' }} />
          <div className="container relative z-10 py-16">
            <h1 className="heading-casino text-5xl md:text-6xl mb-6 text-white font-display italic">
              Terms & <span style={{ color: '#f7a600' }}>Conditions</span>
            </h1>
            <p className="text-xl text-gray-300">Please read our terms carefully before using STATNIX</p>
            <p className="text-gray-400 mt-2">Last updated: January 2026</p>
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: '#1a0a2e' }}>
          <div className="container max-w-4xl">
            <div className="space-y-8 text-gray-400">
              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  1. Acceptance of Terms
                </h2>
                <p className="leading-relaxed">
                  By accessing and using STATNIX, you accept and agree to be bound by these Terms & Conditions. If you do not agree, please do not use this service. We reserve the right to modify these terms at any time with notice posted on the website.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  2. Use License
                </h2>
                <p className="leading-relaxed mb-4">
                  Permission is granted to use STATNIX for personal, non-commercial entertainment only. You may not:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>Modify, copy, or distribute materials</li>
                  <li>Use materials for commercial purposes</li>
                  <li>Reverse engineer or decompile software</li>
                  <li>Remove copyright or proprietary notices</li>
                  <li>Violate applicable laws</li>
                </ul>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  3. Account Registration
                </h2>
                <p className="leading-relaxed mb-4">
                  To use STATNIX, you must register an account and agree to:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>Be at least 18 years of age</li>
                  <li>Provide accurate and complete information</li>
                  <li>Maintain password confidentiality</li>
                  <li>Accept responsibility for account activities</li>
                  <li>Report unauthorized access immediately</li>
                </ul>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  4. Free-to-Play Gaming
                </h2>
                <p className="leading-relaxed mb-4">
                  STATNIX is a free-to-play platform with no real money involved. You understand that:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>No real currency can be used or gained</li>
                  <li>All achievements are for entertainment only</li>
                  <li>No real-world financial activities result from gameplay</li>
                  <li>This is a social gaming platform</li>
                </ul>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  5. Prohibited Conduct
                </h2>
                <p className="leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>Harass, abuse, or threaten other players</li>
                  <li>Cheat, hack, or exploit game mechanics</li>
                  <li>Share account credentials</li>
                  <li>Post offensive or illegal content</li>
                  <li>Attempt unauthorized access</li>
                  <li>Engage in spam or phishing</li>
                  <li>Violate intellectual property rights</li>
                </ul>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  6. Intellectual Property
                </h2>
                <p className="leading-relaxed">
                  All content on STATNIX is protected by copyright and owned by CC INNOVATIONS (OPC) PRIVATE LIMITED. You may not reproduce, distribute, or transmit any content without permission.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  7. Limitation of Liability
                </h2>
                <p className="leading-relaxed">
                  STATNIX is provided "as is" without warranties. We shall not be liable for indirect, incidental, or consequential damages from your use or inability to use the service.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  8. Termination
                </h2>
                <p className="leading-relaxed">
                  We reserve the right to terminate your account immediately for any breach of these terms or prohibited conduct without prior notice or liability.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  9. Service Modifications
                </h2>
                <p className="leading-relaxed">
                  We reserve the right to modify or discontinue STATNIX without notice. We shall not be liable for any modification or discontinuance.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  10. Governing Law
                </h2>
                <p className="leading-relaxed">
                  These Terms are governed by Indian law. You submit to the exclusive jurisdiction of courts in Ranchi, Jharkhand.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  11. Contact Us
                </h2>
                <p className="leading-relaxed mb-2">For questions about these Terms & Conditions:</p>
                <p>support@statnix.com</p>
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
