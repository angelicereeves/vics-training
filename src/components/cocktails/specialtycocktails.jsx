import React from "react";
import { Link } from "react-router-dom";
import SpecialtycocktailsBg from "../../assets/BGimages/bar13.jpg";
import { useState } from "react";

const specialtyCocktails = [
  {
    name: "Fern Gully",
    image: "ferngully.jpg",
    recipe: "1 oz Malibu Rum, 0.5 oz Goslings Rum, 2 oz Orange Juice, 0.75 oz Orgeat, 1/3 oz Noyaux. Shake, dirty dump. Served in Double Old Fashioned over cubes. Garnish: Orange slice.",
    pairing: "Pairs beautifully with fresh salads and light appetizers.",
  },
  {
    name: "White/Dark Chocolate Martini",
    image: "chocolatemartini.jpg",
    recipe: "1 oz Bicerin White or Dark, 1 oz Vanilla Vodka, 1 oz Half & Half. Shake and strain. Served in a martini glass with chocolate drizzle garnish.",
    pairing: "Perfect with tiramisu, chocolate cake, or after-dinner sweets.",
  },
  {
    name: "Peanut Butter Sour",
    image: "peanutbuttersour.jpg",
    recipe: "1.5 oz Skrewball PB, 1 oz Banana Schnapps, 0.75 oz Orgeat, 0.5 oz Lemon Juice. Shake and strain. Served in a coupe, no ice. Garnish: Dried banana chip.",
    pairing: "Pairs well with the Emerald Kale Salad or light vegetable dishes.",
  },
  {
    name: "Cucumber Mojito",
    image: "cucumbermojito.jpg",
    recipe: "1.5 oz Hamilton White Stache Rum, 0.5 oz Simple Syrup, 4–5 Mint Leaves, 0.5 oz Lime Juice, 2 oz Cucumber Tonic, 2 oz Sprite. Shake rum, simple, mint, lime; dirty dump. Top with cucumber tonic and Sprite. Highball with cubes. Garnish: Cucumber slice.",
    pairing: "Great with light seafood dishes or fresh summer salads.",
  },
  {
    name: "Jalapeño Cucumber Margarita",
    image: "jalapenocucumbermarg.jpg",
    recipe: "1.5 oz 21 Seeds Cucumber Jalapeño, 0.5 oz Agave, 0.5 oz Triple Sec, 0.5 oz Lime Juice, 0.5 oz Lemon Juice. Shake, dirty dump. Served in Double Old Fashioned over cubes. Garnish: Tajin rim, cucumber slice.",
    pairing: "Spicy dishes like Shrimp Fra Diavolo or grilled meats complement this cocktail well.",
  },
  {
    name: "Red/White/Rosé Sangria",
    image: "sangria.jpg",
    recipe: "3 oz Pinot Grigio / Red Blend / Rosé, 0.5 oz Apricot Brandy, 0.5 oz Peach Schnapps, 2 oz Orange Juice, 2 oz Pineapple Juice. Top with Sprite. Build in AP Wine Glass over cubes. Garnish: Dried purple pineapple.",
    pairing: "Great with light vegetable dishes, seafood, or fruit-based desserts.",
  },
  {
    name: "My Friend Kat",
    image: "myfriendkat.jpg",
    recipe: "1.5 oz 21 Seeds Grapefruit Hibiscus Tequila, 0.25 oz Luxardo Maraschino, 2 oz Fever Tree Pink Grapefruit Soda, 2 oz Prickly Pear Juice, float Ruby Port. Build in highball over cubes. Garnish: Orange swath.",
    pairing: "Pairs well with citrus-marinated fish or beet salad.",
  },
  {
    name: "Vic’s Aviation",
    image: "vicsaviation.jpg",
    recipe: "1.5 oz Primrose Dry Gin, 0.5 oz Luxardo Maraschino, 0.5 oz Creme de Violette, 0.5 oz Lemon Juice. Shake, strain into coupe. Garnish: Peninsula cherry.",
    pairing: "Elegant match for buratta with heirloom tomatoes or a light seafood dish, like the Atlantic Salmon",
  },
  {
    name: "The Donovan",
    image: "thedonovan.jpg",
    recipe: "2 oz Smirnoff Vodka, 0.5 oz Lime Juice, 0.5 oz Agave Syrup, 3 oz Cucumber Tonic, 3 oz Sprite, 5 Mint Leaves. Shake, dirty dump into highball. Ice: Cubes. Garnish: Cucumber.",
    pairing: "Delicious with roasted chicken, light pastas, or summer salads.",
  },
  {
    name: "Smoke and Berries",
    image: "smokeandberries.jpg",
    recipe: "1 oz Gem & Bolt Mezcal, 1 oz Pimm’s, 0.5 oz Lemon Juice, 0.25 oz Triple Sec, 1 oz Blackberry Puree, 0.5 oz Agave. Stir, strain into Old Fashioned over large cube. Garnish: Orange swath and cherry.",
    pairing: "Pairs with the Italian Sausage, Sausage Crust, and the Pop's Meatballs.",
  },
];



export default function SpecialtyCocktails() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-16 px-6 relative"
      style={{ backgroundImage: `url(${SpecialtycocktailsBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-900 bg-opacity-0 z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10">
        <Link
          to="/cocktails"
          className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition"
        >
          ← Back to Cocktails
        </Link>
        <h1 className="text-5xl font-mono font-bold text-emerald-300 drop-shadow-lg">
          Vic’s Specialty Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Dive into our curated list of house specialties cocktails and dessert cocktails.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 text-left">
          {specialtyCocktails.map((cocktail, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-emerald-400 rounded-2xl p-4 shadow-xl"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-xl font-serif font-bold text-emerald-200">
                  {cocktail.name}
                </h2>
                <span
                  className={`text-xl font-bold transition ${
                    expandedIndex === index
                      ? "text-emerald-400"
                      : "text-gray-300"
                  }`}
                >
                  {expandedIndex === index ? "−" : "+"}
                </span>
              </div>

              {expandedIndex === index && (
                <div className="mt-4 space-y-4">
                  <div className="w-full h-48 bg-emerald-950/20 border border-emerald-500 rounded-xl flex items-center justify-center text-sm italic text-emerald-300">
                    {/* Image Placeholder */}
                    Image goes here
                  </div>
                  <p className="text-sm font-mono font-semibold text-emerald-100">
                    <span className="font-bold text-white">Recipe: </span>
                    {cocktail.recipe}
                  </p>
                  <p className="text-sm font-mono font-semibold text-emerald-100">
                    <span className="font-bold text-white">Pairing: </span>
                    {cocktail.pairing}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
