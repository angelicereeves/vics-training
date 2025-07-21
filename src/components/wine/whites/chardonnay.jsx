import React, { useState } from "react";
//import wineBG from "../../../assets/BGimages/winebg.jpg";
import { Link } from "react-router-dom";
import FarNiente from "../../../assets/wineImages/farniente.jpg";
import Vougriere from "../../../assets/wineImages/vougriere.jpg";
import HessCollectionPanthera from "../../../assets/wineImages/hesscollectionpanthera.jpg";
import WilliamFevre from "../../../assets/wineImages/williamfevre.jpg";
import LaCrema from "../../../assets/wineImages/lacremachard.jpg";
import PatzHall from "../../../assets/wineImages/patznhall.jpg";
import wineBG from "../../../assets/BGimages/bar8.jpg";


export default function Chardonnay() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const chardonnayWines = [
    {
      name: "Far Niente, Napa Valley, CA 2022",
      image: FarNiente,
      description:
        "Very recognizable winery. Tropical aromas of citrus and melon, melding with notes of toasted oak and perfume. Leading to a clean and refreshing finish. Most prominent notes are oaky, tree fruit, and citrus.",
      price: 145,
      website: "https://farniente.com/shop/wines/2022-far-niente-chardonnay-napa-valley?id=001-CH0223W",
    },
    {
      name: "Vougriere ‘Terres de Familie’, Burgundy, France 2018",
      image: Vougriere,
      description:
        "Very dry, medium acidity, and medium to high boldness with notes of apricots, oak, but not too buttery.",
      price: 90,
      website: "https://onshorecellars.com/products/domaine-de-la-vougeraie-terres-da-famille-bourgogne-chardonnay-2?srsltid=AfmBOopl2LrE_RmPt4fDcmtbbVjcqFDKPaXCGhwNov9n3ag-p5o_fX_T",
    },
    {
      name: "Hess Collection Panthera, Russian River Valley 2023",
      image: HessCollectionPanthera,
      description:
        "Full-bodied and richly textured with medium to high acidity. Prominent notes of ripe stone fruit (peach, apricot), lemon curd, and crème brûlée layered with toasted oak, vanilla, and a touch of flinty minerality. Smooth and buttery, but balanced by freshness.",
      price: 70,
      website: "https://www.hessperssonestates.com/product/2023-panthera-chardonnay-russian-river-valley/",
    },
    {
      name: "William Fevre ‘Champs Royaux’ Chablis, Burgundy, France 2022",
      image: WilliamFevre,
      description:
        "Medium boldness, dry, and higher acidity lead to heavy notes of citrus and tree fruits with earthy and mineral tones on the long finish. Flavors of melon, butter, oak and lemon.",
      price: 75,
      website: "https://vintus.com/wines/william-fevre-chablis-champs-royaux/william-fevre-chablis-champs-royaux-2022/",
    },
    {
      name: "La Crema, Sonoma Coast, CA 2023",
      image: LaCrema,
      description:
        "Big and bold flavors, medium dry to sweet ratio with medium acidity. Floral, oaky, citrus, tree fruits, white stone fruits, and melon notes lead to a rich texture, balanced acidity, and a lingering finish.",
      price: 70,
      website: "https://www.lacrema.com/wine/sonoma-coast-chardonnay/"
    },
    {
      name: "Patz & Hall, Russian River Valley, CA 2021",
      image: PatzHall,
      description:
        "Very bold, medium dry to sweet ratio and medium acidity. Aromas of lemon. Passionfruit, butter, and oak with flavors of pineapple, finished with acidity and minerality.",
      price: 75,
      website: "https://www.patzhall.com/product/2022-sonoma-coast-chardonnay1/"
    },
  ];



  return (
       <div
                     className="min-h-screen bg-cover bg-center bg-no-repeat text-white relative"
                     style={{ backgroundImage: `url(${wineBG})` }}
                   >
             <div className="max-w-5xl mx-auto space-y-14 py-10">
               <Link
                 to="/wine/white"
                 className="inline-block text-sm font-semibold bg-emerald-400 text-black hover:text-white border border-emerald-300 px-4 py-2 rounded-full transition duration-200"
               >
                 ← Back to White Wines
               </Link>
        <h1 className="text-5xl font-mono font-bold text-emerald-400 border-b-4 border-emerald-400 pb-2 drop-shadow-md text-center">
          Chardonnay
        </h1>
        <div className="bg-black bg-opacity-60 text-white rounded-2xl shadow-lg p-6 space-y-4 border border-emerald-400 mt-10">
  <h2 className="text-3xl font-mono font-bold text-emerald-300 mb-2">About Chardonnay</h2>

  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    Chardonnay is a medium- to full-bodied white wine, often with relatively high alcohol content (~14%) and medium acidity. It is produced from green-skinned Chardonnay grapes, a cross between Pinot Noir and Gouais Blanc varieties.
  </p>
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    Common tasting notes include tree fruits (yellow apple, pear), stone fruits (peach, pineapple), citrus, melon, and mineral elements, with oak, butter, and vanilla notes frequently present due to barrel aging.
  </p>
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    <span className="text-emerald-400 font-semibold">Food Pairings:</span> Chardonnay pairs well with subtle spices and creamy buttery dishes: pasta, vegetarian dishes, fish, cured meats, shellfish, and poultry. Ideal menu matches include branzino, clam and pancetta crust, eggplant, shrimp dishes, and even the braised pork.
  </p>
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    <span className="text-emerald-400 font-semibold">Regions:</span> Notable Chardonnay regions include Napa Valley, California, and Burgundy, France (home to Chablis). Some chardonnays are also now being produced in Oregon and Washington, USA.
  </p>
  <p className="text-sm font-mono text-gray-300 leading-relaxed">
    Always serve Chardonnay chilled, accompanied by an ice bucket when serving tableside.
  </p>

  <div className="mt-4 space-y-2">
    {[
      { label: "Body", value: 3 },
      { label: "Acidity", value: 3 },
      { label: "Sweetness", value: 1.5 },
      { label: "Tannin", value: 1 },
      { label: "Alcohol", value: 4 }
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
          {chardonnayWines.map((wine, index) => (
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
            className="inline-block text-sm font-semibold text-black bg-emerald-400 hover:text-white border border-emerald-300 px-4 py-2 rounded-full transition duration-200"
          >
            ← Back to White Wines
          </Link>
        </div>
      </div>
    </div>
  );
}