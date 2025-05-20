import React, { useState } from "react";
import { BadgeCheck, Trophy, Star } from "lucide-react";

const iconMap = {
  Trophy: Trophy,
  Star: Star,
  BadgeCheck: BadgeCheck,
};

const characters = [
  {
    id: 1,
    name: "Aria",
    image: "https://via.placeholder.com/300x180.png?text=Aria",
    emblems: [
      { type: "Trophy", label: "Champion" },
      { type: "Star", label: "MVP" },
    ],
  },
  {
    id: 2,
    name: "Blaze",
    image: "https://via.placeholder.com/300x180.png?text=Blaze",
    emblems: [{ type: "BadgeCheck", label: "Veteran" }],
  },
  {
    id: 3,
    name: "Nova",
    image: "https://via.placeholder.com/300x180.png?text=Nova",
    emblems: [
      { type: "Trophy", label: "Elite" },
      { type: "Star", label: "Strategist" },
    ],
  },
];

export default function App() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Character Selection
      </h1>
      <div className="text-center text-4xl font-extrabold text-blue-600 mb-6">
        Tailwind CSS is working if this text is big and blue!
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {characters.map((char) => (
          <div
            key={char.id}
            className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform bg-white"
            onMouseEnter={() => setHoveredId(char.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={char.image}
              alt={char.name}
              className="w-full h-48 object-cover"
            />
            <div className="text-center p-4">
              <h3 className="text-lg font-bold">{char.name}</h3>
            </div>

            {hoveredId === char.id && (
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center space-x-4 transition-all">
                {char.emblems.map((emblem, idx) => {
                  const Icon = iconMap[emblem.type];
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-white"
                      title={emblem.label}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-xs mt-1">{emblem.label}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
