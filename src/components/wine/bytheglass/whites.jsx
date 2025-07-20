import React, { useState } from "react";
import { Link } from "react-router-dom";
import KendallJackson from "../../../assets/wineImages/kendalljackson.jpg";
import VillaSparina from "../../../assets/wineImages/villasparina.jpg";
import Caposaldo from "../../../assets/wineImages/caposaldo.jpg";
import SelbachIncline from "../../../assets/wineImages/selbachincline.jpg";
import HedgesCMSSB from "../../../assets/wineImages/hedgescmssb.jpg";

export default function WhitesBTG() {
  const whiteWines = [
    {
      name: "Kendall Jackson Chardonnay",
      image: KendallJackson,
      description:
        "Barrel-fermented with toasted oak aroma, balanced by baked apples, tropical fruits, citrus, butter, and vanilla.",
      profile: "Medium-bodied, creamy texture, smooth finish.",
      pairing: "Pairs well with salmon, chicken, and white pastas.",
    },
    {
      name: "Villa Sparina Gavi di Gavi",
      image: VillaSparina,
      description:
        "Delicate aromas of dried pineapple and peach. Full and rich in flavor, yet mineral and refreshing.",
      profile: "Dry, crisp, and aromatic.",
      pairing: "Pairs well with fish, light starters, vegetables, and soft cheeses.",
    },
    {
      name: "Caposaldo Pinot Grigio",
      image: Caposaldo,
      description:
        "Fresh and easy-drinking with flavors of green apple, pear, and citrus with floral and mineral notes.",
      profile: "Light-bodied, bright acidity, clean finish.",
      pairing: "Pairs well with seafood, salads, light pasta dishes, and soft cheeses.",
    },
    {
      name: "Selbach Incline Riesling",
      image: SelbachIncline,
      description:
        "Fruity with vibrant acidity and slate-driven minerality. Green apple, citrus, pear, and floral notes with a wet stone character.",
      profile: "Slightly off-dry, clean and refreshing.",
      pairing: "Pairs well with fish, grilled vegetables, and pork.",
    },
    {
      name: "Hedges CMS Sauvignon Blanc",
      image: HedgesCMSSB,
      description:
        "Aromas of grapefruit, lemon zest, baked apples, and cinnamon with bright lemon-herb flavors.",
      profile: "Zesty, crisp acidity with a touch of herbaceousness.",
      pairing: "Pairs well with seafood, chicken, and crisp vegetable dishes.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-emerald-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-serif font-bold text-emerald-400 border-b border-emerald-400 pb-4">
          White Wines by the Glass
        </h1>

        <p className="text-lg font-mono text-gray-300">
          Discover our refreshing white wines served by the glass — perfect for seafood, salads, or sipping on their own.
        </p>

        <div className="space-y-6 mt-8">
          {whiteWines.map((wine, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-60 rounded-xl border border-emerald-600 shadow-lg"
            >
              <button
  onClick={() => toggleExpand(index)}
  className="w-full flex justify-between items-center p-4 font-serif text-xl font-bold text-emerald-300"
>
  <span className="flex-1 text-left">{wine.name}</span>
  <img src={wine.image} alt={wine.name} className="w-24 h-auto rounded-md shadow-md mx-4" />
  <span
    className={`text-xl font-bold transition ${
      expandedIndex === index ? "text-emerald-400" : "text-gray-300"
    }`}
  >
    {expandedIndex === index ? "−" : "+"}
  </span>
</button>
              {expandedIndex === index && (
                <div className="px-6 pb-6 text-gray-300 font-mono space-y-2">
                  <p><span className="text-emerald-300 font-bold">Tasting Notes:</span> {wine.description}</p>
                  <p><span className="text-emerald-300 font-bold">Profile:</span> {wine.profile}</p>
                  <p><span className="text-emerald-300 font-bold">Pairing Suggestions:</span> {wine.pairing}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <Link
          to="/bytheglass"
          className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition"
        >
          ← Back to By-the-Glass Menu
        </Link>
      </div>
    </div>
  );
}
