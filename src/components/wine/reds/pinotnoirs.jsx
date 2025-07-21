import React, { useState } from "react";
import { Link } from "react-router-dom";
import AlbertBichotPinot from "../../../assets/wineImages/albertbichotpinot.jpg";
import EmeritusPinot from "../../../assets/wineImages/emerituspinot.jpg";
import FlowersPinot from "../../../assets/wineImages/flowerspinot.jpg";
import LaCremaPinot from "../../../assets/wineImages/lacremapinotnoir.jpg";
import UnshackledPinot from "../../../assets/wineImages/unshackledpinot.jpg";
import wineBG from "../../../assets/BGimages/bar15.jpg";

export default function PinotNoirs() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const pinotWines = [
    {
      name: "Albert Bichot, ‘Chassagne-Montrachet, Burgundy, France 2020",
      image: AlbertBichotPinot,
      description:
        "Medium bodied, smooth taste, dry, higher acidity. Red fruits lead to a bright color, a deep ruby red. Aromas of candied fruit, cassis, and smoky notes. Robust body and good minerality with mature tannins. Long, aromatic finish. $120",
      price: 120,
      website: "https://www.albert-bichot.com/en/chassagne-montrachet_90",
    },
    {
      name: "Emeritus ‘Hallberg Ranch’, Russian River Valley, CA 2020",
      image: EmeritusPinot,
      description:
        "Cool fruit and spice, medium-light body, medium acidity, smooth mouthfeel. Notes of red and black fruits, forest floor, and oak spice. Balanced finesse and power. $95",
      price: 95,
      website: "https://www.emeritusvineyards.com/product/2020-emeritus-vineyards-hallberg-ranch/",
    },
    {
      name: "Flowers, Russian River Valley, CA 2023",
      image: FlowersPinot,
      description:
        "Medium bodied, refined and smooth tannins, semi-dry, medium acidity. Notes of red fruits, oak, vanilla, and earth. Juicy, elegant, and balanced with a nice finish. $110",
      price: 110,
      website: "https://www.huneeuswines.com/wp-content/uploads/VerticalTechSheet_RR_PN_2022_-1.pdf",
    },
    {
      name: "La Crema, Willamette Valley, OR 2022",
      image: LaCremaPinot,
      description:
        "Medium body, smooth feel, dry, medium acidity. Fruit-forward with red fruits, hints of oak, vanilla, and minerals. Lighter and brighter than CA Pinots. $90",
      price: 90,
      website: "https://www.lacrema.com/wine/willamette-valley-pinot-noir/?srsltid=AfmBOooz7ni_1vhft0sbygCoMDRVBJcq_a3YOV5ghd5QN48uC4boEcz7",
    },
    {
      name: "The Prisoner Winery - Unshackled, Napa Valley, CA 2021",
      image: UnshackledPinot,
      description:
        "Full bodied blend of 5 grapes. Aromas of red/black fruits and florals. Tastes of spices, herbs, stone fruits. Balanced acidity and tannins, subtle oak finish. $80",
      price: 80,
      website: "https://theprisonerwinecompany.com/collections/unshackled-red-wines/products/2021-unshackled-pinot-noir",
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
                        
        <div className="bg-black bg-opacity-60 text-white rounded-2xl shadow-lg p-6 space-y-4 border border-emerald-400 mt-10">
  <h2 className="text-3xl font-mono font-bold text-emerald-300 mb-2">About Pinot Noir</h2>

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