import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/bar3.jpg";

const wellLiquors = [
  {
    name: "SVEDKA VODKA",
    info: "Popular vodka with a clean, neutral flavor profile."
  },
  {
    name: "PRIMROSE GIN",
    info: "Gin option, versatile with a clean botanical flavor."
  },
  {
    name: "SAUZA HACIENDA BLANCO",
    info: "Tequila ideal for mixing; crisp and straightforward agave notes."
  },
  {
    name: "HAMILTON WHITE STACHE RUM",
    info: "White rum known for its bold sugarcane flavor and versatility in cocktails."
  },
  {
    name: "FOUR ROSES BOURBON",
    info: "Balanced bourbon with light spice and fruit."
  },
  {
    name: "CLAN MCGREGOR SCOTCH",
    info: "Affordable blended Scotch whisky, light and smooth."
  },
];



export default function WellList() {
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
          Well Liquors
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Explore our curated selection of Well Liquors.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {wellLiquors.map((wellLiquors, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-emerald-400 rounded-2xl p-4 shadow-xl"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-xl font-mono font-bold text-emerald-200">
                  {wellLiquors.name}
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
                    {wellLiquors.info}
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
