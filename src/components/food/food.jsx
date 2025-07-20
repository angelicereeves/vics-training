import React from "react";
import { Link } from "react-router-dom";

export default function Food() {
  const foodCategories = [
    { name: "Starters", path: "/food/starters" },
    { name: "Lettuces", path: "/food/lettuces" },
    { name: "Crust", path: "/food/crust" },
    { name: "Hold Me", path: "/food/holdme" },
    { name: "Pasta", path: "/food/pasta" },
    { name: "Mains", path: "/food/mains" },
    { name: "Sides", path: "/food/sides" },
    { name: "Dessert", path: "/food/dessert" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-white text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-5xl font-serif font-bold text-emerald-400 drop-shadow-md">
          Vic’s Food Training
        </h1>

        <p className="text-lg font-mono font-semibold text-gray-200">
          Explore each category to learn descriptions, ingredients, and presentation details for every dish on our menu.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-12">
          {foodCategories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.path}
              className="block bg-black bg-opacity-60 border border-emerald-500 rounded-xl p-5 text-emerald-300 font-bold text-lg shadow-md hover:bg-emerald-900 hover:text-white transition-all duration-300"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
