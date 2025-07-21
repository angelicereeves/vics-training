import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/food2.jpg";

export default function RedPair() {
const redspairings = [
  {
    wine: "Chianti",
    pairings: [
      "Spaghetti Pomodoro (classic pairing with tomato sauce)",
      "Italian Sub (balances cured meats and acidity)",
      "Sausage & Pepper Pasta (bold acidity complements rich sausage)"
    ]
  },
  {
    wine: "Pinot Noir",
    pairings: [
      "Meatballs (light tannins balance the dish)",
      "Roasted Beet Salad (earthy notes complement beets)",
      "Veal Piccata (light tannins and fruitiness match the lemon sauce)"
    ]
  },
  {
    wine: "Cabernet Sauvignon",
    pairings: [
      "Bone-in Ribeye (bold tannins match rich steak)",
      "Burger (classic pairing with red meat)",
      "Skirt Steak (deep fruit and tannins match umami flavors)"
    ]
  },
  {
    wine: "Red Blend (Merlot-driven)",
    pairings: [
      "Bolognese (smooth tannins complement the rich sauce)",
      "Tiramisu (rich, dark fruit notes enhance creamy dessert)",
      "Braised Pork (soft tannins match slow-cooked flavors)"
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
        Red Wine Pairings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {redspairings.map((item, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-60 shadow-lg rounded-xl p-6 border border-emerald-500"
          >
            <button
              className="text-left w-full flex justify-between items-center"
              onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
            >
              <h2 className="text-2xl font-bold text-emerald-300 font-mono">
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

  