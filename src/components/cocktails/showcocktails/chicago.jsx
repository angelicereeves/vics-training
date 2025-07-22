import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar18.jpg";
import { useState } from "react";


const chicagoCocktails = [
  {
    name: "Funny Honey",
    recipe: [
      "1.5 oz Bombay Dry Gin, ",
      "0.75 oz Lemon Juice, ",
      "0.75 oz Honey Syrup"
    ],
    method: "Shake and strain into a Coupe glass. Garnish: Lemon Swath, Red Sugar Rim. Ice: None",
  },
  {
    name: "All That Jazz",
    recipe: [
      "0.75 oz Four Roses Bourbon, ",
      "0.75 oz Nonino Amaro, ",
      "0.75 oz Aperol, ",
      "0.75 oz Lemon Juice"
    ],
    method: "Shake and strain into a Martini glass. Garnish: Red Sugar Rim. Ice: None",
  },
  {
    name: "The Roxie",
    recipe: [
      "2 oz High West Double Rye, ",
      "1 oz Maple Caramel Apple Syrup, ",
      "3 Dashes Angostura Bitters"
    ],
    method: "Stir and serve in an Old Fashioned glass. Garnish: Caramel Apple Pop, Red Sugar Rim. Ice: Large Cube",
  },
  {
    name: "Velma's Crime",
    recipe: [
      "0.5 oz Chambord, ",
      "1 oz Cranberry Juice, ",
      "Fill with Gambino Prosecco"
    ],
    method: "Build in a Coupe glass and add red glitter first. Garnish: Luxardo Cherry, Red Sugar Rim. Ice: None",
  }
];






export default function ChicagoCocktails() {
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
          Chicago Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
            Based on the iconic musical "Chicago", these cocktails are a tribute to the jazz and blues era of the Windy City.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 text-left">
          {chicagoCocktails.map((cocktail, index) => (
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