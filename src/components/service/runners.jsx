import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/service1.jpg";

export default function Servers() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const duties = {
    Opening: [
    "Set up and label sanitizer bucket for line.",
    "Check, stock, and refill/maintain everything in the fridge (lemons, mint, parmesan cheese, waters, ranch, milk, sodas, cherries, etc).",
    "Ensure everything is properly labeled, dated, any past due product must be thrown out.",
    "Brew a fresh batch of coffee upon arrival, and maintain coffee levels throughout the shift.",
    "Ensure there is back up ice tea brew when low.",
    "Stock line silverware.",
    "Stock coffees, espresso pods, teas, sugar bins, filters.",
    "Stock to-go boxes, stamp bags and stock in front of the pass.",
    "Setup soda station, fill ice, and stock glasses (and restock throughout shift).",
    "Polish all ramekins, coffee pots, creamer pots, and soup/sides tins.",
  ],
  Running: [
    "Polish ramekins and soup/sides tins.",
    "Ensure coffee and tea are brewed and maintained at appropriate levels and temperature.",
    "Stock BOH silverware.",
    "Maintain the soda station, including filling the ice.",
  ],
  Closing: [
    "Ensure everything is properly labeled.",
    "Deep clean espresso machine.",
    "Deep clean coffee machine.",
    "Break down and deep clean soda station, fill ice halfway, wash soda machine rack.",
    "Wipe down fridge and ensure everything inside is properly stored, labeled, and dated.",
    "Wipe down the pass, and the walls behind the soda/coffee/espresso machines.",
    "Make sure everything is polished and put away correctly including ramekins, soup tins, coffee pots, creamer pots, etc.",
    "Make sure the fridge is fully stocked — waters, cheese, ranch, lemons, mint, cherries, sodas, etc.",
    "Stock line silverware.",
  ],
  Coffee: [
    "Empty the coffee from the dispenser.",
    "Grab coffee brewing basket and put a liner inside.",
    "Using the small scoop provided in the chemical container, add one scoop.",
    "Run the coffee machine.",
    "Dump the chemical water out of the dispenser and remove the chemical-tainted liner from the brewing basket.",
    "Place the brewing basket back on the machine.",
    "Run the coffee machine once more and soak overnight.",
  ],
  };

  return (
    <div
          className="min-h-screen bg-cover bg-center bg-no-repeat text-white relative"
          style={{ backgroundImage: `url(${BGpic})` }}
        >
      <div className="max-w-5xl mx-auto space-y-8 py-16 px-6 relative z-10">
                <Link
          to="/service/service"
          className="inline-block mb-6 px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md transition duration-300"
        >
          ← Back to Service Home
        </Link> 
        <h1 className="text-5xl font-mono font-bold text-emerald-400 text-center drop-shadow-md">
          Server Duties
        </h1>

        {Object.entries(duties).map(([section, tasks]) => {
          const isOpen = openSection === section;

          return (
            <div
              key={section}
              className="bg-emerald-950/60 border border-emerald-700/40 rounded-xl shadow-lg p-6"
            >
              <button
                onClick={() => toggleSection(section)}
                className="w-full flex justify-between items-center text-left text-2xl font-mono font-bold text-emerald-300 hover:text-white transition"
              >
                {section}
                <span className="text-3xl leading-none">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <ul className="mt-4 list-disc list-inside text-white/90 space-y-2 pl-4">
                  {tasks.map((task, index) => (
                    <li key={index} className="font-mono font-medium">
                      {task}
                    </li>
                  ))}
                </ul>
              )}
              
            </div>
            
          );
          
        })}

      </div>
      
    </div>
  );
}