import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/food8.jpg";

export default function PastaPair() {
  const pastapairings = [
    {
      dish: "Spaghetti Pomodoro",
      pairings: [
        "Chianti (classic tomato sauce pairing)",
        "Pinot Noir (light and fruity complement)"
      ]
    },
    {
      dish: "Pappardelle Bolognese",
      pairings: [
        "Chianti (acidity cuts through richness)",
        "Red Blend (Merlot-driven for a smoother option)"
      ]
    },
    {
      dish: "Rigatoni Carbonara",
      pairings: [
        "Chardonnay (creamy texture complements sauce)",
        "Pinot Grigio (light acidity balances richness)"
      ]
    },
    {
      dish: "Tagliolini and Clams",
      pairings: [
        "Gavi di Gavi (bright acidity enhances seafood)",
        "Sauvignon Blanc (crisp and mineral-driven)"
      ]
    },
    {
      dish: "Shrimp Fra Diavolo",
      pairings: [
        "Riesling (off-dry balances spice)",
        "Prosecco Brut (refreshing contrast)"
      ]
    },
    {
      dish: "Rotini Primavera",
      pairings: [
        "Chianti (bright acidity complements tomato and veggies)",
        "Pinot Grigio (light and fresh)"
      ]
    },
    {
      dish: "Sausage Cacciatore",
      pairings: [
        "Chianti (spice and acidity match well)",
        "Pinot Noir (light tannins complement sausage)"
      ]
    },
    {
      dish: "Aglio e Olio Pasta",
      pairings: [
        "Pinot Grigio (light and crisp, complements garlic)",
        "Sauvignon Blanc (herbaceous and refreshing)"
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
        Pasta Pairings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pastapairings.map((item, index) => (
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

  