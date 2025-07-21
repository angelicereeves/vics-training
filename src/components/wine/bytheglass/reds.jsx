import React, { useState } from "react";
import { Link } from "react-router-dom";
import JoshCab from "../../../assets/wineImages/joshcellars.jpg";
import VictoriaChianti from "../../../assets/wineImages/victoria.jpg";
import HessPinot from "../../../assets/wineImages/hesspinot.jpg";
import HedgesCMSRB from "../../../assets/wineImages/hedgescmsrb.jpg";
import BGpic from "../../../assets/BGimages/bar19.jpg";

export default function RedsBTG() {
  const redWines = [
    {
      name: "Josh Cellars Cabernet Sauvignon",
      image: JoshCab,
      description:
        "Blackberry, toasted hazelnut, and cinnamon, complemented by hints of vanilla and toasted oak.",
      profile: "Full-bodied, bold yet smooth.",
      pairing: "Pairs with red meats, pork dishes, red sauces, and chocolate desserts.",
    },
    {
      name: "Victoria Chianti",
      image: VictoriaChianti,
      description:
        "Notes of red and black cherry, violet, iris, wild herbs, and savory spice.",
      profile: "Full-bodied, fruity, with a hint of earthiness.",
      pairing: "Pairs well with fatty meats, tomato-based dishes, salmon, and swordfish.",
    },
    {
      name: "Hess Select Pinot Noir",
      image: HessPinot,
      description:
        "Aromas of raspberry, rose petals, and black tea. Rich red raspberries and black plum flavors.",
      profile: "Silky tannins, medium body, bright acidity.",
      pairing: "Pairs with salmon, chicken, pork, and shellfish. Avoid overly rich dishes.",
    },
    {
      name: "Hedges CMS Red Blend",
      image: HedgesCMSRB,
      description:
        "Merlot dominant blend with red raspberry, blackberry, cocoa, and dried herbs.",
      profile: "Medium-bodied, long finish, spice and fruit balanced.",
      pairing: "Pairs with steaks, braised pork, and red sauce dishes.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
            <div
              className="min-h-screen bg-cover bg-center bg-no-repeat text-white relative"
              style={{ backgroundImage: `url(${BGpic})` }}
            >
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-mono font-bold text-emerald-400 border-b border-emerald-400 pb-4">
          Red Wines by the Glass
        </h1>

        <p className="text-lg font-mono text-gray-300">
          Explore our red wine selection offered by the glass — bold, smooth, and food-friendly options for every palate.
        </p>

        <div className="space-y-6 mt-8">
          {redWines.map((wine, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-60 rounded-xl border border-emerald-600 shadow-lg"
            >
              <button
  onClick={() => toggleExpand(index)}
  className="w-full flex justify-between items-center p-4 font-mono text-xl font-bold text-emerald-300"
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
          className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold font-mono rounded-full shadow-lg hover:bg-emerald-100 transition"
        >
          ← Back to By the Glass Menu
        </Link>
      </div>
    </div>
  );
}
