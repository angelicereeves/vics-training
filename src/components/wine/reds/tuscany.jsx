import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Tuscany() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const tuscanyWines = [
    {
      name: "Brunello Di Montalcino - Eremvs 2018",
      description:
        "Made from Sangiovese grapes, aromas of ripe red fruits with intense oak aging. Elegant and distinctive, structured and firm with ultra-fine tannins and a juicy, delicious and very persistent finish. $140",
    },
    {
      name: "Chianti Classico - Brancaia 2021",
      description:
        "Made from 100% Sangiovese grapes, this wine is medium bodied, dry, medium to high acidic, and has a very well balanced tannin profile. Aromas of black fruits, tastes of red fruits, oak, and a nutty flavor lead to a long, fragrant finish. $110",
    },
    {
      name: "Chianti Classico - Colombaio de Cencio ‘Monticello’ 2020",
      description:
        "Medium bodied, dry, higher acidity, and strong tannins. Bright red fruit flavors shine through and the medium body makes for a gentle sip. $80",
    },
    {
      name: "Rosso di Montalcino - Ridolfi 2022",
      description:
        "Medium bodied, dry, with medium acidity and medium tannins. Opens with notes of black fruits, savory red fruits, and dried flowers on the finish. $85",
    },
    {
      name: "Super Tuscan - Poggio al Tesoro ‘Mediterra’ 2022",
      description:
        "Fruity and warm notes of red berries, black fruits, spices, and oaky notes. Full-bodied and fresh with a long finish. $65",
    },
    {
      name: "Super Tuscan - Brancaia Tre Toscana 2022",
      description:
        "80% Sangiovese, 20% Merlot and Cabernet Sauvignon. Fresh cranberry-cherry floral aromas with liquorice and tobacco. Medium bodied and deliciously balanced. $60",
    },
    {
      name: "Super Tuscan - Unlitro Ampeleia 2023",
      description:
        "Blend of Carignan and Grenache. Bright red fruits with oaky and earthy tones. Light to medium body, medium tannins, medium acidity, dry finish. $75",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-white text-white py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-14">
        <h1 className="text-5xl font-serif font-bold text-emerald-400 border-b-4 border-emerald-400 pb-2 drop-shadow-md text-center">
          Tuscany Reds
        </h1>
        <div className="bg-black bg-opacity-60 text-white rounded-2xl shadow-lg p-6 space-y-6 border border-emerald-400 mt-10">
  <h2 className="text-3xl font-serif font-bold text-emerald-300 mb-2">About Tuscany Reds</h2>

  {/* Intro Paragraph */}
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    Tuscany is the fifth largest region within Italy and is home to some of the country’s most iconic grapes and wines. Subregions like Chianti, Montalcino, Montepulciano, and Bolgheri are especially notable. The wine industry saw resurgence in the 1970s with the introduction of <span className="text-emerald-400 font-semibold">Super Tuscans</span>—modern blends of Sangiovese with Cabernet Sauvignon and Merlot.
  </p>

  {/* Chianti */}
  <div>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      <span className="text-emerald-400 font-semibold">Chianti:</span> Chianti wines are made from 100% Sangiovese grapes. Chianti Classico, from the central zone, is smooth and medium- to full-bodied with elegant tannins and red fruit flavors. Expect notes of cherry, roasted tomato, balsamic, espresso, and herbs.
    </p>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      High acidity makes these wines perfect for tomato-based sauces and spiced dishes.
    </p>

    {/* Chianti Scale */}
    <div className="mt-4 space-y-2">
      {[
        { label: "Body", value: 4 },
        { label: "Acidity", value: 5 },
        { label: "Sweetness", value: 1 },
        { label: "Tannin", value: 4 },
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

  {/* Montalcino / Brunello */}
  <div>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      <span className="text-emerald-400 font-semibold">Brunello:</span> The warmest and driest area in Tuscany, Montalcino produces ripe Sangiovese grapes known as Brunello. Brunello di Montalcino wines showcase deep red and black fruit, herbs, and spice notes.
    </p>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      These wines pair wonderfully with dark meats, mussels, and salty cheeses.
    </p>

    {/* Brunello Scale */}
    <div className="mt-4 space-y-2">
      {[
        { label: "Body", value: 4 },
        { label: "Acidity", value: 3 },
        { label: "Sweetness", value: 1 },
        { label: "Tannin", value: 5 },
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
          {tuscanyWines.map((wine, index) => (
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
