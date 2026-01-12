import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#1a0a2e' }} className="border-t border-[#f7a600]/30 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img src="/images/statnix-logo.png" alt="Statnix" className="h-16 w-16 object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium social gaming platform offering free-to-play casino entertainment. No real money involved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-[#f7a600] mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-[#f7a600] transition-colors text-sm">Home</Link></li>
              <li><Link href="/play" className="text-gray-400 hover:text-[#f7a600] transition-colors text-sm">Play Now</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-[#f7a600] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#f7a600] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-[#f7a600] mb-4 uppercase tracking-wider text-sm">
              Legal
            </h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-[#f7a600] transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-[#f7a600] transition-colors text-sm">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer" className="text-gray-400 hover:text-[#f7a600] transition-colors text-sm">Disclaimer</Link></li>
              <li><Link href="/community-rules" className="text-gray-400 hover:text-[#f7a600] transition-colors text-sm">Community Rules</Link></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="font-display font-bold text-[#f7a600] mb-4 uppercase tracking-wider text-sm">
              Company
            </h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p><strong className="text-white">Legal Name:</strong><br />CC INNOVATIONS (OPC) PRIVATE LIMITED</p>
              <p><strong className="text-white">CIN:</strong> U78100JH2023OPC021360</p>
              <p><strong className="text-white">GST:</strong> 20AALCC3673P1ZB</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#f7a600]/30 pt-8 mt-8">
          {/* Age & Responsible Gaming Disclaimer */}
          <div className="mb-8 p-4 border-2 dashed border-[#f7a600] rounded-lg" style={{ borderStyle: 'dashed', backgroundColor: 'rgba(247, 166, 0, 0.1)' }}>
            <p className="text-xs text-gray-300 leading-relaxed">
              <strong className="text-[#f7a600]">Age & Responsible Gaming Disclaimer:</strong> The content on this site is intended for users who are 18 years of age or older. It operates as a social gaming platform featuring free-to-play experiences available for entertainment and fun. This is a safe environment with no real money involved. No real currency can be used or gained during gameplay. We promote responsible gaming and fair play. All achievements are for entertainment purposes only and do not translate into any real-world financial activities. Enjoy risk-free gaming in our community.
            </p>
          </div>

          {/* Legal Address */}
          <div className="mb-6">
            <h4 className="font-display font-semibold mb-2 text-[#f7a600] text-sm uppercase tracking-wider">Registered Address</h4>
            <p className="text-xs text-gray-400">
              C/O N K SHARMA SEC 9 TYPE, BT QR NO 463, HEC, Dhurwa, Ranchi, Ranchi-834004, Jharkhand
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <p>&copy; {currentYear} Statnix. All rights reserved.</p>
            <p>Premium Social Gaming Platform</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
