import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar15.jpg";
import { useState } from "react";


const valentinesDayCocktails = [
  {
    name: "Chocolate Covered Cherry Martini",
    recipe: [
      "1 oz Smirnoff Cherry Vodka, ",
      "1 oz Bicerin Dark Chocolate Liqueur, ",
      "1 oz Half & Half"
    ],
    method: "Shake and strain into a Martini glass. Garnish: Chocolate Drizzle, Chocolate Dipped Maraschino Cherry. Ice: None",
  },
  {
    name: "Passion Ol' Fashioned",
    recipe: [
      "1.5 oz Gem And Bolt Mezcal, ",
      "1 oz Averna Amaro, ",
      "0.5 oz St. Germain Elderflower Liqueur, ",
      "4 Dashes Angostura Orange Bitters"
    ],
    method: "Stir and strain into an Old Fashioned glass. Garnish: Peninsula Cherry, Orange Swath. Ice: Large Cube",
  },
  {
    name: "Love Is In The Air",
    recipe: [
      "0.5 oz Chambord, ",
      "1 oz Cranberry Juice, ",
      "Fill with 4 oz Gambino Prosecco"
    ],
    method: "Build in a Coupe glass. Add red glitter first. Garnish: Luxardo Cherry, Red Sugar Rim. Ice: None",
  }
];






export default function ValentinesDayCocktails() {
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
          Vic’s Valentine's Day Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Crafted with love, these cocktails are perfect for celebrating romance and special moments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {valentinesDayCocktails.map((cocktail, index) => (
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