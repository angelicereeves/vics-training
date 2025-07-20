import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HoldMePair() {
  const holdMePairings = [
    {
      dish: "Vic’s Signature Blend Burger",
      pairings: [
        "Cabernet Sauvignon (bold tannins complement rich beef)",
      "Red Blend (Merlot-driven for a smoother option)",
    ],
  },
  {
    dish: "Corned Beef Sandwich",
    pairings: [
      "Riesling (off-dry balances saltiness)",
      "Pinot Noir (light tannins complement beef)",
    ],
  },
  {
    dish: "Crispy Eggplant Sandwich",
    pairings: [
      "Chianti (acidity pairs well with tomato sauce)",
      "Pinot Grigio (crisp contrast to fried eggplant)",
    ],
  },
  {
    dish: "Chicken Cutlet",
    pairings: [
      "Sauvignon Blanc (zesty acidity enhances vinaigrette)",
      "Rosé Prosecco Brut (refreshing and crisp)",
    ],
  },
  {
    dish: "Dip on the strip",
    pairings: [
      "Cabernet Sauvignon (bold enough for rich beef)",
      "Pinot Noir (lighter, earthy contrast)",
    ],
  },
  {
    dish: "Italian Sub",
    pairings: [
      "Chianti (balances cured meats and acidity)",
      "Prosecco Brut (cleanses palate from fats)",
    ],
  },
  {
    dish: "Tavern Club",
    pairings: [
      "Pinot Grigio (refreshing and light)",
      "Rosé Prosecco Brut (adds brightness to smoky bacon)",
    ],
  },
];

const [expandedIndex, setExpandedIndex] = useState(null);

return (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-emerald-900 text-white py-16 px-4">
    <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center pt-10">
  <Link
    to="/pairing"
    className="inline-block px-6 py-3 text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl font-mono font-bold shadow-md transition"
  >
    ⬅ Back to Pairing Home
  </Link>
</div>

      <h1 className="text-4xl font-serif font-bold text-center text-emerald-400 border-b border-emerald-600 pb-4 drop-shadow-sm">
        Hold Me Pairings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {holdMePairings.map((item, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-60 shadow-lg rounded-xl p-6 border border-emerald-500"
          >
            <button
              className="text-left w-full flex justify-between items-center"
              onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
            >
              <h2 className="text-2xl font-bold text-emerald-300 font-serif">
                {item.dish}
              </h2>
              <span
                className={`text-xl font-bold transition ${
                  expandedIndex === index ? "text-emerald-400" : "text-gray-300"
                }`}
              >
                {expandedIndex === index ? "−" : "+"}
              </span>
            </button>
            {expandedIndex === index && (
              <ul className="mt-4 list-disc pl-6 text-gray-300 font-mono space-y-1">
                {item.pairings.map((pairing, i) => (
                  <li key={i}>{pairing}</li>
                ))}     
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);
}


