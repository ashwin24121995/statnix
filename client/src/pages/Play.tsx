import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RotateCcw, Info } from "lucide-react";

/**
 * Design Philosophy: Modern Sports Analytics
 * - Game interface with teal accent colors
 * - Smooth animations and interactive feedback
 * - Data-driven layout with clear information hierarchy
 */

const SYMBOLS = ["⚽", "🏀", "🎯", "🏆", "⭐", "💎"];
const INITIAL_CREDITS = 1000;
const PAYOUT_MULTIPLIERS: Record<string, number> = {
  "⚽": 2,
  "🏀": 2.5,
  "🎯": 3,
  "🏆": 5,
  "⭐": 7.5,
  "💎": 10,
};

export default function Play() {
  const [credits, setCredits] = useState(INITIAL_CREDITS);
  const [bet, setBet] = useState(10);
  const [customBet, setCustomBet] = useState("");
  const [reels, setReels] = useState<string[][]>([[], [], []]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [status, setStatus] = useState("Ready to play");
  const [lastWin, setLastWin] = useState(0);
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  const generateReel = () => {
    return [
      SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    ];
  };

  const calculateWin = (reels: string[][]) => {
    const firstReel = reels[0];
    const secondReel = reels[1];
    const thirdReel = reels[2];

    // Check for matches
    let winAmount = 0;

    // All three match
    if (
      firstReel[1] === secondReel[1] &&
      secondReel[1] === thirdReel[1]
    ) {
      const symbol = firstReel[1];
      winAmount = bet * (PAYOUT_MULTIPLIERS[symbol] || 2);
    }
    // Two match (middle positions)
    else if (firstReel[1] === secondReel[1]) {
      winAmount = bet * 1.5;
    } else if (secondReel[1] === thirdReel[1]) {
      winAmount = bet * 1.5;
    }

    return winAmount;
  };

  const spin = () => {
    if (credits < bet) {
      setStatus("Insufficient credits!");
      return;
    }

    setIsSpinning(true);
    setStatus("Spinning...");
    setLastWin(0);

    // Deduct bet
    setCredits((prev) => prev - bet);

    // Simulate spinning
    let spinCount = 0;
    const spinInterval = setInterval(() => {
      setReels([generateReel(), generateReel(), generateReel()]);
      spinCount++;

      if (spinCount > 15) {
        clearInterval(spinInterval);

        // Final result
        const finalReels = [generateReel(), generateReel(), generateReel()];
        setReels(finalReels);

        const winAmount = calculateWin(finalReels);

        if (winAmount > 0) {
          setCredits((prev) => prev + winAmount);
          setLastWin(winAmount);
          setStatus(`🎉 You won ${winAmount} credits!`);
        } else {
          setStatus("No match - try again!");
        }

        setIsSpinning(false);
      }
    }, 100);
  };

  const handleBetChange = (newBet: number) => {
    setBet(newBet);
    setCustomBet("");
  };

  const handleCustomBet = () => {
    const customAmount = parseInt(customBet);
    if (customAmount > 0) {
      setBet(customAmount);
      setCustomBet("");
    }
  };

  const reset = () => {
    setCredits(INITIAL_CREDITS);
    setReels([[], [], []]);
    setStatus("Ready to play");
    setLastWin(0);
    setBet(10);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Game Header */}
        <section
          className="relative py-12 overflow-hidden"
          style={{
            backgroundImage: "url('/images/game-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40" />
          <div className="container relative z-10">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-2">
              Sports Spin Game
            </h1>
            <p className="text-muted-foreground text-lg">
              Test your luck with our exciting sports-themed slot game
            </p>
          </div>
        </section>

        {/* Game Container */}
        <section className="py-12 bg-background">
          <div className="container max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Game Board */}
              <div className="lg:col-span-2">
                <Card className="bg-card border-border p-8">
                  {/* Credits Display */}
                  <div className="mb-8 p-4 bg-background rounded-lg border border-border">
                    <p className="text-muted-foreground text-sm mb-1">Current Credits</p>
                    <p className="font-display font-bold text-3xl text-accent">
                      {credits}
                    </p>
                  </div>

                  {/* Game Grid */}
                  <div className="mb-8 p-6 bg-background rounded-lg border-2 border-accent/30">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[0, 1, 2].map((reelIdx) => (
                        <div
                          key={reelIdx}
                          className="aspect-square bg-card border-2 border-accent rounded-lg flex flex-col items-center justify-center p-2 relative overflow-hidden"
                        >
                          {/* Reel items */}
                          <div className="flex flex-col items-center justify-center h-full gap-2">
                            {reels[reelIdx]?.map((symbol, idx) => (
                              <div
                                key={idx}
                                className="text-4xl opacity-50 transition-opacity"
                              >
                                {symbol}
                              </div>
                            ))}
                          </div>

                          {/* Center highlight */}
                          {reels[reelIdx]?.[1] && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <div className="w-20 h-20 border-2 border-accent rounded-lg" />
                              <div className="absolute text-5xl">{reels[reelIdx][1]}</div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Status */}
                    <div className="p-3 bg-background rounded border border-border text-center">
                      <p className="text-foreground font-semibold">{status}</p>
                      {lastWin > 0 && (
                        <p className="text-accent font-bold text-lg mt-1">
                          +{lastWin} credits!
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Spin Button */}
                  <Button
                    onClick={spin}
                    disabled={isSpinning || credits < bet}
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 mb-4"
                  >
                    {isSpinning ? "SPINNING..." : "SPIN"}
                  </Button>

                  <Button
                    onClick={reset}
                    variant="outline"
                    size="sm"
                    className="w-full border-border text-foreground hover:bg-card"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset Game
                  </Button>
                </Card>
              </div>

              {/* Controls Sidebar */}
              <div className="space-y-6">
                {/* Bet Selection */}
                <Card className="bg-card border-border p-6">
                  <h3 className="font-display font-bold text-lg mb-4 text-foreground">
                    Select Bet
                  </h3>

                  <div className="space-y-2 mb-4">
                    {[5, 10, 50, 100].map((amount) => (
                      <Button
                        key={amount}
                        onClick={() => handleBetChange(amount)}
                        variant={bet === amount ? "default" : "outline"}
                        className={`w-full ${
                          bet === amount
                            ? "bg-accent text-accent-foreground"
                            : "border-border text-foreground hover:bg-card"
                        }`}
                      >
                        {amount} Credits
                      </Button>
                    ))}
                  </div>

                  {/* Custom Bet */}
                  <div className="space-y-2">
                    <input
                      type="number"
                      value={customBet}
                      onChange={(e) => setCustomBet(e.target.value)}
                      placeholder="Custom amount"
                      className="w-full px-3 py-2 bg-background border border-border rounded text-foreground placeholder-muted-foreground text-sm"
                    />
                    <Button
                      onClick={handleCustomBet}
                      variant="outline"
                      className="w-full border-border text-foreground hover:bg-card"
                    >
                      Set Custom
                    </Button>
                  </div>

                  <div className="mt-4 p-3 bg-background rounded border border-border">
                    <p className="text-muted-foreground text-xs mb-1">Current Bet</p>
                    <p className="font-display font-bold text-2xl text-accent">{bet}</p>
                  </div>
                </Card>

                {/* How to Play */}
                <Card className="bg-card border-border p-6">
                  <Button
                    onClick={() => setShowHowToPlay(!showHowToPlay)}
                    variant="outline"
                    className="w-full border-border text-foreground hover:bg-card justify-start"
                  >
                    <Info className="w-4 h-4 mr-2" />
                    How to Play
                  </Button>

                  {showHowToPlay && (
                    <div className="mt-4 text-sm text-muted-foreground space-y-2">
                      <p>
                        <strong className="text-foreground">1.</strong> Select your bet amount
                      </p>
                      <p>
                        <strong className="text-foreground">2.</strong> Click SPIN to play
                      </p>
                      <p>
                        <strong className="text-foreground">3.</strong> Match symbols to win
                      </p>
                      <p className="text-xs mt-3 pt-3 border-t border-border">
                        <strong>Payouts:</strong> ⚽ 2x, 🏀 2.5x, 🎯 3x, 🏆 5x, ⭐ 7.5x, 💎 10x
                      </p>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
