import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/food14.jpg";
import Buratta from "../../assets/foodImages/buratta.jpg";
import CrispyEggplant from "../../assets/foodImages/crispyEggplant.jpg";
import CrabCakes from "../../assets/foodImages/crabcakes.jpg";
import Nippers from "../../assets/foodImages/nippers.jpg";
import Meatballs from "../../assets/foodImages/meatballs.jpg";
import LobsterBites from "../../assets/foodImages/lobsterbites.jpg";
import ShrimpCocktail from "../../assets/foodImages/shrimpCocktail.jpg";
import VicsChicken from "../../assets/foodImages/vicschicken.jpg";


export default function Starters() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const starters = [
    {
      name: "Nippers",
      image: Nippers,
      description:
        "These are fried bread dumplings. Garnished with Pecorino Romano cheese (Locatelli Pecorino Romano is a hard, salty sheep’s milk cheese from the Lazio region surrounding Rome) and chopped chives. Served with creamy garlic butter and pomodoro sauce. Allergens – gluten, dairy, garlic, onions. NOT VEGETARIAN",
    },
    {
      name: "Pop’s Meatballs",
      image: Meatballs,
      description:
        "These are made from a recipe that came from Gombah Goffredo. We make it with 2-parts Vic’s signature burger blend (50% chuck, 25% brisket, 25% short rib, 20% fat) and 1-part spicy Italian sausage. They’re poached off in the oven in tomato broth and held. At production the meatballs are crisped, topped with fresh pomodoro sauce and served with a scoop of ricotta cheese and crostini. Garnished with baby rocket (arugula) lightly dressed with olive oil and balsamic vinegar, and grated pecorino Romano cheese. Allergens – gluten, dairy, eggs, garlic, onions, contains pork (not kosher).",
    },
    {
      name: "Vic’s Signature Chicken",
      image: VicsChicken,
      description:
        "This is a three-pound chicken split. Rubbed with olive oil, Maldon Sea salt, fresh lemon juice and cracked black pepper. Roasted then sectioned and fried crisp with Vic’s signature rub. Served on apple slaw and garnished with gorgonzola crumbles. Allergens – dairy, onions, garlic, eggs (apple slaw) GLUTEN FREE.",
    },
    {
      name: "Crispy Eggplant",
      image: CrispyEggplant,
      description:
        "Thin panko breaded eggplant cutlets topped with marinated Castelvetrano olives. Garnished with tomato vinaigrette and shaved Pecorino Romano. Allergens – gluten, garlic, onions, dairy. NOT VEGETARIAN",
    },
    {
      name: "Italian Sausage",
      description:
        "Poached in tomato chicken stock, sliced and fried crisp. Topped with pickled peppers & onions, served with spicy brown mustard jus and crostini. Allergens – gluten, garlic, onions, bell peppers. GLUTEN FREE without Crostini.",
    },
    {
      name: "Burrata with Heirloom Tomatoes",
      image: Buratta,
      description:
        "4oz Burrata served with quartered heirloom and Campari tomatoes, olive oil, basil, and balsamic glaze. Allergens – dairy. Vegetarian. GLUTEN FREE.",
    },
    {
      name: "Crab Cakes",
      image: CrabCakes,
      description:
        "Backfin crab, eggs, mayo, Dijon, breadcrumbs, bell peppers, and onions. Served with roasted pepper sauce, charred lemon, and spring mix. Allergens – Gluten, onions, dairy, eggs, shellfish, bell peppers.",
    },
    {
      name: "Shrimp Cocktail",
      image: ShrimpCocktail,
      description:
        "Four U-12 Mexican blue shrimp over spring mix with cocktail sauce and grated horseradish. Garnished with paprika and lemon. Allergens – Shellfish, garlic, onion. GLUTEN FREE.",
    },
    {
      name: "Eggplant Crostini",
      description:
        "Three roasted eggplant pucks, served hot with vegan pomodoro and mozzarella, garnished with basil. Allergens – Garlic, Onions. VEGAN / GLUTEN FREE.",
    },
    {
      name: "Beer Tempura Lobster",
      image: LobsterBites,
      description:
        "5–6oz Canadian Lobster tail, beer battered and fried, served in the shell over arugula with pickled peppers, sriracha aioli, and lemon. Allergens – Shellfish, Gluten, Dairy, Onions.",
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
      <div className="max-w-6xl mx-auto py-8">
        <Link
          to="/food"
          className="inline-block mb-6 px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md transition duration-300"
        >
          ← Back to Full Menu
        </Link>

        <h2 className="text-4xl font-mono font-bold text-emerald-400 border-b border-emerald-400 pb-4 mb-10">
          Starters
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {starters.map((dish, index) => (
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
                      src={starters[index].image}
                      alt={starters[index].name}
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
