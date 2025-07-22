import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar7.jpg";
import { useState } from "react";


const peterPanCocktails = [
  {
    name: "Captain Hook",
    recipe: [
      "1 oz Captain Morgan, ",
      "1 oz Aperol, ",
      "0.5 oz Mr. Boston Amaretto, ",
      "0.75 oz Lemon Juice, ",
      "2 oz Cranberry Juice"
    ],
    method: "Build in a Double Old Fashioned glass. Garnish: Dried Lemon, Pirate Flag. Ice: Cubes",
  },
  {
    name: "The Lost Boys",
    recipe: [
      "1.5 oz Jameson Orange Irish Whiskey, ",
      "0.5 oz Lime Juice, ",
      "0.75 oz Licor 43, ",
      "3 oz Orange Juice"
    ],
    method: "Shake and dump into an AP Beer Glass. Garnish: Dried Orange, Pirate Flag. Ice: Cubes",
  },
  {
    name: "Peter's Happy Thought",
    recipe: [
      "2 oz Four Roses Bourbon, ",
      "0.5 oz Monin Caramel Apple Butter Syrup, ",
      "3 Dashes Fee Brothers Toasted Almond Bitters, ",
      "3 Dashes Angostura Bitters"
    ],
    method: "Stir and strain into an Old Fashioned glass. Garnish: Dried Apple Chip, Pirate Flag. Ice: Large Cube",
  },
  {
    name: "Tic Toc The Croc",
    recipe: [
      "1.5 oz Sauza Hacienda Blanco, ",
      "0.5 oz Mr. Boston Apple Schnapps, ",
      "0.5 oz Mr. Boston Blue Curacao, ",
      "0.25 oz St. Germain Elderflower Liqueur, ",
      "1.5 oz Pineapple Juice"
    ],
    method: "Shake and dirty dump into a Highball glass. Garnish: Pineapple Chip, Pirate Flag. Ice: Cubes",
  },
  {
    name: "Tinkerbell",
    recipe: [
      "1 oz St. Germain Elderflower Liqueur, ",
      "0.5 oz Peach Schnapps, ",
      "0.5 oz Lime Juice, ",
      "1 oz Vanilla Glitter Simple Syrup, ",
      "4 oz Gambino Sparkling Wine, ",
      "Top with Vanilla Glitter Simple and Club Soda"
    ],
    method: "Build in an AP Wine Glass. Finish with Vanilla Glitter Simple & Club Soda. Garnish: Dried Lime Chip, Pirate Flag. Ice: Cubes",
  }
];






export default function PeterPanCocktails() {
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
          Peter Pan Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
            Cocktails inspired by the musical "Peter Pan"
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {peterPanCocktails.map((cocktail, index) => (
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