import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Cabs() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const cabWines = [
    {
      name: "Amavi Cellars, Walla Walla, WA 2022",
      description:
        "Big bold flavors, full bodied, acidic, dry, and a complex tannic structure lends to notes of black fruits (such as blackberry, black cherry, plum), earthy and oaky notes. A bit drier and more acidic than a traditional Washington cabernet. $85",
    },
    {
      name: "Austin Hope, Paso Robles, CA 2020",
      description:
        "Very bold cabernet with a slightly toned down tannin profile, semi dry to dry with medium acidity. Heavy notes of vanilla, oak, chocolate, black fruits, leather, and more earthy notes. $160",
    },
    {
      name: "Chateau Segla, Margaux, Bordeaux, France 2015",
      description:
        "Medium to full bodied with complex tannins, dry and medium acidity. Cassis and spicy overtones develop as it ages. One of the best in its French AOC class. $120",
    },
    {
      name: "Chateau De Come, Margaux, Bordeaux, France 2016",
      description:
        "Medium to full bodied, bold, dry, and structured. Black fruit and spice with red fruit aromas. $70",
    },
    {
      name: "Hedges ‘La Haute Cuvee’, Red Mountain, WA 2018",
      description:
        "Medium to full bodied, refined tannins, dry and balanced with blueberry, blackcurrant, mint, thyme, and tea. Long finish, ideal with red meats. $145",
    },
    {
      name: "Heitz Cellar ‘Lot C-91’, Napa Valley, CA 2017",
      description:
        "Single vineyard Napa powerhouse. Fuller bodied, dry, rich tannins, medium acidity, notes of cherry, blueberry, eucalyptus, oak. $295",
    },
    {
      name: "Hess Collection Iron Corral, Napa Valley, CA 2022",
      description:
        "Cabernet blend (92% Cab). Full-bodied, firm tannins, medium-high acidity, bold black fruit with espresso, chocolate, mocha spice. $170",
    },
    {
      name: "Hess Collection Lion Tamer, Napa Valley, CA 2022",
      description:
        "Cabernet blend with Malbec and Petite Sirah. Full-bodied, polished tannins, rich with blackberry, blueberry, cocoa, and sweet oak spice. $95",
    },
    {
      name: "Justin ‘Isosceles’, Paso Robles, CA 2021",
      description:
        "Big, bold, dry, medium acidity, notes of oak, vanilla, black and red fruits. Silky finish. $125",
    },
    {
      name: "Le Rival Lussac-Saint-Emilion, France 2015",
      description:
        "Mint, licorice, flint, black cherry aromas. Merlot-dominant, juicy finish with cocoa and dark fruits. $120",
    },
    {
      name: "Caymus 50th Anniversary Cabernet, Napa Valley, CA 2022",
      description:
        "Rich, full-bodied, smooth with bold ripe blackberries, cherries, cassis, chocolate, vanilla, and spice. Luxurious finish. $190",
    },
    {
      name: "Santa Rita Medella Real, Maipo Valley, Chile 2021",
      description:
        "Chilean cab with big, bold, oaky and earthy flavors. Complex tannins, full body, dry. Let it breathe or decant. $65",
    },
    {
      name: "Turnbull ‘Estate’, Napa Valley, CA 2021",
      description:
        "Bold body, dry, medium acidity, high tannin. Black fruits, oak, leather. Napa value wine. Let breathe. $120",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-white text-white py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-14">
        <h1 className="text-5xl font-serif font-bold text-emerald-400 border-b-4 border-emerald-400 pb-2 drop-shadow-md text-center">
          Cabernet Sauvignon & Friends
        </h1>
        <div className="bg-black bg-opacity-60 text-white rounded-2xl shadow-lg p-6 space-y-4 border border-emerald-400 mt-10">
  <h2 className="text-3xl font-serif font-bold text-emerald-300 mb-2">About Cabernet Sauvignon and Friends</h2>

  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    Cabernet Sauvignon is one of the most commonly recognized red wines, particularly in America. Napa Valley, CA is one of the largest producers of the cabernet sauvignon and cabernet franc grapes, leading to an extensive wine industry in the region.
  </p>
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    Cabernets are famous for being big, bold, and dry with moderate to high acidity and high tannins. Tannins are a big component of red wines as they contribute to the texture, balance, and structure of the wine. When a wine sucks the moisture out of your mouth, that is the tannins at work. Tannins lead to a dry mouthfeel and a sometimes chewy texture. Many people do not like red wines because of the tannin profiles. There are many red wines that do not have the big tannins, cabernets are just not one of them.
  </p>
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    Cabernet Franc is the parent grape of both Merlot and Cabernet Sauvignon, leading to similar notes in all of these wines. Cabernet Sauvignon is a cross between Cabernet Franc and Sauvignon Blanc, originating in Bordeaux, France. Today’s cabernets typically all have the same idea of flavor, with notes of black fruits (blueberry, blackcurrant, blackberry, cherry, etc), oaky notes (vanilla, oak, tobacco, chocolate, cedar), and earthy notes (leather, smoke, graphite). Some will also show flavors of red fruits (strawberries, raspberries, etc).
  </p>
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    Some cabernets are more fruit-forward and have a juicier mouthfeel, while others are more savory and smoky with earthy tones shining through strongest. This has a large part to do with where the grapes are grown.
  </p>
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    French wines aligning with the same flavor profile of many cabernets are from the region of Bordeaux. This region is divided into two parts, the left bank and the right bank (based off of the river flowing between). The difference in the soils of each region lend to small differences in the wines produced. Traditionally, Bordeauxs are somewhat more approachable because of the difference in the tannin structures from, say, a Napa Valley cabernet.
  </p>
    <p className="text-sm font-mono text-gray-300 leading-relaxed pt-4">
    <span className="text-emerald-400 font-semibold">Food Pairings:</span> These big and bold wines pair best with red meat dishes, red sauces, harder and mature cheeses, peppery sauces, and rich, smoky flavors. Avoid pairing with seafood or light dishes, as the wine will overpower them. Excellent Vic’s menu pairings include Ribeye, spaghetti, red sauces, and specials like short ribs.
  </p>

  <div className="mt-4 space-y-6">
    {/* Cabernet Franc Scale */}
    <div>
      <h3 className="text-lg font-mono text-emerald-400 font-bold mb-1">Cabernet Franc</h3>
      {[
        { label: "Body", value: 3 },
        { label: "Acidity", value: 4 },
        { label: "Sweetness", value: 1 },
        { label: "Tannin", value: 3 },
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

    {/* Cabernet Sauvignon Scale */}
    <div>
      <h3 className="text-lg font-mono text-emerald-400 font-bold mb-1 mt-4">Cabernet Sauvignon</h3>
      {[
        { label: "Body", value: 5 },
        { label: "Acidity", value: 3 },
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


</div>

        <div className="space-y-6">
          {cabWines.map((wine, index) => (
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
