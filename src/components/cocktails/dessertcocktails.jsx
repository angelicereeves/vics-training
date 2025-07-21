import React from "react";
import { Link } from "react-router-dom";
import DessertcocktailsBg from "../../assets/BGimages/bar17.jpg";
import { useState } from "react";

const dessertCocktails = [
  {
    name: "Vic’s Espresso Martini",
    recipe: [
      "1 oz Vanilla Vodka, ",
      "1 oz Espresso, ",
      "1 oz Mr Black Coffee Liqueur"
    ],
    method: "Shake and strain in a Martini glass. Garnish: 3 coffee beans",

  },
  {
    name: "Tiramisu Martini",
    recipe: [
      "1 oz Vanilla Vodka, ",
      "1 oz Amaretto, ",
      "1 oz Tiramisu Cream Liqueur"
    ],
    method: "Shake and strain into a coupe glass. Garnish: Dark chocolate stick",

  },
  {
    name: "Grasshopper",
    recipe: [
      "1 oz Creme De Menthe, ",
      "1 oz Creme De Cacao Light, ",
      "1 oz Half & Half"
    ],
    method: "Shake and strain into a martini glass. Garnish: Chocolate shavings",

  },
  {
    name: "Brandy Alexander",
    recipe: [
      "1 oz Apricot Brandy, ",
      "1 oz Creme De Cacao Dark, ",
      "1 oz Half & Half"
    ],
    method: "Shake and strain into a martini glass. Garnish: Nutmeg grind",

  },
  {
    name: "Pink Squirrel",
    recipe: [
      "1 oz Creme De Noyoux, ",
      "1 oz Creme De Cacao White, ",
      "1 oz Half & Half, "
    ],
    method: "Shake and strain into a martini glass. Garnish: Nutmeg grind",
  },
  {
    name: "Cookie Dough Martini",
    recipe: [
      "1 oz Dough Ball Cookie Dough Whiskey, ",
      "1 oz Bicerin Dark Chocolate Liqueur, ",
      "1 oz Half & Half, ",
      "0.5 oz Cinnamon Syrup"
    ],
    method: "Shake and strain into a martini glass. Garnish: Chocolate Drizzle",
  }
];




export default function DessertCocktails() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-16 px-6 relative"
      style={{ backgroundImage: `url(${DessertcocktailsBg})` }}
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
          Vic’s Dessert Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Dive into our curated list of house specialties cocktails and dessert cocktails.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 text-left">
          {dessertCocktails.map((cocktail, index) => (
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