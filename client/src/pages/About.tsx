import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

/**
 * Design Philosophy: Modern Sports Analytics
 * - Clean, information-focused layout
 * - Accent colors for key highlights
 * - Professional typography hierarchy
 */

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-card border-b border-border">
          <div className="container">
            <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 text-foreground">
              About Play By Stats
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              We're dedicated to creating a safe, engaging, and fair gaming platform where players can enjoy entertainment without worry.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Mission */}
              <Card className="bg-card border-border p-8">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h2 className="font-display font-bold text-2xl mb-4 text-foreground">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To bring joy, fun, and excitement through engaging free-to-play games. We believe gaming should be accessible to everyone, safe, and focused on entertainment rather than financial risk.
                </p>
              </Card>

              {/* Vision */}
              <Card className="bg-card border-border p-8">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h2 className="font-display font-bold text-2xl mb-4 text-foreground">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To offer a platform for unique, handcrafted casual games and skill-based experiences in a safe environment. We envision a global community of players who value fair play, respect, and enjoyment.
                </p>
              </Card>
            </div>

            {/* Core Values */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="font-display font-bold text-3xl mb-8 text-foreground">
                Our Core Values
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Fair Play",
                    description: "Transparent rules and fair mechanics ensure every player has an equal chance to succeed.",
                  },
                  {
                    title: "User Safety",
                    description: "We prioritize your privacy, security, and well-being above all else.",
                  },
                  {
                    title: "Community",
                    description: "We foster a respectful, inclusive community where players support and celebrate each other.",
                  },
                  {
                    title: "Innovation",
                    description: "We continuously improve and create new experiences that keep gaming fresh and exciting.",
                  },
                  {
                    title: "Transparency",
                    description: "We're open about our practices, rules, and operations. No hidden mechanics or surprises.",
                  },
                  {
                    title: "Responsibility",
                    description: "We promote healthy gaming habits and provide tools to help players enjoy responsibly.",
                  },
                ].map((value, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container">
            <h2 className="font-display font-bold text-3xl mb-12 text-foreground text-center">
              What We Offer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Free-to-Play Games",
                  description: "Enjoy a variety of games without spending a dime. No real-money gambling, just pure entertainment.",
                  icon: "🎮",
                },
                {
                  title: "Themed Adventures",
                  description: "Immerse yourself in unique game worlds and themed experiences designed for maximum enjoyment.",
                  icon: "🌍",
                },
                {
                  title: "Safe Environment",
                  description: "Play with confidence knowing your data is protected and the platform is moderated for safety.",
                  icon: "🛡️",
                },
                {
                  title: "Skill-Based Challenges",
                  description: "Test your abilities with games that reward strategy, timing, and decision-making.",
                  icon: "⚡",
                },
                {
                  title: "Community Features",
                  description: "Connect with other players, share achievements, and be part of a thriving gaming community.",
                  icon: "👥",
                },
                {
                  title: "Regular Updates",
                  description: "We constantly add new games, features, and improvements based on player feedback.",
                  icon: "🚀",
                },
              ].map((offer, idx) => (
                <Card key={idx} className="bg-background border-border p-6">
                  <div className="text-4xl mb-4">{offer.icon}</div>
                  <h3 className="font-display font-bold text-lg mb-2 text-foreground">
                    {offer.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {offer.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 bg-background">
          <div className="container max-w-3xl">
            <h2 className="font-display font-bold text-3xl mb-8 text-foreground">
              Our Commitment to You
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At Play By Stats, we're committed to providing a gaming experience that prioritizes fair play, user safety, privacy, and satisfaction. We understand that trust is earned through consistent, transparent actions.
              </p>

              <p>
                We maintain strict community guidelines to ensure a respectful environment for all players. Our moderation team works around the clock to prevent abuse, cheating, and harmful behavior.
              </p>

              <p>
                Your feedback matters to us. We actively listen to our community and use your suggestions to improve our platform. Whether it's a new game idea, a feature request, or a concern, we want to hear from you.
              </p>

              <p>
                We're proud to be a responsible gaming platform. We provide resources and tools to help players enjoy gaming in a healthy way, and we're always available to support you.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
