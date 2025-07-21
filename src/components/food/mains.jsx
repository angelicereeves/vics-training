
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/food4.jpg";

export default function Mains() {
  const [expandedIndex, setExpandedIndex] = useState(null);

const mains = [
  {
    name: "Braised Pork Loin",
    description:
      "This is a 16oz pork shoulder butterflied out filled with pancetta, sofritto, parsley, garlic, lemon zest, Pecorino Romano, Maldon Sea salt, fresh cracked black pepper. Seared then braised, set atop a bed of buttered pappardelle, topped with pomodoro sauce. Garnished with Pecorino Romano cheese and basil. Allergens – gluten, garlic, onions, dairy. GLUTEN FREE WITHOUT PASTA.",
  },
  {
    name: "Veal Piccata",
    description:
      "Veal cutlet dredged in flour, with lemon caper butter sauce on top of tagliatelle. Garnished with chopped parsley. Allergens – gluten, garlic, dairy, citrus. GLUTEN FREE WITHOUT PASTA AND FLOUR DREDGE.",
  },
  {
    name: "Chicken Parmesan",
    description:
      "Breaded chicken cutlet fried crisp, topped with pomodoro, Pecorino Romano and mozzarella. Served with rigatoni pomodoro. Garnished with basil. Allergens – gluten, garlic, onions, dairy.",
  },
  {
    name: "Crisp Half Roasted Chicken",
    description:
      "This is a three-pound chicken split. Rubbed with olive oil, Maldon Sea salt, fresh lemon juice and fresh cracked black pepper, Roasted. It will be crisped at the time of production then topped with a Whiskey Bourbon Apricot glaze. It will be sliced between the thigh/leg and breast/wing, stacked, and served with mac and cheese (rotini pasta, cheddar, mozzarella, Pecorino Romano, white pepper) topped with breadcrumbs. Allergens – dairy, gluten, garlic. Gluten Free without mac and cheese.",
  },
  {
    name: "USDA Prime Skirt Steak",
    description:
      "10oz Lightly seasoned with Maldon Sea salt, fresh cracked black pepper. Pan seared, basted with butter, crushed garlic and fresh thyme. Briefly rested, topped with sauteed spinach/onion and shoestring fries. Garnished with chopped chives. Served with a float of roasted garlic jus. Allergens – garlic, onions, dairy. GLUTEN FREE.",
  },
  {
    name: "Salmon",
    description:
      "Atlantic (farm raised in the ocean, Norway) 8oz salmon lightly seasoned with Maldon Sea salt and pepper. Pan seared. Briefly rested, topped with tomato basil caper beurre blanc (wine sauce). Garnished with breadcrumb tomato. Served with sauteed spinach and onion. Can be prepared Blackened upon request. Allergens – garlic, onions, dairy, fish, shellfish depending on the day’s selection. Pescatarian. Gluten Free without sliced breadcrumb tomato.",
  },
  {
    name: "Bone-in Ribeye",
    description:
      "16oz bone-in ribeye steak pan seared in a cast iron skillet, basted in butter, served over a bed of pomme purée (mashed potatoes). Garnished with grilled green onions, garlic, thyme sprigs, and a side of heirloom tomatoes topped with gorgonzola cheese. Allergens – Dairy, garlic, onions. GLUTEN FREE.",
  },
  {
    name: "Branzino",
    description:
      "Branzino (farm raised in Turkey) skin on, flour dredged, and pan seared. Served with a lemon butter caper sauce, with a side of tagliatelle pasta. Garnished with fresh parsley. Allergens – Dairy, garlic, gluten, fish, citrus. GLUTEN FREE WITHOUT PASTA AND FLOUR DREDGE.",
  },
  {
    name: "Blackened Swordfish",
    description:
      "8oz Blackened Swordfish (wild caught from Gulf of Mexico or near Hawaii) served over a bed of mashed potatoes and haricot vert. Topped with a roasted red pepper sauce. Allergens – dairy, onions, garlic. GLUTEN FREE.",
  },
];

  const toggleCard = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
     <div
          className="min-h-screen bg-cover bg-center bg-no-repeat relative text-white"
          style={{ backgroundImage: `url(${BGpic})` }}
        >
      <div className="max-w-6xl mx-auto py-10">
        <Link
          to="/food"
          className="inline-block mb-6 px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md transition duration-300"
        >
          ← Back to Full Menu
        </Link>
        <h2 className="text-4xl font-mono font-bold text-emerald-400 border-b border-emerald-400 pb-4 mb-10">
            Mains
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mains.map((dish, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-70 border border-emerald-500 rounded-xl p-6 shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleCard(index)}
                className="w-full text-left focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold font-mono text-emerald-300">{dish.name}</h3>
                  <span className={`text-xl font-bold transition ${expandedIndex === index ? "text-emerald-400" : "text-gray-300"}`}>
                    {expandedIndex === index ? "−" : "+"}
                    </span>
                </div>
              </button>

              {expandedIndex === index && (
                <p className="mt-3 text-gray-200 text-sm leading-relaxed">
                  {dish.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
