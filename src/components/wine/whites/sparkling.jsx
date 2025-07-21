import React, { useState } from "react";
import { Link } from "react-router-dom";
import wineBG from "../../../assets/BGimages/bar20.jpg"; // Optional background
import PerrierJouet from "../../../assets/wineImages/perrierjouet.jpg";
import NicolasFeuillatte from "../../../assets/wineImages/nicolasf.jpg";
import JoshCellars from "../../../assets/wineImages/joshprosecco.jpg";
import Schramsberg from "../../../assets/wineImages/schramsberg.jpg";
import VillaSparina from "../../../assets/wineImages/villasparinaspk.jpg";

export default function Sparkling() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const sparklingWines = [
    {
      name: "Perrier Jouet, Champagne Grand Brut, France",
      image: PerrierJouet,
      description:
        "Blend of Pinot Noir, Pinot Meunier, and Chardonnay, aromas of white flowers, citrus, and stone fruits, palate with notes of honey, brioche, and vanilla. The fine bubbles and smooth finish make it a great choice for celebrations or pairing with seafood, light dishes, and creamy cheeses.",
      price: 250,
      website: "https://www.perrier-jouet.com/en-us/champagnes/grand-brut"
    },
    {
      name: "Nicolas Feuillatte ‘Reserve’ Brut, Champagne, France",
      image: NicolasFeuillatte,
      description:
        "Very recognizable brand name, high acidity and high fizz lead to a bold flavor. Prominent flavors of tree fruits and citrus with a toasty vanilla finish leading to a creamy texture.",
      price: 75,
      website: "https://www.nicolas-feuillatte.com/us/champagne/8-reserve-exclusive-brut-3282946006835.html"
    },
    {
      name: "Josh Cellars, Prosecco, Veneto, Italy",
      image: JoshCellars,
      description:
        "Refreshing acidity, notes of wild berries and blackberries with a strong effervescence.",
      price: 60,
      website: "https://www.joshcellars.com/products/josh-cellars-prosecco"
    },
    {
      name: "Schramsberg ‘Blanc de Blanc’, North Coast, CA 2019",
      image: Schramsberg,
      description:
        "Aromas of grapefruit, lime, green apple, and apricot combined with tastes of yeast, flowers, and honey lead to a crisp and lingering acidic finish.",
      price: 115,
      website: "https://shop.schramsberg.com/SHOP.AMS?LEVEL=BOT&PART=BE19"
    },
    {
      name: "Villa Sparina Brut, Gavi, Piedmont, Italy",
      image: VillaSparina,
      description:
        "This sparkling wine has a less bold and less acidic profile than the others we serve. Light notes of apple and pear shine through, with earthy, yeasty complexity.",
      price: 85,
      website: "https://www.villasparinaresort.it/en/wine/wines/25-0.html"
    },
  ];

  return (
        <div
              className="min-h-screen bg-cover bg-center bg-no-repeat text-white relative"
              style={{ backgroundImage: `url(${wineBG})` }}
            >
      <div className="max-w-5xl mx-auto space-y-14">
        <h1 className="text-5xl font-mono font-bold text-emerald-400 border-b-4 border-emerald-400 pb-2 drop-shadow-md text-center">
          Champagne and Sparkling
        </h1>
        <div className="bg-black bg-opacity-60 border border-emerald-500 rounded-2xl shadow-xl p-6 space-y-6">
  <h2 className="text-3xl font-mono font-bold text-emerald-300">Champagne & Sparkling</h2>

  <p className="text-gray-300 font-mono">
    Most Champagnes have vibrant notes of citrus fruits (lemon, grapefruit, orange zest), tree fruits (green apple, pear, white peach), and aging flavors like toast, brioche, almond, or nuttiness. Rosé Champagnes include red fruit notes like strawberry and raspberry.
  </p>

  <p className="text-gray-300 font-mono">
    Champagne is traditionally served as an aperitif but pairs beautifully with appetizers and desserts. Most are made from a combination of Chardonnay, Pinot Noir, and Pinot Meunier. “Blanc de Blancs” is made entirely from Chardonnay grapes.
  </p>

  <p className="text-gray-300 font-mono">
    Excellent with light dishes: salmon, tuna, shellfish, soft cheeses, and pork. Try pairing with our clam pasta, salmon, or rigatoni carbonara.
  </p>

  <h3 className="text-xl font-mono font-bold text-emerald-300 pt-4">How to Open Champagne</h3>
  <ul className="list-disc pl-6 text-gray-300 font-mono space-y-1">
    <li>Remove foil and unscrew the cage (six turns).</li>
    <li>Keep the cage on and hold the cork with a serviette for safety.</li>
    <li>Hold the bottle at a 45° angle and twist the bottle, not the cork.</li>
    <li>Let the cork ease out with a soft hiss, not a pop.</li>
  </ul>

  <p className="text-gray-300 font-mono">
    We also serve Prosecco, which is similar to Champagne but made outside the Champagne region of France. Expect apple, melon, cream, and toast notes—more subtle than Champagne. Our Brut Rosé is slightly fruitier than the Brut.
  </p>

  <p className="text-gray-300 font-mono">
    The Pizzalato Sparkling Moscato is our sweetest sparkling wine, while the Pizzalato Sparkling Pinot Grigio is crisp, dry, and bright—perfect for the same pairings as Champagne.
  </p>

  <div className="mt-4 space-y-2">
    {[
      { label: "Body", value: 1 },
      { label: "Acidity", value: 5 },
      { label: "Sweetness", value: 2 },
      { label: "Tannin", value: 1 },
      { label: "Alcohol", value: 2 }
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
          {sparklingWines.map((wine, index) => (
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
                  <h3 className="text-lg font-mono font-bold text-white">{wine.name}</h3>
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
                <div className="px-6 pb-6 text-gray-300 font-mono space-y-2">
<img
  src={wine.image}
  alt={wine.name}
  className="w-32 h-auto rounded-lg shadow-md mx-auto"
/>

{wine.website && (
  <p className="text-center mt-2">
    <a
      href={wine.website}
      target="_blank"
      rel="noopener noreferrer"
      className="text-emerald-300 underline hover:text-emerald-200 text-sm"
    >
      Visit Wine Website
    </a>
  </p>
)}

<p>
  <span className="text-emerald-300 font-bold">Tasting Notes:</span> {wine.description}
  <br />
  <br />
  <span className="text-emerald-400 font-semibold"> Price: ${wine.price}</span>

</p>
              </div>
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
