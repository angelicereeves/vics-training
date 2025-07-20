import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function InterestingWhites() {
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


  const interestingWhites = [
    {
      name: "Gavi di Gavi - La Scolca Black Label, Piedmont, Italy, 2022",
      description:
        "Medium-bodied and bone-dry with high, zesty acidity. Offers bright citrus (lemon, lime, green apple) along with flinty, saline minerality. Finishes with nutty undertones—almond and walnut—and a lingering savory texture. Elegant and refined.",
      price: "$120",
    },
    {
      name: "Pinot Grigio - Santa Margherita Valda, Alto Adige, 2023",
      description:
        "A dry white wine with the delightful aroma of Golden Delicious apples, straw-yellow hue, clean intense aroma, and bright, well-balanced taste.",
      price: "$75",
    },
    {
      name: "Pinot Grigio - Elena Walch, Alto Adige, Italy 2023",
      description:
        "Medium bodied, dry with a slight hint of sweetness, and medium acidity with notes of tree fruits, citrus, and earthy tones. Fruit forward and bright with notes of pear, white pepper, and sage, and a floral and mineral finish.",
      price: "$65",
    },
    {
      name: "Albarino - Rias Baixas Paloma De Platô, Spain 2021",
      description:
        "Bright citrus and stone fruit flavors, such as lemon, lime, and peach, along with floral and saline mineral notes. Refreshing acidity, smooth texture, and a clean, zesty finish.",
      price: "$90",
    },
    {
      name: "Riesling - Eroica, Columbia Valley, WA 2022",
      description:
        "Medium bodied, dry with a touch of sweetness, higher acidity, notes of tree fruits, citrus, and earthy notes. Offers a sweet lime and peach aroma with subtle notes of minerals and a mouthwatering feel.",
      price: "$75",
    },
    {
      name: "Soave - Pieropan, Soave, Italy 2020",
      description:
        "Light white wine with aromas of almonds, marzipan, honey, lemon, and herbs with flavors of stone fruits. High acidity leads to a zingy taste.",
      price: "$50",
    },
    {
      name: "Friulano - Livio Felluga Colli Orientali Del Friuli 2019",
      description:
        "Medium full bodied, semi dry, with medium acidity. Notes of tree fruits, citrus, balsamic, white pepper, herbs, and fruits like apples, pears, and peaches.",
      price: "$65",
    },
    {
      name: "Rosé - Justin, Paso Robles, CA 2023",
      description:
        "Dry and aromatic wine made from mainly Syrah grapes, bright red fruits, citrus, and herbal notes. Great for hot weather.",
      price: "$60",
    },
    {
      name: "White Burgundy - Albert Bichot St. Veran, Burgundy, France 2021",
      description:
        "Light bodied, medium acidity, medium fruitiness, no oak aging and no sweetness. Bright, floral, fruity, mineraly and spiced wine.",
      price: "$95",
    },
    {
      name: "White Burgundy - Voskevaz, Voskehat, Armenia 2017",
      description:
        "Delicate aromas of citrus and flowers balanced by notes of toasty oak. Fuller bodied yet energetic, with layered flavors of citrus and pear. Creamy texture and elegant finish.",
      price: "$105",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-white text-white py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-14">
        <h1 className="text-5xl font-serif font-bold text-emerald-400 border-b-4 border-emerald-400 pb-2 drop-shadow-md text-center">
          Interesting Whites
        </h1>
        <div className="bg-black bg-opacity-60 text-white rounded-2xl shadow-lg p-6 space-y-6 border border-emerald-400 mt-10">
  <h2 className="text-3xl font-serif font-bold text-emerald-300 mb-2">About Interesting Whites</h2>

  {/* Gavi di Gavi */}
  <div>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      <span className="text-emerald-400 font-semibold">Gavi di Gavi:</span> Made from the Cortese grape grown in Piedmont, Italy, Gavi is a more rare and unknown wine to customers. A dry, light, zesty, and refreshing Italian white wine, pairing well with nearly any dish. Prefer to pair with white foods such as seafood with lemon and herbs, but can be great to cut through some red foods. Notes of meyer lemon, apple, honeydew, and almonds. Serve chilled with ice bucket.
    </p>
    {renderScale({ Body: 1, Acidity: 4, Sweetness: 1, Tannin: 1, Alcohol: 3 })}
  </div>

  {/* Grüner Veltliner */}
  <div>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      <span className="text-emerald-400 font-semibold">Grüner Veltliner:</span> Austrian wine known for citrus, pepper, flint and baking spice notes. High acidity leads to mouth-watering flavors, making it an ideal palate cleanser to serve with lighter meats and seafood. Always serve chilled.
    </p>
    {renderScale({ Body: 2, Acidity: 5, Sweetness: 1.5, Tannin: 1, Alcohol: 3 })}
  </div>

  {/* Pinot Grigio */}
  <div>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      <span className="text-emerald-400 font-semibold">Pinot Grigio:</span> Made using the Pinot Gris grape, a pink mutation of Pinot Noir grapes. Grown predominantly in Italy and West Coast USA. A light, high-acidity wine that compliments seafood and foods with a fruity element, but struggles with creamy sauces or strong herbal elements. Notes of white peach, lemon zest, melon, almond, and stone. Always serve chilled.
    </p>
    {renderScale({ Body: 2, Acidity: 4, Sweetness: 2.5, Tannin: 1, Alcohol: 3 })} {/* Averaged sweetness 1–4 */}
  </div>

  {/* Riesling */}
  <div>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      <span className="text-emerald-400 font-semibold">Riesling:</span> High acidity with a varying range of sweetness (dry to very sweet depending on style). Off-Dry rieslings, like what we serve at Vic’s, are excellent with pork, shellfish, spicy dishes, poultry, and cured meats. Notes of lime, apple, jasmine, and petrol. Always serve chilled. Rieslings are largely produced in Germany.
    </p>
    {renderScale({ Body: 1, Acidity: 5, Sweetness: 3, Tannin: 1, Alcohol: 1.5 })} {/* Midpoint for sweetness */}
  </div>

  {/* Albariño */}
  <div>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      <span className="text-emerald-400 font-semibold">Albariño:</span> Grown in the Iberian Peninsula of Spain, this is a surprisingly delightful and refreshing white wine. It gains a semi-salty flavor due to its proximity to the sea, also showing notes of lemon zest, citrus, melon, and stone fruits. Pairs well with fish, light meats, and leafy herbs.
    </p>
    {renderScale({ Body: 1, Acidity: 5, Sweetness: 3, Tannin: 1, Alcohol: 3 })} {/* Midpoint sweetness */}
  </div>

  {/* Soave */}
  <div>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      <span className="text-emerald-400 font-semibold">Soave:</span> Made from the Garganega grape grown in Italy, this is a lean, dry style wine with rich flavors of tangerine and toasted almonds. Pairs well with lighter foods such as poultry, fish, and aromatic herbs. It also has a distinct salinity from being grown by the sea.
    </p>
    {renderScale({ Body: 2, Acidity: 4, Sweetness: 1, Tannin: 1, Alcohol: 3 })}
  </div>

  {/* Friulano */}
  <div>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      <span className="text-emerald-400 font-semibold">Friulano:</span> This is a lean and dry white wine often mistaken for Sauvignon Blanc due to their similar notes and mouth feel. Notes of grapefruit, stone fruit, and gravel, with high acidity and light body. Grown primarily in Italy, but beginning to be planted around the USA. Pairs well with salads, green vegetables, especially vegetables that are typically hard to pair such as green beans, artichokes, and brussel sprouts.
    </p>
    {renderScale({ Body: 1, Acidity: 5, Sweetness: 1, Tannin: 1, Alcohol: 3 })}
  </div>

  {/* White Burgundy */}
  <div>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      <span className="text-emerald-400 font-semibold">White Burgundy:</span> Made with Chardonnay grapes, a white burgundy has many similar traits to typical Chardonnay wines, but with more elegance and typically less intense aging flavors. Notes of honey, lemon, apple, slight vanilla and oak, with a creamy texture. Pairs well with all foods chardonnays pair with. Flavors of minerality shine through due to the terroirs in Burgundy.
    </p>
    {renderScale({ Body: 3, Acidity: 3, Sweetness: 1.5, Tannin: 1, Alcohol: 4 })}
  </div>

      {/* Rosé */}
  <div>
    <p className="text-sm font-mono text-gray-300 leading-relaxed">
      <span className="text-emerald-400 font-semibold">Rosé:</span> Rosé is a quintessential summer wine, offering light, refreshing flavors of rose petal, strawberry, melon, cranberry, and pomegranate. Balanced acidity and tannins make it versatile. Can be made from many grapes, such as Pinot Noir, Grenache, Syrah, and more. What makes the wine a rosé is a brief period of time in contact with the grape skins, adding a fruity element and pink hue. Flavors range from citrus and herbal to floral and red fruits, depending on the grape. Ideal with seafood, salads, spicy dishes, and lighter fare.
    </p>
    {renderScale({ Body: 3, Acidity: 3, Sweetness: 1.5, Tannin: 1, Alcohol: 4 })}
  </div>
  
</div>

        <div className="space-y-6">
          {interestingWhites.map((wine, index) => (
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