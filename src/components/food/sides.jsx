
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/food13.jpg";
import Baguette from "../../assets/foodImages/baguette.jpg";
import Brussels from "../../assets/foodImages/brussels.jpg";
import Ratatouille from "../../assets/foodImages/ratatouille.jpg";
import Crostini from "../../assets/foodImages/crostini.jpg";
import GrilledVeggies from "../../assets/foodImages/grilledveggies.jpg";
import RedPotatoes from "../../assets/foodImages/redpotatoes.jpg";
import Spinach from "../../assets/foodImages/spinach.jpg";
import Mash from "../../assets/foodImages/sidemash.jpg";
import MacnCheese from "../../assets/foodImages/sidemacncheese.jpg";

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
    image: Brussels,
    description:
      "Sauteed in olive oil with chopped garlic, topped with bacon (bacon can be removed), and garnished with Pecorino Romano cheese. Allergens – Dairy, garlic. GLUTEN FREE. Vegetarian without bacon.",
  },
  {
    name: "Ratatouille",
    image: Ratatouille,
    description:
      "Vegetable stew with squash, eggplant, tomato, zucchini, and onion. Allergens – onion, garlic, dairy. Vegetarian. GLUTEN FREE.",
  },
  {
    name: "Roasted Red Potatoes",
    image: RedPotatoes,
    description:
      "Roasted red potatoes with butter, topped with Pecorino Romano cheese. Allergens – gluten, dairy. Vegetarian.",
  },
  {
    name: "Grilled Veggies",
    image: GrilledVeggies,
    description:
      "Currently zucchini, onion, squash, and roasted peppers, sauteed in olive oil. Allergens – Onions. Vegetarian. Vegan. GLUTEN FREE.",
  },
  {
    name: "Mashed Potato",
    image: Mash,
    description:
      "Mashed russet potatoes, butter, heavy whipping cream, garlic, and salt. Garnished with chives. Allergens – Dairy, garlic, onions (chives). Vegetarian. GLUTEN FREE.",
  },
  {
    name: "Mac & Cheese",
    image: MacnCheese,
    description:
      "Rotini pasta, with a blend of mild Cheddar cheese, worcestershire sauce, and mustard, topped with breadcrumbs and baked. Allergens – Gluten, dairy.",
  },
  {
    name: "Sauteed Spinach",
    image: Spinach,
    description:
      "Spinach sauteed in olive oil, with onions. Onions can be removed (optional). Allergens – Onions. Vegan. GLUTEN FREE.",
  },
  {
    name: "Baguette",
    image: Baguette,
    description:
      "A classic French baguette, served warm with garlic butter or oil and vinegar. Allergens – Gluten. Vegetarian.",
  },
  {
    name: "Crostini",
    image: Crostini,
    description:
      "Toasted bread with olive oil and salt. Allergens – Gluten. Vegetarian.",
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
                    <div className="w-full h-48 bg-emerald-950/20 border border-emerald-500 rounded-xl flex items-center justify-center text-sm italic text-emerald-300">
                    <img
                      src={sides[index].image}
                      alt={sides[index].name}
                      className="object-contain h-full"
                    />
                  </div>
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
