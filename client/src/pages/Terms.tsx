import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1a0a2e' }}>
      <Header />

      <main className="flex-1">
        <section className="py-16" style={{ backgroundColor: '#2d1b4e', borderBottom: '1px solid rgba(247, 166, 0, 0.3)' }}>
          <div className="container">
            <h1 className="heading-casino text-5xl md:text-6xl mb-6 text-white">
              Terms & <span style={{ color: '#f7a600' }}>Conditions</span>
            </h1>
            <p className="text-gray-400">Last updated: January 2026</p>
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: '#1a0a2e' }}>
          <div className="container max-w-3xl">
            <div className="space-y-8 text-gray-400">
              <div className="card-casino p-6">
                <h2 className="font-display font-bold text-2xl text-white mb-4">
                  1. Agreement to Terms
                </h2>
                <p>
                  By accessing and using the playbystats.com website and service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div className="card-casino p-6">
                <h2 className="font-display font-bold text-2xl text-white mb-4">
                  2. Use License
                </h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on STATNIX's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                  <li>Removing any copyright or other proprietary notations from the materials</li>
                  <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                </ul>
              </div>

              <div className="card-casino p-6">
                <h2 className="font-display font-bold text-2xl text-white mb-4">
                  3. Disclaimer
                </h2>
                <p>
                  The materials on STATNIX's website are provided on an 'as is' basis. STATNIX makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div className="card-casino p-6">
                <h2 className="font-display font-bold text-2xl text-white mb-4">
                  4. Limitations
                </h2>
                <p>
                  In no event shall STATNIX or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on STATNIX's website.
                </p>
              </div>

              <div className="card-casino p-6">
                <h2 className="font-display font-bold text-2xl text-white mb-4">
                  5. Accuracy of Materials
                </h2>
                <p>
                  The materials appearing on STATNIX's website could include technical, typographical, or photographic errors. STATNIX does not warrant that any of the materials on its website are accurate, complete, or current. STATNIX may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>

              <div className="card-casino p-6">
                <h2 className="font-display font-bold text-2xl text-white mb-4">
                  6. Links
                </h2>
                <p>
                  STATNIX has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by STATNIX of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div className="card-casino p-6">
                <h2 className="font-display font-bold text-2xl text-white mb-4">
                  7. Modifications
                </h2>
                <p>
                  STATNIX may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div className="card-casino p-6">
                <h2 className="font-display font-bold text-2xl text-white mb-4">
                  8. Governing Law
                </h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>

              <div className="card-casino p-6">
                <h2 className="font-display font-bold text-2xl text-white mb-4">
                  9. Contact Information
                </h2>
                <p>
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <p className="mt-4">
                  <strong className="text-white">Email:</strong> support@statnix.com<br />
                  <strong className="text-white">Address:</strong> C/O N K SHARMA SEC 9 TYPE, BT QR NO 463, HEC, Dhurwa, Ranchi, Ranchi-834004, Jharkhand
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
