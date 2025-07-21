import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/food12.jpg";

export default function MainPair() {
  const mainpairings = [
    {
      dish: "Braised Pork",
      pairings: [
        "Chianti (acidity complements tomato sauce)",
        "Pinot Noir (light tannins balance the richness)"
      ]
    },
    {
      dish: "Veal Piccata",
      pairings: [
        "Gavi di Gavi (bright acidity complements lemony sauce)",
        "Sauvignon Blanc (crisp and herbal)"
      ]
    },
    {
      dish: "Crisp Half Roasted Chicken",
      pairings: [
        "Chardonnay (buttery notes enhance mac and cheese)",
        "Riesling (off-dry complements sweet glaze)"
      ]
    },
    {
      dish: "USDA Prime Skirt Steak",
      pairings: [
        "Cabernet Sauvignon (bold tannins match rich steak)",
        "Red Blend (Merlot-driven for a smoother option)"
      ]
    },
    {
      dish: "Atlantic Salmon",
      pairings: [
        "Sauvignon Blanc (bright acidity enhances sauce)",
        "Gavi di Gavi (refreshing minerality complements salmon)"
      ]
    },
    {
      dish: "Bone-in Ribeye",
      pairings: [
        "Cabernet Sauvignon (classic steak pairing)",
        "Red Blend (Merlot-driven for softer tannins)"
      ]
    },
    {
      dish: "Blackened Swordfish",
      pairings: [
        "Riesling (off-dry balances sweetness of sauce)",
        "Chardonnay (rich texture complements dish)"
      ]
    },
    {
      dish: "Branzino (Piccata Style)",
      pairings: [
        "Gavi di Gavi (zesty acidity enhances lemon sauce)",
        "Sauvignon Blanc (bright and crisp)"
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
        Main Dishes Pairings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mainpairings.map((item, index) => (
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

