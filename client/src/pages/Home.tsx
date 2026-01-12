import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gamepad2, Shield, Users, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Design Philosophy: Modern Sports Analytics
 * - Deep Navy background with Teal accents
 * - Bold Poppins display font for headlines
 * - Asymmetric layouts with diagonal sections
 * - Smooth scroll animations and interactive elements
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/premium-hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />

          <div className="container relative z-10 py-20">
            <div className="max-w-2xl">
              <div className="mb-6 inline-block">
                <span className="text-accent font-display font-bold text-sm tracking-widest uppercase">
                  Welcome to Play By Stats
                </span>
              </div>

              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6 text-accent leading-tight drop-shadow-lg">
                Premium Casino Experience
              </h1>

              <p className="text-lg md:text-xl text-foreground mb-8 max-w-xl leading-relaxed">
                Experience the thrill of luxury gaming with stunning graphics, immersive sound, and authentic casino gameplay. Free-to-play, no real money involved.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/play">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
                  >
                    Start Playing Now
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent/10 font-semibold px-8"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-foreground">
                Why Choose Play By Stats?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We're committed to providing the best gaming experience with safety, fairness, and community at our core.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <Card className="bg-card border-border p-6 hover:border-accent transition-colors group">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Gamepad2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-foreground">Engaging Games</h3>
                <p className="text-muted-foreground text-sm">
                  Enjoy a variety of free-to-play games designed for entertainment and skill development.
                </p>
              </Card>

              {/* Feature 2 */}
              <Card className="bg-card border-border p-6 hover:border-accent transition-colors group">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-foreground">Safe & Secure</h3>
                <p className="text-muted-foreground text-sm">
                  Your privacy and security are our top priorities. No real-money gambling, just pure fun.
                </p>
              </Card>

              {/* Feature 3 */}
              <Card className="bg-card border-border p-6 hover:border-accent transition-colors group">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-foreground">Community Focused</h3>
                <p className="text-muted-foreground text-sm">
                  Connect with players worldwide in a respectful and inclusive gaming environment.
                </p>
              </Card>

              {/* Feature 4 */}
              <Card className="bg-card border-border p-6 hover:border-accent transition-colors group">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-foreground">Fair Play</h3>
                <p className="text-muted-foreground text-sm">
                  Transparent rules and fair mechanics ensure every player has an equal chance to win.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-foreground">
              Ready to Play?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join our community of gaming enthusiasts and start your adventure today. It's free, it's fun, and it's waiting for you.
            </p>
            <Link href="/play">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10"
              >
                Play Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
