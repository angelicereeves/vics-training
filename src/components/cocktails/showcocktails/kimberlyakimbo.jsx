import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar16.jpg";
import { useState } from "react";


const kimberlyAkimboCocktails = [
  {
    name: "Jersey Turnpike",
    recipe: [
      "2 oz Frey Ranch Rye Bourbon, ",
      "1 oz (Squeeze) Real Peach Puree, ",
      "2 Dashes Cardamom Bitters, ",
      "2 Dashes Cinnamon Bitters"
    ],
    method: "Stir and pour into an Old Fashioned Glass. Garnish: Diced Peach. Ice: Large Cube",
  },
  {
    name: "Age Is Only A Number",
    recipe: [
      "1.5 oz Smirnoff Cherry Vodka, ",
      "3 oz Cranberry Juice, ",
      "0.5 oz Simple Syrup, ",
      "Float Half and Half"
    ],
    method: "Build in a Beer Glass. Garnish: Amarena Cherry. Ice: Cubes",
  },
  {
    name: "Cleverly Akimbo",
    recipe: [
      "0.5 oz St. Germain Elderflower Liqueur, ",
      "1 oz Club Soda, ",
      "Fill to top with Sparkling Wine"
    ],
    method: "Build in an AP Wine Glass. Garnish: Lemon Wedge. Ice: Cubes",
  }
];



export default function KimberlyAkimboCocktails() {
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
          to="/cocktails/showcocktails/showcocktails"
          className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition"
        >
          ← Back to Show Cocktails
        </Link>
        <h1 className="text-5xl font-mono font-bold text-emerald-300 drop-shadow-lg">
          Kimberly Akimbo Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
            A collection of cocktails inspired by the musical "Kimberly Akimbo".
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {kimberlyAkimboCocktails.map((cocktail, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-emerald-400 rounded-2xl p-4 shadow-xl"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-xl font-mono font-bold text-emerald-200">
                  {cocktail.name}
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
                    Image goes here
                  </div>
                  <p className="text-sm font-mono font-semibold text-emerald-100">
                    <span className="font-bold text-emerald-500">Recipe: </span>
                    {cocktail.recipe}
                  </p>
                  <p className="text-sm font-mono font-semibold text-emerald-100">
                    <span className="font-bold text-emerald-500">Method: </span>
                    {cocktail.method}
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
