import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RotateCcw, Volume2, VolumeX } from "lucide-react";

/**
 * Blackjack Page - Premium Blackjack Game
 * Realistic card dealing with smooth animations
 */

interface Card {
  suit: string;
  value: string;
  numValue: number;
}

const SUITS = ["♠", "♥", "♦", "♣"];
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const INITIAL_CREDITS = 1000;

export default function Blackjack() {
  const [credits, setCredits] = useState(INITIAL_CREDITS);
  const [bet, setBet] = useState(10);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerCards, setPlayerCards] = useState<Card[]>([]);
  const [dealerCards, setDealerCards] = useState<Card[]>([]);
  const [dealerRevealed, setDealerRevealed] = useState(false);
  const [message, setMessage] = useState("Place your bet to start");
  const [lastWin, setLastWin] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [cardAnimations, setCardAnimations] = useState<boolean[]>([]);
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

  const playCardSound = () => {
    playSound(500, 0.1, "sine");
  };

  const playWinSound = () => {
    playSound(800, 0.15);
    setTimeout(() => playSound(1200, 0.15), 150);
    setTimeout(() => playSound(1600, 0.2), 300);
  };

  const getCardNumValue = (value: string): number => {
    if (value === "A") return 11;
    if (["J", "Q", "K"].includes(value)) return 10;
    return parseInt(value);
  };

  const generateCard = (): Card => {
    const suit = SUITS[Math.floor(Math.random() * SUITS.length)];
    const value = VALUES[Math.floor(Math.random() * VALUES.length)];
    return {
      suit,
      value,
      numValue: getCardNumValue(value),
    };
  };

  const calculateHand = (cards: Card[]): number => {
    let total = cards.reduce((sum, card) => sum + card.numValue, 0);
    let aces = cards.filter((card) => card.value === "A").length;

    while (total > 21 && aces > 0) {
      total -= 10;
      aces--;
    }

    return total;
  };

  const startGame = () => {
    if (credits < bet) {
      setMessage("Insufficient credits");
      return;
    }

    setCredits(credits - bet);
    setGameStarted(true);
    setGameOver(false);
    setDealerRevealed(false);
    setLastWin(0);
    setMessage("Dealing cards...");

    const newPlayerCards = [generateCard(), generateCard()];
    const newDealerCards = [generateCard(), generateCard()];

    setPlayerCards(newPlayerCards);
    setDealerCards(newDealerCards);
    setCardAnimations([true, true, true, true]);

    playCardSound();

    setTimeout(() => {
      const playerTotal = calculateHand(newPlayerCards);
      if (playerTotal === 21) {
        setMessage("Blackjack! You win!");
        setLastWin(Math.floor(bet * 2.5));
        setCredits((prev) => prev + Math.floor(bet * 2.5));
        setGameOver(true);
        playWinSound();
      } else {
        setMessage("Hit or Stand?");
      }
    }, 1000);
  };

  const hit = () => {
    if (!gameStarted || gameOver) return;

    const newCard = generateCard();
    const newCards = [...playerCards, newCard];
    setPlayerCards(newCards);
    setCardAnimations([...cardAnimations, true]);
    playCardSound();

    const total = calculateHand(newCards);
    if (total > 21) {
      setMessage("Bust! You lose!");
      setGameOver(true);
    } else if (total === 21) {
      setMessage("21! Stand or Hit?");
    }
  };

  const stand = () => {
    if (!gameStarted || gameOver) return;

    setDealerRevealed(true);
    setMessage("Dealer's turn...");

    let newDealerCards = [...dealerCards];
    let dealerTotal = calculateHand(dealerCards);

    const dealerInterval = setInterval(() => {
      if (dealerTotal < 17) {
        dealerCards.push(generateCard());
        dealerTotal = calculateHand(dealerCards);
        setDealerCards([...dealerCards]);
        playCardSound();
      } else {
        clearInterval(dealerInterval);

        const playerTotal = calculateHand(playerCards);
        let result = "";
        let winAmount = 0;

        if (dealerTotal > 21) {
          result = "Dealer bust! You win!";
          winAmount = bet * 2;
        } else if (playerTotal > dealerTotal) {
          result = "You win!";
          winAmount = bet * 2;
        } else if (dealerTotal > playerTotal) {
          result = "Dealer wins!";
          winAmount = 0;
        } else {
          result = "Push! It's a tie!";
          winAmount = bet;
        }

        setMessage(result);
        if (winAmount > 0) {
          setLastWin(winAmount);
          setCredits((prev) => prev + winAmount);
          playWinSound();
        }
        setGameOver(true);
      }
    }, 1000);
  };

  const resetGame = () => {
    setGameStarted(false);
    setPlayerCards([]);
    setDealerCards([]);
    setMessage("Place your bet to start");
    setCardAnimations([]);
  };

  const CardComponent = ({ card, hidden = false, index = 0 }: { card: Card; hidden?: boolean; index?: number }) => {
    const isRed = card.suit === "♥" || card.suit === "♦";

    return (
      <div
        className="w-24 h-32 rounded-lg flex items-center justify-center font-bold text-2xl transition-all transform"
        style={{
          backgroundColor: hidden ? "#1a0a2e" : "#FFFFFF",
          border: `3px solid ${isRed ? "#FF1493" : "#000000"}`,
          color: isRed ? "#FF1493" : "#000000",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          animation: cardAnimations[index] ? "slideIn 0.5s ease-out" : "none",
        }}
      >
        {hidden ? "?" : `${card.value}${card.suit}`}
      </div>
    );
  };

  const playerTotal = calculateHand(playerCards);
  const dealerTotal = calculateHand(dealerCards);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1a0a2e" }}>
      <Header />

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(-50px) rotateY(90deg);
            opacity: 0;
          }
          to {
            transform: translateX(0) rotateY(0deg);
            opacity: 1;
          }
        }
      `}</style>

      <main className="flex-1 py-12">
        <div className="container">
          {/* Game Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl mb-4" style={{ color: "#f7a600", fontFamily: "Poppins", fontWeight: 700, fontStyle: "italic" }}>
              Premium Blackjack
            </h1>
            <p className="text-gray-400 text-lg">Beat the dealer and win big</p>
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

            {/* Game Table */}
            <div className="p-8 rounded-xl mb-8" style={{ backgroundColor: "#2d1b4e", border: "3px solid #f7a600", minHeight: "400px" }}>
              {/* Dealer Section */}
              <div className="mb-12">
                <p className="text-gray-400 mb-4">Dealer's Hand</p>
                <div className="flex gap-4 mb-2">
                  {dealerCards.map((card, index) => (
                    <CardComponent key={index} card={card} hidden={!dealerRevealed && index === 1} index={index} />
                  ))}
                </div>
                {dealerRevealed && (
                  <p className="text-lg font-semibold" style={{ color: "#f7a600" }}>
                    Total: {dealerTotal}
                  </p>
                )}
              </div>

              {/* Player Section */}
              <div>
                <p className="text-gray-400 mb-4">Your Hand</p>
                <div className="flex gap-4 mb-4">
                  {playerCards.map((card, index) => (
                    <CardComponent key={index} card={card} index={index + 2} />
                  ))}
                </div>
                <p className="text-lg font-semibold" style={{ color: playerTotal > 21 ? "#FF6B6B" : "#00FF00" }}>
                  Total: {playerTotal}
                </p>
              </div>
            </div>

            {/* Status */}
            <div className="text-center mb-8">
              <p className="text-lg font-semibold" style={{ color: message.includes("win") ? "#00FF00" : message.includes("lose") || message.includes("Bust") ? "#FF6B6B" : "#f7a600" }}>
                {message}
              </p>
            </div>

            {/* Bet Controls */}
            {!gameStarted && (
              <div className="mb-8">
                <p className="text-gray-400 mb-4">Select Bet Amount</p>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[10, 25, 50, 100].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setBet(amount)}
                      disabled={amount > credits}
                      className="py-3 rounded-lg font-semibold transition-all disabled:opacity-50"
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
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              {!gameStarted ? (
                <button
                  onClick={startGame}
                  disabled={credits < bet}
                  className="flex-1 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 disabled:opacity-50"
                  style={{
                    backgroundColor: "#f7a600",
                    color: "#1a0a2e",
                  }}
                >
                  DEAL
                </button>
              ) : !gameOver ? (
                <>
                  <button
                    onClick={hit}
                    className="flex-1 py-4 rounded-lg font-bold text-lg transition-all"
                    style={{
                      backgroundColor: "#f7a600",
                      color: "#1a0a2e",
                    }}
                  >
                    HIT
                  </button>
                  <button
                    onClick={stand}
                    className="flex-1 py-4 rounded-lg font-bold text-lg transition-all"
                    style={{
                      backgroundColor: "#2d1b4e",
                      color: "#f7a600",
                      border: "2px solid #f7a600",
                    }}
                  >
                    STAND
                  </button>
                </>
              ) : (
                <button
                  onClick={resetGame}
                  className="flex-1 py-4 rounded-lg font-bold text-lg transition-all"
                  style={{
                    backgroundColor: "#f7a600",
                    color: "#1a0a2e",
                  }}
                >
                  NEW GAME
                </button>
              )}
            </div>

            {/* Controls */}
            <div className="flex gap-4">
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
                  resetGame();
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

            {/* Rules */}
            <div className="mt-12 p-6 rounded-lg" style={{ backgroundColor: "#2d1b4e", border: "2px dashed #f7a600" }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#f7a600" }}>Game Rules</h3>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Get closer to 21 than the dealer without going over</li>
                <li>Face cards (J, Q, K) are worth 10 points</li>
                <li>Aces are worth 11 or 1 point (automatic)</li>
                <li>Blackjack (21 on first two cards) pays 2.5x your bet</li>
                <li>Regular win pays 2x your bet</li>
                <li>Push (tie) returns your bet</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
