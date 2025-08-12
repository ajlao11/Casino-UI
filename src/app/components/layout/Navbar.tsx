"use client";
import React from "react";

const categories = [
  { label: "Top Games", key: "top" },
  { label: "New Games", key: "new" },
  { label: "Slots", key: "slots" },
  { label: "Jackpots", key: "jackpots" },
  { label: "Live", key: "live" },
  { label: "Blackjack", key: "blackjack" },
  { label: "Roulette", key: "roulette" },
  { label: "Table", key: "table" },
  { label: "Poker", key: "poker" },
  { label: "Other", key: "other" },
];

export default function Navbar({ activeCategory, onCategoryChange }: { activeCategory: string; onCategoryChange: (key: string) => void }) {
  return (
    <nav className="bg-black text-white px-4 py-2 flex gap-4 overflow-x-auto">
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onCategoryChange(cat.key)}
          className={`px-4 py-2 whitespace-nowrap rounded hover:cursor-pointer ${
            activeCategory === cat.key ? "bg-green-500 text-black " : "hover:text-green-500 "
          }`}
        >
          {cat.label}
        </button>
      ))}
    </nav>
  );
}
