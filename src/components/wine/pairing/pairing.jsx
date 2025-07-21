import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar9.jpg";

export default function Pairing() {
  const categories = [
    { name: "Starters", path: "/pairing/starterspair" },
    { name: "Lettuces & Soups", path: "/pairing/lettucespair" },
    { name: "Crust", path: "/pairing/crustspair" },
    { name: "Hold Me", path: "/pairing/holdmepair" },
    { name: "Pastas", path: "/pairing/pastaspair" },
    { name: "Mains", path: "/pairing/mainspair" },
    { name: "Sides", path: "/pairing/sidespair" },
    { name: "Desserts", path: "/pairing/dessertspair" }
  ];
  const winecategories = [
    { name: "Whites", path: "/pairing/whitespair" },
    { name: "Reds", path: "/pairing/redspair" },
    { name: "Sparkling", path: "/pairing/sparklingpair" },
  ];

  const pairingBasics = [
    {
      title: "1. Match Intensity",
      text: "Light foods go with light wines (e.g., seafood with Pinot Grigio). Rich, heavy foods pair with bold wines like Cabernet Sauvignon."
    },
    {
      title: "2. Balance Acidity",
      text: "Acidic wines like Sauvignon Blanc pair well with acidic dishes like tomato sauce or lemony seafood. Avoid pairing acidic food with low-acid wines."
    },
    {
      title: "3. Consider Fat & Tannins",
      text: "Fatty foods like steak or creamy pasta need wines with tannins (e.g., Chianti or Cabernet Sauvignon) to cut through the richness."
    },
    {
      title: "4. Sweet Loves Spicy",
      text: "Sweeter wines like Riesling or Moscato help cool down spicy dishes like Shrimp Fra Diavolo. Dry reds can make spicy food taste hotter."
    },
    {
      title: "5. Complement or Contrast",
      text: "Pair similar flavors (buttery Chardonnay with creamy pasta) or balance opposites (crisp Prosecco with rich burrata)."
    },
    {
      title: "6. Sauce Over Protein",
      text: "Always consider the sauce. Chicken in tomato sauce may pair better with Chianti (red) than Chardonnay (white)."
    },
  ];

  return (
    <div
          className="min-h-screen bg-cover bg-center bg-no-repeat text-white relative"
          style={{ backgroundImage: `url(${BGpic})` }}
        >
      <div className="max-w-5xl mx-auto space-y-12 py-10">
          <Link
            to="/wine"
            className="inline-block px-6 py-3 text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl font-mono font-bold shadow-md transition"
          >
            ⬅ Back to Wine Home
          </Link>
        <h1 className="text-5xl font-mono font-bold text-emerald-400 text-center drop-shadow-sm">
          Wine Pairing Guide
        </h1>
        <p className="text-lg font-mono text-gray-300 text-center max-w-3xl mx-auto">
          Explore curated wine pairings for each section of our menu. Click a category below to view tailored wine suggestions that elevate every dish.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {pairingBasics.map((item, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-60 border-l-4 border-emerald-400 rounded-xl shadow p-6 hover:shadow-md transition"
            >
              <h2 className="text-xl font-mono font-bold text-emerald-300 mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-300 font-mono">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-12">
          <h2 className="text-3xl font-mono font-bold text-emerald-300 text-center mb-6">
            Explore Pairings by Menu Section
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {categories.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="block bg-black bg-opacity-60 border border-emerald-400 text-emerald-200 rounded-xl shadow hover:bg-emerald-800 transition px-6 py-4 font-mono font-bold text-center"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className="pt-12">
          <h2 className="text-3xl font-mono font-bold text-emerald-300 text-center mb-6">
            Explore Pairings by Wines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {winecategories.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="block bg-black bg-opacity-60 border border-emerald-400 text-emerald-200 rounded-xl shadow hover:bg-emerald-800 transition px-6 py-4 font-mono font-bold text-center"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center pt-10">
          <Link
            to="/wine"
            className="inline-block px-6 py-3 text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl font-mono font-bold shadow-md transition"
          >
            ⬅ Back to Wine Home
          </Link>
        </div>
      </div>
    </div>
  );
}
