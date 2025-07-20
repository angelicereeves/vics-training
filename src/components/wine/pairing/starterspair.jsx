import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function StartersPair() {
  const starterPairings = [
    {
      dish: "Nippers",
      wines: [
        "Chianti (balances acidity in marinara)",
        "Prosecco Brut (cleanses palate from garlic butter)"
      ]
    },
    {
      dish: "Pop’s Meatballs",
      wines: [
        "Chianti (classic tomato sauce pairing)",
        "Pinot Noir (light tannins complement the meat and ricotta)"
      ]
    },
    {
      dish: "Vic’s Signature Chicken",
      wines: [
        "Riesling (balances spice and funk of gorgonzola)",
        "Rosé Prosecco Brut (refreshing contrast)"
      ]
    },
    {
      dish: "Crispy Eggplant",
      wines: [
        "Chianti (matches tomato sauce and olives)",
        "Gavi di Gavi (cuts through fried texture)"
      ]
    },
    {
      dish: "Italian Sausage",
      wines: [
        "Pinot Noir (earthy notes complement sausage)",
        "Riesling (off-dry balances acidity & spice)"
      ]
    },
    {
      dish: "Burrata with Heirloom Tomatoes",
      wines: [
        "Pinot Grigio (light, crisp contrast)",
        "Rosé Prosecco Brut (adds refreshing acidity)"
      ]
    },
    {
      dish: "Crab Cakes",
      wines: [
        "Riesling (enhances sweetness of red pepper)",
        "Sauvignon Blanc (cuts through richness)"
      ]
    },
    {
      dish: "Shrimp Cocktail",
      wines: [
        "Sauvignon Blanc (bright, citrusy)",
        "Prosecco Brut (crisp and refreshing)"
      ]
    },
    {
      dish: "Eggplant Crostini",
      wines: [
        "Chianti (acidity complements tomato & cheese)",
        "Pinot Noir (soft tannins balance flavors)"
      ]
    },
    {
      dish: "Zucchini Blossoms",
      wines: [
        "Pinot Grigio (light and crisp)",
        "Rosé Prosecco Brut (refreshing and slightly floral)"
      ]
    },
    {
      dish: "Tempura Lobster Tail",
      wines: [
        "Gavi di Gavi (bright acidity enhances delicate seafood)",
        "Prosecco Brut (light and refreshing, balances batter)"
      ]
    }
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
        Starter Pairings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {starterPairings.map((item, index) => (
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
                {item.wines.map((wine, i) => (
                  <li key={i}>{wine}</li>
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

