import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SidesPair() {
 const sidespairings = [
    {
      dish: "Shoestring or Sweet Potato Fries",
      pairings: [
        "Prosecco Brut (crisp and refreshing contrast)",
        "Pinot Grigio (light and easy-drinking)"
      ]
    },
    {
      dish: "Brussels Sprouts with Bacon",
      pairings: [
        "Pinot Noir (earthy notes complement sprouts and bacon)",
        "Rosé Prosecco Brut (refreshing contrast)"
      ]
    },
    {
      dish: "Ratatouille",
      pairings: [
        "Chianti (acidity complements tomato and veggies)",
        "Pinot Noir (light and earthy)"
      ]
    },
    {
      dish: "Roasted Red Potatoes",
      pairings: [
        "Chardonnay (buttery texture enhances potatoes)",
        "Pinot Grigio (light and crisp)"
      ]
    },
    {
      dish: "Grilled Veggies",
      pairings: [
        "Sauvignon Blanc (herbaceous notes complement veggies)",
        "Gavi di Gavi (bright and mineral-driven)"
      ]
    },
    {
      dish: "Mashed Potatoes",
      pairings: [
        "Chardonnay (rich, creamy pairing)",
        "Pinot Grigio (lighter contrast)"
      ]
    },
    {
      dish: "Mac and Cheese",
      pairings: [
        "Chardonnay (buttery notes complement cheese)",
        "Sparkling Pinot Grigio (refreshing contrast)"
      ]
    },
    {
      dish: "Sautéed Spinach",
      pairings: [
        "Sauvignon Blanc (bright acidity enhances greens)",
        "Pinot Noir (light earthiness complements spinach)"
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
        Side Dishes Pairings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sidespairings.map((item, index) => (
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



 