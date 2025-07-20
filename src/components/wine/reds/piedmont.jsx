import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Piedmont() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const piedmontWines = [
    {
      name: "Barbaresco - Angelo Negro ‘Basarin’ 2020",
      description:
        "Medium to full body, fruit-driven with complex tannins. Semi-dry, high acidity, notes of red fruits, umami, leather, oak, and vanilla. Scents of rose and violet, flavors of raspberry and redcurrant. $95",
    },
    {
      name: "Barbera d’Alba - GD Varja 2022",
      description:
        "Medium bodied, smooth, acidic and dry. Violet red in color with rich aromas. Tastes of black fruits, minerals, and graphite. $65",
    },
    {
      name: "Barbera d’Alba - Giacomo Borgogno 2021",
      description:
        "Medium bodied, fruity with high acidity. Red and black fruits, tobacco, vanilla. Smooth and approachable tannins. $90",
    },
    {
      name: "Barbera d’Asti - Renatti Ratti 2022",
      description:
        "Medium bodied, bright acidity, fruit-forward with cherry, plum, and black pepper. Soft tannins, easy drinking and food-friendly. $55",
    },
    {
      name: "Barolo - Damilano 2018",
      description:
        "Big flavors and bold tannins. Red fruits and tobacco on the nose, with floral and spice undertones. Powerful and rich. $225",
    },
    {
      name: "Barolo - Trevitis Duchet 2015",
      description:
        "Full-bodied, dry, highly acidic with strong tannins. Aromas of red fruits and violets, vanilla softens the structure. Long fruity finish. $110",
    },
    {
      name: "Barolo - Casa di Mirafiore 2018",
      description:
        "Bold red with slight sweetness. High tannins, medium acidity. Starts earthy and oaky, finishes with cherries and red flowers. Elegant. $90",
    },
    {
      name: "Dolcetto - Casa di Mirafiore Dolcetto d’Alba 2020",
      description:
        "Medium to full bodied, dry with refined tannins and medium acidity. Big red fruit flavors, intense and rich in personality. $75",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-white text-white py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-14">
        <h1 className="text-5xl font-serif font-bold text-emerald-400 border-b-4 border-emerald-400 pb-2 drop-shadow-md text-center">
          Piedmont Reds
        </h1>
        <div className="bg-black bg-opacity-60 text-white rounded-2xl shadow-lg p-6 space-y-6 border border-emerald-400 mt-10">
  <h2 className="text-3xl font-serif font-bold text-emerald-300 mb-2">About Piedmont Reds</h2>

  {/* Nebbiolo */}
  <div>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      <span className="text-emerald-400 font-semibold">Barolo:</span> The Piedmont region, located in northern Italy, is famed for Nebbiolo-based wines. The region’s rich alpine-influenced soils produce full-bodied and complex wines that pair with almost anything on our menu.
    </p>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      The Nebbiolo grape is known for delicate aromas and strong tannins. Notes include dark cherry, rose petals, violets, leather, anise, and clay. Barolo and Barbaresco pair well with rich or fatty foods like risottos and squash dishes. Barolo is famously “the king of wines,” while Barbaresco is slightly softer and fruitier. Not beginner-friendly due to strong tannins.
    </p>

    {/* Nebbiolo Scale */}
    <div className="mt-4 space-y-2">
      {[
        { label: "Body", value: 4 },
        { label: "Acidity", value: 5 },
        { label: "Sweetness", value: 1 },
        { label: "Tannin", value: 5 },
        { label: "Alcohol", value: 4 },
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

  {/* Barbera */}
  <div>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      <span className="text-emerald-400 font-semibold">Barbera:</span> Produced widely in Piedmont, Barbera d’Asti and d’Alba wines are versatile, robust, and easy to drink. They offer high acidity and a low tannin profile, making them approachable and great with nearly any food. Expect notes of cherry, blackberry, licorice, pepper, and herbs.
    </p>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      Pairs well with roasted and vegetable-driven dishes. An excellent starter red wine.
    </p>

    {/* Barbera Scale */}
    <div className="mt-4 space-y-2">
      {[
        { label: "Body", value: 4 },
        { label: "Acidity", value: 5 },
        { label: "Sweetness", value: 1 },
        { label: "Tannin", value: 1 },
        { label: "Alcohol", value: 4 },
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

  {/* Dolcetto */}
  <div>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      <span className="text-emerald-400 font-semibold">Dolcetto:</span> Made from the signature Dolcetto grape, these wines are tart, bold, and uniquely expressive. They feature black plum, blackberry, violets, cocoa, and pepper, with pronounced tannins.
    </p>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      Great with roasted vegetables, garlic-based dishes, tomatoes, and rich dark meats. Bold but balanced.
    </p>

    {/* Dolcetto Scale */}
    <div className="mt-4 space-y-2">
      {[
        { label: "Body", value: 4 },
        { label: "Acidity", value: 2 },
        { label: "Sweetness", value: 2 },
        { label: "Tannin", value: 4 },
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
</div>

        <div className="space-y-6">
          {piedmontWines.map((wine, index) => (
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
