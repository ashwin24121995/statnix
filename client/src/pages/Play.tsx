import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RotateCcw, Volume2, VolumeX } from "lucide-react";

/**
 * Premium Casino Game Design
 * - Realistic 3D-style slot machine interface
 * - Gold and purple premium aesthetic
 * - Smooth spinning animations with particle effects
 * - Sound effects and background music
 */

const SYMBOLS = ["🎰", "💎", "👑", "🏆", "⭐", "🎯"];
const INITIAL_CREDITS = 1000;
const PAYOUT_MULTIPLIERS: Record<string, number> = {
  "🎰": 2,
  "💎": 2.5,
  "👑": 3,
  "🏆": 5,
  "⭐": 7.5,
  "🎯": 10,
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
  const [isMuted, setIsMuted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize audio context
  useEffect(() => {
    if (typeof window !== "undefined" && !audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }, []);

  // Play sound effect
  const playSound = (frequency: number, duration: number, type: "sine" | "square" = "sine") => {
    if (isMuted || !audioContextRef.current) return;

    const audioContext = audioContextRef.current;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  };

  // Play spin sound
  const playSpinSound = () => {
    playSound(800, 0.1, "square");
    playSound(600, 0.15, "sine");
  };

  // Play win sound
  const playWinSound = () => {
    playSound(800, 0.1);
    setTimeout(() => playSound(1000, 0.1), 100);
    setTimeout(() => playSound(1200, 0.2), 200);
  };

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

    let winAmount = 0;

    if (
      firstReel[1] === secondReel[1] &&
      secondReel[1] === thirdReel[1]
    ) {
      const symbol = firstReel[1];
      winAmount = bet * (PAYOUT_MULTIPLIERS[symbol] || 2);
    } else if (firstReel[1] === secondReel[1]) {
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

    setCredits((prev) => prev - bet);
    playSpinSound();

    let spinCount = 0;
    const spinInterval = setInterval(() => {
      setReels([generateReel(), generateReel(), generateReel()]);
      spinCount++;

      if (spinCount > 20) {
        clearInterval(spinInterval);

        const finalReels = [generateReel(), generateReel(), generateReel()];
        setReels(finalReels);

        const winAmount = calculateWin(finalReels);

        if (winAmount > 0) {
          setCredits((prev) => prev + winAmount);
          setLastWin(winAmount);
          setStatus(`🎉 You won ${winAmount} credits!`);
          playWinSound();
        } else {
          setStatus("No match - try again!");
        }

        setIsSpinning(false);
      }
    }, 80);
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
            backgroundImage: "url('/images/game-interface-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40" />
          <div className="container relative z-10 flex justify-between items-center">
            <div>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-2">
                Premium Casino Slots
              </h1>
              <p className="text-muted-foreground text-lg">
                Experience the thrill of luxury gaming
              </p>
            </div>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-3 bg-accent/20 hover:bg-accent/30 rounded-lg transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6 text-accent" />
              ) : (
                <Volume2 className="w-6 h-6 text-accent" />
              )}
            </button>
          </div>
        </section>

        {/* Game Container */}
        <section className="py-12 bg-background">
          <div className="container max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Game Board */}
              <div className="lg:col-span-2">
                <Card className="bg-card border-2 border-accent/50 p-8 shadow-2xl">
                  {/* Credits Display */}
                  <div className="mb-8 p-6 bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg border-2 border-accent">
                    <p className="text-muted-foreground text-sm mb-2 uppercase tracking-widest">Your Balance</p>
                    <p className="font-display font-bold text-4xl text-accent">
                      {credits}
                    </p>
                  </div>

                  {/* Slot Machine */}
                  <div className="mb-8 p-8 bg-gradient-to-b from-background to-card rounded-lg border-4 border-accent/30 relative overflow-hidden">
                    {/* Decorative top */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-accent/50 to-accent" />

                    {/* Game Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {[0, 1, 2].map((reelIdx) => (
                        <div
                          key={reelIdx}
                          className={`relative aspect-square bg-gradient-to-b from-background to-card border-4 border-accent rounded-lg flex flex-col items-center justify-center p-2 overflow-hidden ${
                            isSpinning ? "animate-pulse" : ""
                          }`}
                        >
                          {/* Reel items */}
                          <div className="flex flex-col items-center justify-center h-full gap-2">
                            {reels[reelIdx]?.map((symbol, idx) => (
                              <div
                                key={idx}
                                className={`text-5xl transition-all duration-100 ${
                                  idx === 1 ? "scale-125 text-accent" : "opacity-50"
                                }`}
                              >
                                {symbol}
                              </div>
                            ))}
                          </div>

                          {/* Center highlight */}
                          {reels[reelIdx]?.[1] && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <div className="w-24 h-24 border-4 border-accent rounded-lg shadow-lg shadow-accent/50" />
                            </div>
                          )}

                          {/* Shine effect */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        </div>
                      ))}
                    </div>

                    {/* Status Display */}
                    <div className="p-4 bg-background rounded-lg border-2 border-accent/30 text-center mb-6">
                      <p className="text-foreground font-display font-bold text-lg">{status}</p>
                      {lastWin > 0 && (
                        <p className="text-accent font-display font-bold text-2xl mt-2 animate-bounce">
                          +{lastWin} CREDITS!
                        </p>
                      )}
                    </div>

                    {/* Decorative bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-accent/50 to-accent" />
                  </div>

                  {/* Spin Button */}
                  <Button
                    onClick={spin}
                    disabled={isSpinning || credits < bet}
                    size="lg"
                    className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-primary-foreground font-display font-bold text-xl py-8 mb-4 rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                  >
                    {isSpinning ? "🎰 SPINNING..." : "🎰 SPIN NOW"}
                  </Button>

                  <Button
                    onClick={reset}
                    variant="outline"
                    size="sm"
                    className="w-full border-accent text-accent hover:bg-accent/10"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset Game
                  </Button>
                </Card>
              </div>

              {/* Controls Sidebar */}
              <div className="space-y-6">
                {/* Bet Selection */}
                <Card className="bg-card border-2 border-accent/30 p-6">
                  <h3 className="font-display font-bold text-lg mb-4 text-foreground uppercase tracking-wider">
                    Place Your Bet
                  </h3>

                  <div className="space-y-2 mb-4">
                    {[5, 10, 50, 100].map((amount) => (
                      <Button
                        key={amount}
                        onClick={() => handleBetChange(amount)}
                        variant={bet === amount ? "default" : "outline"}
                        className={`w-full font-semibold ${
                          bet === amount
                            ? "bg-accent text-primary-foreground border-accent"
                            : "border-accent/50 text-accent hover:bg-accent/10"
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
                      className="w-full px-3 py-2 bg-background border-2 border-accent/30 rounded text-foreground placeholder-muted-foreground text-sm focus:border-accent focus:outline-none"
                    />
                    <Button
                      onClick={handleCustomBet}
                      variant="outline"
                      className="w-full border-accent/50 text-accent hover:bg-accent/10"
                    >
                      Set Custom
                    </Button>
                  </div>

                  <div className="mt-4 p-4 bg-gradient-to-r from-accent/20 to-accent/10 rounded border-2 border-accent/30">
                    <p className="text-muted-foreground text-xs mb-1 uppercase tracking-widest">Current Bet</p>
                    <p className="font-display font-bold text-3xl text-accent">{bet}</p>
                  </div>
                </Card>

                {/* How to Play */}
                <Card className="bg-card border-2 border-accent/30 p-6">
                  <Button
                    onClick={() => setShowHowToPlay(!showHowToPlay)}
                    variant="outline"
                    className="w-full border-accent/50 text-accent hover:bg-accent/10 justify-start"
                  >
                    ❓ How to Play
                  </Button>

                  {showHowToPlay && (
                    <div className="mt-4 text-sm text-muted-foreground space-y-3">
                      <div>
                        <p className="font-semibold text-foreground mb-1">1. Select Bet Amount</p>
                        <p className="text-xs">Choose from preset amounts or enter a custom bet</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">2. Click SPIN</p>
                        <p className="text-xs">Watch the reels spin and hope for a match!</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">3. Win Big</p>
                        <p className="text-xs">Match symbols to multiply your bet</p>
                      </div>
                      <div className="pt-3 border-t border-border">
                        <p className="font-semibold text-foreground mb-2">Payouts:</p>
                        <div className="text-xs space-y-1">
                          <p>🎰 2x | 💎 2.5x | 👑 3x</p>
                          <p>🏆 5x | ⭐ 7.5x | 🎯 10x</p>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>

                {/* Game Stats */}
                <Card className="bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 p-6">
                  <h4 className="font-display font-bold text-foreground mb-3 uppercase tracking-wider">Game Info</h4>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p><strong className="text-foreground">Status:</strong> {isSpinning ? "Spinning..." : "Ready"}</p>
                    <p><strong className="text-foreground">Bet:</strong> {bet} credits</p>
                    <p><strong className="text-foreground">Balance:</strong> {credits} credits</p>
                  </div>
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
