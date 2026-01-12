import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1a0a2e' }}>
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <div className="container text-center py-20">
          <div className="mb-8">
            <h1 className="heading-casino text-9xl mb-4" style={{ color: '#f7a600' }}>
              404
            </h1>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Oops! It looks like you've wandered off the game board. The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <button className="btn-casino text-lg px-8 py-4">
                Back to Home
              </button>
            </Link>
            <Link href="/play">
              <button className="btn-casino-outline text-lg px-8 py-4">
                Play Now
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
