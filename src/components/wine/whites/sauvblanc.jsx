import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SauvBlanc() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const SauvBlancWines = [
    {
      name: "La Crema, Sonoma Coast, CA 2023",
      description:
        "Medium boldness, dry, with medium to high acidity. Notes of tree fruits, citrus, and vegetal (things like fresh cut grass and straw). Fresh and light with a quick finish.",
      price: "$60",
    },
    {
      name: "Hubert Brochard Sancerre, Tradition Loire, France 2023",
      description:
        "Light to medium body, dry, with medium to high acidity. Heavy notes of citrus, tree fruits, and finishes with earthy and mineraly notes and a tart flavor.",
      price: "$90",
    },
    {
      name: "Echo Bay Marlborough, New Zealand 2023",
      description:
        "Light to medium bodied and boldness, dry, high acidity. Notes of citrus (grapefruit, lemon, orange), tropical flavors, and tree fruits. Traditional New Zealand Sauvignon Blanc.",
      price: "$65",
    },
    {
      name: "Fowles Winery Farm to Table, Victoria, Australia 2022",
      description:
        "Fruit forward yet fresh, with lively flavours of passionfruit, mixed tropical fruits and a burst of lemon citrus with a refreshing, dry, green apple crunch on the finish.",
      price: "$60",
    },
    {
      name: "Round Pond, Napa Valley, CA 2023",
      description:
        "Distinctive touch of salinity, bright zesty flavors of citrus, passionfruit, lychee, and basil. Subtle and understated, yet very balanced with nice acidity.",
      price: "$75",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-white text-white py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-14">
        <h1 className="text-5xl font-serif font-bold text-emerald-400 border-b-4 border-emerald-400 pb-2 drop-shadow-md text-center">
          Sauvignon Blanc
        </h1>
        <div className="bg-black bg-opacity-60 text-white rounded-2xl shadow-lg p-6 space-y-4 border border-emerald-400 mt-10">
  <h2 className="text-3xl font-serif font-bold text-emerald-300 mb-2">About Sauvignon Blanc</h2>

  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    Sauvignon Blanc is a crisp, bright, and typically dry white wine often exhibiting herbaceous notes. Old World styles (like Sancerre from France) are lighter-bodied with high acidity, while New World styles (such as from New Zealand) offer medium body and tropical flavors.
  </p>
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    Common tasting notes include grapefruit, lemon, passionfruit, and occasionally smoky nuances if barrel-aged.
  </p>
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    <span className="text-emerald-400 font-semibold">Food Pairings:</span> Great with spicy dishes, pork, shellfish, vegetable-based meals, herb-based sauces, and soft cheeses. Menu recommendations include salmon, shrimp fra diavolo, clam pasta, and veal piccata.
  </p>
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    Always serve Sauvignon Blanc chilled, accompanied by an ice bucket when serving tableside.
  </p>

  <div className="mt-4 space-y-2">
    {[
      { label: "Body", value: 2 },
      { label: "Acidity", value: 5 },
      { label: "Sweetness", value: 1.5 },
      { label: "Tannin", value: 1 },
      { label: "Alcohol", value: 3 }
    ].map(({ label, value }) => (
      <div key={label}>
        <div className="flex justify-between text-xs font-mono text-gray-400 mb-1">
          <span>{label}</span>
          <span>{value} / 5</span>
        </div>
        <div className="w-full h-2 bg-gray-700 rounded-full">
          <div
            className="h-2 bg-emerald-400 rounded-full"
            style={{ width: `${(value / 5) * 100}%` }}
          />
        </div>
      </div>
    ))}
  </div>
</div>

        <div className="space-y-6">
          {SauvBlancWines.map((wine, index) => (
            <div
              key={index}
              className="bg-gray-900 bg-opacity-80 p-6 rounded-xl shadow-lg border border-emerald-500"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full text-left focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{wine.name}</h3>
                  <span
                    className={`text-xl font-bold transition ${
                      expandedIndex === index
                        ? "text-emerald-400"
                        : "text-gray-300"
                    }`}
                  >
                    {expandedIndex === index ? "−" : "+"}
                  </span>
                </div>
              </button>
              {expandedIndex === index && (
                <p className="text-gray-300 text-sm mt-3 leading-relaxed transition duration-300 ease-in-out">
                  {wine.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center pt-10">
          <Link
            to="/wine/white"
            className="inline-block text-sm font-semibold text-emerald-300 hover:text-white border border-emerald-300 px-4 py-2 rounded-full transition duration-200"
          >
            ← Back to White Wines
          </Link>
        </div>
      </div>
    </div>
  );
}
