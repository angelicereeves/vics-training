import React, { useState } from "react";
import { Link } from "react-router-dom";
import AngeloNegro from "../../../assets/wineImages/angelonegro.jpg";
import GDVajra from "../../../assets/wineImages/gdvajra.jpg";
import GiacomoBorgogno from "../../../assets/wineImages/giacomoborgogno.jpg";
import RenattiRatti from "../../../assets/wineImages/renattiratti.jpg";
import Damilano from "../../../assets/wineImages/damilano.jpg";
import TrevitisDuchet from "../../../assets/wineImages/trevitisduchet.jpg";
import CasaDiMirafioreBarolo from "../../../assets/wineImages/casadimirafiorebarolo.jpg";
import CasaDiMirafioreDolcetto from "../../../assets/wineImages/casadimirafioredolcetto.jpg";
import wineBG from "../../../assets/BGimages/bar11.jpg";

export default function Piedmont() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const piedmontWines = [
    {
      name: "Barbaresco - Angelo Negro ‘Basarin’ 2020",
      image: AngeloNegro,
      description:
        "Medium to full body, fruit-driven with complex tannins. Semi-dry, high acidity, notes of red fruits, umami, leather, oak, and vanilla. Scents of rose and violet, flavors of raspberry and redcurrant. $95",
      price: 95,
      website: "https://www.angelonegro.it/en/vini/barbaresco-basarin/"
    },
    {
      name: "Barbera d’Alba - GD Vajra 2022",
      image: GDVajra,
      description:
        "Medium bodied, smooth, acidic and dry. Violet red in color with rich aromas. Tastes of black fruits, minerals, and graphite. $65",
      price: 65,
      website: "https://www.gdvajra.it/uploads/public/2104_fact-sheet-2022-barbera-d-alba.075-en.pdf"
    },
    {
      name: "Barbera d’Alba - Giacomo Borgogno 2021",
      image: GiacomoBorgogno,
      description:
        "Medium bodied, fruity with high acidity. Red and black fruits, tobacco, vanilla. Smooth and approachable tannins. $90",
      price: 90,
      website: "https://www.ethicawines.com/technical-sheets/?id=4732"
    },
    {
      name: "Barbera d’Asti - Renatti Ratti 2022",
      image: RenattiRatti,
      description:
        "Medium bodied, bright acidity, fruit-forward with cherry, plum, and black pepper. Soft tannins, easy drinking and food-friendly. $55",
      price: 55,
      website: "https://www.ratti.com/wp-content/uploads/HD-Ratti-Scheda-tecnica-barbera-asti-DOP-battaglione_EN.pdf"
    },
    {
      name: "Barolo - Damilano 2018",
      image: Damilano,
      description:
        "Big flavors and bold tannins. Red fruits and tobacco on the nose, with floral and spice undertones. Powerful and rich. $225",
      price: 225,
      website: "https://winebow-files.s3.amazonaws.com/public/vintage/techsheets/601181_Damilano_Damilano-Barolo-Lecinquevigne_2018.pdf?VersionId=K.hEVjnLabafT47Fn.hWObe2phLtIXmq"
    },
    {
      name: "Barolo - Trevitis Duchet 2015",
      image: TrevitisDuchet,  
      description:
        "Full-bodied, dry, highly acidic with strong tannins. Aromas of red fruits and violets, vanilla softens the structure. Long fruity finish. $110",
      price: 110,
      website: "https://gruppoivinai.com/en/prodotto/duchet-barolo-riserva-docg/"
    },
    {
      name: "Barolo - Casa di Mirafiore 2018",
      image: CasaDiMirafioreBarolo,
      description:
        "Bold red with slight sweetness. High tannins, medium acidity. Starts earthy and oaky, finishes with cherries and red flowers. Elegant. $90",
      price: 90,
      website: "https://www.ethicawines.com/technical-sheets/?id=2044"
    },
    {
      name: "Dolcetto - Casa di Mirafiore Dolcetto d’Alba 2020",
      image: CasaDiMirafioreDolcetto,
      description:
        "Medium to full bodied, dry with refined tannins and medium acidity. Big red fruit flavors, intense and rich in personality. $75",
      price: 75,
      website: "https://www.ethicawines.com/technical-sheets/?id=4588"
    },
  ];

  return (
       <div
                     className="min-h-screen bg-cover bg-center bg-no-repeat text-white relative"
                     style={{ backgroundImage: `url(${wineBG})` }}
                   >
             <div className="max-w-5xl mx-auto space-y-14 py-10">
               <Link
                 to="/wine/red"
                 className="inline-block text-sm font-semibold bg-emerald-400 text-black hover:text-white border border-emerald-300 px-4 py-2 rounded-full transition duration-200"
               >
                 ← Back to Red Wines
               </Link>
        <h1 className="text-5xl font-mono font-bold text-emerald-400 border-b-4 border-emerald-400 pb-2 drop-shadow-md text-center">
          Piedmont Reds
        </h1>
        <div className="bg-black bg-opacity-60 text-white rounded-2xl shadow-lg p-6 space-y-6 border border-emerald-400 mt-10">
  <h2 className="text-3xl font-mono font-bold text-emerald-300 mb-2">About Piedmont Reds</h2>

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
                         to="/wine/red"
                         className="inline-block text-sm font-semibold text-black bg-emerald-400 hover:text-white border border-emerald-300 px-4 py-2 rounded-full transition duration-200"
                       >
                         ← Back to Red Wines
                       </Link>
                     </div>
                   </div>
                 </div>
               );
             }