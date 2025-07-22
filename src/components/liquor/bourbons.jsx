import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/bar3.jpg";

const bourbons = [
  { name: "ANGELS ENVY BOURBON", info: "Finished in port barrels, rich with vanilla and ripe fruit." },
  { name: "BASIL HAYDEN", info: "Mild bourbon with peppery spice and honey." },
  { name: "BLANTON'S SINGLE BARREL", info: "Top-tier bourbon with caramel, orange peel, and spice." },
  { name: "BUFFALO TRACE", info: "Well-balanced bourbon with toffee, dark fruit, and oak." },
  { name: "CHRISTIAN BROTHERS BRANDY", info: "American brandy with a smooth, sweet profile." },
  { name: "DOUGH BALL COOKIE DOUGH WHISKEY", info: "Flavored whiskey with rich cookie dough sweetness." },
  { name: "ELIJAH CRAIG SMALL BATCH", info: "Toasty bourbon with notes of nutmeg and vanilla." },
  { name: "EAGLE RARE 10 YR", info: "Aged bourbon with chocolate, leather, and oak." },
  { name: "FOUR ROSES BOURBON", info: "Balanced bourbon with light spice and fruit." },
  { name: "JACK DANIELS SINGLE BARREL", info: "Tennessee whiskey with full flavor and rich oak." },
  { name: "MAKERS MARK", info: "Soft, wheated bourbon with caramel and vanilla." },
  { name: "PENDLETON 20 YEAR", info: "Canadian-style aged whiskey made in the U.S., smooth and refined." },
  { name: "OLD FORESTER 1920", info: "High-proof bourbon with chocolate, cherry, and spice." },
  { name: "RD ONE AMBURANA", info: "Bourbon finished in Amburana wood, sweet and spicy." },
  { name: "RD ONE MAPLE", info: "Maple-finished bourbon with smooth, dessert-like finish." },
  { name: "WOODFORD RESERVE DOUBLE OAKED", info: "Extra oaked bourbon with toasted caramel and baking spice." },
  { name: "HORSE SOLDIER SIGNATURE BOURBON", info: "Veteran-crafted bourbon with a bold, rich profile." },
  { name: "SCREWBALL PB WHISKEY", info: "Peanut butter-flavored whiskey, sweet and nutty." }
];




export default function BeerList() {
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
          Bourbons
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Explore our curated selection of Bourbons.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {bourbons.map((bourbons, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-emerald-400 rounded-2xl p-4 shadow-xl"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-xl font-mono font-bold text-emerald-200">
                  {bourbons.name}
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
                    image or logo goes here
                  </div>
                  <p className="text-sm font-mono font-semibold text-emerald-100">
                    <span className="font-bold text-emerald-500">Info: </span>
                    {bourbons.info}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
