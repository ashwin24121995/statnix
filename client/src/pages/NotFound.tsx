import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <div className="container text-center py-20">
          <div className="mb-8">
            <h1 className="font-display font-bold text-9xl text-accent mb-4">
              404
            </h1>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Oops! It looks like you've wandered off the game board. The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
              >
                Back to Home
              </Button>
            </Link>
            <Link href="/play">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 font-semibold px-8"
              >
                Play Now
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
