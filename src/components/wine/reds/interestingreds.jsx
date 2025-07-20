import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function InterestingReds() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  function renderScale(metrics) {
  return (
    <div className="mt-4 space-y-2">
      {Object.entries(metrics).map(([label, value]) => (
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
  );
}
  const interestingReds = [
    {
      name: "Grenache Blend - Santa Duc, Cotes du Rhones, France 2021",
      description:
        "A blend of Mourvedre, Carignan, Cinsault, Clairette, Shiraz/Syrah, and Grenache grapes. Medium to full bodied, dry, semi acidic, with refined tannins. Notes of red/black fruits and earthy tones, with lavender, pepper, and raspberry. $70",
    },
    {
      name: "Grenache Blend - Tablas Creek, Paso Robles, CA 2023",
      description:
        "Blend of Shiraz/Syrah, Mourvedre, Counoise, and Grenache. Full bodied, dry, balanced tannins, medium acid. Notes of red/black fruits and oaky tones. $65",
    },
    {
      name: "Malbec - Diamandes De Uso, Argentina 2020",
      description:
        "Medium bodied, semi dry, medium acidity, soft tannins. Fruity aromas, black fruit and spice flavors. $65",
    },
    {
      name: "Malbec - El Porvenir, Argentina 2019",
      description:
        "14.5% ABV. Fresh black fruits, violets, red berries, pepper, oak. Medium to full bodied, medium tannins, medium acidity, semi dry. $75",
    },
    {
      name: "Merlot - Markham, Napa Valley, 2021",
      description:
        "Raspberry and plum aromas, caramel from oak aging. Red fruit entry, minerality, chocolate cherry finish. Structured, long, round. $90",
    },
    {
      name: "Red Blend - Orin Smith 8 Years in the Desert, Lodi, CA 2023",
      description:
        "Zinfandel, Petite Sirah, Syrah blend. Raspberry, fig, peppercorn, chocolate on the nose. Blackberry, plum, currant palate. Bold, complex, long finish. $100",
    },
    {
      name: "Tempranillo - Petricor Ribero del Duero, Spain 2021",
      description:
        "Rich, intense with red fruit, leather, high tannins, low acidity. Spices, raspberry, plum. $70",
    },
    {
      name: "Tempranillo - Urbina Rioja Bodegas Pedro Benito, Spain 2006",
      description:
        "Aromas and flavors of apricot, fig, nuts, vanilla, flowers. Big red berry notes. Concentrated yet balanced. Decant before serving. $95",
    },
    {
      name: "Tempranillo - Finca Villacreces, Pruno Ribera del Duero, Spain 2020",
      description:
        "Medium to full body, fruit forward, bright acidity, robust tannins, dry. Red/black fruit and oak notes. Sweet finish. $80",
    },
    {
      name: "Syrah - Terminim Francois et Donald, Mendocino County, CA 2018",
      description:
        "Big, bold, elaborate tannins. Black/red fruits, oak, tobacco, chocolate, plum. Dry but complex. $70",
    },
    {
      name: "Zinfandel - Turley 'Pesenti Vineyard’, Paso Robles, CA 2022",
      description:
        "Big bold, soft acidity, semi dry, smooth tannins. Red/black fruit, oak, vanilla, tobacco. $95",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-white text-white py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-14">
        <h1 className="text-5xl font-serif font-bold text-emerald-400 border-b-4 border-emerald-400 pb-2 drop-shadow-md text-center">
          Interesting Reds
        </h1>
        <h2 className="text-3xl font-serif font-bold text-emerald-300 mb-2">About Interesting Reds</h2>

{/* Frappato */}
<div>
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    <span className="text-emerald-400 font-semibold">Frappato:</span> A rare grape variety grown in Sicily, Italy where volcanic soil lends earthy tones to fruity, peppery wines. Notes of sweet red berries, tobacco, and spices. Pairs well with dishes featuring roasted red peppers and tomatoes, white meats, and fruit sauces.
  </p>
  {renderScale({ Body: 2, Acidity: 2, Sweetness: 2, Tannin: 2, Alcohol: 3 })}
</div>

{/* Grenache Blends */}
<div>
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    <span className="text-emerald-400 font-semibold">Grenache Blends:</span> Medium to full bodied built on ripe red fruits. These wines are vibrant and complex with notes of red fruits, plum, leather, herbs, and dark citrus. Pairs well with roasted meats, spiced vegetables, and Asian cuisine.
  </p>
  {renderScale({ Body: 4, Acidity: 3, Sweetness: 1, Tannin: 3, Alcohol: 5 })}
</div>

{/* Malbec */}
<div>
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    <span className="text-emerald-400 font-semibold">Malbec:</span> Typically from Argentina or Chile, dry and full-bodied with medium acid, moderate tannins, and bold fruit. Notes of vanilla, tobacco, and dark fruits with a smoky, chocolatey finish. Pairs well with blue cheeses and lean red meats.
  </p>
  {renderScale({ Body: 5, Acidity: 3, Sweetness: 1.5, Tannin: 3, Alcohol: 4 })}
</div>

{/* Merlot */}
<div>
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    <span className="text-emerald-400 font-semibold">Merlot:</span> Softer, gentler, medium-bodied with complex tannins and medium acidity. Known for flavors like black cherry, plum, and raspberry, with cocoa, violet, and spice notes. Pairs well with roasted foods, pork, mushrooms, and herbaceous sauces.
  </p>
  {renderScale({ Body: 4, Acidity: 3, Sweetness: 1, Tannin: 4, Alcohol: 4 })}
</div>

{/* Tempranillo */}
<div>
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    <span className="text-emerald-400 font-semibold">Tempranillo:</span> Medium-high acidity and tannins with flavors of berries, plum, tobacco, dill, and cedar. Balanced earth and fruit character. Pairs well with steak, burgers, and tomato-based pasta dishes.
  </p>
  {renderScale({ Body: 4, Acidity: 4, Sweetness: 1, Tannin: 4, Alcohol: 4 })}
</div>

{/* Syrah */}
<div>
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    <span className="text-emerald-400 font-semibold">Syrah:</span> A rich and powerful red wine with meaty aspects. Notes of blueberries, plum, chocolate, tobacco, and pepper. Full-bodied with high acidity and tannins. Pairs well with darker meats and exotic spices.
  </p>
  {renderScale({ Body: 5, Acidity: 4, Sweetness: 1, Tannin: 4, Alcohol: 4 })}
</div>

{/* Zinfandel */}
<div>
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    <span className="text-emerald-400 font-semibold">Zinfandel:</span> A bold, fruit-forward wine with jammy texture and smoky spice. Notes of blackberry, strawberry, peach, cinnamon, and tobacco. Pairs well with grilled meats, BBQ, cheeses, and vegetables.
  </p>
  {renderScale({ Body: 4, Acidity: 2, Sweetness: 2, Tannin: 4, Alcohol: 4.5 })}
</div>
        <div className="space-y-6">
          {interestingReds.map((wine, index) => (
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
