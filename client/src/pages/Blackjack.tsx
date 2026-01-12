import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Blackjack Game Page - Casinous Template Design
 * Premium blackjack card game with dealer mechanics
 */

interface Card {
  suit: string;
  value: string;
  numValue: number;
}

export default function Blackjack() {
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(50);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerCards, setPlayerCards] = useState<Card[]>([]);
  const [dealerCards, setDealerCards] = useState<Card[]>([]);
  const [message, setMessage] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  const getCardNumValue = (value: string): number => {
    if (value === "A") return 11;
    if (["J", "Q", "K"].includes(value)) return 10;
    return parseInt(value);
  };

  const generateCard = (): Card => {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const value = values[Math.floor(Math.random() * values.length)];
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

  const playSound = (type: "deal" | "win" | "lose") => {
    if (!soundEnabled) return;

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (type === "deal") {
      oscillator.frequency.value = 600;
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } else if (type === "win") {
      oscillator.frequency.value = 800;
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.8);
    } else {
      oscillator.frequency.value = 300;
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    }
  };

  const startGame = () => {
    if (bet > balance) {
      setMessage("Insufficient balance");
      return;
    }

    const newPlayerCards = [generateCard(), generateCard()];
    const newDealerCards = [generateCard(), generateCard()];

    setPlayerCards(newPlayerCards);
    setDealerCards(newDealerCards);
    setGameStarted(true);
    setGameOver(false);
    setMessage("");
    playSound("deal");
  };

  const hit = () => {
    const newCards = [...playerCards, generateCard()];
    setPlayerCards(newCards);
    playSound("deal");

    const playerTotal = calculateHand(newCards);
    if (playerTotal > 21) {
      setGameOver(true);
      setBalance(balance - bet);
      setMessage("Bust! You went over 21. You lost.");
      playSound("lose");
    }
  };

  const stand = () => {
    let newDealerCards = [...dealerCards];
    let dealerTotal = calculateHand(newDealerCards);

    while (dealerTotal < 17) {
      newDealerCards.push(generateCard());
      dealerTotal = calculateHand(newDealerCards);
    }

    setDealerCards(newDealerCards);

    const playerTotal = calculateHand(playerCards);
    const finalDealerTotal = calculateHand(newDealerCards);

    let result = "";
    let winAmount = 0;

    if (finalDealerTotal > 21) {
      result = "Dealer bust! You won!";
      winAmount = bet * 2;
      playSound("win");
    } else if (playerTotal > finalDealerTotal) {
      result = "You won!";
      winAmount = bet * 2;
      playSound("win");
    } else if (playerTotal === finalDealerTotal) {
      result = "Push! It's a tie.";
      winAmount = bet;
      playSound("deal");
    } else {
      result = "Dealer won. You lost.";
      winAmount = 0;
      playSound("lose");
    }

    setMessage(result);
    setBalance(balance - bet + winAmount);
    setGameOver(true);
  };

  const reset = () => {
    setPlayerCards([]);
    setDealerCards([]);
    setGameStarted(false);
    setGameOver(false);
    setMessage("");
  };

  const CardDisplay = ({ card }: { card: Card }) => (
    <div
      className="w-20 h-28 rounded-lg flex items-center justify-center font-bold text-lg"
      style={{
        backgroundColor: ["Hearts", "Diamonds"].includes(card.suit) ? "#fff" : "#1a0a2e",
        color: ["Hearts", "Diamonds"].includes(card.suit) ? "#ef4444" : "#fff",
        border: `2px solid ${["Hearts", "Diamonds"].includes(card.suit) ? "#ef4444" : "#fff"}`,
      }}
    >
      <div className="text-center">
        <div>{card.value}</div>
        <div className="text-xs">{card.suit[0]}</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1a0a2e" }}>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative min-h-[40vh] flex items-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/blackjack-game-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(26, 10, 46, 0.95), rgba(26, 10, 46, 0.7))" }} />
          <div className="container relative z-10 py-16">
            <h1 className="heading-casino text-5xl md:text-6xl text-white mb-4">
              Premium <span style={{ color: "#f7a600" }}>Blackjack</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Beat the dealer and reach 21. Strategy and luck combine for the ultimate card game.
            </p>
          </div>
        </section>

        {/* Game Section */}
        <section className="py-20" style={{ backgroundColor: "#1a0a2e" }}>
          <div className="container">
            <div className="card-casino p-8 max-w-4xl mx-auto">
              {/* Dealer Hand */}
              <div className="mb-12">
                <h3 className="text-gray-400 mb-4 uppercase tracking-wider">Dealer Hand</h3>
                <div className="flex gap-4 items-center">
                  <div className="flex gap-2">
                    {dealerCards.map((card, idx) => (
                      <CardDisplay key={idx} card={card} />
                    ))}
                  </div>
                  {gameStarted && dealerCards.length > 0 && (
                    <div className="ml-4">
                      <p className="text-gray-400 text-sm">Total</p>
                      <p className="text-2xl font-bold" style={{ color: "#f7a600" }}>
                        {gameOver ? calculateHand(dealerCards) : "?"}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Player Hand */}
              <div className="mb-12 pb-12 border-b border-gray-700">
                <h3 className="text-gray-400 mb-4 uppercase tracking-wider">Your Hand</h3>
                <div className="flex gap-4 items-center">
                  <div className="flex gap-2">
                    {playerCards.map((card, idx) => (
                      <CardDisplay key={idx} card={card} />
                    ))}
                  </div>
                  {gameStarted && playerCards.length > 0 && (
                    <div className="ml-4">
                      <p className="text-gray-400 text-sm">Total</p>
                      <p className="text-2xl font-bold" style={{ color: "#f7a600" }}>
                        {calculateHand(playerCards)}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Left: Bet and Balance */}
                <div>
                  <div className="mb-6">
                    <p className="text-gray-400 mb-2">Current Balance</p>
                    <p className="text-3xl font-bold" style={{ color: "#f7a600" }}>
                      ${balance}
                    </p>
                  </div>

                  {!gameStarted && (
                    <div>
                      <label className="text-gray-400 block mb-3">Bet Amount: ${bet}</label>
                      <input
                        type="range"
                        min="10"
                        max={balance}
                        step="10"
                        value={bet}
                        onChange={(e) => setBet(Number(e.target.value))}
                        className="w-full mb-3"
                        style={{ accentColor: "#f7a600" }}
                      />
                      <div className="flex gap-2">
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
                  )}
                </div>

                {/* Right: Game Actions */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-700">
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

                  {!gameStarted ? (
                    <button
                      onClick={startGame}
                      className="btn-casino text-lg py-4"
                    >
                      Deal Cards
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={hit}
                        disabled={gameOver}
                        className="btn-casino text-lg py-3 disabled:opacity-50"
                      >
                        Hit
                      </button>
                      <button
                        onClick={stand}
                        disabled={gameOver}
                        className="btn-casino-outline text-lg py-3 disabled:opacity-50"
                      >
                        Stand
                      </button>
                      {gameOver && (
                        <button
                          onClick={reset}
                          className="btn-casino text-lg py-3"
                        >
                          New Game
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Message */}
              {message && (
                <div
                  className="p-4 rounded-lg text-center font-semibold text-lg"
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
        </section>

        {/* Rules Section */}
        <section className="py-16" style={{ backgroundColor: "#2d1b4e" }}>
          <div className="container">
            <h2 className="heading-casino text-3xl md:text-4xl text-white mb-8 text-center">
              Game <span style={{ color: "#f7a600" }}>Rules</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-casino p-6">
                <h3 className="font-display font-bold text-lg text-white mb-3">Objective</h3>
                <p className="text-gray-400 text-sm">
                  Get a hand value closer to 21 than the dealer without going over 21.
                </p>
              </div>
              <div className="card-casino p-6">
                <h3 className="font-display font-bold text-lg text-white mb-3">Card Values</h3>
                <p className="text-gray-400 text-sm">
                  Number cards are worth their face value. Face cards are worth 10. Aces are worth 1 or 11.
                </p>
              </div>
              <div className="card-casino p-6">
                <h3 className="font-display font-bold text-lg text-white mb-3">Payout</h3>
                <p className="text-gray-400 text-sm">
                  Win: 2x your bet. Tie (Push): Get your bet back. Lose: Lose your bet.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
