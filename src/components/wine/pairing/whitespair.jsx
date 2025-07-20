import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function WhitesPair() {
const whitespairings = [
  {
    wine: "Capolsado Pinot Grigio",
    pairings: [
      "Aglio e Olio Pasta (light, crisp acidity complements garlic and olive oil)",
      "Roasted Veggie Crust (refreshing contrast to olive oil and veggies)",
      "Shrimp Cocktail (clean, crisp flavors enhance chilled seafood)"
    ]
  },
  {
    wine: "Selbach Incline Riesling",
    pairings: [
      "Vic’s Signature Chicken (off-dry sweetness balances spice and funky cheese)",
      "Shrimp Fra Diavolo (balances the heat of the dish)",
      "Roasted Beet Salad (acidity complements earthy beets and salty feta)"
    ]
  },
  {
    wine: "Kendall Jackson Chardonnay",
    pairings: [
      "Carbonara (creamy texture complements rich sauce)",
      "Bread Pudding (buttery notes enhance dessert)",
      "Half Roasted Chicken (oak and richness match the flavors)"
    ]
  },
  {
    wine: "Hedges CMS Sauvignon Blanc",
    pairings: [
      "Clam & Angel Hair Pasta (crisp, mineral-driven flavors enhance seafood)",
      "House Salad with Lemon Vinaigrette (zesty acidity pairs well with dressing)",
      "Zucchini Blossoms (bright acidity cuts through richness)"
    ]
  },
  {
    wine: "Villa Sparina Gavi di Gavi",
    pairings: [
      "Tempura Lobster Tail (bright acidity enhances delicate seafood)",
      "Veal Piccata (crisp, citrusy notes complement the sauce)",
      "Clam & Pancetta Crust (matches seafood and salty pancetta)"
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
        White Wine Pairings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {whitespairings.map((item, index) => (
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

  