import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar17.jpg";
import { useState } from "react";


const mrsDoubtfireCocktails = [
  {
    name: "Run By Fruiting",
    recipe: [
      "1 oz Hamilton White Stache Rum, ",
      "1 oz Goslings Black Seal Dark Rum, ",
      "1.5 oz Orange Juice, ",
      "1.5 oz Pineapple Juice, ",
      "0.75 oz Lime Juice"
    ],
    method: "Shake and dump into a Beer Glass. Garnish: Cocktail Cherry. Ice: Cubes",
  },
  {
    name: "Dude Looks Like A Lady",
    recipe: [
      "1.5 oz Jameson Orange Irish Whiskey, ",
      "0.5 oz Orgeat Syrup, ",
      "0.5 oz Monin Cinnamon Syrup, ",
      "0.5 oz Lemon Juice, ",
      "3 Dashes Angostura Bitters"
    ],
    method: "Shake and dump into a Double Old Fashioned Glass. Garnish: Orange Swath. Ice: Cubes",
  },
  {
    name: "Jump Around",
    recipe: [
      "1.5 oz Beefeater London Dry Gin, ",
      "1 oz Cocchi Americano, ",
      "0.75 oz St. Germain Elderflower Liqueur, ",
      "0.5 oz Lemon Juice, ",
      "1 oz Pineapple Juice"
    ],
    method: "Shake and strain into a Martini Glass. Garnish: Lemon Swath. Ice: None",
  },
  {
    name: "Bridges Restaurant Old Fashioned",
    recipe: [
      "1.5 oz Proper Twelve Apple Irish Whiskey, ",
      "1 oz Monin Cinnamon Syrup, ",
      "5 Dashes Chocolate Bitters"
    ],
    method: "Stir and strain into an Old Fashioned Glass. Garnish: Cinnamon Stick. Ice: Not specified",
  },
  {
    name: "Euphegenia Doubtfire",
    recipe: [
      "0.5 oz Crown Royal Peach Canadian Whiskey, ",
      "0.5 oz Liquid Alchemist Peach Syrup, ",
      "4 oz Gambino Sparkling Wine"
    ],
    method: "Build in a Coupe Glass. Garnish: None. Ice: None",
  }
];





export default function MrsDoubtfireCocktails() {
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
          Mrs. Doubtfire Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
            Experience the heartwarming charm of Mrs. Doubtfire with these delightful cocktails.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {mrsDoubtfireCocktails.map((cocktail, index) => (
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