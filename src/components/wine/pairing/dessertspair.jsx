import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/food16.jpg";

export default function DessertsPair() {
const dessertpairings = [
    {
      dish: "Bread Pudding",
      pairings: [
        "Sparkling Moscato (sweet and lightly effervescent)",
        "Chardonnay (buttery notes complement bourbon vanilla)"
      ]
    },
    {
      dish: "Lemon & Whipped Ricotta Crema",
      pairings: [
        "Riesling (off-dry balances citrus and honey)",
        "Prosecco Brut (light and refreshing contrast)"
      ]
    },
    {
      dish: "Tiramisu",
      pairings: [
        "Sparkling Moscato (complements creamy and coffee flavors)",
        "Red Blend (Merlot-driven for smooth richness)"
      ]
    },
    {
      dish: "Chocolate Mousse Cake",
      pairings: [
        "Cabernet Sauvignon (dark fruit and tannins enhance chocolate)",
        "Sparkling Moscato (sweet contrast)"
      ]
    },
    {
      dish: "Cheesecake with Berry Compote",
      pairings: [
        "Sparkling Moscato (enhances fruit and creaminess)",
        "Pinot Noir (light fruitiness complements berries)"
      ]
    },
    {
      dish: "Carrot Cake",
      pairings: [
        "Riesling (off-dry sweetness enhances spice)",
        "Sparkling Moscato (bright and sweet balance)"
      ]
    },
    {
      dish: "Mango, Lemon & Watermelon Mixed Sorbet",
      pairings: [
        "Prosecco Brut (zesty, refreshing match)",
        "Sauvignon Blanc (crisp acidity enhances fruit flavors)"
      ]
    }
  ];



const [expandedIndex, setExpandedIndex] = useState(null);

return (
       <div
                     className="min-h-screen bg-cover bg-center bg-no-repeat text-white relative"
                     style={{ backgroundImage: `url(${BGpic})` }}
                   >
             <div className="max-w-5xl mx-auto space-y-14 py-10">
        <div className="text-center pt-10">
  <Link
    to="/pairing"
    className="inline-block px-6 py-3 text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl font-mono font-bold shadow-md transition"
  >
    ⬅ Back to Pairing Home
  </Link>
</div>

      <h1 className="text-4xl font-mono font-bold text-center text-emerald-400 border-b border-emerald-600 pb-4 drop-shadow-sm">
        Desserts Pairings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dessertpairings.map((item, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-60 shadow-lg rounded-xl p-6 border border-emerald-500"
          >
            <button
              className="text-left w-full flex justify-between items-center"
              onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
            >
              <h2 className="text-2xl font-bold text-emerald-300 font-mono">
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



 