import React, { useState } from "react";
import { Link } from "react-router-dom";
import RuffinoProsecco from "../../../assets/wineImages/ruffinoprosecco.jpg";
import RuffinoProseccoRose from "../../../assets/wineImages/ruffinoproseccorose.jpg";
import PizzalatoSparklingMoscato from "../../../assets/wineImages/pizzolatospkmoscato.jpg";
import PizzalatoSparklingPinotGrigio from "../../../assets/wineImages/pizzolatospkpinot.jpg";
import BGpic from "../../../assets/BGimages/bar14.jpg";

export default function SparklingsBTG() {
  const sparklingWines = [
    {
      name: "Ruffino Prosecco Brut",
      image: RuffinoProsecco,
      description:
        "Crisp, clean, and delicate with fine bubbles on the palate. Vibrant flavors of apples and peaches lead to a pleasant finish.",
      profile: "Dry, not sweet, very acidic, light body.",
      pairing: "Pairs with shellfish and salty foods.",
    },
    {
      name: "Ruffino Prosecco Brut Rosé",
      image: RuffinoProseccoRose,
      description:
        "Made with Glera and Pinot Noir grapes. Hints of strawberry. Crisp, bright, and sunny.",
      profile: "Dry, not sweet, very acidic, light body.",
      pairing: "Pairs well with seafood, salty, and spicy foods.",
    },
    {
      name: "Pizzalato Sparkling Moscato",
      image: PizzalatoSparklingMoscato,
      description:
        "Aromas of honeysuckle, apricot, and citrus. Smooth, refreshing finish with peach nectar and honey.",
      profile: "Sweet, medium-to-full body, floral and balanced.",
      pairing: "Pairs with herbal/spicy cheeses like Gorgonzola. Great dessert wine.",
    },
    {
      name: "Pizzalato Sparkling Pinot Grigio",
      image: PizzalatoSparklingPinotGrigio,
      description:
        "Spice, lemon, peach, white flower. Intense and elegant with floral and yeasty notes.",
      profile: "Extra dry, juicy palate, vibrant acidity.",
      pairing:
        "Pairs with seafood, creamy dishes, light pasta. Acidity cuts richness beautifully.",
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
      <div className="max-w-5xl mx-auto space-y-12 back">
        <h1 className="text-4xl font-mono font-bold text-emerald-400 border-b border-emerald-400 pb-4">
          Sparkling Wines by the Glass
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-400">
          Explore our sparkling selections offered by the glass — perfect to start your meal or elevate a celebration.
        </p>

        <div className="space-y-6 mt-8">
          {sparklingWines.map((wine, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-60 rounded-xl border border-emerald-600 shadow-lg"
            >
              <button
  onClick={() => toggleExpand(index)}
  className="w-full flex justify-between items-center p-4 text-xl font-mono font-bold text-emerald-300"
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
          ← Back to By the Glass Menu
        </Link>
      </div>
    </div>
  );
}
