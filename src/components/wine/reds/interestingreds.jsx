import React, { useState } from "react";
import { Link } from "react-router-dom";
import SantaDuc from "../../../assets/wineImages/santaduc.jpg";
import TablasCreek from "../../../assets/wineImages/tablascreek.jpg";
import Diamandes from "../../../assets/wineImages/diamandes.jpg";
import ElPorvenir from "../../../assets/wineImages/elporvenir.jpg";
import Markham from "../../../assets/wineImages/markham.jpg";
import OrinSmith from "../../../assets/wineImages/8years.jpg";
import Petricor from "../../../assets/wineImages/petricor.jpg";
import Urbina from "../../../assets/wineImages/urbina.jpg";
import FincaVillacreces from "../../../assets/wineImages/pruno.jpg";
import Terminim from "../../../assets/wineImages/terminim.jpg";
import Turley from "../../../assets/wineImages/turley.jpg";
import wineBG from "../../../assets/BGimages/bar20.jpg";

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
              className="h-2 bg-emerald-400 rounded-full backdrop-blur-md"
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
      image: SantaDuc,      
      description:
        "A blend of Mourvedre, Carignan, Cinsault, Clairette, Shiraz/Syrah, and Grenache grapes. Medium to full bodied, dry, semi acidic, with refined tannins. Notes of red/black fruits and earthy tones, with lavender, pepper, and raspberry. $70",
      price: 70,
      website: "https://www.santaduc.fr/en/our-wines-our-lands/cotes-du-rhone/les-quatre-terres/",
    },
    {
      name: "Grenache Blend - Tablas Creek, Paso Robles, CA 2023",
      image: TablasCreek,
      description:
        "Blend of Shiraz/Syrah, Mourvedre, Counoise, and Grenache. Full bodied, dry, balanced tannins, medium acid. Notes of red/black fruits and oaky tones. $65",
      price: 65,
      website: "https://tablascreek.com/wines/2023_grenache",
    },
    {
      name: "Malbec - Diamandes De Uco, Argentina 2020",
      image: Diamandes,
      description:
        "Medium bodied, semi dry, medium acidity, soft tannins. Fruity aromas, black fruit and spice flavors. $65",
      price: 65,
      website: "https://www.diamandes.com/wp-content/uploads/2024/04/diamandes-de-uco-malbec-2020-english.pdf",
    },
    {
      name: "Malbec - El Porvenir, Argentina 2019",
      image: ElPorvenir,
      description:
        "14.5% ABV. Fresh black fruits, violets, red berries, pepper, oak. Medium to full bodied, medium tannins, medium acidity, semi dry. $75",
      price: 75,
      website: "https://www.brazoswine.com/wine/el-porvenir-laborum-malbec-2019",
    },
    {
      name: "Merlot - Markham, Napa Valley, 2021",
      image: Markham,
      description:
        "Raspberry and plum aromas, caramel from oak aging. Red fruit entry, minerality, chocolate cherry finish. Structured, long, round. $90",
      price: 90,
      website: "https://markhamvineyards.com/wp-content/uploads/2024/03/2021-Markham-Merlot-Napa-Valley-Power-Tech-Sheet.pdf?srsltid=AfmBOordXABJoIwJX7Zy0LXZXdtcxBDRXuI2o0txipE5h312FBExCqi8",
    },
    {
      name: "Red Blend - Orin Smith 8 Years in the Desert, Lodi, CA 2023",
      image: OrinSmith,
      description:
        "Zinfandel, Petite Sirah, Syrah blend. Raspberry, fig, peppercorn, chocolate on the nose. Blackberry, plum, currant palate. Bold, complex, long finish. $100",
      price: 100,
      website: "https://thewineauthorityonline.vinesos.com/eight-years-in-the-desert-orin-swift-cellars-red-blend-2022/",
    },
    {
      name: "Tempranillo - Petricor Ribero del Duero, Spain 2021",
      image: Petricor,
      description:
        "Rich, intense with red fruit, leather, high tannins, low acidity. Spices, raspberry, plum. $70",
      price: 70,
      website: "https://petricor.wine/wp-content/uploads/2022/08/Petricor_2021_low.pdf",
    },
    {
      name: "Tempranillo - Urbina Rioja Bodegas Pedro Benito, Spain 2006",
      image: Urbina,
      description:
        "Aromas and flavors of apricot, fig, nuts, vanilla, flowers. Big red berry notes. Concentrated yet balanced. Decant before serving. $95",
      price: 95,
      website: "https://pspglobalwines.com/wp-content/uploads/2024/04/Urbina-Reserva-Especial-2006.pdf",
    },
    {
      name: "Tempranillo - Finca Villacreces, Pruno Ribera del Duero, Spain 2020",
      image: FincaVillacreces,
      description:
        "Medium to full body, fruit forward, bright acidity, robust tannins, dry. Red/black fruit and oak notes. Sweet finish. $80",
      price: 80,
      website: "https://www.europeancellars.com/wine/ribera-del-duero-pruno/",
    },
    {
      name: "Syrah - Terminim Francois et Donald, Mendocino County, CA 2018",
      image: Terminim,
      description:
        "Big, bold, elaborate tannins. Black/red fruits, oak, tobacco, chocolate, plum. Dry but complex. $70",
      price: 70,
      website: "https://shop.donaldpatzwinegroup.com/product/detail/D3TER718SYR/",
    },
    {
      name: "Zinfandel - Turley 'Pesenti Vineyard’, Paso Robles, CA 2022",
      image: Turley,
      description:
        "Big bold, soft acidity, semi dry, smooth tannins. Red/black fruit, oak, vanilla, tobacco. $95",
      price: 95,
      website: "https://static1.squarespace.com/static/553833d1e4b045c2379337ef/t/65bbc9f284481771578b073b/1706805746786/PEZ220+Tech+Sheet.pdf",
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
                 Interesting Reds
               </h1>
               <div className="bg-black bg-opacity-60 text-white rounded-2xl shadow-lg p-6 space-y-6 border border-emerald-400 mt-10">
         <h2 className="text-3xl font-mono font-bold text-emerald-300 mb-2">About Interesting Reds</h2>

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
                          to="/wine/red"
                          className="inline-block text-sm font-semibold bg-emerald-400 text-black hover:text-white border border-emerald-300 px-4 py-2 rounded-full transition duration-200"
                        >
                          ← Back to Red Wines
                        </Link>
                      </div>
                    </div>
                  </div>
  </div>
  );
} 