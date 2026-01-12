import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RotateCcw, Volume2, VolumeX } from "lucide-react";

/**
 * Play Page - Premium Slots Game
 * Realistic 3D-style slot machine with advanced animations
 * Deep purple background (#1a0a2e) with golden yellow (#f7a600) accents
 */

const SYMBOLS = [
  { name: "7", value: 7, color: "#FFD700", multiplier: 20 },
  { name: "BAR", value: 6, color: "#FF6B6B", multiplier: 15 },
  { name: "CHERRY", value: 5, color: "#FF1493", multiplier: 10 },
  { name: "BELL", value: 4, color: "#FFD700", multiplier: 7.5 },
  { name: "DIAMOND", value: 3, color: "#00CED1", multiplier: 5 },
  { name: "STAR", value: 2, color: "#FFD700", multiplier: 3 },
  { name: "LEMON", value: 1, color: "#FFFF00", multiplier: 2 },
];

const INITIAL_CREDITS = 1000;

export default function Play() {
  const [credits, setCredits] = useState(INITIAL_CREDITS);
  const [bet, setBet] = useState(10);
  const [reels, setReels] = useState<number[]>([0, 0, 0]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [status, setStatus] = useState("Ready to play");
  const [lastWin, setLastWin] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [reelRotations, setReelRotations] = useState<number[]>([0, 0, 0]);
  const [particleEffect, setParticleEffect] = useState<boolean>(false);
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
    for (let i = 0; i < 5; i++) {
      setTimeout(() => playSound(600 + i * 100, 0.08, "square"), i * 50);
    }
  };

  const playWinSound = () => {
    playSound(800, 0.1);
    setTimeout(() => playSound(1000, 0.1), 100);
    setTimeout(() => playSound(1200, 0.15), 200);
    setTimeout(() => playSound(1400, 0.2), 300);
  };

  const calculateWin = (newReels: number[]) => {
    let winAmount = 0;

    if (newReels[0] === newReels[1] && newReels[1] === newReels[2]) {
      const symbol = SYMBOLS[newReels[0]];
      winAmount = bet * symbol.multiplier;
    } else if (newReels[0] === newReels[1] || newReels[1] === newReels[2]) {
      winAmount = bet * 1.5;
    }

    return Math.floor(winAmount);
  };

  const spin = () => {
    if (isSpinning || credits < bet) return;

    setIsSpinning(true);
    setStatus("Spinning...");
    setLastWin(0);
    setCredits(credits - bet);
    playSpinSound();

    // Animate reels with different speeds
    const spinDurations = [2500, 2800, 3100];
    const newReels = [
      Math.floor(Math.random() * SYMBOLS.length),
      Math.floor(Math.random() * SYMBOLS.length),
      Math.floor(Math.random() * SYMBOLS.length),
    ];

    spinDurations.forEach((duration, index) => {
      setReelRotations((prev) => {
        const updated = [...prev];
        updated[index] = updated[index] + 1080;
        return updated;
      });

      setTimeout(() => {
        setReels((prev) => {
          const updated = [...prev];
          updated[index] = newReels[index];
          return updated;
        });
      }, duration);
    });

    setTimeout(() => {
      setIsSpinning(false);
      const win = calculateWin(newReels);

      if (win > 0) {
        setLastWin(win);
        setCredits((prev) => prev + win);
        setStatus(`You won ${win} credits!`);
        setParticleEffect(true);
        playWinSound();
        setTimeout(() => setParticleEffect(false), 1000);
      } else {
        setStatus("No match. Try again!");
      }
    }, 3100);
  };

  const handleBetChange = (amount: number) => {
    if (amount > 0 && amount <= credits) {
      setBet(amount);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1a0a2e" }}>
      <Header />

      <main className="flex-1 py-12">
        <div className="container">
          {/* Game Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl mb-4" style={{ color: "#f7a600", fontFamily: "Poppins", fontWeight: 700, fontStyle: "italic" }}>
              Premium Slots Machine
            </h1>
            <p className="text-gray-400 text-lg">Experience the thrill of authentic casino gaming</p>
          </div>

          {/* Game Container */}
          <div className="max-w-2xl mx-auto">
            {/* Credits Display */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-lg" style={{ backgroundColor: "#2d1b4e", border: "2px dashed #f7a600" }}>
                <p className="text-gray-400 text-sm mb-2">Total Credits</p>
                <p className="text-3xl font-bold" style={{ color: "#f7a600" }}>{credits}</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: "#2d1b4e", border: "2px dashed #f7a600" }}>
                <p className="text-gray-400 text-sm mb-2">Last Win</p>
                <p className="text-3xl font-bold" style={{ color: lastWin > 0 ? "#00FF00" : "#FF6B6B" }}>{lastWin}</p>
              </div>
            </div>

            {/* Slot Machine */}
            <div className="p-8 rounded-xl mb-8" style={{ backgroundColor: "#2d1b4e", border: "3px solid #f7a600", boxShadow: "0 0 30px rgba(247, 166, 0, 0.3)" }}>
              {/* Reels */}
              <div className="flex justify-center gap-4 mb-8">
                {reels.map((reel, index) => (
                  <div
                    key={index}
                    className="relative w-24 h-32 rounded-lg overflow-hidden"
                    style={{
                      backgroundColor: "#1a0a2e",
                      border: "3px solid #f7a600",
                      boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.5), 0 0 20px rgba(247, 166, 0, 0.2)",
                    }}
                  >
                    {/* Reel Content */}
                    <div
                      className="w-full h-full flex items-center justify-center transition-transform"
                      style={{
                        transform: isSpinning ? `rotateY(${reelRotations[index]}deg)` : "rotateY(0deg)",
                        transitionDuration: isSpinning ? `${2500 + index * 300}ms` : "0ms",
                        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        perspective: "1000px",
                      }}
                    >
                      {SYMBOLS[reel].name}
                    </div>

                    {/* Shine Effect */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Payline Indicator */}
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 rounded-lg" style={{ backgroundColor: "rgba(247, 166, 0, 0.1)", border: "1px solid #f7a600" }}>
                  <p className="text-sm" style={{ color: "#f7a600" }}>PAYLINE</p>
                </div>
              </div>

              {/* Status */}
              <div className="text-center mb-6">
                <p className="text-lg font-semibold" style={{ color: status.includes("won") ? "#00FF00" : status.includes("No match") ? "#FF6B6B" : "#f7a600" }}>
                  {status}
                </p>
              </div>
            </div>

            {/* Bet Controls */}
            <div className="mb-8">
              <p className="text-gray-400 mb-4">Select Bet Amount</p>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[10, 25, 50, 100].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleBetChange(amount)}
                    disabled={amount > credits || isSpinning}
                    className="py-3 rounded-lg font-semibold transition-all disabled:opacity-50"
                    style={{
                      backgroundColor: bet === amount ? "#f7a600" : "#2d1b4e",
                      color: bet === amount ? "#1a0a2e" : "#f7a600",
                      border: `2px ${bet === amount ? "solid" : "dashed"} #f7a600`,
                    }}
                  >
                    {amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Spin Button */}
            <button
              onClick={spin}
              disabled={isSpinning || credits < bet}
              className="w-full py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: "#f7a600",
                color: "#1a0a2e",
              }}
            >
              {isSpinning ? "SPINNING..." : "SPIN"}
            </button>

            {/* Controls */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="flex-1 py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
                style={{
                  backgroundColor: "#2d1b4e",
                  border: "2px dashed #f7a600",
                  color: "#f7a600",
                }}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                {isMuted ? "Muted" : "Sound On"}
              </button>

              <button
                onClick={() => {
                  setCredits(INITIAL_CREDITS);
                  setLastWin(0);
                  setStatus("Ready to play");
                }}
                className="flex-1 py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
                style={{
                  backgroundColor: "#2d1b4e",
                  border: "2px dashed #f7a600",
                  color: "#f7a600",
                }}
              >
                <RotateCcw size={20} />
                Reset
              </button>
            </div>

            {/* Paytable */}
            <div className="mt-12 p-6 rounded-lg" style={{ backgroundColor: "#2d1b4e", border: "2px dashed #f7a600" }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#f7a600" }}>Paytable</h3>
              <div className="grid grid-cols-2 gap-4">
                {SYMBOLS.map((symbol) => (
                  <div key={symbol.value} className="flex justify-between items-center p-2 rounded" style={{ backgroundColor: "rgba(247, 166, 0, 0.05)" }}>
                    <span style={{ color: symbol.color, fontWeight: "bold" }}>{symbol.name}</span>
                    <span className="text-sm" style={{ color: "#f7a600" }}>x{symbol.multiplier}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Particle Effect */}
            {particleEffect && (
              <div className="fixed inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full animate-ping"
                    style={{
                      backgroundColor: "#f7a600",
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `ping ${0.5 + Math.random() * 0.5}s ease-out forwards`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
