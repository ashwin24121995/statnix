import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

/**
 * About Page - Casinous Template Design
 * Deep purple background (#1a0a2e) with golden yellow (#f7a600) accents
 */

export default function About() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1a0a2e' }}>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative min-h-[40vh] flex items-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/about-hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26, 10, 46, 0.95), rgba(26, 10, 46, 0.7))' }} />
          <div className="container relative z-10 py-16">
            <h1 className="heading-casino text-5xl md:text-6xl mb-6 text-white">
              About <span style={{ color: '#f7a600' }}>Statnix</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              We're dedicated to creating a safe, engaging, and fair gaming platform where players can enjoy entertainment without worry.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16" style={{ backgroundColor: '#1a0a2e' }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Mission */}
              <div className="card-casino p-8">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(247, 166, 0, 0.2)' }}>
                  <span className="text-2xl font-bold" style={{ color: '#f7a600' }}>M</span>
                </div>
                <h2 className="font-display font-bold text-2xl mb-4 text-white">
                  Our Mission
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  To bring joy, fun, and excitement through engaging free-to-play games. We believe gaming should be accessible to everyone, safe, and focused on entertainment rather than financial risk.
                </p>
              </div>

              {/* Vision */}
              <div className="card-casino p-8">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(247, 166, 0, 0.2)' }}>
                  <span className="text-2xl font-bold" style={{ color: '#f7a600' }}>V</span>
                </div>
                <h2 className="font-display font-bold text-2xl mb-4 text-white">
                  Our Vision
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  To offer a platform for unique, handcrafted casual games and skill-based experiences in a safe environment. We envision a global community of players who value fair play, respect, and enjoyment.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="card-casino p-8">
              <h2 className="heading-casino text-3xl mb-8 text-white">
                Our <span style={{ color: '#f7a600' }}>Core Values</span>
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
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#f7a600' }} />
                    <div>
                      <h3 className="font-display font-bold text-white mb-1">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
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
        <section className="py-16" style={{ backgroundColor: '#2d1b4e', borderTop: '1px solid rgba(247, 166, 0, 0.3)', borderBottom: '1px solid rgba(247, 166, 0, 0.3)' }}>
          <div className="container">
            <h2 className="heading-casino text-3xl mb-12 text-white text-center">
              What We <span style={{ color: '#f7a600' }}>Offer</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Free-to-Play Games",
                  description: "Enjoy a variety of games without spending a dime. No real-money gambling, just pure entertainment.",
                  icon: "Games",
                },
                {
                  title: "Themed Adventures",
                  description: "Immerse yourself in unique game worlds and themed experiences designed for maximum enjoyment.",
                  icon: "Worlds",
                },
                {
                  title: "Safe Environment",
                  description: "Play with confidence knowing your data is protected and the platform is moderated for safety.",
                  icon: "Safe",
                },
                {
                  title: "Skill-Based Challenges",
                  description: "Test your abilities with games that reward strategy, timing, and decision-making.",
                  icon: "Skills",
                },
                {
                  title: "Community Features",
                  description: "Connect with other players, share achievements, and be part of a thriving gaming community.",
                  icon: "Social",
                },
                {
                  title: "Regular Updates",
                  description: "We constantly add new games, features, and improvements based on player feedback.",
                  icon: "Updates",
                },
              ].map((offer, idx) => (
                <div key={idx} className="card-casino p-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(247, 166, 0, 0.2)' }}>
                    <span className="text-lg font-bold" style={{ color: '#f7a600' }}>{offer.icon[0]}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 text-white">
                    {offer.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {offer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16" style={{ backgroundColor: '#1a0a2e' }}>
          <div className="container max-w-3xl">
            <h2 className="heading-casino text-3xl mb-8 text-white">
              Our <span style={{ color: '#f7a600' }}>Commitment</span> to You
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                At Statnix, we're committed to providing a gaming experience that prioritizes fair play, user safety, privacy, and satisfaction. We understand that trust is earned through consistent, transparent actions.
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

            <div className="mt-12">
              <Link href="/play">
                <button className="btn-casino text-lg px-8 py-4">
                  Start Playing Now
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
