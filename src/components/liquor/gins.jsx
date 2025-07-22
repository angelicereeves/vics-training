import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/bar3.jpg";

const gin = [
  {
    name: "BEEFEATER GIN",
    info: "Classic London dry gin with strong juniper and citrus notes."
  },
  {
    name: "PRIMROSE GIN",
    info: "Well gin option, versatile with a clean botanical flavor."
  },
  {
    name: "BOMBAY LONDON SAPPHIRE GIN",
    info: "Smooth and aromatic with ten botanicals, great for martinis."
  },
  {
    name: "HENDRICKS GIN",
    info: "Infused with cucumber and rose petals for a unique, floral flavor."
  },
  {
    name: "MONKEY 47 DRY GIN SCHWARZWALD",
    info: "Complex German gin with 47 botanicals; earthy, citrusy, and bold."
  },
  {
    name: "TANQUERAY LONDON DRY GIN",
    info: "Well-balanced gin known for its crisp, dry taste and bold juniper."
  }
];


export default function GinList() {
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
          Gins
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Explore our curated selection of Gins.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {gin.map((gin, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-emerald-400 rounded-2xl p-4 shadow-xl"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-xl font-mono font-bold text-emerald-200">
                  {gin.name}
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
                    {gin.info}
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
