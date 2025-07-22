import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar2.jpg";
import { useState } from "react";


const backtothefutureCocktails = [
  {
    name: "This Is Heavy Doc",
    recipe: [
      "0.5 oz Smirnoff Vodka, ",
      "0.5 oz Primrose Gin, ",
      "0.5 oz Hamilton White Stache Rum, ",
      "0.5 oz Sauza Hacienda Blanco Tequila, ",
      "0.5 oz Mr Boston Peach Schnapps, ",
      "0.5 oz Lemon Juice, ",
      "Fill to top with Coke"
    ],
    method: "Build in a Beer Glass. Garnish: Lemon Slice. Ice: Cubes",
  },
  {
    name: "Hello McFly",
    recipe: [
      "1.5 oz Escencia Rum, ",
      "0.5 oz Sfumato Rhubarb Amaro, ",
      "1 oz Real Raspberry Puree, ",
      "0.75 oz Pineapple Juice, ",
      "Fill to top with Ginger Beer"
    ],
    method: "Shake and top with Ginger Beer in a Highball glass. Garnish: Half Purple Pineapple laid on top. Ice: Cubes",
  },
  {
    name: "88 MPH",
    recipe: [
      "2 oz Licor 43, ",
      "2 oz Nitro Brew Espresso"
    ],
    method: "Shake and strain over a large cube in a Double Old Fashioned glass. Garnish: Smoke, Orange Swath. Ice: Large Cube",
  },
  {
    name: "Enchantment Under The Sea Dance",
    recipe: [
      "1.5 oz Malibu Coconut Rum, ",
      "0.5 oz Mr Boston Peach Schnapps, ",
      "0.5 oz Mr Boston Blue Curacao, ",
      "Fill to top with Pineapple Juice"
    ],
    method: "Build in an AP Wine Glass. Garnish: Orange Slice. Ice: Cubes",
  },
  {
    name: "Calvin Klein",
    recipe: [
      "2 oz Pendleton Canadian Whiskey, ",
      "1 oz Dress The Drink Vanilla Simple Syrup, ",
      "2 Dashes Angostura Orange Bitters"
    ],
    method: "Stir and strain into an Old Fashioned glass. Garnish: Cherry, Orange Swath. Ice: Large Cube",
  }
];






export default function BackToTheFutureCocktails() {
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
          Back to the Future Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
            Experience the excitement and nostalgia of Back to the Future with these exquisite cocktails.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {backtothefutureCocktails.map((cocktail, index) => (
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