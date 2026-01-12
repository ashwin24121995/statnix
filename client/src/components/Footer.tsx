import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-foreground">Play By Stats</h3>
            <p className="text-muted-foreground text-sm">
              Free social gaming platform providing engaging entertainment experiences with a focus on user safety and fair play.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/play" className="text-muted-foreground hover:text-accent transition-colors">Play</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-accent transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer" className="text-muted-foreground hover:text-accent transition-colors">Disclaimer</Link></li>
              <li><Link href="/community-rules" className="text-muted-foreground hover:text-accent transition-colors">Community Rules</Link></li>
            </ul>
          </div>

          {/* Company Details */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">Company</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p><strong>CC INNOVATIONS (OPC) PRIVATE LIMITED</strong></p>
              <p>CIN: U78100JH2023OPC021360</p>
              <p>PAN: AALCC3673P</p>
              <p>GST: 20AALCC3673P1ZB</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 mt-8">
          {/* Legal Address */}
          <div className="mb-6">
            <h4 className="font-display font-semibold mb-2 text-foreground text-sm">Registered Address</h4>
            <p className="text-xs text-muted-foreground">
              C/O N K SHARMA SEC 9 TYPE, BT QR NO 463, HEC, Dhurwa, Ranchi, Ranchi-834004, Jharkhand
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; {currentYear} Play By Stats. All rights reserved.</p>
            <p>Designed with care for gaming enthusiasts worldwide.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
