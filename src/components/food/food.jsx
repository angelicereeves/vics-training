import React from "react";
import { Link } from "react-router-dom";
import foodHomeBg from "../../assets/BGimages/food10.jpg";  

export default function Food() {
  const foodCategories = [
    { name: "Starters", path: "/food/starters" },
    { name: "Lettuces and Soups", path: "/food/lettuces" },
    { name: "Crusts", path: "/food/crust" },
    { name: "Hold Me", path: "/food/holdme" },
    { name: "Pastas", path: "/food/pasta" },
    { name: "Mains", path: "/food/mains" },
    { name: "Sides", path: "/food/sides" },
    { name: "Desserts", path: "/food/dessert" },
  ];

  return (
        <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative text-white"
      style={{ backgroundImage: `url(${foodHomeBg})` }}
    >
      

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 py-16 px-6">
        <h1 className="text-5xl font-mono font-bold text-emerald-400 drop-shadow-md">
          Vic’s Food Menu
        </h1>

        <p className="text-lg font-mono font-semibold text-white-500">
          Explore each category to learn descriptions, ingredients, and presentation details for every dish on our menu.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-12">
          {foodCategories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.path}
              className="block bg-black bg-opacity-60 border border-emerald-500 rounded-xl p-5 text-emerald-300 font-bold font-mono text-lg shadow-md hover:bg-emerald-900 hover:text-white transition-all duration-300"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
