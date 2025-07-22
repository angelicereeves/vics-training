import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/bar3.jpg";
import ClanMcGregor from "../../assets/liquorImages/clanmcgregor.jpg";
import CrownRoyalCanadian from "../../assets/liquorImages/crownroyal.jpg";
import CrownRoyalApple from "../../assets/liquorImages/crownroyalapple.jpg";
import CrownRoyalBlackBerry from "../../assets/liquorImages/crownroyalblackberry.jpg";
import CrownRoyalPeach from "../../assets/liquorImages/crownroyalpeach.jpg";
import CrownRoyalVanilla from "../../assets/liquorImages/crownroyalvanilla.jpg";
import DewarsWhiteLabel from "../../assets/liquorImages/dewarswhitelabel.jpg";
import Redbreast12Year from "../../assets/liquorImages/redbreast12year.jpg";
import JamesonBlended from "../../assets/liquorImages/jameson.jpg";
import JohnnieWalkerBlackLabel from "../../assets/liquorImages/johnniewalkerblacklabel.jpg";
import JohnnieWalkerBlueLabel from "../../assets/liquorImages/johnniewalkerbluelabel.jpg";
import Macallan12Year from "../../assets/liquorImages/macallan12.jpg";
import Macallan18Year from "../../assets/liquorImages/macallan18.jpg";
import ProperTwelveIrishApple from "../../assets/liquorImages/propertwelveirishapple.jpg";
import TheGlenlivet12Year from "../../assets/liquorImages/glenlivet12.jpg";
import TheGlenlivet21Year from "../../assets/liquorImages/glenlivet21.jpg";
import SuntoryWhiskyToki from "../../assets/liquorImages/suntorywhisky.jpg";
import HennessyVSCognac from "../../assets/liquorImages/hennessyvs.jpg";
import ClydesideStobcross from "../../assets/liquorImages/clydesidestobcross.jpg";

const internationalWhiskeys = [
  { name: "CLAN MCGREGOR SCOTCH", 
    image: ClanMcGregor,
    info: "Affordable blended Scotch whisky, light and smooth." },
  { name: "CROWN ROYAL CANADIAN", 
    image: CrownRoyalCanadian,
    info: "Iconic Canadian whisky with a creamy texture and vanilla notes." },
  { name: "CROWN ROYAL APPLE", 
    image: CrownRoyalApple,
    info: "Canadian whisky infused with crisp apple flavor." },
  { name: "CROWN ROYAL BLACK BERRY", 
    image: CrownRoyalBlackBerry,
    info: "Fruity Canadian whisky with bold berry notes." },
  { name: "CROWN ROYAL PEACH", 
    image: CrownRoyalPeach,
    info: "Peach-flavored Canadian whisky with juicy sweetness." },
  { name: "CROWN ROYAL VANILLA", 
    image: CrownRoyalVanilla,
    info: "Smooth Canadian whisky blended with vanilla." },
  { name: "DEWARS WHITE LABEL", 
    image: DewarsWhiteLabel,
    info: "Blended Scotch whisky with honey, heather, and vanilla." },
  { name: "REDBREAST 12 YEAR IRISH WHISKEY", 
    image: Redbreast12Year,
    info: "Single pot still Irish whiskey with sherry influence." },
  { name: "JAMESON BLENDED IRISH", 
    image: JamesonBlended,
    info: "Balanced Irish whiskey with floral and spice notes." },
  { name: "JOHNNIE WALKER BLACK LABEL 12 YR", 
    image: JohnnieWalkerBlackLabel,
    info: "Popular blended Scotch with smoky malt and dark fruit." },
  { name: "JOHNNIE WALKER BLUE LABEL", 
    image: JohnnieWalkerBlueLabel,
    info: "Premium Scotch blend with smooth richness and depth." },
  { name: "MACCALLAN 12 YR SCOTCH", 
    image: Macallan12Year,
    info: "Sherry-cask matured Scotch with dried fruit and spice." },
  { name: "MACCALLAN 18 YR SCOTCH", 
    image: Macallan18Year,
    info: "Aged Scotch with deep oak, raisin, and vanilla tones." },
  { name: "PROPER TWELVE IRISH APPLE", 
    image: ProperTwelveIrishApple,
    info: "Irish whiskey blended with crisp apple flavor." },
  { name: "THE GLENLIVET 12 YEAR", 
    image: TheGlenlivet12Year,
    info: "Single malt Scotch with citrus, apple, and oak." },
  { name: "THE GLENLIVET 21 YR", 
    image: TheGlenlivet21Year,
    info: "Luxuriously aged Scotch with rich fruit and spice complexity." },
  { name: "SUNTORY WHISKY TOKI", 
    image: SuntoryWhiskyToki,
    info: "Japanese whisky with orchard fruit, honey, and spice." },
  { name: "HENNESSY VS COGNAC", 
    image: HennessyVSCognac,
    info: "Cognac with a harmonious blend of oak, vanilla, and spice." },
  { name: "CLYDESIDE 'STOBCROSS' SINGLE MALT", 
    image: ClydesideStobcross,
    info: "Scottish single malt with citrus, malt, and floral notes." }
];

  


export default function InternationalWhiskeyList() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-16 px-6 relative"
      style={{ backgroundImage: `url(${BGpic})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-900 bg-opacity-0 z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10">
        <Link
          to="/liquor"
          className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition"
        >
          ← Back to Liquor Program
        </Link>

        <h1 className="text-5xl font-mono font-bold text-emerald-300 drop-shadow-lg">
          International Whiskeys
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Explore our curated selection of International Whiskeys.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {internationalWhiskeys.map((whiskey, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-emerald-400 rounded-2xl p-4 shadow-xl"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-xl font-mono font-bold text-emerald-200">
                  {whiskey.name}
                </h2>
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

              {expandedIndex === index && (
                <div className="mt-4 space-y-4">
                  <div className="w-full h-48 bg-emerald-950/20 border border-emerald-500 rounded-xl flex items-center justify-center text-sm italic text-emerald-300">
                    {/* Image Placeholder */}
                    <img
                      src={whiskey.image}
                      alt={whiskey.name}
                      className="object-contain h-full"
                    />
                  </div>
                  <p className="text-sm font-mono font-semibold text-emerald-100">
                    <span className="font-bold text-emerald-500">Info: </span>
                    {whiskey.info}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <Link
          to="/liquor"
          className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition"
        >
          ← Back to Liquor Program
        </Link>
      </div>
    </div>
  );
}
