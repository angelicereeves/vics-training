import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar3.jpg";
import { useState } from "react";


const tinaturnerCocktails = [
  {
    name: "What's Love Got to Do With It",
    recipe: [
      "1 oz Gin, ",
      "0.25 oz Luxardo Liqueur, ",
      "0.5 oz Raspberry Syrup, ",
      "0.5 oz Cherry Syrup, ",
      "1.5 oz Cranberry Juice, ",
      "Top with Club Soda"
    ],
    method: "Shake and pour over fresh ice in a Highball Glass. Top with Club Soda. Garnish: Gold Glitter, Orange and Cherry. Ice: Cubes",
  },
  {
    name: "Tinatini",
    recipe: [
      "1 oz Carpano Bianco, ",
      "0.75 oz Lemon Juice, ",
      "0.75 oz Simple Syrup, ",
      "2 oz Gambino Sparkling Wine"
    ],
    method: "Build in shaker, shake, and strain into a Martini Glass. Garnish: Not specified. Ice: None",
  },
  {
    name: "Mad Max",
    recipe: [
      "1.5 oz Ilegal Mezcal, ",
      "1 oz Averna Amaro, ",
      "0.5 oz St. Germain, ",
      "4 Dashes Orange Bitters"
    ],
    method: "Stir and strain into an Old Fashioned Glass. Garnish: Orange. Ice: Large Cube",
  },
  {
    name: "Addicted To Love",
    recipe: [
      "1.5 oz Angostura Amaro, ",
      "0.5 oz Sazerac Rye, ",
      "0.75 oz Lemon Juice, ",
      "1 oz Orgeat Syrup"
    ],
    method: "Shake and pour dirty into a Double Old Fashioned Glass. Garnish: Not specified. Ice: Large Cube",
  },
  {
    name: "Proud Mary",
    recipe: [
      "1.5 oz Absolut Citron, ",
      "0.5 oz Simple Syrup, ",
      "0.5 oz Lemon Juice, ",
      "0.5 oz Chambord"
    ],
    method: "Build in shaker, shake and strain into a Coupe Glass. Garnish: Sugar Rim. Ice: None",
  }
];





export default function TinaTurnerCocktails() {
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
          Tina Turner Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
            Experience the spirit of Tina Turner with these electrifying cocktails.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {tinaturnerCocktails.map((cocktail, index) => (
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