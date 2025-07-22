import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar1.jpg";
import { useState } from "react";


const andJulietCocktails = [
  {
    name: "I Want It That Way",
    recipe: [
      "1.5 oz Primrose Gin, ",
      "1 oz Blueberry Hibiscus Tea Simple Syrup, ",
      "0.5 oz Rothman Creme De Violette, ",
      "0.25 oz Lemon Juice"
    ],
    method: "Shake and strain into a Coupe glass. Garnish: Amarena Cherry. Ice: None",
  },
  {
    name: "Confident",
    recipe: [
      "2 oz Four Roses Bourbon, ",
      "0.5 oz Montenegro Amaro, ",
      "1 oz Chamomile Tea Simple Syrup, ",
      "2 Dashes Angostura Bitters"
    ],
    method: "Stir and strain into an Old Fashioned glass. Garnish: Orange Swath, Amarena Cherry. Ice: Large Cube",
  },
  {
    name: "Baby One More Time",
    recipe: [
      "1.5 oz Smirnoff Cherry Vodka, ",
      "0.25 oz Luxardo Maraschino Liqueur, ",
      "0.5 oz Lime Juice, ",
      "0.5 oz Simple Syrup, ",
      "Squeeze Real Black Cherry Puree, ",
      "Fill to top with Sprite"
    ],
    method: "Build in an AP Beer Glass. Squeeze Black Cherry Puree and roll. Garnish: Dried Lime Chip, Amarena Cherry. Ice: Cubes",
  },
  {
    name: "Since U Been Gone",
    recipe: [
      "1.5 oz Teremana Reposado or Anejo Tequila, ",
      "1.5 oz Peach or Honey Simple Syrup, ",
      "0.75 oz Lemon Juice, ",
      "3 oz Gambino Sparkling Wine"
    ],
    method: "Shake and dirty dump into an AP Wine Glass, then fill to top with Sparkling Wine. Garnish: Dried Lemon Chip, Amarena Cherry. Ice: Cubes",
  },
  {
    name: "That's The Way It Is",
    recipe: [
      "1.5 oz Dough Ball Cookie Dough Whiskey, ",
      "0.5 oz Lemon Juice, ",
      "0.5 oz Simple Syrup, ",
      "0.5 oz Orgeat Syrup"
    ],
    method: "Shake and dirty dump into a Double Old Fashioned glass. Garnish: Dried Lemon Chip and Amarena Cherry. Ice: Cubes",
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
          &Juliet Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
            Experience the romance and passion of &Juliet with these exquisite cocktails.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {andJulietCocktails.map((cocktail, index) => (
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