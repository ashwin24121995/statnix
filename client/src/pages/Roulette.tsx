import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Roulette Game Page - Casinous Template Design
 * Premium roulette wheel with betting mechanics
 */

export default function Roulette() {
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(50);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const wheelRef = useRef<HTMLDivElement>(null);

  const playSound = (type: "spin" | "win" | "lose") => {
    if (!soundEnabled) return;

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (type === "spin") {
      oscillator.frequency.value = 400;
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } else if (type === "win") {
      oscillator.frequency.value = 800;
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.8);
    } else {
      oscillator.frequency.value = 200;
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    }
  };

  const spinWheel = () => {
    if (spinning || !selectedNumber || bet > balance) {
      setMessage("Please select a number and ensure sufficient balance");
      return;
    }

    setSpinning(true);
    setMessage("");
    playSound("spin");

    const wheelElement = wheelRef.current;
    if (wheelElement) {
      let rotation = 0;
      const spinInterval = setInterval(() => {
        rotation += 30;
        wheelElement.style.transform = `rotate(${rotation}deg)`;
      }, 50);

      setTimeout(() => {
        clearInterval(spinInterval);
        const winningNumber = Math.floor(Math.random() * 37);
        setResult(winningNumber);

        const finalRotation = (winningNumber * 9.73) % 360;
        wheelElement.style.transform = `rotate(${finalRotation}deg)`;

        if (winningNumber === selectedNumber) {
          const winnings = bet * 35;
          setBalance(balance - bet + winnings);
          setMessage(`Congratulations! You won $${winnings}!`);
          playSound("win");
        } else {
          setBalance(balance - bet);
          setMessage(`Sorry! The winning number was ${winningNumber}. You lost $${bet}.`);
          playSound("lose");
        }

        setSpinning(false);
      }, 3000);
    }
  };

  const numbers = Array.from({ length: 37 }, (_, i) => i);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1a0a2e" }}>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative min-h-[40vh] flex items-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/roulette-game-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(26, 10, 46, 0.95), rgba(26, 10, 46, 0.7))" }} />
          <div className="container relative z-10 py-16">
            <h1 className="heading-casino text-5xl md:text-6xl text-white mb-4">
              Premium <span style={{ color: "#f7a600" }}>Roulette</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Experience the thrill of the spinning wheel. Place your bets and watch fortune unfold.
            </p>
          </div>
        </section>

        {/* Game Section */}
        <section className="py-20" style={{ backgroundColor: "#1a0a2e" }}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Wheel */}
              <div className="lg:col-span-2 flex justify-center items-center">
                <div className="card-casino p-8 w-full max-w-md">
                  <div className="relative w-full aspect-square flex items-center justify-center mb-8">
                    <div
                      ref={wheelRef}
                      className="w-80 h-80 rounded-full flex items-center justify-center transition-transform duration-300"
                      style={{
                        background: "conic-gradient(from 0deg, red, black, red, black, red, black, red, black, red, black, red, black, red, black, red, black, red, black)",
                        boxShadow: "0 0 30px rgba(247, 166, 0, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      <div
                        className="w-72 h-72 rounded-full flex items-center justify-center text-white font-bold text-2xl"
                        style={{
                          background: "linear-gradient(135deg, rgba(247, 166, 0, 0.3), rgba(247, 166, 0, 0.1))",
                        }}
                      >
                        ROULETTE
                      </div>
                    </div>
                    <div
                      className="absolute top-0 w-4 h-12"
                      style={{
                        backgroundColor: "#f7a600",
                        boxShadow: "0 0 10px rgba(247, 166, 0, 0.8)",
                      }}
                    />
                  </div>

                  <div className="text-center mb-6">
                    <p className="text-gray-400 mb-2">Current Balance</p>
                    <p className="text-4xl font-bold" style={{ color: "#f7a600" }}>
                      ${balance}
                    </p>
                  </div>

                  <button
                    onClick={spinWheel}
                    disabled={spinning || !selectedNumber}
                    className="btn-casino w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {spinning ? "Spinning..." : "Spin Wheel"}
                  </button>
                </div>
              </div>

              {/* Controls */}
              <div className="card-casino p-8">
                <h3 className="font-display font-bold text-2xl text-white mb-6">
                  Place Your Bet
                </h3>

                {/* Sound Toggle */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-700">
                  <span className="text-gray-400">Sound</span>
                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="p-2 rounded-lg transition-colors"
                    style={{
                      backgroundColor: soundEnabled ? "rgba(247, 166, 0, 0.2)" : "rgba(100, 100, 100, 0.2)",
                    }}
                  >
                    {soundEnabled ? (
                      <Volume2 className="w-5 h-5" style={{ color: "#f7a600" }} />
                    ) : (
                      <VolumeX className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                </div>

                {/* Bet Amount */}
                <div className="mb-6">
                  <label className="text-gray-400 block mb-3">Bet Amount: ${bet}</label>
                  <input
                    type="range"
                    min="10"
                    max={balance}
                    step="10"
                    value={bet}
                    onChange={(e) => setBet(Number(e.target.value))}
                    className="w-full"
                    style={{
                      accentColor: "#f7a600",
                    }}
                  />
                  <div className="flex gap-2 mt-3">
                    {[10, 50, 100, 500].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setBet(Math.min(amount, balance))}
                        className="flex-1 py-2 rounded-lg text-sm transition-all"
                        style={{
                          backgroundColor: bet === amount ? "#f7a600" : "rgba(247, 166, 0, 0.2)",
                          color: bet === amount ? "#1a0a2e" : "#f7a600",
                        }}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Number Selection */}
                <div className="mb-6">
                  <label className="text-gray-400 block mb-3">Select Number (0-36)</label>
                  <div className="grid grid-cols-6 gap-2 max-h-64 overflow-y-auto">
                    {numbers.map((num) => (
                      <button
                        key={num}
                        onClick={() => setSelectedNumber(num)}
                        className="aspect-square rounded-lg font-bold transition-all text-sm"
                        style={{
                          backgroundColor: selectedNumber === num ? "#f7a600" : "rgba(247, 166, 0, 0.1)",
                          color: selectedNumber === num ? "#1a0a2e" : "#f7a600",
                          border: `2px dashed ${selectedNumber === num ? "#f7a600" : "rgba(247, 166, 0, 0.3)"}`,
                        }}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                {message && (
                  <div
                    className="p-4 rounded-lg text-center font-semibold"
                    style={{
                      backgroundColor: message.includes("won") ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.2)",
                      color: message.includes("won") ? "#22c55e" : "#ef4444",
                    }}
                  >
                    {message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16" style={{ backgroundColor: "#2d1b4e" }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: "#f7a600" }}>
                  35:1
                </div>
                <p className="text-gray-400">Payout Ratio</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: "#f7a600" }}>
                  37
                </div>
                <p className="text-gray-400">Numbers Available</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: "#f7a600" }}>
                  Free
                </div>
                <p className="text-gray-400">No Real Money</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
