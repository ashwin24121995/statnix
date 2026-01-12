import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/images/logo.png" alt="Play By Stats" className="h-12 w-12 object-contain" />
          <span className="font-display font-bold text-xl text-foreground hidden sm:inline">Play By Stats</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-accent transition-colors">Home</Link>
          <Link href="/play" className="text-foreground hover:text-accent transition-colors">Play</Link>
          <Link href="/about" className="text-foreground hover:text-accent transition-colors">About</Link>
          <Link href="/contact" className="text-foreground hover:text-accent transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container py-4 flex flex-col gap-4">
            <Link href="/" className="text-foreground hover:text-accent transition-colors py-2">Home</Link>
            <Link href="/play" className="text-foreground hover:text-accent transition-colors py-2">Play</Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors py-2">About</Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors py-2">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
