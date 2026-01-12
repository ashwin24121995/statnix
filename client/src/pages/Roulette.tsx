import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RotateCcw, Volume2, VolumeX } from "lucide-react";

/**
 * Roulette Page - Premium Roulette Game
 * Realistic spinning wheel with physics-based animations
 */

const NUMBERS = Array.from({ length: 37 }, (_, i) => i);
const RED_NUMBERS = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
const BLACK_NUMBERS = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

const INITIAL_CREDITS = 1000;

export default function Roulette() {
  const [credits, setCredits] = useState(INITIAL_CREDITS);
  const [bet, setBet] = useState(10);
  const [selectedBet, setSelectedBet] = useState<{ type: string; value: number | string } | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [lastNumber, setLastNumber] = useState<number | null>(null);
  const [status, setStatus] = useState("Select your bet");
  const [lastWin, setLastWin] = useState(0);
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
    for (let i = 0; i < 10; i++) {
      setTimeout(() => playSound(400 + i * 50, 0.05, "square"), i * 30);
    }
  };

  const playWinSound = () => {
    playSound(800, 0.15);
    setTimeout(() => playSound(1200, 0.15), 150);
    setTimeout(() => playSound(1600, 0.2), 300);
  };

  const getNumberColor = (num: number) => {
    if (num === 0) return "#1a0a2e";
    return RED_NUMBERS.includes(num) ? "#FF1493" : "#000000";
  };

  const spin = () => {
    if (isSpinning || !selectedBet || credits < bet) return;

    setIsSpinning(true);
    setStatus("Spinning...");
    setCredits(credits - bet);
    playSpinSound();

    const winningNumber = Math.floor(Math.random() * 37);
    const spins = 5 + Math.random() * 3;
    const finalRotation = spins * 360 + (winningNumber * 360) / 37;

    setWheelRotation(finalRotation);

    setTimeout(() => {
      setLastNumber(winningNumber);
      setIsSpinning(false);

      let win = 0;
      const isRed = RED_NUMBERS.includes(winningNumber);
      const isBlack = BLACK_NUMBERS.includes(winningNumber);

      if (selectedBet.type === "number" && selectedBet.value === winningNumber) {
        win = bet * 36;
      } else if (selectedBet.type === "red" && isRed) {
        win = bet * 2;
      } else if (selectedBet.type === "black" && isBlack) {
        win = bet * 2;
      } else if (selectedBet.type === "even" && winningNumber % 2 === 0 && winningNumber !== 0) {
        win = bet * 2;
      } else if (selectedBet.type === "odd" && winningNumber % 2 === 1) {
        win = bet * 2;
      }

      if (win > 0) {
        setLastWin(win);
        setCredits((prev) => prev + win);
        setStatus(`You won ${win} credits! Number ${winningNumber}`);
        playWinSound();
      } else {
        setLastWin(0);
        setStatus(`Number ${winningNumber} - No match`);
      }
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1a0a2e" }}>
      <Header />

      <main className="flex-1 py-12">
        <div className="container">
          {/* Game Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl mb-4" style={{ color: "#f7a600", fontFamily: "Poppins", fontWeight: 700, fontStyle: "italic" }}>
              Premium Roulette
            </h1>
            <p className="text-gray-400 text-lg">Experience the classic casino game</p>
          </div>

          <div className="max-w-4xl mx-auto">
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

            {/* Roulette Wheel */}
            <div className="flex justify-center mb-12">
              <div className="relative w-80 h-80">
                {/* Wheel */}
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  style={{
                    transform: `rotate(${wheelRotation}deg)`,
                    transition: isSpinning ? "transform 4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
                  }}
                >
                  {/* Draw wheel segments */}
                  {NUMBERS.map((num) => {
                    const angle = (num * 360) / 37;
                    const startAngle = angle * (Math.PI / 180);
                    const endAngle = ((angle + 360 / 37) * Math.PI) / 180;
                    const radius = 180;
                    const x1 = 200 + radius * Math.cos(startAngle);
                    const y1 = 200 + radius * Math.sin(startAngle);
                    const x2 = 200 + radius * Math.cos(endAngle);
                    const y2 = 200 + radius * Math.sin(endAngle);
                    const largeArc = 360 / 37 > 180 ? 1 : 0;

                    const color = getNumberColor(num);

                    return (
                      <g key={num}>
                        <path
                          d={`M 200 200 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`}
                          fill={color}
                          stroke="#f7a600"
                          strokeWidth="2"
                        />
                        <text
                          x={200 + (radius - 30) * Math.cos((startAngle + endAngle) / 2)}
                          y={200 + (radius - 30) * Math.sin((startAngle + endAngle) / 2)}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="#f7a600"
                          fontSize="16"
                          fontWeight="bold"
                        >
                          {num}
                        </text>
                      </g>
                    );
                  })}

                  {/* Center circle */}
                  <circle cx="200" cy="200" r="40" fill="#f7a600" stroke="#1a0a2e" strokeWidth="3" />
                  <circle cx="200" cy="200" r="30" fill="#1a0a2e" />
                  <text x="200" y="200" textAnchor="middle" dominantBaseline="middle" fill="#f7a600" fontSize="20" fontWeight="bold">
                    {lastNumber !== null ? lastNumber : "0"}
                  </text>
                </svg>

                {/* Ball indicator */}
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4"
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#FFD700",
                    borderRadius: "50%",
                    boxShadow: "0 0 10px rgba(255, 215, 0, 0.8)",
                  }}
                />
              </div>
            </div>

            {/* Status */}
            <div className="text-center mb-8">
              <p className="text-lg font-semibold" style={{ color: status.includes("won") ? "#00FF00" : status.includes("No match") ? "#FF6B6B" : "#f7a600" }}>
                {status}
              </p>
            </div>

            {/* Betting Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Number Betting */}
              <div className="p-6 rounded-lg" style={{ backgroundColor: "#2d1b4e", border: "2px dashed #f7a600" }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#f7a600" }}>Number Bet (36:1)</h3>
                <div className="grid grid-cols-6 gap-2">
                  {NUMBERS.map((num) => (
                    <button
                      key={num}
                      onClick={() => setSelectedBet({ type: "number", value: num })}
                      disabled={isSpinning}
                      className="p-2 rounded font-bold transition-all"
                      style={{
                        backgroundColor: selectedBet?.type === "number" && selectedBet.value === num ? "#f7a600" : getNumberColor(num),
                        color: selectedBet?.type === "number" && selectedBet.value === num ? "#1a0a2e" : "#f7a600",
                        border: `2px ${selectedBet?.type === "number" && selectedBet.value === num ? "solid" : "dashed"} #f7a600`,
                      }}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color & Even/Odd Betting */}
              <div className="p-6 rounded-lg" style={{ backgroundColor: "#2d1b4e", border: "2px dashed #f7a600" }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#f7a600" }}>Other Bets (2:1)</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedBet({ type: "red", value: "red" })}
                    disabled={isSpinning}
                    className="w-full py-3 rounded font-bold transition-all"
                    style={{
                      backgroundColor: selectedBet?.type === "red" ? "#FF1493" : "#1a0a2e",
                      color: "#f7a600",
                      border: `2px ${selectedBet?.type === "red" ? "solid" : "dashed"} #FF1493`,
                    }}
                  >
                    Red
                  </button>
                  <button
                    onClick={() => setSelectedBet({ type: "black", value: "black" })}
                    disabled={isSpinning}
                    className="w-full py-3 rounded font-bold transition-all"
                    style={{
                      backgroundColor: selectedBet?.type === "black" ? "#000000" : "#1a0a2e",
                      color: "#f7a600",
                      border: `2px ${selectedBet?.type === "black" ? "solid" : "dashed"} #000000`,
                    }}
                  >
                    Black
                  </button>
                  <button
                    onClick={() => setSelectedBet({ type: "even", value: "even" })}
                    disabled={isSpinning}
                    className="w-full py-3 rounded font-bold transition-all"
                    style={{
                      backgroundColor: selectedBet?.type === "even" ? "#f7a600" : "#1a0a2e",
                      color: selectedBet?.type === "even" ? "#1a0a2e" : "#f7a600",
                      border: `2px ${selectedBet?.type === "even" ? "solid" : "dashed"} #f7a600`,
                    }}
                  >
                    Even
                  </button>
                  <button
                    onClick={() => setSelectedBet({ type: "odd", value: "odd" })}
                    disabled={isSpinning}
                    className="w-full py-3 rounded font-bold transition-all"
                    style={{
                      backgroundColor: selectedBet?.type === "odd" ? "#f7a600" : "#1a0a2e",
                      color: selectedBet?.type === "odd" ? "#1a0a2e" : "#f7a600",
                      border: `2px ${selectedBet?.type === "odd" ? "solid" : "dashed"} #f7a600`,
                    }}
                  >
                    Odd
                  </button>
                </div>
              </div>
            </div>

            {/* Bet Amount */}
            <div className="mb-8">
              <p className="text-gray-400 mb-4">Bet Amount</p>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[10, 25, 50, 100].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setBet(amount)}
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
              disabled={isSpinning || !selectedBet || credits < bet}
              className="w-full py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: "#f7a600",
                color: "#1a0a2e",
              }}
            >
              {isSpinning ? "SPINNING..." : "SPIN WHEEL"}
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
                  setStatus("Select your bet");
                  setSelectedBet(null);
                  setLastNumber(null);
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
