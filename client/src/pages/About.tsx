import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

/**
 * About Page - STATNIX Premium Casino
 * Deep purple background (#1a0a2e) with golden yellow (#f7a600) accents
 * Comprehensive company information with detailed mission, vision, and values
 */

export default function About() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1a0a2e' }}>
      <Header />

      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <section
          className="relative min-h-[50vh] flex items-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/about-team-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26, 10, 46, 0.95), rgba(26, 10, 46, 0.8))' }} />
          <div className="container relative z-10 py-20">
            <h1 className="heading-casino text-5xl md:text-7xl mb-6 text-white font-display italic">
              About <span style={{ color: '#f7a600' }}>STATNIX</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              Discover the premium gaming platform redefining entertainment with innovation, integrity, and excellence. STATNIX is your destination for world-class free-to-play gaming.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20" style={{ backgroundColor: '#1a0a2e' }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-casino text-4xl md:text-5xl mb-8 text-white font-display italic">
                  Our <span style={{ color: '#f7a600' }}>Story</span>
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    STATNIX was founded with a singular vision: to create a world-class gaming platform that combines cutting-edge technology with responsible gaming practices. We believe that entertainment should be accessible, fair, and enjoyable for everyone, without financial risk or pressure.
                  </p>
                  <p>
                    Established by CC INNOVATIONS (OPC) PRIVATE LIMITED in 2023, STATNIX represents years of expertise and dedication in the gaming industry. Our team is composed of passionate professionals committed to delivering premium experiences while maintaining the highest standards of security, fairness, and player protection.
                  </p>
                  <p>
                    From our headquarters in Ranchi, Jharkhand, we serve a growing community of players worldwide. We are committed to building a global community where players can enjoy risk-free entertainment, knowing that their safety, satisfaction, and responsible gaming are our top priorities.
                  </p>
                  <p>
                    Every decision we make, every feature we develop, and every update we release is guided by our core commitment to excellence and player wellbeing.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#f7a600]/20 to-[#1a0a2e] p-8 rounded-lg border-2" style={{ borderColor: 'rgba(247, 166, 0, 0.3)' }}>
                <h3 className="heading-casino text-2xl mb-8 text-[#f7a600] font-display italic">Company Milestones</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-[#f7a600] font-bold text-2xl flex-shrink-0">2023</span>
                    <div className="text-gray-300">
                      <p className="font-semibold text-white mb-1">Company Registration</p>
                      <p className="text-sm">CC INNOVATIONS (OPC) PRIVATE LIMITED established with CIN: U78100JH2023OPC021360. GST Registration: 20AALCC3673P1ZB</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#f7a600] font-bold text-2xl flex-shrink-0">2024</span>
                    <div className="text-gray-300">
                      <p className="font-semibold text-white mb-1">STATNIX Platform Launch</p>
                      <p className="text-sm">Premium gaming experience goes live with multiple game offerings including Slots, Roulette, Blackjack, and more</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#f7a600] font-bold text-2xl flex-shrink-0">2025</span>
                    <div className="text-gray-300">
                      <p className="font-semibold text-white mb-1">Global Expansion</p>
                      <p className="text-sm">Reaching players worldwide with localized experiences, multilingual support, and regional customization</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#f7a600] font-bold text-2xl flex-shrink-0">2026</span>
                    <div className="text-gray-300">
                      <p className="font-semibold text-white mb-1">Innovation & Growth</p>
                      <p className="text-sm">Continuous platform improvements, new game releases, and enhanced community features</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="py-20" style={{ backgroundColor: '#2d1b4e', borderTop: '1px solid rgba(247, 166, 0, 0.3)', borderBottom: '1px solid rgba(247, 166, 0, 0.3)' }}>
          <div className="container">
            <h2 className="heading-casino text-4xl md:text-5xl mb-12 text-white text-center font-display italic">
              Mission, Vision & <span style={{ color: '#f7a600' }}>Values</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Mission */}
              <div className="card-casino p-8">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(247, 166, 0, 0.2)' }}>
                  <span className="text-3xl font-bold" style={{ color: '#f7a600' }}>M</span>
                </div>
                <h3 className="heading-casino text-2xl mb-4 text-white font-display italic">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To deliver world-class, free-to-play gaming experiences that bring joy, excitement, and entertainment to players worldwide. We are committed to creating a safe, fair, and inclusive environment where gaming is about fun and community, not financial risk.
                </p>
              </div>

              {/* Vision */}
              <div className="card-casino p-8">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(247, 166, 0, 0.2)' }}>
                  <span className="text-3xl font-bold" style={{ color: '#f7a600' }}>V</span>
                </div>
                <h3 className="heading-casino text-2xl mb-4 text-white font-display italic">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To become the global leader in premium social gaming, recognized for our commitment to player safety, fair play, and innovation. We envision a thriving international community united by shared values of respect, integrity, and entertainment excellence.
                </p>
              </div>

              {/* Values */}
              <div className="card-casino p-8">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(247, 166, 0, 0.2)' }}>
                  <span className="text-3xl font-bold" style={{ color: '#f7a600' }}>V</span>
                </div>
                <h3 className="heading-casino text-2xl mb-4 text-white font-display italic">
                  Core Values
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Excellence, Integrity, Responsibility, Transparency, Innovation, and Community. These principles guide every decision we make and every feature we develop.
                </p>
              </div>
            </div>

            {/* Detailed Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Fair Play & Transparency",
                  description: "We use certified random number generators and transparent game mechanics. Every player has equal chances, and we openly communicate our rules and operations.",
                },
                {
                  title: "Player Safety & Security",
                  description: "Your data is protected with enterprise-grade encryption. We maintain strict security protocols and regularly audit our systems to ensure your information is safe.",
                },
                {
                  title: "Responsible Gaming",
                  description: "We promote healthy gaming habits and provide tools to help players enjoy responsibly. Our platform is designed for entertainment, not addiction or financial risk.",
                },
                {
                  title: "Community & Inclusion",
                  description: "We foster a respectful, diverse community where all players are welcome. We celebrate achievements and support each other in a positive environment.",
                },
                {
                  title: "Innovation & Excellence",
                  description: "We continuously improve our platform with new games, features, and enhancements based on player feedback and industry best practices.",
                },
                {
                  title: "Customer Support",
                  description: "Our dedicated support team is available 24/7 to help with questions, issues, or feedback. Your satisfaction is our priority.",
                },
              ].map((value, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-lg" style={{ backgroundColor: 'rgba(247, 166, 0, 0.05)', border: '1px solid rgba(247, 166, 0, 0.2)' }}>
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#f7a600' }} />
                  <div>
                    <h4 className="font-display font-bold text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose STATNIX */}
        <section className="py-20" style={{ backgroundColor: '#1a0a2e' }}>
          <div className="container">
            <h2 className="heading-casino text-4xl md:text-5xl mb-12 text-white text-center font-display italic">
              Why Choose <span style={{ color: '#f7a600' }}>STATNIX</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Premium Gaming Experience",
                  description: "Enjoy stunning graphics, smooth gameplay, immersive sound design, and animations that bring casino entertainment to life.",
                },
                {
                  title: "100% Free-to-Play",
                  description: "No real money involved. Play for fun and entertainment with zero financial risk, obligations, or hidden charges.",
                },
                {
                  title: "Advanced Security",
                  description: "Your data is protected with enterprise-grade encryption, SSL certificates, and multi-layer security protocols.",
                },
                {
                  title: "Fair & Certified",
                  description: "All games use certified random number generators ensuring fair outcomes. No manipulation or unfair advantages.",
                },
                {
                  title: "24/7 Support",
                  description: "Our dedicated support team is always available to help with questions, issues, feedback, or concerns.",
                },
                {
                  title: "Diverse Game Library",
                  description: "From classic slots to modern card games, enjoy a wide variety of entertaining gaming options updated regularly.",
                },
                {
                  title: "Community Features",
                  description: "Connect with other players, share achievements, participate in events, and be part of a thriving community.",
                },
                {
                  title: "Responsible Gaming Tools",
                  description: "We provide resources and tools to help players enjoy gaming in a healthy, balanced way.",
                },
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-lg card-casino">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md" style={{ backgroundColor: '#f7a600' }}>
                      <span className="font-bold text-black">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-20" style={{ backgroundColor: '#2d1b4e', borderTop: '1px solid rgba(247, 166, 0, 0.3)' }}>
          <div className="container">
            <h2 className="heading-casino text-4xl md:text-5xl mb-12 text-white text-center font-display italic">
              Company <span style={{ color: '#f7a600' }}>Information</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="card-casino p-8">
                <h3 className="heading-casino text-2xl mb-8 text-[#f7a600] font-display italic">Legal Details</h3>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Company Name</p>
                    <p className="font-semibold text-white text-lg">CC INNOVATIONS (OPC) PRIVATE LIMITED</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Corporate Identification Number (CIN)</p>
                    <p className="font-semibold text-white text-lg">U78100JH2023OPC021360</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">GST Number</p>
                    <p className="font-semibold text-white text-lg">20AALCC3673P1ZB</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">PAN (Permanent Account Number)</p>
                    <p className="font-semibold text-white text-lg">AALCC3673P</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Year of Establishment</p>
                    <p className="font-semibold text-white text-lg">2023</p>
                  </div>
                </div>
              </div>
              <div className="card-casino p-8">
                <h3 className="heading-casino text-2xl mb-8 text-[#f7a600] font-display italic">Registered Address</h3>
                <div className="space-y-2 text-gray-300 text-lg leading-relaxed">
                  <p className="font-semibold text-white">C/O N K SHARMA</p>
                  <p>SEC 9 TYPE, BT QR NO 463</p>
                  <p>HEC, Dhurwa</p>
                  <p>Ranchi - 834004</p>
                  <p>Jharkhand, India</p>
                  <p className="text-sm text-gray-400 mt-4">
                    This is our official registered office where all legal and official communications can be directed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" style={{ backgroundColor: '#1a0a2e' }}>
          <div className="container text-center">
            <h2 className="heading-casino text-4xl md:text-5xl mb-6 text-white font-display italic">
              Ready to Experience <span style={{ color: '#f7a600' }}>Premium Gaming</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of players enjoying world-class entertainment at STATNIX. Play now and discover why we're the choice for premium, safe, and fair gaming.
            </p>
            <Link href="/play">
              <button className="btn-casino text-lg px-10 py-4">
                Play Now
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
