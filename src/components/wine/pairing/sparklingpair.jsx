import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SparklingPair() {
  const sparklingpairings = [
    {
      wine: "Ruffino Prosecco",
      pairings: [
        "Shrimp Cocktail (light, crisp pairing with chilled seafood)",
        "Sorbet (refreshing match for fruit flavors)",
        "Burrata (bubbles cut through creamy burrata)"
      ]
    },
    {
      wine: "Ruffino Prosecco Rosé",
      pairings: [
        "Chopped Antipasto Salad (refreshing contrast to bold flavors)",
        "Crispy Eggplant (balances the dish’s acidity)",
        "Italian Sausage (bubbles balance spice)"
      ]
    },
    {
      wine: "Pizzolato Sparkling Moscato",
      pairings: [
        "Tiramisu (sweetness complements creamy coffee flavors)",
        "Chocolate Mousse Cake (soft effervescence contrasts with rich chocolate)",
        "Lemon & Whipped Ricotta Crema (light sweetness enhances citrus and honey)"
      ]
    },
    {
      wine: "Pizzolato Sparkling Pinot Grigio",
      pairings: [
        "Tomato Soup & Fried Grilled Cheese (cuts through richness)",
        "Mac and Cheese (refreshing balance to creamy dish)",
        "Eggplant Crostini (enhances smoky eggplant and creamy cheese)"
      ]
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
        Sparkling Wine Pairings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sparklingpairings.map((item, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-60 shadow-lg rounded-xl p-6 border border-emerald-500"
          >
            <button
              className="text-left w-full flex justify-between items-center"
              onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
            >
              <h2 className="text-2xl font-bold text-emerald-300 font-serif">
                {item.wine}
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

  