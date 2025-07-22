import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar16.jpg";
import { useState } from "react";


const temptationsCocktails = [
  {
    name: "I Wish It Would Rain",
    recipe: [
      "0.75 oz Bombay Dry Gin, ",
      "0.75 oz Luxardo Maraschino Liqueur, ",
      "0.75 oz Rothman Creme De Violette, ",
      "0.75 oz Lemon Juice"
    ],
    method: "Shake and strain into a Coupe glass. Garnish: Peninsula Cherry. Ice: None",
  },
  {
    name: "My Girl",
    recipe: [
      "1.5 oz Absolut Citron, ",
      "0.5 oz Chambord, ",
      "0.5 oz Simple Syrup, ",
      "0.5 oz Ripe Prickly Pear Juice"
    ],
    method: "Shake and strain into a Martini Glass. Garnish: Lemon Swath. Ice: None",
  },
  {
    name: "Ain't Too Proud To Beg",
    recipe: [
      "2 oz Bourbon, ",
      "0.5 oz Fernet Branca, ",
      "0.5 oz Simple Syrup, ",
      "3 Dashes Angostura Bitters"
    ],
    method: "Stir and strain into an Old Fashioned Glass. Garnish: Orange Swath, Peninsula Cherry. Ice: Large Cube",
  },
  {
    name: "Just My Imagination",
    recipe: [
      "1.5 oz X Rated Fusion Vodka, ",
      "0.5 oz Pineapple Simple Syrup, ",
      "2 oz Pineapple Juice"
    ],
    method: "Shake and dirty dump into a Highball Glass. Garnish: Peninsula Cherry. Ice: Cubes",
  },
  {
    name: "The Way You Do The Things You Do",
    recipe: [
      "2 oz Dark Rum, ",
      "2 oz Ginger Beer, ",
      "2 oz Pineapple Juice"
    ],
    method: "Build in Highball Glass: add Ginger Beer and Pineapple Juice, float Dark Rum. Garnish: None. Ice: Cubes",
  }
];






export default function TemptationsCocktails() {
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
          Temptations Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
            Experience the magic of the Temptations with these groovy cocktails.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {temptationsCocktails.map((cocktail, index) => (
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