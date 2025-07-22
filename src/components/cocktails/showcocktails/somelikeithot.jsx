import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar11.jpg";
import { useState } from "react";


const someLikeItHotCocktails = [
  {
    name: "Some Like It Hot",
    recipe: [
      "1.5 oz Sauza Hacienda Blanco, ",
      "0.5 oz Triple Sec, ",
      "0.5 oz Lime Juice, ",
      "0.5 oz Lemon Juice, ",
      "0.5 oz Real Mango Puree, ",
      "2 slices Fresh Jalapeño"
    ],
    method: "Shake with jalapeño slices and dirty dump into a Double Old Fashioned glass. Garnish: Dried Mango Chip, Tajin Rim. Ice: Cubes",
  },
  {
    name: "What Are You Thirsty For?",
    recipe: [
      "1.5 oz Captain Morgan Spiced Rum, ",
      "0.75 oz Mr. Boston Crème de Banana, ",
      "0.25 oz Monin Cinnamon Syrup, ",
      "3 oz Homemade Horchata"
    ],
    method: "Shake and dirty dump into an AP Beer Glass. Garnish: Nutmeg Grind, Banana Chips. Ice: Cubes",
  },
  {
    name: "Fly, Mariposa, Fly",
    recipe: [
      "1 oz Well Gin, ",
      "1 oz St. Germain Elderflower Liqueur, ",
      "0.5 oz Campari, ",
      "0.5 oz Lemon Juice, ",
      "0.5 oz Simple Syrup, ",
      "4 Dashes Fee Brothers Cherry Bitters"
    ],
    method: "Stir and strain into a Double Old Fashioned glass. Garnish: Amarena Cherry. Ice: Large Cube",
  },
  {
    name: "Dance The World Away",
    recipe: [
      "2 oz Four Roses Bourbon, ",
      "1 oz Sprite, ",
      "0.5 oz Lime Juice, ",
      "1 oz Simple Syrup, ",
      "1 Squeeze Real Blackberry Puree, ",
      "5 Mint Leaves"
    ],
    method: "Shake and dirty dump into a Highball Glass. Top with Sprite. Garnish: Blackberry Fruit Roll Up. Ice: Cubes",
  },
  {
    name: "Let's Be Bad",
    recipe: [
      "2 oz Wild Roots Pear Vodka, ",
      "1 oz Homemade Allspice Dram, ",
      "2 Dashes Toasted Almond Bitters"
    ],
    method: "Stir and strain into an Old Fashioned glass. Garnish: Dried Pear Chip. Ice: Large Cube",
  }
];






export default function SomeLikeItHotCocktails() {
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
          Some Like It Hot Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
            A selection of cocktails inspired by the show "Some Like It Hot"
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {someLikeItHotCocktails.map((cocktail, index) => (
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