import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/food1.jpg";

export default function Desserts() {
  const [expandedIndex, setExpandedIndex] = useState(null);

const desserts = [
  {
    name: "Bread Pudding",
    description:
      "Cubed bread soaked in a custard-like mixture, golden raisins, baked until it becomes a soft spongy and thick texture. Served hot, with caramel, chocolate sauce, and topped with bourbon vanilla sauce. Served ala mode with vanilla ice cream. Allergens – gluten, dairy. Vegetarian.",
  },
  {
    name: "Ricotta & Whipped Lemon Crema",
    description:
      "Whipped ricotta, cream cheese, honey, lemon juice, lemon zest, and sugar. Very much like a deconstructed cheesecake. Topped with organic honey and roasted chopped pistachios. Allergens – dairy, nuts (pistachios). Vegetarian.",
  },
  {
    name: "Tiramisu",
    description:
      "Allergens – gluten, dairy. Vegetarian.",
  },
  {
    name: "Chocolate Mousse Cake",
    description:
      "Chocolate cake, layered with chocolate mousse. Allergens – gluten, dairy. Vegetarian.",
  },
  {
    name: "Cheesecake",
    description:
      "New York Style cheesecake, topped with a house made Chambord berry compote. Allergens – gluten, dairy. Vegetarian.",
  },
  {
    name: "Carrot Cake",
    description:
      "Traditional carrot cake, walnuts, and a cream cheese icing. Allergens – gluten, dairy, nuts (walnuts). Vegetarian.",
  },
  {
    name: "Trio of Sorbet",
    description:
      "Three scoops of sorbet, watermelon, lemon, and mango. Guest may NOT substitute any of the scoops out, or ask for three scoops of the same flavor. Vegan.",
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
          Desserts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {desserts.map((dish, index) => (
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
