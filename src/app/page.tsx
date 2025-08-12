"use client";

import { useState } from "react";
import { games } from "./data/gameData";
import Navbar from "./components/layout/Navbar";
import GameCard from "./components/cards/GameCard";
import { jackpots } from "./data/jackpotData";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("new");

  const filteredGames = games.filter((game) => {
    if (activeCategory === "other") {
      // Show games with 'fun' or 'virtual' or anything else not in your main categories
      return (
        game.categories.includes("ball") ||
        game.categories.includes("fun") ||
        game.categories.includes("virtual")
      );
    }
    return game.categories.includes(activeCategory);
  });



  // Helper to find jackpot for a game
  const getJackpot = (gameId: string) => {
    const jackpot = jackpots.find((j) => j.game === gameId);
    return jackpot ? `£${jackpot.amount.toLocaleString()}` : undefined;
  };

  return (
    <div>
      <Navbar
        activeCategory={activeCategory}
        onCategoryChange={(cat) => setActiveCategory(cat)}
      />
      <main className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            title={game.name}
            image={`https:${game.image}`}
            isNew={game.categories.includes("new")}
            isTop={game.categories.includes("top")}
            jackpot={getJackpot(game.id)}
          />
        ))}
        {filteredGames.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-10 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400 mb-3 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-lg font-medium text-gray-300">
              No games found
            </p>
            <p className="text-sm text-gray-500">
              Please check back later for new releases!
            </p>
          </div>
        )}

      </main>
    </div>
  );
}
