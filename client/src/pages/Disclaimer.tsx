import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Disclaimer() {
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
              <span style={{ color: '#f7a600' }}>Disclaimer</span>
            </h1>
            <p className="text-xl text-gray-300">Important information about STATNIX gaming platform</p>
            <p className="text-gray-400 mt-2">Last updated: January 2026</p>
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: '#1a0a2e' }}>
          <div className="container max-w-4xl">
            <div className="space-y-8 text-gray-400">
              <div className="card-casino p-8 border-2" style={{ borderColor: '#f7a600' }}>
                <h2 className="heading-casino font-bold text-2xl text-[#f7a600] mb-4 font-display italic">
                  Age Restriction & Responsible Gaming
                </h2>
                <p className="leading-relaxed text-white">
                  The content on this site is intended for users who are 18 years of age or older. It operates as a social gaming platform featuring free-to-play experiences available for entertainment and fun. This is a safe environment with no real money involved. No real currency can be used or gained during gameplay. We promote responsible gaming and fair play. All achievements are for entertainment purposes only and do not translate into any real-world financial activities. Enjoy risk-free gaming in our community.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  1. No Real Money Gaming
                </h2>
                <p className="leading-relaxed mb-4">
                  STATNIX is a completely free-to-play gaming platform. We explicitly disclaim that:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>No real money can be wagered or won</li>
                  <li>No gambling or betting takes place</li>
                  <li>No financial transactions occur during gameplay</li>
                  <li>All games are for entertainment purposes only</li>
                  <li>In-game achievements have no monetary value</li>
                </ul>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  2. Entertainment Only
                </h2>
                <p className="leading-relaxed">
                  STATNIX is designed purely for entertainment and social gaming. All games, features, and achievements are provided for recreational enjoyment only. Players should not expect any financial rewards, prizes, or real-world benefits from participation.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  3. Fair Play & Random Outcomes
                </h2>
                <p className="leading-relaxed mb-4">
                  We use certified random number generators to ensure fair gameplay. However, we disclaim:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>Guaranteed outcomes or winning streaks</li>
                  <li>Predictions of game results</li>
                  <li>Influence over random number generation</li>
                  <li>Control over individual game outcomes</li>
                </ul>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  4. No Warranties
                </h2>
                <p className="leading-relaxed">
                  STATNIX is provided "as is" without any warranties. We disclaim all warranties including merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee uninterrupted service, error-free operation, or specific results.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  5. Limitation of Liability
                </h2>
                <p className="leading-relaxed">
                  CC INNOVATIONS (OPC) PRIVATE LIMITED shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of STATNIX, including loss of data, business interruption, or any other damages.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  6. Responsible Gaming Commitment
                </h2>
                <p className="leading-relaxed mb-4">
                  While STATNIX is free-to-play with no real money involved, we still promote responsible gaming:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>Play for entertainment, not as a source of income</li>
                  <li>Set time limits for gaming sessions</li>
                  <li>Take regular breaks</li>
                  <li>Do not let gaming interfere with daily responsibilities</li>
                  <li>Seek help if gaming becomes problematic</li>
                </ul>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  7. Third-Party Links
                </h2>
                <p className="leading-relaxed">
                  STATNIX may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of external sites. Your use of third-party sites is at your own risk and subject to their terms and policies.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  8. Service Availability
                </h2>
                <p className="leading-relaxed">
                  We do not guarantee continuous or uninterrupted service. STATNIX may be subject to maintenance, updates, or temporary unavailability. We are not liable for any interruptions or service disruptions.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  9. User Content Disclaimer
                </h2>
                <p className="leading-relaxed">
                  While we moderate user-generated content, we do not guarantee that all content is accurate, appropriate, or free from harmful material. Users are responsible for their own content and interactions.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  10. Changes to Disclaimer
                </h2>
                <p className="leading-relaxed">
                  We reserve the right to modify this disclaimer at any time. Changes will be posted on our website with an updated date. Your continued use of STATNIX constitutes acceptance of the updated disclaimer.
                </p>
              </div>

              <div className="card-casino p-8">
                <h2 className="heading-casino font-bold text-2xl text-white mb-4 font-display italic">
                  11. Contact for Concerns
                </h2>
                <p className="leading-relaxed mb-2">If you have concerns about this disclaimer or STATNIX practices:</p>
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
