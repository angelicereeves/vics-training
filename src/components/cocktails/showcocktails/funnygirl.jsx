import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar19.jpg";
import { useState } from "react";


const funnyGirlCocktails = [
  {
    name: "Don't Rain On My Parade",
    recipe: [
      "1.5 oz Citron Vodka, ",
      "0.5 oz Chambord, ",
      "0.5 oz Lemon Juice, ",
      "0.5 oz Simple Syrup"
    ],
    method: "Shake and strain into a Coupe glass. Garnish: Lemon Wedge. Ice: None",
  },
  {
    name: "Arnie Arnstein",
    recipe: [
      "1.5 oz Mezcal (Dos Hombres or 400 Conejos), ",
      "0.5 oz Triple Sec, ",
      "0.5 oz Lemon Juice, ",
      "0.5 oz Lime Juice, ",
      "Squeeze Strawberry Puree"
    ],
    method: "Shake and strain into a Double Old Fashioned glass. Garnish: Red Sugar Rim. Ice: Cubes",
  },
  {
    name: "His Love Makes Me Beautiful",
    recipe: [
      "3 oz Rosé Wine, ",
      "0.5 oz Apricot Brandy, ",
      "0.5 oz Peach Schnapps, ",
      "2 oz Pineapple Juice, ",
      "2 oz Orange Juice, ",
      "Splash Strawberry Puree, ",
      "Splash Sprite"
    ],
    method: "Build in an AP Wine Glass. Garnish: 1/2 Purple Pineapple. Ice: Cubes",
  },
  {
    name: "You Are Woman",
    recipe: [
      "1 oz Moletto Gin, ",
      "0.5 oz Apricot Brandy, ",
      "0.25 oz Triple Sec, ",
      "4 oz Pineapple Juice, ",
      "0.5 oz Lemon Juice, ",
      "0.25 oz Grenadine, ",
      "1 Drop Angostura Bitters"
    ],
    method: "Shake and strain into a Highball glass. Garnish: Peninsula Cherry. Ice: Cubes",
  },
  {
    name: "Rachel Berry Cosmo",
    recipe: [
      "1.5 oz Absolut Citron, ",
      "0.5 oz Peach Schnapps, ",
      "0.25 oz Lemon Juice, ",
      "0.25 oz Blackberry Syrup, ",
      "0.25 oz Strawberry Syrup, ",
      "0.5 oz Cranberry Juice"
    ],
    method: "Shake and strain into a Martini Glass. Garnish: None. Ice: None",
  }
];






export default function AndJulietCocktails() {
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
          Funny Girl Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
            Experience the charm and wit of Funny Girl with these delightful cocktails.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {funnyGirlCocktails.map((cocktail, index) => (
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