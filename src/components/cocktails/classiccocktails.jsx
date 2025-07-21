import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import BGpic from "../../assets/BGimages/bar22.jpg";


const classicCocktails = [
  {
    name: "Americano",
    recipe: "1 oz Campari, 1 oz Sweet Vermouth, 2 oz Club Soda. Build in glass with ice, top with soda.",
    pairing: "Served in a Collins or Highball glass with cubes. Garnish: Orange slice."
  },
  {
    name: "Aperol Spritz",
    recipe: "2 oz Aperol, 3 oz Gambino Sparkling Wine (Prosecco), 2 oz Club Soda. Build in glass, slight stir.",
    pairing: "Universal wine glass with cubes. Garnish: Orange slice and large pitted olive."
  },
  {
    name: "Aviation",
    recipe: "1.5 oz London Dry Gin, 0.5 oz Luxardo Maraschino Liqueur, 0.5 oz Lemon Juice, 0.5 oz Crème de Violette. Shake and strain.",
    pairing: "Coupe glass, no ice. Garnish: Whiskey cherry."
  },
  {
    name: "Bee's Knees",
    recipe: "1.5 oz Primrose London Dry Gin, 0.75 oz Lemon Juice, 0.75 oz Honey Syrup. Shake and double strain.",
    pairing: "Coupe glass, no ice. Garnish: Lemon swath."
  },
  {
    name: "Bellini",
    recipe: "1 oz Peach Purée, 4 oz Gambino Sparkling Wine (Prosecco). Build in glass.",
    pairing: "Champagne flute, no ice. Garnish: Raspberry."
  },
    {
    name: "Billionaire",
    recipe: "2 oz Four Roses Bourbon, 0.25 oz Absente Absinthe, 0.5 oz Lemon Juice, 0.5 oz Simple Syrup, 0.5 oz Grenadine. Shake, dirty dump.",
    pairing: "Double Old Fashioned glass with cubes. Garnish: Lemon swath."
  },
  {
    name: "Black Russian",
    recipe: "1.5 oz Vodka, 1 oz Kahlua. Build in glass.",
    pairing: "Old Fashioned glass with cubes. No garnish."
  },
  {
    name: "Blood and Sand",
    recipe: "0.75 oz Dewar’s Scotch, 0.75 oz Cherry Heering, 0.75 oz Sweet Vermouth, 0.75 oz Orange Juice. Shake and double strain.",
    pairing: "Coupe glass, no ice. Garnish: Orange swath and cherry."
  },
  {
    name: "Bloody Mary",
    recipe: "1.5 oz Vodka, 3 oz Bloody Mary Mix, 0.5 oz Lemon Juice, 2 dashes Worcestershire, 2 dashes Tabasco. Roll in shaker tin.",
    pairing: "Collins/Highball glass with cubes. Garnish: Lime slice and olive."
  },
  {
    name: "Boulevardier",
    recipe: "1 oz Four Roses Bourbon, 1 oz Campari, 1 oz Sweet Vermouth. Stir and strain.",
    pairing: "Old Fashioned or Coupe glass with large cube. Garnish: Orange swath."
  },
  {
    name: "Vic's Brandy Alexander",
    recipe: "1 oz Bols Apricot Brandy, 1 oz Creme de Cacao (dark), 1 oz Half and Half. Shake and strain.",
    pairing: "Martini glass, no ice. Garnish: Grated nutmeg."
  },
  {
    name: "Brown Derby",
    recipe: "2 oz Four Roses Bourbon, 0.75 oz Grapefruit Juice, 0.5 oz Honey Syrup. Shake and strain.",
    pairing: "Coupe glass, no ice. Garnish: Lemon swath."
  },
  {
    name: "Caipirinha",
    recipe: "2 oz Cachaça, 1 oz Simple Syrup, 0.5 oz Lime Juice, 4 Lime Wedges. Muddle lime and syrup, shake with ice and cachaça.",
    pairing: "Old Fashioned glass with cubes. Garnish: Lime wheel."
  },
  {
    name: "Casino Cocktail",
    recipe: "1.5 oz Gin, 0.25 oz Luxardo Maraschino, 0.75 oz Lemon Juice, 0.5 oz Simple Syrup, 2 dashes Orange Bitters. Shake and double strain.",
    pairing: "Martini glass, no ice. Garnish: Amareno cherry."
  },
  {
    name: "Champagne Cocktail",
    recipe: "5 oz Gambino Sparkling Wine (Champagne), 4–5 dashes Angostura Bitters, 1 Sugar Cube. Soak sugar with bitters, top with champagne.",
    pairing: "Champagne flute, no ice. Garnish: None."
  },
  {
    name: "Clover Club",
    recipe: "1.5 oz Dry Gin, 1 oz Lemon Juice, 0.25 oz Raspberry Syrup, 1 Egg White. Dry shake, wet shake, strain.",
    pairing: "Martini glass, no ice. Garnish: Raspberry."
  },
  {
    name: "Corpse Reviver #1",
    recipe: "1 oz Calvados, 1 oz Cognac, 0.5 oz Sweet Vermouth. Stir and strain.",
    pairing: "Coupe glass, no ice. Garnish: None."
  },
  {
    name: "Corpse Reviver #2",
    recipe: "0.75 oz Dry Gin, 0.75 oz Orange Curaçao, 0.75 oz Cocchi Americano, 0.75 oz Lemon Juice. Rinse coupe with Absinthe, shake and strain.",
    pairing: "Coupe glass, no ice. Garnish: Amareno cherry + absinthe spray."
  },
  {
    name: "Cosmopolitan",
    recipe: "1.5 oz Smirnoff Citron Vodka, 0.5 oz Orange Curaçao, 0.5 oz Cranberry Juice, 0.5 oz Lime Juice. Shake and strain.",
    pairing: "Martini glass, no ice. Garnish: Lemon swath."
  },
  {
    name: "Cuba Libre",
    recipe: "1.5 oz Silver Rum, 3–4 oz Coca-Cola. Build in glass with ice.",
    pairing: "Old Fashioned glass with cubes. Garnish: Lime wedge."
  },
  {
    name: "Daiquiri (Classic)",
    recipe: "1.5 oz Silver Rum, 0.75 oz Lime Juice, 0.75 oz Simple Syrup. Shake and double strain.",
    pairing: "Martini glass, no ice. Garnish: Lime wheel."
  },
  {
    name: "Dark and Stormy",
    recipe: "2 oz Goslings Dark Rum, 3.5 oz Ginger Beer. Build in glass with ice — ginger beer first, float rum on top.",
    pairing: "Collins/Highball glass with cubes. Garnish: Lime wedge."
  },
  {
    name: "Dolce Pressato",
    recipe: "1 oz Royal Standard Dry Rum, 0.5 oz Bourbon Cream, 0.5 oz Vanilla Simple Syrup, 1 oz Espresso. Shake and double strain.",
    pairing: "Coupe glass, no ice. Garnish: Shaved nutmeg."
  },
  {
    name: "Espresso Martini",
    recipe: "1 oz Vanilla Vodka, 1 oz Mr. Black Cold Brew Liqueur, 1 oz Espresso. Shake and strain.",
    pairing: "Martini glass, no ice. Garnish: 3 espresso beans."
  },
  {
    name: "French 75",
    recipe: "1 oz Dry Gin, 0.5 oz Lemon Juice, 0.5 oz Simple Syrup, 3 oz Sparkling Wine. Combine gin, lemon, and syrup in flute, top with bubbles.",
    pairing: "Coupe or flute, no ice. Garnish: Lemon twist."
  },
    {
    name: "French Martini",
    recipe: "1.75 oz Grey Goose Vodka, 0.5 oz Crème de Cassis (Chambord), 0.75 oz Pineapple Juice. Shake and double strain.",
    pairing: "Martini glass, no ice. Garnish: Raspberry."
  },
  {
    name: "Fox and Hounds",
    recipe: "1.5 oz Four Roses Bourbon, 0.5 oz Pernod, 0.5 oz Lemon Juice, 0.5 oz Simple Syrup, 1 Egg White. Dry shake, wet shake, double strain.",
    pairing: "Martini glass, no ice. Garnish: Lemon swath."
  },
  {
    name: "Gin Fizz",
    recipe: "2 oz Dry Gin, 1 oz Lemon Juice, 0.75 oz Simple Syrup, 1 Egg White, 1–2 oz Club Soda. Dry shake, wet shake, strain, top with soda.",
    pairing: "Collins/Highball glass, no ice. Garnish: Lemon swath."
  },
  {
    name: "Godfather",
    recipe: "2 oz Dewar’s Scotch, 1 oz Disaronno Amaretto. Build in glass with ice.",
    pairing: "Old Fashioned glass with cubes. Garnish: Orange slice."
  },
  {
    name: "Grasshopper",
    recipe: "1 oz Crème de Menthe (green), 1 oz Crème de Cacao (white), 1 oz Half and Half. Shake and strain.",
    pairing: "Martini glass, no ice. Garnish: Chocolate shavings."
  },
  {
    name: "Greyhound (Salty Dog with salted rim)",
    recipe: "1.5 oz Vodka (or Dry Gin), 3 oz Grapefruit Juice. Build in glass with ice.",
    pairing: "Old Fashioned glass with cubes. Garnish: Lime wedge."
  },
  {
    name: "Hanky Panky",
    recipe: "1.5 oz Dry Gin, 1.5 oz Sweet Vermouth, barspoon of Fernet Branca. Stir and strain.",
    pairing: "Coupe glass, no ice. Garnish: Orange swath."
  },
  {
    name: "Harvey Wallbanger",
    recipe: "2 oz Vodka, 0.5 oz Galliano, 3–4 oz Orange Juice. Build in glass with ice, top with Galliano.",
    pairing: "Collins/Highball glass with cubes. Garnish: Orange slices."
  },
  {
    name: "Hemingway Daiquiri",
    recipe: "1.5 oz Silver Rum, 0.25 oz Luxardo Maraschino, 0.75 oz Pink Grapefruit Juice, 0.5 oz Lime Juice. Shake and double strain.",
    pairing: "Martini glass, no ice. Garnish: Lime wheel."
  },
  {
    name: "Hot Toddy",
    recipe: "1.5 oz Four Roses Bourbon, 0.5 oz Honey Simple, 0.5 oz Lemon Juice, 0.5 oz Cinnamon Syrup, 5–6 oz Hot Water. Build in mug.",
    pairing: "Coffee mug (footed if available), no ice. Garnish: Lemon wedge."
  },
  {
    name: "Irish Coffee",
    recipe: "1 oz Jameson Irish Whiskey, 1 oz Baileys, 4 oz Coffee. Optional whipped cream. Build in mug.",
    pairing: "Irish coffee glass, no ice. Garnish: Whipped cream dollop."
  },
  {
    name: "Kir",
    recipe: "0.5 oz Crème de Cassis, 5 oz Dry White Wine (Gavi di Gavi). Build in glass.",
    pairing: "Universal wine glass, no ice. Garnish: Lemon swath."
  },
  {
    name: "Kir Royal",
    recipe: "0.5 oz Crème de Cassis (Chambord), 5 oz Gambino Sparkling Wine (Champagne). Build in glass.",
    pairing: "Coupe glass, no ice. Garnish: Lemon swath."
  },
  {
    name: "Last Word",
    recipe: "0.75 oz Fords Dry Gin, 0.75 oz Green Chartreuse, 0.75 oz Luxardo Maraschino, 0.75 oz Lime Juice. Shake and strain.",
    pairing: "Coupe glass, no ice. Garnish: None."
  },
  {
    name: "Lemon Drop Martini",
    recipe: "1.5 oz Smirnoff Citron Vodka, 0.5 oz Orange Curaçao, 0.5 oz Lemon Juice, 0.5 oz Simple Syrup. Shake and double strain.",
    pairing: "Martini glass, no ice. Garnish: Lemon swath, sugar rim (half rim)."
  },
  {
    name: "Long Island Iced Tea",
    recipe: "0.5 oz Vodka, 0.5 oz Dry Gin, 0.5 oz Silver Rum, 0.5 oz Blanco Tequila, 0.5 oz Orange Curaçao, 2 oz Lemon Juice, splash Coca-Cola. Roll spirits and sour mix in shaker, build in glass, top with Coke.",
    pairing: "Beer glass with ice. Garnish: Lemon wedge."
  },
  {
    name: "Madras",
    recipe: "1.5 oz Vodka, 2 oz Cranberry Juice, 1 oz Orange Juice. Build in glass with ice.",
    pairing: "Collins/Highball glass with ice. Garnish: Lime wedge."
  },
  {
    name: "Mai Tai",
    recipe: "1 oz Diplomatico Rum, 1 oz Appleton Rum, 0.5 oz Orange Curaçao, 0.5 oz Orgeat, 0.5 oz Lime Juice, 0.25 oz Simple Syrup. Shake and strain.",
    pairing: "Collins/Highball glass with cubes. Garnish: Lime wedge and mint sprig."
  },
  {
    name: "Manhattan",
    recipe: "2 oz Sazerac Rye Whiskey, 1 oz Sweet Vermouth, 3 dashes Angostura Bitters. Stir and strain.",
    pairing: "Coupe glass (or Old Fashioned), no ice. Garnish: Amareno cherry."
  },
  {
    name: "Margarita (Classic)",
    recipe: "1.5 oz Silver Tequila, 0.5 oz Orange Curaçao, 1 oz Lemon Juice, 1 oz Lime Juice, 0.5 oz Agave Syrup. Shake and strain.",
    pairing: "Double Old Fashioned glass with cubes. Garnish: Salted rim and lime wedge."
  },
  {
    name: "Mimosa",
    recipe: "2 oz Orange Juice, 3 oz Gambino Sparkling Wine (Champagne). Build in glass.",
    pairing: "Coupe glass, no ice. Garnish: None."
  },
  {
    name: "Martini (Gin)",
    recipe: "2.5 oz Dry Gin or Vodka (guest choice), 0.5 oz Dry Vermouth. Stir until well chilled, strain.",
    pairing: "Martini glass, no ice. Garnish: Lemon twist or 2 olives. Ask: gin/vodka, shaken/stirred, up/on rocks, olive/lemon."
  },
  {
    name: "Mint Julep",
    recipe: "2 oz Four Roses Bourbon, 0.75 oz Simple Syrup, 6–8 Mint Leaves. Gently muddle mint and syrup, add ice and bourbon, roll to combine.",
    pairing: "Old Fashioned glass with crushed ice if possible. Garnish: Mint sprig."
  },
  {
    name: "Mojito",
    recipe: "1.5 oz Silver Rum, 0.75 oz Lime Juice, 0.75 oz Simple Syrup, 6–8 Mint Leaves, chilled Soda Water. Muddle lime, syrup, mint, add rum and ice, roll, spritz soda.",
    pairing: "Collins/Highball glass with cubes. Garnish: Lime wedge and mint sprig."
  },
  {
    name: "Moscow Mule",
    recipe: "1.5 oz Vodka, 0.5 oz Lime Juice, 3–4 oz Ginger Beer. Build in glass with ice.",
    pairing: "Old Fashioned glass or copper mug with crushed ice. Garnish: Lime wedge."
  },
  {
    name: "Mudslide",
    recipe: "1.5 oz Vodka, 0.75 oz Kahlua, 0.75 oz Baileys Irish Cream, 0.75 oz Half and Half. Shake and double strain.",
    pairing: "Martini glass, no ice. Garnish: None."
  },
  {
    name: "Naked and Famous",
    recipe: "0.75 oz Gem & Bolt Mezcal, 0.75 oz Yellow Chartreuse, 0.75 oz Aperol, 0.75 oz Lime Juice. Shake and strain.",
    pairing: "Coupe glass, no ice. Garnish: Lime wedge."
  },
  {
    name: "Negroni",
    recipe: "1 oz Gin, 1 oz Campari, 1 oz Sweet Vermouth. Stir and strain.",
    pairing: "Rocks glass with large cube. Garnish: Lemon swath."
  },
  {
    name: "Negroni Sbagliato",
    recipe: "1 oz Campari, 1 oz Sweet Vermouth, 1 oz Prosecco. Build in glass.",
    pairing: "Old Fashioned glass with large cube. Garnish: Lemon swath."
  },
  {
    name: "Old Fashioned (Historic Style)",
    recipe: "2 oz Four Roses Bourbon, 1 oz Raw Simple Syrup, 3 dashes Angostura Bitters. Stir and strain.",
    pairing: "Old Fashioned glass with large cube. Garnish: Orange swath, cherry."
  },
  {
    name: "Old Fashioned - Hotel (Modern Style)",
    recipe: "2 oz Four Roses Bourbon, 1 Amareno Cherry, 1 Orange Slice, 0.5 oz Simple Syrup, 2–3 dashes Angostura Bitters, splash of Club Soda. Muddle orange, cherry, syrup, and bitters in glass. Add ice and bourbon, stir, finish with soda.",
    pairing: "Old Fashioned glass with cubes. Garnish: None (already in glass)."
  },
  {
    name: "Paloma",
    recipe: "1.5 oz Tequila Blanco, 0.5 oz Grapefruit Liqueur, 0.5 oz Lime Juice, 2–3 oz Club Soda. Build in glass, top with soda.",
    pairing: "Collins/Highball glass with cubes. Garnish: Lime wheel."
  },
  {
    name: "Paper Plane",
    recipe: "0.75 oz Four Roses Bourbon, 0.75 oz Aperol, 0.75 oz Nonino Amaro, 0.75 oz Lemon Juice. Shake and double strain.",
    pairing: "Coupe glass, no ice. Garnish: None."
  },
  {
    name: "Penicillin",
    recipe: "1.5 oz Dewar’s Blended Scotch, 0.5 oz Ginger Liqueur, 0.5 oz Lemon Juice, 0.5 oz Honey Simple. Shake and double strain.",
    pairing: "Old Fashioned glass with cubes. Garnish: Lemon swath, 2–3 sprays of Single Malt Scotch."
  },
  {
    name: "Pimm’s Cup",
    recipe: "2 oz Pimm’s No. 1, 1 oz Lemon Juice, 2–3 oz Ginger Ale, 3–4 Cucumber Cubes. Muddle cucumber, lemon, and Pimm’s, add ice and ginger ale, gently stir.",
    pairing: "Collins/Highball glass with cubes. Garnish: Lemon slice."
  },
  {
    name: "Piña Colada",
    recipe: "1 oz Silver Rum, 1 oz Malibu Coconut Rum, 1 oz Coconut Cream, 1 oz Pineapple Juice, 0.5 oz Lime Juice. Shake and strain.",
    pairing: "Collins/Highball glass with crushed ice. Garnish: Lime wheel."
  },
  {
    name: "Pink Squirrel",
    recipe: "1 oz Crème de Noyaux, 1 oz Crème de Cacao (white), 1 oz Half and Half. Shake and strain.",
    pairing: "Martini glass, no ice. Garnish: Shaved nutmeg."
  },
  {
    name: "Pisco Sour",
    recipe: "1.5 oz Pisco, 0.75 oz Lemon Juice, 0.75 oz Simple Syrup, 1 Egg White. Dry shake, wet shake, double strain.",
    pairing: "Old Fashioned glass, no ice. Garnish: Angostura dash swirl."
  },
  {
    name: "Purple Haze",
    recipe: "1.5 oz Smirnoff Vodka, 0.5 oz Chambord, 2 oz Cranberry Juice. Shake vodka and Chambord, dump, top with cranberry.",
    pairing: "Old Fashioned glass with cubes. Garnish: Mint sprig."
  },
  {
    name: "Ramos Gin Fizz",
    recipe: "2 oz Dry Gin, 0.5 oz Simple Syrup, 0.5 oz Half and Half, 0.5 oz Lemon Juice, 0.5 oz Lime Juice, 2–3 dashes Orange Flower Water, 1 Egg White, splash Club Soda. Dry shake, wet shake, double strain.",
    pairing: "Collins/Highball glass, no ice. Garnish: Orange swath."
  },
  {
    name: "Rob Roy (Scotch Manhattan)",
    recipe: "2 oz Dewar’s Blended Scotch, 1 oz Sweet Vermouth, 3 dashes Angostura Bitters. Stir and strain.",
    pairing: "Coupe glass, no ice. Garnish: Amareno cherry."
  },
  {
    name: "Rusty Nail",
    recipe: "2 oz Scotch, 1 oz Drambuie. Build in glass.",
    pairing: "Old Fashioned glass with cubes. Garnish: Lemon swath."
  },
  {
    name: "Sazerac",
    recipe: "2 oz Sazerac Rye, 0.5 oz Simple Syrup, 4–5 dashes Peychaud’s Bitters, Absinthe rinse. Stir, strain into absinthe-rinsed glass.",
    pairing: "Old Fashioned glass, no ice. Garnish: Lemon swath, absinthe spray."
  },
  {
    name: "Screwdriver",
    recipe: "1.5 oz Vodka, 3 oz Orange Juice. Build in glass.",
    pairing: "Old Fashioned glass with cubes. Garnish: None."
  },
  {
    name: "Sea Breeze",
    recipe: "1.5 oz Vodka, 2 oz Cranberry Juice, 1 oz Grapefruit Juice. Build in glass.",
    pairing: "Old Fashioned glass with cubes. Garnish: Lime wedge."
  },
  {
    name: "Sex on the Beach",
    recipe: "1.5 oz Vodka, 0.75 oz Peach Schnapps, 1.5 oz Pineapple Juice, 1.5 oz Cranberry Juice. Shake and strain.",
    pairing: "Collins/Highball glass with cubes. Garnish: Orange slice."
  },
  {
    name: "Sidecar",
    recipe: "1.5 oz Cognac, 0.75 oz Orange Curaçao (Triple Sec), 0.75 oz Lemon Juice. Shake and double strain.",
    pairing: "Martini glass, no ice. Garnish: Raw sugar rim (half) and lemon swath."
  },
  {
    name: "Sours (Amaretto/Whiskey/etc.)",
    recipe: "1.5 oz Spirit of choice, 1 oz Lemon Juice, 0.5 oz Simple Syrup, 1 Egg White (optional). Shake and strain.",
    pairing: "Coupe glass, no ice. Garnish: Orange wheel and cherry."
  },
  {
    name: "Tequila Sunrise",
    recipe: "2 oz Tequila Blanco, 4 oz Orange Juice, 0.5 oz Grenadine. Build in glass with ice, float grenadine.",
    pairing: "Old Fashioned glass with cubes. Garnish: Amareno cherry."
  },
  {
    name: "Tom Collins",
    recipe: "1.5 oz Old Tom Gin, 2 oz Sour Mix, 0.5 oz Simple Syrup, Club Soda. Shake, strain, top with soda.",
    pairing: "Collins/Highball glass with cubes. Garnish: Orange slice and cherry flag."
  },
  {
    name: "Trinidad Sour",
    recipe: "1.5 oz Angostura Amaro, 0.5 oz Rye Whiskey, 0.75 oz Lemon Juice, 1 oz Orgeat. Shake and strain.",
    pairing: "Coupe glass, no ice. Garnish: Lemon swath."
  },
  {
    name: "Vesper",
    recipe: "1.75 oz Vodka, 1.5 oz Gin, 0.5 oz Cocchi Americano. Stir and strain.",
    pairing: "Martini glass, no ice. Garnish: Lemon swath."
  },
  {
    name: "Vieux Carré",
    recipe: "0.75 oz Sazerac Rye, 0.75 oz Cognac, 0.75 oz Sweet Vermouth, 0.25 oz Benedictine, 1 dash Peychaud’s Bitters, 1 dash Angostura Bitters. Stir and strain.",
    pairing: "Coupe glass, no ice. Garnish: Lemon swath and cherry flag."
  },
  {
    name: "White Russian",
    recipe: "1.5 oz Vodka, 1 oz Kahlua, 0.5 oz Half and Half. Build in glass in order: vodka → Kahlua → float cream.",
    pairing: "Old Fashioned glass with cubes. Garnish: None."
  }
];


export default function ClassicCocktails() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-16 px-6 relative"
      style={{ backgroundImage: `url(${BGpic})` }}
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
          Classic Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Explore the classics that have stood the test of time, each with its own unique recipe and pairing suggestions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 text-left">
          {classicCocktails.map((cocktail, index) => (
            <div
              key={index}
              className="bg-white/10 border backdrop-blur-md border-emerald-400 rounded-2xl p-4 shadow-xl opacity-90 hover:opacity-100 transition duration-300"
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
        <Link
  to="/cocktails"
  className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition"
>
  ← Back to Cocktails
</Link>
      </div>
    </div>
  );
}
