
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/food6.jpg";

export default function HoldMe() {
  const [expandedIndex, setExpandedIndex] = useState(null);

const holdMe = [

  {
    name: "Apple Slaw Dressing",
    description:
      "Apple Slaw Dressing is made with EGG. Allergens.",
  },
  {
    name: "Signature Blend Burger",
    description:
      "Our burger blend is 50% chuck, 25% brisket, 25% short rib, 20% fat. Pickled relish, iceberg lettuce, tomato, Vic’s sauce served in a white bun. Cheeses offered for upcharge: Swiss, Sharp Cheddar, Provolone, American. Double cut Applewood Bacon offered with upcharge. Served with choice of fries, and apple slaw. Garnished with a pickle. Allergens – gluten, garlic, onions, dairy.",
  },
  {
    name: "Shaved Corned Beef",
    description:
      "Boars Head corned beef, with Swiss cheese, and Vic’s sauce, inside white baguette, served with choice of fries and apple slaw. Garnished with a pickle. Allergens – gluten, dairy, onions.",
  },
  {
    name: "Crisp Eggplant",
    description:
      "Breaded and fried eggplant, arugula, pickled peppers, with buffalo mozzarella, tomato, shaved red onions, mayo, tomato vinaigrette, and pomodoro inside white bun, served with choice of fries and apple slaw. Garnished with a pickle. Allergens – gluten, garlic, onions, dairy. NOT VEGETARIAN",
  },
  {
    name: "Chicken Cutlet",
    description:
      "Breaded chicken, lettuce, tomato, shaved red onions, mayo, tomato vinaigrette, inside white baguette. Served with a choice of fries and apple slaw. Garnished with a pickle. Allergens – gluten, garlic, onions, dairy.",
  },
  {
    name: "The Dip on the Strip",
    description:
      "Boars Head roast beef, Swiss cheese, inside white baguette, served with a side of creamy horseradish, roasted garlic au jus and choice of fries and apple slaw. Garnished with a pickle. Allergens – gluten, garlic, onions, dairy.",
  },
  {
    name: "The Italian Sub",
    description:
      "Boars Head salami, spicy capicola, prosciutto, mortadella, provolone cheese, topped with shredded Iceberg lettuce, with a mild giardiniera relish spread (pickled red/green bell peppers, olives, carrots, celery, cauliflower, onions, garlic, herbs/spices) and a Dijon mustard mayo spread. Served with a choice of fries and apple slaw. Garnished with a pickle. MEATS ARE PREPPED PREMIXED. Allergens – gluten, garlic, onions, bell peppers.",
  },
  {
    name: "Tavern Club",
    description:
      "Boars Head deluxe ham, roasted turkey, double cut applewood smoked bacon, lettuce, red onions, tomato, spicy brown mustard vinaigrette, inside white baguette, served with choice of fries and apple slaw. Garnished with a pickle. Allergens – gluten, dairy, onions.",
  },
  {
    name: "Vegan Burger",
    description:
      "Soy based meatless patty, topped with Vic’s seasoning on the flat top. Served with relish and tomato, wrapped in iceberg lettuce. Pickle Garnish. Served with no sides. VEGAN. VEGETARIAN. GLUTEN FREE. (can be made with a bun, then not gluten free)",
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
          Hold Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {holdMe.map((dish, index) => (
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
