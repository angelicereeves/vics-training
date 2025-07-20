import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PinotNoirs() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const pinotWines = [
    {
      name: "Albert Bichot, ‘Chassagne-Montrachet, Burgundy, France 2020",
      description:
        "Medium bodied, smooth taste, dry, higher acidity. Red fruits lead to a bright color, a deep ruby red. Aromas of candied fruit, cassis, and smoky notes. Robust body and good minerality with mature tannins. Long, aromatic finish. $120",
    },
    {
      name: "Emeritus ‘Hallberg Ranch’, Russian River Valley, CA 2020",
      description:
        "Cool fruit and spice, medium-light body, medium acidity, smooth mouthfeel. Notes of red and black fruits, forest floor, and oak spice. Balanced finesse and power. $95",
    },
    {
      name: "Flowers, Russian River Valley, CA 2023",
      description:
        "Medium bodied, refined and smooth tannins, semi-dry, medium acidity. Notes of red fruits, oak, vanilla, and earth. Juicy, elegant, and balanced with a nice finish. $110",
    },
    {
      name: "La Crema, Willamette Valley, OR 2022",
      description:
        "Medium body, smooth feel, dry, medium acidity. Fruit-forward with red fruits, hints of oak, vanilla, and minerals. Lighter and brighter than CA Pinots. $90",
    },
    {
      name: "The Prisoner Winery - Unshackled, Napa Valley, CA 2021",
      description:
        "Full bodied blend of 5 grapes. Aromas of red/black fruits and florals. Tastes of spices, herbs, stone fruits. Balanced acidity and tannins, subtle oak finish. $80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-white text-white py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-14">
        <h1 className="text-5xl font-serif font-bold text-emerald-400 border-b-4 border-emerald-400 pb-2 drop-shadow-md text-center">
          Pinot Noir
        </h1>
        <div className="bg-black bg-opacity-60 text-white rounded-2xl shadow-lg p-6 space-y-4 border border-emerald-400 mt-10">
  <h2 className="text-3xl font-serif font-bold text-emerald-300 mb-2">About Pinot Noir</h2>

  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    Pinot Noir is the world’s most popular lighter-bodied red wine. Typically velvety smooth, medium to full-bodied wines that are paler in color than their cabernet counterparts, leading to a lighter flavor and mouthfeel. The tannins are softer and more approachable, making Pinot Noirs a great starting point in red wine for many people. Guests who are somewhat put off by red wines due to high tannins and very dry mouthfeel may enjoy some lighter Pinot Noirs.
  </p>

  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    High acidity and heavy influences of red fruits such as strawberry, cherry, plum, raspberry, and cranberry lead to a juicy wine. These fruit-forward flavors meld with floral notes, oak, vanilla, mushroom, stone, and earthy tones.
  </p>

  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    Pinot Noir is mainly produced in California, but the original home of the Pinot Noir grape is Burgundy, France. Grapes from this region flourish in the very similar soils found in areas of California such as the Russian River Valley. The Willamette Valley in Oregon is now producing some of the best Pinot Noirs to come out of the USA due to the strikingly similar terroir to that of Burgundy, France.
  </p>

  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    <span className="text-emerald-400 font-semibold">Food Pairings:</span> Foods that pair well with Pinot Noirs include deep umami flavors, herbs, red fruits, poultry, veal, mushrooms, and pork dishes.
  </p>

  <div className="mt-4 space-y-2">
    {[
      { label: "Body", value: 2 },
      { label: "Acidity", value: 4 },
      { label: "Sweetness", value: 1 },
      { label: "Tannin", value: 2 },
      { label: "Alcohol", value: 3 },
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
          {pinotWines.map((wine, index) => (
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
            to="/wine/red"
            className="inline-block text-sm font-semibold text-emerald-300 hover:text-white border border-emerald-300 px-4 py-2 rounded-full transition duration-200"
          >
            ← Back to Red Wines
          </Link>
        </div>
      </div>
    </div>
  );
}
