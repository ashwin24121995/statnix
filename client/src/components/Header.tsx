import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/play", label: "GAMES" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: '#1a0a2e' }}>
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Play By Stats" className="h-12 w-12 object-contain" />
          <span className="font-display font-bold text-xl hidden sm:inline" style={{ color: '#f7a600' }}>
            Play By Stats
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
                location === link.href
                  ? "text-[#f7a600]"
                  : "text-white hover:text-[#f7a600]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/play">
            <button className="btn-casino text-sm">
              Play Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#f7a600] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#2d1b4e' }}>
          <div className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-semibold tracking-wide transition-colors rounded-md ${
                  location === link.href
                    ? "text-[#f7a600] bg-[#f7a600]/10"
                    : "text-white hover:text-[#f7a600] hover:bg-[#f7a600]/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/play" onClick={() => setMobileMenuOpen(false)}>
              <button className="btn-casino w-full mt-4 text-sm">
                Play Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
