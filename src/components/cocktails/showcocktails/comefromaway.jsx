import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar14.jpg";
import { useState } from "react";


const comeFromAwayCocktails = [
  {
    name: "Kissing The Cod",
    recipe: [
      "1.5 oz Moletto Gin, ",
      "3 Dashes Worcestershire Sauce, ",
      "0.5 oz Lime Juice, ",
      "Sprinkle Old Bay Seasoning, ",
      "Fill to top with Clamato"
    ],
    method: "Build in glass, roll in shaker, pour into a Highball. Garnish: Olive and Lemon Flag, Tajin Rim. Ice: Cubes",
  },
  {
    name: "The Rock",
    recipe: [
      "2 oz Pendleton 1910 Rye (or Willett Rye if 86'd), ",
      "0.5 oz Tippleman’s Smoked Maple Syrup, ",
      "3 Dashes Orange Bitters"
    ],
    method: "Stir and strain into an Old Fashioned glass. Garnish: Rice Paper Maple Leaf. Ice: Large Cube",
  },
  {
    name: "7000 Passengers",
    recipe: [
      "0.75 oz Ron Zacapa 23 Year Dark Rum, ",
      "0.75 oz Aperol, ",
      "0.75 oz Lemon Juice, ",
      "0.75 oz Nonino Amaro"
    ],
    method: "Shake and strain into a Coupe glass. Garnish: None. Ice: None",
  },
  {
    name: "A Scuff And A Scowl",
    recipe: [
      "1 oz Smirnoff Vanilla Vodka, ",
      "1 oz Bicerin Dark Chocolate Liqueur, ",
      "1 oz Espresso, ",
      "0.5 oz Cointreau, ",
      "0.5 oz Half & Half"
    ],
    method: "Shake and strain into a Martini Glass. Garnish: 3 Coffee Beans. Ice: None",
  },
  {
    name: "Come From Aways",
    recipe: [
      "1 oz Gem And Bolt Mezcal, ",
      "1 oz Bols Apricot Brandy, ",
      "0.5 oz Lemon Juice, ",
      "0.25 oz Tippleman’s Smoked Maple Syrup, ",
      "Top with Bubbles"
    ],
    method: "Shake and strain into an AP Wine Glass. Garnish: Lemon Slice. Ice: Cubes",
  }
];






export default function ComeFromAwayCocktails() {
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
          Come From Away Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
            Crafted cocktails inspired by the musical "Come From Away"
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {comeFromAwayCocktails.map((cocktail, index) => (
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