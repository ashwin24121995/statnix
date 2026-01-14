import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Trophy, Zap, Users } from "lucide-react";

/**
 * Home Page - Casinous Template Design
 * Deep purple background (#1a0a2e) with golden yellow (#f7a600) accents
 * Dashed border cards, italic headings
 */

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "Secure Gaming",
      description: "Play with confidence in our safe and secure environment. No real money involved.",
    },
    {
      icon: Trophy,
      title: "Win Big",
      description: "Experience the thrill of winning with our exciting slot machine games.",
    },
    {
      icon: Zap,
      title: "Instant Play",
      description: "No downloads required. Start playing instantly in your browser.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Join thousands of players in our thriving gaming community.",
    },
  ];

  const games = [
    { name: "Premium Slots", image: "/images/game-slots-icon.webp", limit: "Free Play", route: "/play" },
    { name: "Roulette", image: "/images/game-roulette-icon.webp", limit: "Free Play", route: "/roulette" },
    { name: "Blackjack", image: "/images/game-cards-new.webp", limit: "Free Play", route: "/blackjack" },
    { name: "Lucky Spin", image: "/images/lucky-spin-icon.webp", limit: "Free Play", route: "/play" },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1a0a2e' }}>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative min-h-[90vh] flex items-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/hero-casino-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26, 10, 46, 0.95), rgba(26, 10, 46, 0.7), rgba(26, 10, 46, 0.4))' }} />

          <div className="container relative z-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="heading-casino text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                  <span style={{ color: '#f7a600' }}>Experience Gaming</span>
                  <br />
                  <span className="text-white">Like Never Before</span>
                </h1>

                <p className="text-gray-400 mb-8 max-w-xl leading-relaxed text-lg">
                  We create vibrant, handcrafted social games designed purely for joy and entertainment. No real money. No financial transactions. Just a completely risk-free space filled with good vibes and play. Jump in, explore at your pace, and share the joy of social gaming.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/play">
                    <button className="btn-casino text-lg px-8 py-4">
                      Play Now
                    </button>
                  </Link>
                  <Link href="/about">
                    <button className="btn-casino-outline text-lg px-8 py-4">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:flex justify-center">
                <img
                  src="/images/casino-floating-elements.webp"
                  alt="Casino Elements"
                  className="max-w-lg w-full object-contain animate-float"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Games Section */}
        <section className="py-20" style={{ backgroundColor: '#1a0a2e' }}>
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-casino text-4xl md:text-5xl mb-4">
                <span style={{ color: '#f7a600' }}>Top Awesome</span>
                <br />
                <span className="text-white">Games</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Experience the thrill of premium casino games. Free-to-play entertainment with stunning visuals and authentic gameplay.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {games.map((game, idx) => (
                <div
                  key={idx}
                  className="card-casino group hover:scale-105 transition-all duration-300"
                >
                  <div className="aspect-square rounded-lg mb-4 flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'rgba(26, 10, 46, 0.5)' }}>
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    {game.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">
                    Play Limit
                  </p>
                  <p className="font-semibold mb-4" style={{ color: '#f7a600' }}>{game.limit}</p>
                  <Link href={game.route}>
                    <button className="btn-casino-outline w-full text-sm py-3">
                      Play Now
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Play Section */}
        <section
          className="relative py-20 overflow-hidden"
          style={{
            backgroundImage: "url('/images/why-play-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26, 10, 46, 0.95), rgba(26, 10, 46, 0.85), rgba(26, 10, 46, 0.75))' }} />
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-casino text-4xl md:text-5xl mb-6">
                  <span style={{ color: '#f7a600' }}>Why Play Our</span>
                  <br />
                  <span className="text-white">Casino</span>
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  STATNIX offers a premium social gaming experience with no real money involved. Enjoy authentic casino entertainment in a safe, secure environment designed for pure fun and excitement.
                </p>
                <Link href="/play">
                  <button className="btn-casino">
                    Start Playing
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="card-casino">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(247, 166, 0, 0.2)' }}>
                      <feature.icon className="w-7 h-7" style={{ color: '#f7a600' }} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20" style={{ backgroundColor: '#1a0a2e' }}>
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-casino text-4xl md:text-5xl mb-4">
                <span className="text-white">How It </span>
                <span style={{ color: '#f7a600' }}>Works</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Getting started is easy. Follow these simple steps to begin your gaming adventure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Visit Our Platform", desc: "Access STATNIX from any device with a web browser." },
                { step: "02", title: "Choose Your Game", desc: "Select from our collection of premium casino games." },
                { step: "03", title: "Play & Enjoy", desc: "Start playing instantly and experience the thrill!" },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f7a600' }}>
                    <span className="font-display font-bold text-2xl" style={{ color: '#1a0a2e' }}>{item.step}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promotional Banner Section */}
        <section className="py-8 px-4" style={{ backgroundColor: '#1a0a2e' }}>
          <div className="container">
            <a href="http://wa.link/redypromo" target="_blank" rel="noopener noreferrer" className="block">
              <img
                src="/images/promo-banner.webp"
                alt="REDDY BOOK - Most Trusted Site"
                className="w-full rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300 cursor-pointer"
              />
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="relative py-20 overflow-hidden"
          style={{
            backgroundImage: "url('/images/why-play-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26, 10, 46, 0.95), rgba(26, 10, 46, 0.9), rgba(26, 10, 46, 0.95))' }} />
          <div className="container relative z-10 text-center">
            <h2 className="heading-casino text-4xl md:text-5xl mb-6">
              <span style={{ color: '#f7a600' }}>Ready to </span>
              <span className="text-white">Play?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Join thousands of players enjoying our premium casino games. No downloads, no registration required - just instant fun!
            </p>
            <Link href="/play">
              <button className="btn-casino text-lg px-10 py-4 glow-gold">
                Start Playing Now
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
