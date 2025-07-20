import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Crust() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const crusts = [
  {
    name: "Pomodoro, Mozzarella, Olive Oil, Parsley Gremolata",
    description:
      "Topped accordingly. Parsley gremolata is made with chopped parsley, garlic, lemon zest, Pecorino Romano cheese and cracked black pepper. This is placed on the crust after it comes out of the oven. Gremolata is another word for garnish. Allergens – gluten, garlic, onions, dairy. NOT VEGETARIAN",
  },
  {
    name: "Grilled Vegetable and Cheese",
    description:
      "Topped accordingly. Currently, we have zucchini, squash, eggplant, roasted peppers, and onions. This is a mix; nothing can be removed. It is grilled in olive oil and topped with balsamic glaze, arugula (dressed lightly with olive oil and lemon juice) and shaved Pecorino Romano. Allergens – gluten, garlic, dairy. Vegetarian.",
  },
  {
    name: "Clams Pancetta Crust",
    description:
      "Topped accordingly. Chopped Clams, mozzarella, shaved garlic, chopped chives, crisped pancetta topped with arugula (dressed lightly with olive oil and lemon juice) and shaved Pecorino Romano. Pancetta (pronounced pan-CHET-tah) is a cut of pork belly meat that is salt-cured but not smoked. Allergens – gluten, garlic, onions, shellfish, dairy.",
  },
  {
    name: "Italian Sausage, Pomodoro, Mozzarella, Pickled Peppers & Onions",
    description:
      "Topped accordingly. Pickled peppers and onions are premixed, cannot remove one without removing the other. Allergens – gluten, garlic, onions, dairy, bell peppers.",
  },
  {
    name: "Veggie Crust",
    description:
      "Cauliflower crust (contains milk), VEGAN pomodoro, VEGAN mozzarella. Baked, then topped and served with a balsamic glaze, and baby rocket arugula tossed with olive oil and lemon juice. Allergens – Garlic, onions. VEGETARIAN / GLUTEN FREE. NOT VEGAN",
  },
];

  const toggleCard = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-white text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/food"
          className="inline-block mb-6 px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md transition duration-300"
        >
          ← Back to Full Menu
        </Link>
        <h2 className="text-4xl font-serif font-bold text-emerald-400 border-b border-emerald-400 pb-4 mb-10">
            Crusts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {crusts.map((dish, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-70 border border-emerald-500 rounded-xl p-6 shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleCard(index)}
                className="w-full text-left focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-emerald-300">{dish.name}</h3>
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
