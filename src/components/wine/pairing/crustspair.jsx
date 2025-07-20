import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CrustsPair() {
  const crustPairings = [
    {
      dish: "Classic Crust",
      pairings: [
        "Chianti (acidity complements tomato sauce and cheese)",
      "Prosecco Brut (light and refreshing contrast)",
    ],
  },
  {
    dish: "Sausage & Peppers",
    pairings: [
      "Pinot Noir (earthy notes complement sausage and onions)",
      "Riesling (off-dry balances acidity and spice)",
    ],
  },
  {
    dish: "Chopped Clam & Pancetta",
    pairings: [
      "Gavi di Gavi (bright acidity enhances seafood and olive oil)",
      "Sauvignon Blanc (crisp and herbal, complements arugula)",
    ],
  },
  {
    dish: "Roasted Veggie",
    pairings: [
      "Pinot Grigio (light and refreshing)",
      "Rosé Prosecco Brut (enhances freshness of veggies and arugula)",
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
        Crust Pairings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {crustPairings.map((item, index) => (
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