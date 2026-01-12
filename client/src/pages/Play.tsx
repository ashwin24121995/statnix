import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RotateCcw, Volume2, VolumeX } from "lucide-react";

/**
 * Play Page - Casinous Template Design
 * Deep purple background (#1a0a2e) with golden yellow (#f7a600) accents
 */

const SYMBOLS = ["🎰", "💎", "👑", "🏆", "⭐", "🎯", "7️⃣", "🍀"];
const INITIAL_CREDITS = 1000;
const PAYOUT_MULTIPLIERS: Record<string, number> = {
  "🎰": 2,
  "💎": 2.5,
  "👑": 3,
  "🏆": 5,
  "⭐": 7.5,
  "🎯": 10,
  "7️⃣": 15,
  "🍀": 20,
};

export default function Play() {
  const [credits, setCredits] = useState(INITIAL_CREDITS);
  const [bet, setBet] = useState(10);
  const [customBet, setCustomBet] = useState("");
  const [reels, setReels] = useState<string[][]>([
    ["🎰", "💎", "👑"],
    ["🏆", "⭐", "🎯"],
    ["7️⃣", "🍀", "🎰"],
  ]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [status, setStatus] = useState("Ready to play");
  const [lastWin, setLastWin] = useState(0);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }, []);

  const playSound = (frequency: number, duration: number, type: "sine" | "square" = "sine") => {
    if (isMuted || !audioContextRef.current) return;

    const audioContext = audioContextRef.current;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  };

  const playSpinSound = () => {
    playSound(600, 0.08, "square");
  };

  const playWinSound = () => {
    playSound(800, 0.1);
    setTimeout(() => playSound(1000, 0.1), 100);
    setTimeout(() => playSound(1200, 0.15), 200);
    setTimeout(() => playSound(1400, 0.2), 300);
  };

  const generateReel = () => {
    return [
      SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    ];
  };

  const calculateWin = (reels: string[][]) => {
    const middleRow = [reels[0][1], reels[1][1], reels[2][1]];

    let winAmount = 0;

    if (middleRow[0] === middleRow[1] && middleRow[1] === middleRow[2]) {
      const symbol = middleRow[0];
      winAmount = bet * (PAYOUT_MULTIPLIERS[symbol] || 2);
    } else if (middleRow[0] === middleRow[1] || middleRow[1] === middleRow[2]) {
      winAmount = bet * 1.5;
    }

    return Math.floor(winAmount);
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

    let spinCount = 0;
    const spinInterval = setInterval(() => {
      setReels([generateReel(), generateReel(), generateReel()]);
      playSpinSound();
      spinCount++;

      if (spinCount > 15) {
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
    setReels([
      ["🎰", "💎", "👑"],
      ["🏆", "⭐", "🎯"],
      ["7️⃣", "🍀", "🎰"],
    ]);
    setStatus("Ready to play");
    setLastWin(0);
    setBet(10);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1a0a2e' }}>
      <Header />

      <main className="flex-1">
        {/* Game Header */}
        <section
          className="relative py-16 overflow-hidden"
          style={{
            backgroundImage: "url('/images/hero-casino-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26, 10, 46, 0.9), rgba(26, 10, 46, 0.7))' }} />
          <div className="container relative z-10 flex justify-between items-center">
            <div>
              <h1 className="heading-casino text-4xl md:text-5xl mb-2">
                <span style={{ color: '#f7a600' }}>Premium</span>
                <span className="text-white"> Slots</span>
              </h1>
              <p className="text-gray-400 text-lg">
                Experience the thrill of luxury gaming
              </p>
            </div>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-3 rounded-lg transition-colors"
              style={{ backgroundColor: 'rgba(247, 166, 0, 0.2)', border: '2px dashed #f7a600' }}
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6" style={{ color: '#f7a600' }} />
              ) : (
                <Volume2 className="w-6 h-6" style={{ color: '#f7a600' }} />
              )}
            </button>
          </div>
        </section>

        {/* Game Container */}
        <section className="py-12" style={{ backgroundColor: '#1a0a2e' }}>
          <div className="container max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Game Board */}
              <div className="lg:col-span-2">
                <div className="card-casino p-8">
                  {/* Credits Display */}
                  <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#1a0a2e', border: '2px solid #f7a600' }}>
                    <p className="text-gray-400 text-sm mb-1 uppercase tracking-widest">Your Balance</p>
                    <p className="font-display font-bold text-4xl" style={{ color: '#f7a600' }}>
                      {credits.toLocaleString()}
                    </p>
                  </div>

                  {/* Slot Machine */}
                  <div className="mb-8 p-6 rounded-lg relative overflow-hidden" style={{ backgroundColor: '#1a0a2e', border: '2px dashed #f7a600' }}>
                    {/* Decorative top bar */}
                    <div className="absolute top-0 left-0 right-0 h-2" style={{ background: 'linear-gradient(to right, #f7a600, rgba(247, 166, 0, 0.5), #f7a600)' }} />

                    {/* Game Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6 mt-4">
                      {[0, 1, 2].map((reelIdx) => (
                        <div
                          key={reelIdx}
                          className={`relative rounded-lg p-4 ${isSpinning ? "animate-pulse" : ""}`}
                          style={{ backgroundColor: '#2d1b4e', border: '2px dashed rgba(247, 166, 0, 0.5)' }}
                        >
                          <div className="flex flex-col items-center justify-center gap-2">
                            {reels[reelIdx]?.map((symbol, idx) => (
                              <div
                                key={idx}
                                className={`text-4xl md:text-5xl transition-all duration-100 ${
                                  idx === 1
                                    ? "scale-125 rounded-lg p-2"
                                    : "opacity-40"
                                }`}
                                style={idx === 1 ? { backgroundColor: 'rgba(247, 166, 0, 0.2)' } : {}}
                              >
                                {symbol}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Win Line Indicator */}
                    <div className="absolute left-4 right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <div className="h-0.5" style={{ backgroundColor: 'rgba(247, 166, 0, 0.3)' }} />
                    </div>

                    {/* Status Display */}
                    <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#2d1b4e', border: '1px solid rgba(247, 166, 0, 0.3)' }}>
                      <p className="text-white font-display font-bold text-lg">{status}</p>
                      {lastWin > 0 && (
                        <p className="font-display font-bold text-3xl mt-2 animate-bounce" style={{ color: '#f7a600' }}>
                          +{lastWin} CREDITS!
                        </p>
                      )}
                    </div>

                    {/* Decorative bottom bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-2" style={{ background: 'linear-gradient(to right, #f7a600, rgba(247, 166, 0, 0.5), #f7a600)' }} />
                  </div>

                  {/* Spin Button */}
                  <button
                    onClick={spin}
                    disabled={isSpinning || credits < bet}
                    className="w-full btn-casino text-xl py-6 mb-4 glow-gold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSpinning ? "SPINNING..." : "SPIN NOW"}
                  </button>

                  <button
                    onClick={reset}
                    className="w-full btn-casino-outline text-sm py-3 flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset Game
                  </button>
                </div>
              </div>

              {/* Controls Sidebar */}
              <div className="space-y-6">
                {/* Bet Selection */}
                <div className="card-casino">
                  <h3 className="font-display font-bold text-lg mb-4 uppercase tracking-wider" style={{ color: '#f7a600' }}>
                    Place Your Bet
                  </h3>

                  <div className="space-y-2 mb-4">
                    {[5, 10, 50, 100].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleBetChange(amount)}
                        className={`w-full py-3 rounded-md font-semibold transition-all ${
                          bet === amount
                            ? "btn-casino"
                            : "btn-casino-outline"
                        }`}
                      >
                        {amount} Credits
                      </button>
                    ))}
                  </div>

                  {/* Custom Bet */}
                  <div className="space-y-2">
                    <input
                      type="number"
                      value={customBet}
                      onChange={(e) => setCustomBet(e.target.value)}
                      placeholder="Custom amount"
                      className="w-full px-4 py-3 rounded-md text-white placeholder-gray-500 text-sm focus:outline-none"
                      style={{ backgroundColor: '#1a0a2e', border: '2px dashed rgba(247, 166, 0, 0.3)' }}
                    />
                    <button
                      onClick={handleCustomBet}
                      className="w-full btn-casino-outline text-sm py-3"
                    >
                      Set Custom Bet
                    </button>
                  </div>

                  <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: '#1a0a2e', border: '2px solid #f7a600' }}>
                    <p className="text-gray-400 text-xs mb-1 uppercase tracking-widest">Current Bet</p>
                    <p className="font-display font-bold text-3xl" style={{ color: '#f7a600' }}>{bet}</p>
                  </div>
                </div>

                {/* How to Play */}
                <div className="card-casino">
                  <button
                    onClick={() => setShowHowToPlay(!showHowToPlay)}
                    className="w-full btn-casino-outline text-sm py-3"
                  >
                    ❓ How to Play
                  </button>

                  {showHowToPlay && (
                    <div className="mt-4 text-sm text-gray-400 space-y-3">
                      <div>
                        <p className="font-semibold mb-1" style={{ color: '#f7a600' }}>1. Select Bet Amount</p>
                        <p className="text-xs">Choose from preset amounts or enter a custom bet</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1" style={{ color: '#f7a600' }}>2. Click SPIN</p>
                        <p className="text-xs">Watch the reels spin and hope for a match!</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1" style={{ color: '#f7a600' }}>3. Win Big</p>
                        <p className="text-xs">Match symbols in the middle row to multiply your bet</p>
                      </div>
                      <div className="pt-3" style={{ borderTop: '1px solid rgba(247, 166, 0, 0.3)' }}>
                        <p className="font-semibold mb-2" style={{ color: '#f7a600' }}>Payouts:</p>
                        <div className="text-xs space-y-1 grid grid-cols-2 gap-1">
                          <p>🎰 2x</p>
                          <p>💎 2.5x</p>
                          <p>👑 3x</p>
                          <p>🏆 5x</p>
                          <p>⭐ 7.5x</p>
                          <p>🎯 10x</p>
                          <p>7️⃣ 15x</p>
                          <p>🍀 20x</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Game Stats */}
                <div className="card-casino" style={{ background: 'linear-gradient(to bottom right, rgba(247, 166, 0, 0.1), rgba(247, 166, 0, 0.05))' }}>
                  <h4 className="font-display font-bold mb-3 uppercase tracking-wider text-sm" style={{ color: '#f7a600' }}>Game Info</h4>
                  <div className="text-sm text-gray-400 space-y-2">
                    <p><strong className="text-white">Status:</strong> {isSpinning ? "Spinning..." : "Ready"}</p>
                    <p><strong className="text-white">Current Bet:</strong> {bet} credits</p>
                    <p><strong className="text-white">Balance:</strong> {credits.toLocaleString()} credits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
