import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RotateCcw, Volume2, VolumeX } from "lucide-react";

/**
 * Roulette Page - Premium 3D Roulette Game
 * Realistic spinning wheel with continuous rotation and 3D effects
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
  const [idleRotation, setIdleRotation] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const idleIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    // Continuous idle rotation
    idleIntervalRef.current = setInterval(() => {
      setIdleRotation((prev) => (prev + 0.5) % 360);
    }, 50);

    return () => {
      if (idleIntervalRef.current) clearInterval(idleIntervalRef.current);
    };
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
    for (let i = 0; i < 15; i++) {
      setTimeout(() => playSound(300 + i * 40, 0.08, "square"), i * 25);
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
    const spins = 8 + Math.random() * 4;
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
        setStatus(`Number ${winningNumber} - You won ${win} credits!`);
        setLastWin(win);
        setCredits((prev) => prev + win);
        playWinSound();
      } else {
        setStatus(`Number ${winningNumber} - Better luck next time!`);
        setLastWin(0);
      }
    }, 5000);
  };

  const resetGame = () => {
    setCredits(INITIAL_CREDITS);
    setLastWin(0);
    setLastNumber(null);
    setStatus("Select your bet");
    setSelectedBet(null);
    setWheelRotation(0);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1a0a2e" }}>
      <Header />

      <main className="flex-1 py-8">
        <div className="container">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl mb-2" style={{ color: "#f7a600", fontFamily: "Poppins", fontWeight: 700, fontStyle: "italic" }}>
              Premium Roulette
            </h1>
            <p className="text-gray-400">Experience the classic casino game</p>
          </div>

          {/* Main Game Container */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Panel - Betting Controls */}
              <div className="lg:col-span-1">
                <div className="p-6 rounded-lg" style={{ backgroundColor: "#2d1b4e", border: "2px dashed #f7a600" }}>
                  {/* Credits Display */}
                  <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: "#1a0a2e", border: "2px solid #f7a600" }}>
                    <p className="text-gray-400 text-sm mb-2">Total Credits</p>
                    <p className="text-3xl font-bold" style={{ color: "#f7a600" }}>
                      {credits}
                    </p>
                  </div>

                  {/* Bet Amount */}
                  <div className="mb-6">
                    <p className="text-gray-400 text-sm mb-3">Bet Amount</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[10, 25, 50, 100].map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setBet(amount)}
                          disabled={amount > credits}
                          className="py-2 rounded font-semibold text-sm transition-all disabled:opacity-50"
                          style={{
                            backgroundColor: bet === amount ? "#f7a600" : "#1a0a2e",
                            color: bet === amount ? "#1a0a2e" : "#f7a600",
                            border: `2px ${bet === amount ? "solid" : "dashed"} #f7a600`,
                          }}
                        >
                          {amount}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Bet Types */}
                  <div className="mb-6">
                    <p className="text-gray-400 text-sm mb-3">Bet Type</p>
                    <div className="space-y-2">
                      {[
                        { type: "red", label: "Red" },
                        { type: "black", label: "Black" },
                        { type: "even", label: "Even" },
                        { type: "odd", label: "Odd" },
                      ].map((option) => (
                        <button
                          key={option.type}
                          onClick={() => setSelectedBet({ type: option.type, value: option.type })}
                          disabled={isSpinning}
                          className="w-full py-2 rounded font-semibold text-sm transition-all disabled:opacity-50"
                          style={{
                            backgroundColor: selectedBet?.type === option.type ? "#f7a600" : "#1a0a2e",
                            color: selectedBet?.type === option.type ? "#1a0a2e" : "#f7a600",
                            border: `2px ${selectedBet?.type === option.type ? "solid" : "dashed"} #f7a600`,
                          }}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Last Win */}
                  <div className="p-3 rounded-lg" style={{ backgroundColor: "#1a0a2e", border: "2px solid #f7a600" }}>
                    <p className="text-gray-400 text-xs mb-1">Last Win</p>
                    <p className="text-2xl font-bold" style={{ color: lastWin > 0 ? "#00FF00" : "#FF6B6B" }}>
                      {lastWin}
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Panel - Wheel */}
              <div className="lg:col-span-1 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-sm aspect-square mb-6">
                  {/* Spinner Indicator */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: "#f7a600",
                        clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                      }}
                    />
                  </div>

                  {/* 3D Roulette Wheel */}
                  <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full"
                    style={{
                      transform: `rotate(${isSpinning ? wheelRotation : idleRotation}deg)`,
                      transition: isSpinning ? "transform 5s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
                      filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))",
                    }}
                  >
                    {/* Wheel segments */}
                    {NUMBERS.map((num) => {
                      const angle = (num * 360) / 37;
                      const color = getNumberColor(num);
                      const isRed = RED_NUMBERS.includes(num);

                      return (
                        <g key={num}>
                          {/* Segment */}
                          <path
                            d={`M 200 200 L ${200 + 180 * Math.cos((angle - 4.86) * (Math.PI / 180))} ${200 + 180 * Math.sin((angle - 4.86) * (Math.PI / 180))} A 180 180 0 0 1 ${200 + 180 * Math.cos((angle + 4.86) * (Math.PI / 180))} ${200 + 180 * Math.sin((angle + 4.86) * (Math.PI / 180))} Z`}
                            fill={color}
                            stroke="#f7a600"
                            strokeWidth="2"
                          />
                          {/* Number */}
                          <text
                            x={200 + 140 * Math.cos((angle) * (Math.PI / 180))}
                            y={200 + 140 * Math.sin((angle) * (Math.PI / 180))}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="#f7a600"
                            fontSize="16"
                            fontWeight="bold"
                            style={{ pointerEvents: "none" }}
                          >
                            {num}
                          </text>
                        </g>
                      );
                    })}

                    {/* Center circle */}
                    <circle cx="200" cy="200" r="40" fill="#f7a600" stroke="#1a0a2e" strokeWidth="3" />
                    <circle cx="200" cy="200" r="30" fill="#1a0a2e" />
                    <circle cx="200" cy="200" r="20" fill="#f7a600" />
                  </svg>
                </div>

                {/* Status */}
                <div className="text-center w-full">
                  <p className="text-lg font-semibold mb-4" style={{ color: status.includes("won") ? "#00FF00" : "#f7a600" }}>
                    {status}
                  </p>

                  {/* Spin Button */}
                  <button
                    onClick={spin}
                    disabled={isSpinning || !selectedBet || credits < bet}
                    className="w-full py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 disabled:opacity-50"
                    style={{
                      backgroundColor: "#f7a600",
                      color: "#1a0a2e",
                    }}
                  >
                    {isSpinning ? "SPINNING..." : "SPIN WHEEL"}
                  </button>
                </div>
              </div>

              {/* Right Panel - Number Betting */}
              <div className="lg:col-span-1">
                <div className="p-6 rounded-lg" style={{ backgroundColor: "#2d1b4e", border: "2px dashed #f7a600" }}>
                  <p className="text-gray-400 text-sm mb-4">Bet on Number</p>
                  <div className="grid grid-cols-4 gap-2 max-h-96 overflow-y-auto">
                    {NUMBERS.map((num) => (
                      <button
                        key={num}
                        onClick={() => setSelectedBet({ type: "number", value: num })}
                        disabled={isSpinning}
                        className="py-2 rounded font-semibold text-sm transition-all disabled:opacity-50"
                        style={{
                          backgroundColor: selectedBet?.type === "number" && selectedBet?.value === num ? "#f7a600" : getNumberColor(num),
                          color: selectedBet?.type === "number" && selectedBet?.value === num ? "#1a0a2e" : "#f7a600",
                          border: `2px ${selectedBet?.type === "number" && selectedBet?.value === num ? "solid" : "dashed"} #f7a600`,
                        }}
                      >
                        {num}
                      </button>
                    ))}
                  </div>

                  {/* Control Buttons */}
                  <div className="mt-6 space-y-2">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-full py-2 rounded-lg flex items-center justify-center gap-2 transition-all"
                      style={{
                        backgroundColor: "#1a0a2e",
                        border: "2px dashed #f7a600",
                        color: "#f7a600",
                      }}
                    >
                      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                      {isMuted ? "Muted" : "Sound"}
                    </button>

                    <button
                      onClick={resetGame}
                      className="w-full py-2 rounded-lg flex items-center justify-center gap-2 transition-all"
                      style={{
                        backgroundColor: "#1a0a2e",
                        border: "2px dashed #f7a600",
                        color: "#f7a600",
                      }}
                    >
                      <RotateCcw size={16} />
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
