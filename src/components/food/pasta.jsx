
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/food16.jpg";
import Bolo from "../../assets/foodImages/bolo.jpg";
import ClamsAngel from "../../assets/foodImages/clamsangel.jpg";
import SausagePasta from "../../assets/foodImages/sausagepasta.jpg";
import RotiniPasta from "../../assets/foodImages/rotinipasta.jpg";
import ShrimpFra from "../../assets/foodImages/shrimpfra.jpg";

export default function Starters() {
  const [expandedIndex, setExpandedIndex] = useState(null);

const pasta = [
  {
    name: "Spaghetti Pomodoro",
    description:
      "Pomodoro sauce is fresh tomato sauce. Sofritto is the Italian mirepoix (celery, carrots, onions). The sofritto is sauteed with butter and olive oil. The pomodoro is added and tossed with the pasta. It’s a light, tomato, and vegetable sauce common in Italian households. Garnished with Pecorino Romano cheese and basil. Allergens – gluten, garlic, onions, dairy. NOT VEGETARIAN",
  },
  {
    name: "Pappardelle Bolognese",
    image: Bolo,
    description:
      "The pappardelle are tossed in a Pecorino Romano cream then topped with pork and beef ragu. Garnished with Pecorino Romano cheese and basil. Allergens – gluten, garlic, onions, dairy. (Can be made dairy free without Pecorino Romano cream)",
  },
  {
    name: "Rigatoni Carbonara",
    description:
      "Rigatoni tossed in carbonara cream (Pecorino Romano steeped in cream with egg yolks added). Garnished with cheese, crisp pancetta, fresh cracked black pepper, chopped chives. Allergens – gluten, onion, dairy.",
  },
  {
    name: "Clams Tagliolini",
    image: ClamsAngel,
    description:
      "Tagliolini noodles topped with white wine clam lemon butter sauce. There are 6 full shelled little neck clams (farm raised from Virginia), and it is topped with chopped ocean clams (wild caught USA). Garnished with chopped parsley and toasted baguette. Allergens – gluten, garlic, shellfish, dairy. Pescatarian",
  },
  {
    name: "Shrimp Fra Diavolo",
    image: ShrimpFra,
    description:
      "Tagliolini noodles sauteed in a spicy pomodoro sauce with shrimp. Fra Diavolo roughly translates to “Among the Devil”. Garnished with basil. Allergens – gluten, garlic, onions, dairy, shellfish. NOT PESCATARIAN.",
  },
  {
    name: "Rotini Primavera",
    image: RotiniPasta,
    description:
      "Mushrooms, zucchini, yellow squash, and garlic. Sauteed and stewed with our VEGAN Pomodoro sauce. Served over chickpea rotini pasta, garnished with fresh basil. Allergens – Garlic, onions, mushrooms. VEGAN / GLUTEN FREE",
  },
  {
    name: "Sausage Cacciatore (Sausage Peppers Onions Pasta)",
    image: SausagePasta,
    description:
      "Spicy Italian sausage, red and green bell peppers, red onions, chili flakes, and garlic. Sauteed and stewed in a spicy pomodoro sauce, served over Tagliatelle pasta, with a basil garnish. PEPPERS/ONIONS PREMIXED. Allergens – Gluten, Garlic, Onions.",
  },
  {
    name: "Aglio E Olio",
    description:
      "Spaghetti noodles tossed in a garlic infused olive oil, then plated. Garnished with Pecorino Romano Cheese and Parsley. Allergens – Garlic, Dairy, Gluten.",
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
          Pastas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pasta.map((dish, index) => (
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
                      src={pasta[index].image}
                      alt={pasta[index].name}
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
