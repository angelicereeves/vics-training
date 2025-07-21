import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/bar15.jpg";
import { useState } from "react";

const mocktails = [
  {
    name: "Brandon's Fruit Mocktail",
    recipe: [
      "3 oz Pineapple Juice, ",
      "3 oz Cranberry Juice, ",
      "Float Orgeat Syrup (Nut Allergy!)"
    ],
    method: "Build in a double old fashioned glass with cubes. Garnish: None",
  },
  {
    name: "Old Fashioned Mocktail",
    recipe: [
      "2 oz Black Tea, ",
      "2 oz Simple Syrup, ",
      "Muddle Orange Slice"
    ],
    method: "Muddle orange slice, then build in an old fashioned glass with a large cube. Garnish: Amarena cherry and orange swath",
  },
  {
    name: "Mocktail Pina Colada",
    recipe: [
      "2 oz Real Cream Of Coconut, ",
      "3 oz Pineapple Juice, ",
      "Fill to top with Sprite"
    ],
    method: "Build and stir in a beer glass with cubes. Garnish: Orange slice and Amarena cherry",
  },
  {
    name: "My Friend Kitty",
    recipe: [
      "3 oz Fevertree Pink Grapefruit Soda, ",
      "1.5 oz Real Prickly Pear Puree, ",
      "Fill to top with equal parts Club Soda and Sprite"
    ],
    method: "Build in a highball glass with cubes. Garnish: Orange swath",
  },
  {
    name: "Mocktail Mojitos",
    recipe: [
      "0.5 oz Lime Juice, ",
      "0.5 oz Simple Syrup, ",
      "Fill to top with equal parts Club Soda and Sprite, ",
      "Optional: Add 1 oz Real Puree for flavor"
    ],
    method: "Build and stir in a highball glass with cubes. Garnish: Lime wedge",
  },
  {
    name: "Mocktail Margaritas",
    recipe: [
      "1 oz Lemon Juice, ",
      "1 oz Lime Juice, ",
      "1 oz Real Puree (to order), ",
      "Fill to top with equal parts Club Soda and Sprite"
    ],
    method: "Build and stir in a double old fashioned glass with cubes. Garnish: Lime wedge and rim as requested",
  }
];





export default function Mocktails() {
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
          to="/cocktails"
          className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition"
        >
          ← Back to Cocktails
        </Link>
        <h1 className="text-5xl font-mono font-bold text-emerald-300 drop-shadow-lg">
          Vic’s Mocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Dive into our curated list of house specialty mocktails.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 text-left">
          {mocktails.map((cocktail, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-emerald-400 rounded-2xl p-4 shadow-xl"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-xl font-serif font-bold text-emerald-200">
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