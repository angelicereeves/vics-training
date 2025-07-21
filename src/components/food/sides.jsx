
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/food13.jpg";

export default function Sides() {
  const [expandedIndex, setExpandedIndex] = useState(null);

const sides = [
  {
    name: "Shoestring or Sweet Potato Fries",
    description:
      "They are fried crisp, tossed with Maldon Sea salt. Vegetarian. Vegan. GLUTEN FREE. (While the fries themselves are gluten free, they are fried in the same fryer as other items containing gluten. If a guest is celiac, the fries can be baked instead).",
  },
  {
    name: "Brussel Sprouts",
    description:
      "Sauteed in olive oil with chopped garlic, topped with bacon (bacon can be removed), and garnished with Pecorino Romano cheese. Allergens – Dairy, garlic. GLUTEN FREE. Vegetarian without bacon.",
  },
  {
    name: "Ratatouille",
    description:
      "Vegetable stew with squash, eggplant, tomato, zucchini, and onion. Allergens – onion, garlic, dairy. Vegetarian. GLUTEN FREE.",
  },
  {
    name: "Roasted Red Potatoes",
    description:
      "Roasted red potatoes with butter, topped with Pecorino Romano cheese. Allergens – gluten, dairy. Vegetarian.",
  },
  {
    name: "Grilled Veggies",
    description:
      "Currently zucchini, onion, squash, and roasted peppers, sauteed in olive oil. Allergens – Onions. Vegetarian. Vegan. GLUTEN FREE.",
  },
  {
    name: "Mashed Potato",
    description:
      "Mashed russet potatoes, butter, heavy whipping cream, garlic, and salt. Garnished with chives. Allergens – Dairy, garlic, onions (chives). Vegetarian. GLUTEN FREE.",
  },
  {
    name: "Mac & Cheese",
    description:
      "Rotini pasta, with a blend of mild Cheddar cheese, worcestershire sauce, and mustard, topped with breadcrumbs and baked. Allergens – Gluten, dairy.",
  },
  {
    name: "Sauteed Spinach",
    description:
      "Spinach sauteed in olive oil, with onions. Onions can be removed (optional). Allergens – Onions. Vegan. GLUTEN FREE.",
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
          Sides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sides.map((dish, index) => (
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
