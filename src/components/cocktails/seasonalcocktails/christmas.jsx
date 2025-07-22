import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar18.jpg";
import { useState } from "react";


const christmasCocktails = [
  {
    name: "Apricot Sour",
    recipe: [
      "1.5 oz Creme De Noyoux, ",
      "0.5 oz Orgeat, ",
      "0.5 oz Simple Syrup, ",
      "0.5 oz Lemon Juice"
    ],
    method: "Shake and strain into a Coupe glass. Garnish: Candy Cane. Ice: None",
  },
  {
    name: "Sugar Cookie",
    recipe: [
      "1 oz Amaretto, ",
      "1 oz Vanilla Vodka, ",
      "0.5 oz Baileys Belgian Chocolate, ",
      "0.5 oz Half & Half, ",
      "0.5 oz Vanilla Simple Syrup"
    ],
    method: "Shake and strain into a Coupe glass. Garnish: Christmas Sugar Rim, Candy Cane. Ice: None",
  },
  {
    name: "Peppermint Patty",
    recipe: [
      "1 oz Rumple Minze, ",
      "1 oz Half & Half, ",
      "0.5 oz Vanilla Simple Syrup"
    ],
    method: "Shake and strain into a Martini glass. Garnish: Christmas Sugar Rim, Candy Cane. Ice: None",
  },
  {
    name: "Elsa",
    recipe: [
      "1.5 oz Smirnoff Vodka, ",
      "1 oz Blue Curacao, ",
      "0.75 oz Real Cream of Coconut, ",
      "3 oz Pineapple Juice"
    ],
    method: "Shake and dirty dump into an AP Beer Glass. Garnish: Christmas Sugar Rim, Candy Cane. Ice: Cubes",
  },
  {
    name: "Vic’s Hot Toddy",
    recipe: [
      "1.5 oz Wild Roots Apple Cinnamon or Pear Vodka, ",
      "0.5 oz Lemon Juice, ",
      "0.5 oz Agave, ",
      "0.5 oz Monin Cinnamon Syrup, ",
      "Fill with Hot Water"
    ],
    method: "Build in an Irish Coffee glass. Ice: None",
  },
  {
    name: "Banana Bread Old Fashioned",
    recipe: [
      "2 oz Four Roses Bourbon, ",
      "1 oz Mr Boston Banana Schnapps, ",
      "3 Dashes Black Walnut Bitters"
    ],
    method: "Stir and strain into an Old Fashioned glass. Garnish: Dried Banana Chip. Ice: Large Cube",
  },
  {
    name: "Christmas Morning",
    recipe: [
      "1.5 oz Proper Twelve Apple or Crown Royal Apple, ",
      "1 oz Bitter Truth Falernum Liqueur, ",
      "1 oz Monin Cinnamon Syrup, ",
      "Fill with Ginger Ale"
    ],
    method: "Shake and strain into an AP Wine Glass, then fill with Ginger Ale. Garnish: Red/Green Sugar Rim. Ice: Cubes",
  }
];






export default function ChristmasCocktails() {
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
          to="/cocktails/seasonalcocktails/seasonalcocktails"
          className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition"
        >
          ← Back to Seasonal Cocktails
        </Link>
        <h1 className="text-5xl font-mono font-bold text-emerald-300 drop-shadow-lg">
          Vic’s Christmas Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
            Celebrate the festive season with these delightful Christmas cocktails.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {christmasCocktails.map((cocktail, index) => (
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