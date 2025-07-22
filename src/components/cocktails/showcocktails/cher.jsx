import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar15.jpg";
import { useState } from "react";


const cherCocktails = [
  {
    name: "Believe",
    recipe: [
      "1.5 oz Sauza Hacienda Blanco Tequila, ",
      "0.5 oz Lemon Juice, ",
      "0.5 oz Lime Juice, ",
      "0.5 oz Triple Sec, ",
      "0.5 oz Agave, ",
      "1 oz Pineapple Juice"
    ],
    method: "Shake and dump into a Double Old Fashioned glass. Garnish: Sugar Rim, Lime Wedge. Ice: Cubes",
  },
  {
    name: "Dancing Queen",
    recipe: [
      "1.5 oz Malibu Coconut Rum, ",
      "2 oz Orange Juice, ",
      "1 oz Pineapple Juice, ",
      "3 oz Gambino Sparkling Wine, ",
      "Splash Grenadine"
    ],
    method: "Build in an AP Wine Glass, fill with Sparkling Wine, and top with Grenadine. Garnish: Orange Slice. Ice: Cubes",
  },
  {
    name: "If I Could Turn Back Time",
    recipe: [
      "1.5 oz Hamilton White Stache Rum, ",
      "1 oz Bicerin White Chocolate Liqueur, ",
      "1 oz Lemon Juice, ",
      "1 oz Real Raspberry Puree"
    ],
    method: "Shake and dump into a Coupe glass. Garnish: Fresh Raspberry. Ice: None",
  },
  {
    name: "I Got You, Babe",
    recipe: [
      "1.5 oz Smirnoff Vodka, ",
      "1 oz Real Strawberry Puree, ",
      "5 oz Lemonade"
    ],
    method: "Shake and dump into a Highball Glass. Garnish: Fresh Strawberry. Ice: Cubes",
  },
  {
    name: "Strong Enough",
    recipe: [
      "2 oz Proper Twelve Irish Whiskey, ",
      "1 oz DTD Smoked Cherry Simple Syrup, ",
      "3 Dashes Angostura Bitters"
    ],
    method: "Stir and strain into an Old Fashioned Glass. Garnish: Orange Swath, Bourbon Cherry. Ice: Large Cube",
  }
];



export default function CherCocktails() {
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
          Cher Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
            Experience the glamour and drama of Cher with these exquisite cocktails.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {cherCocktails.map((cocktail, index) => (
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