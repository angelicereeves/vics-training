import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar3.jpg";
import { useState } from "react";


const beetlejuiceCocktails = [
  {
    name: "Sandworm",
    recipe: [
      "1 oz White Vermouth, ",
      "0.5 oz Lemon Juice, ",
      "0.75 oz Simple Vanilla, ",
      "2 oz Gambino, ",
      "Sprite Topper"
    ],
    method: "Build in a Wine Glass and top with Sprite. Garnish: Purple Sugar Rim, Black and White Straw. Ice: Yes",
  },
  {
    name: "Banana Boat",
    recipe: [
      "1 oz Malibu, ",
      "1 oz Banana Schnapps, ",
      "1 oz Melon Schnapps, ",
      "2 oz Pineapple Juice, ",
      "0.5 oz Cream (Half and Half)"
    ],
    method: "Shake and dirty dump into a Highball Glass. Garnish: Purple Sugar Rim, Black and White Straw. Ice: Yes",
  },
  {
    name: "Shake Senora",
    recipe: [
      "1.5 oz Destilador, ",
      "0.5 oz Melon Schnapps, ",
      "1 oz Lemon Juice, ",
      "1 oz Lime Juice, ",
      "0.75 oz Agave"
    ],
    method: "Shake and dirty dump into a Double Rocks Glass. Garnish: Purple Sugar Rim, Black and White Straw. Ice: Yes",
  },
  {
    name: "Beetlejuice Beetlejuice",
    recipe: [
      "1.2 oz Grey Goose Pear, ",
      "0.5 oz Sour Apple Schnapps, ",
      "0.25 oz St. Germaine, ",
      "0.5 oz Sweet and Sour, ",
      "Creme De Violet Float (bottom)"
    ],
    method: "Shake and strain into a Martini Glass. Garnish: Purple Sugar Rim, Black and White Straw. Ice: None",
  },
  {
    name: "Lydia's Wedding Dress",
    recipe: [
      "1.5 oz Absolute Citron, ",
      "0.5 oz Chambord, ",
      "0.5 oz Simple Syrup, ",
      "1 oz Prickly Pear Juice"
    ],
    method: "Shake and strain into a Coupe Glass. Garnish: Purple Sugar Rim, Black and White Straw. Ice: None",
  }
];






export default function BeetlejuiceCocktails() {
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
          Beetlejuice Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
            Experience the wild and whimsical world of Beetlejuice with these exquisite cocktails.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {beetlejuiceCocktails.map((cocktail, index) => (
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