
  import React, { useState } from "react";
    import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/food8.jpg";

export default function Starters() {
  const [expandedIndex, setExpandedIndex] = useState(null);

    const lettuces = [
    {
      name: "Chopped Antipasto",
      description:
        "Iceberg and radicchio in spicy brown mustard vinaigrette with pepperoncini, provolone, ham, salami, Castelvetrano olives, pickled peppers & onions, chickpeas, cherry peppers, and Pecorino. Allergens – garlic, onions, dairy, bell peppers.",
    },
    {
      name: "Caesar Salad",
      description:
        "Romaine tossed in buttermilk-based Caesar dressing with anchovy breadcrumbs, shaved Pecorino, and crostinis. Allergens – Fish, gluten, garlic, onions, dairy. Vegetarian without anchovies. Gluten Free without breadcrumbs and crostini.",
    },
    {
      name: "Mr. Luckee",
      description:
        "Iceberg and Napa cabbage in champagne soy vinaigrette with carrots, green onions, breaded chicken, sesame seeds, and wontons. Allergens – gluten, onions, sesame seeds. GF with grilled chicken and no wontons.",
    },
    {
      name: "Vic’s House Salad",
      description:
        "Iceberg, romaine, and arugula with vinaigrette (lemon/spicy mustard/tomato) and salsa cruda, cherry tomatoes, cannellini beans. Allergens – garlic, onions. Vegan with lemon or mustard dressing.",
    },
    {
      name: "Emerald Kale and Chicken",
      description:
        "Kale, Napa cabbage, parsley, mint, green onions, peanuts, and pulled rotisserie chicken in peanut dressing. Garnished with mint and peanuts. Allergens – Peanuts, garlic, onions. VEGAN WITHOUT CHICKEN.",
    },
    {
      name: "Beet Salad",
      description:
        "Golden and red beets, pickled onions, Marcona almonds, arugula, lemon vinaigrette, and feta. Allergens – Dairy, tree nuts, onions. DF/NF/OF options available.",
    },
    {
      name: "Cream of Tomato Soup",
      description:
        "Creamy tomato soup with chives, served with 3 pieces of fried grilled cheese filled with shallot-chive Gournay. Allergens – gluten, garlic, onions, dairy. Contains chicken stock – NOT VEGETARIAN.",
    },
    {
      name: "Minestrone Soup",
      description:
        "Beans, zucchini, squash, green beans, onions, and ditalini pasta in vegetable chicken stock. NOT VEGETARIAN. GLUTEN FREE WITHOUT ditalini.",
    },
    {
      name: "New England Clam Chowder",
      description:
        "Clams, clam juice, celery, onion, potatoes, garlic, thyme, bacon, cream, flour roux. Served with crostini. Allergens – Onion, garlic, gluten, shellfish, dairy.",
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
          Lettuces and Soups
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lettuces.map((dish, index) => (
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
