import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar20.jpg";
import { useState } from "react";


const wizardofozCocktails = [
  {
    name: "Oz-mopolitan",
    recipe: [
      "1.5 oz Smirnoff Citron, ",
      "0.5 oz Limoncello, ",
      "0.5 oz Lime Juice, ",
      "0.5 oz Strawberry Syrup"
    ],
    method: "Build in mixing glass with ice, shake, and double strain into a Martini Glass. Garnish: Strawberry. Ice: None",
  },
  {
    name: "Glinda the Good Witch",
    recipe: [
      "1.5 oz 21 Seeds Grapefruit Hibiscus, ",
      "0.5 oz Triple Sec, ",
      "0.75 oz Simple Syrup, ",
      "1 oz Lime Juice, ",
      "Top with Grapefruit Soda"
    ],
    method: "Build in a Highball Glass, swizzle to blend, add garnish. Garnish: Iridescent Glitter, Orange Chip. Ice: Cubes",
  },
  {
    name: "If I Only Had a Brain",
    recipe: [
      "1.5 oz Four Roses Bourbon, ",
      "1 oz Lemon Juice, ",
      "0.5 oz Vanilla Simple Syrup, ",
      "Layer 0.5 oz CMS Red Wine"
    ],
    method: "Add whiskey, lemon, and syrup to a shaker with ice. Shake and double strain into a Double Old Fashioned Glass. Garnish: Dried Lemon. Ice: Cubes",
  },
  {
    name: "Flying Monkey",
    recipe: [
      "1.5 oz Primrose Gin, ",
      "1 oz Sour Apple Schnapps, ",
      "0.5 oz Montenegro Amaro, ",
      "0.25 oz Lemon Juice"
    ],
    method: "Shake and strain into a Coupe Glass. Garnish: Rosemary Sprig. Ice: None",
  },
  {
    name: "Yellow Brick Road",
    recipe: [
      "1 oz Gem And Bolt Mezcal, ",
      "1 oz Galliano, ",
      "2 oz Pineapple Juice, ",
      "0.5 oz Lime Juice, ",
      "2–3 dashes Tobasco, ",
      "Top with Ginger Beer"
    ],
    method: "Add all to a mixing glass with ice, shake, and double strain into an AP Wine Glass. Garnish: Black Pepper and Mint Sprig. Ice: Cubes",
  }
];






export default function WizardOfOZCocktails() {
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
          Wizard of Oz Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
            Experience the magic and adventure of the Wizard of Oz with these enchanting cocktails.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {wizardofozCocktails.map((cocktail, index) => (
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