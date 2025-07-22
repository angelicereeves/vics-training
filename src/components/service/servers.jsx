import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/service1.jpg";

export default function Servers() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const duties = {
    "Dining Room – Opening": [
      "Ensure marking station is properly filled, organized, and that the silverware is clean",
      "Polish, wrap, and fill water pitchers",
      "Fold linens",
      "Make sure the tables in your section are correctly set up with a lamp, drink menu, table tent, any specialty menus, and that everything is polished and set up neatly",
      "Make sure all salt, peppers, sugars, red pepper flakes are full",
      "Polish any glassware and silverware needed",
      "Inform yourself of any shows happening next door or at Vic’s",
      "Inform yourself of daily specials and any 86ed items",
    ],
    "Dining Room – First Cut": [
      "Fold and replenish napkins",
      "Ensure coffee cups are polished and put away",
      "Polish any silverware or glassware",
      "Tidy up server station",
      "Wipe down all menus above the POS (dessert, kids, mocktails)",
      "Refill sugar caddies, salts, peppers, red pepper flakes",
      "Restock candies",
    ],
    "Dining Room – Second Cut": [
      "Refill sugar caddies, salts, peppers, red pepper flakes",
      "Tidy up server station, wiping everything down",
      "Fold and replenish napkins",
      "Polish and put away coffee cups - ensuring ALL are cleaned well with no stains",
      "Restock candies",
      "Empty trash and make sure that area is cleaned and wiped down",
      "Polish silverware and glassware",
      "Wash trays - from bar and server station",
      "Wipe down check presenters",
    ],
    "Dining Room – Closing": [
      "Empty trash, wipe area",
      "Wipe all TOAST tablets and POS",
      "Wipe down and plug in all lamps",
      "Polish glassware and silverware and coffee cups",
      "Wash water pitchers",
      "Return clean trays to server station",
      "Walk through dining room to ensure it is properly set up for lunch service",
    ],
    "Lounge – Opening": [
      "Bring Sanitizer Bucket into lounge",
      "Set up water pitchers",
      "Bring glasses and stock in lounge for waters",
      "Fill marking drawer with all necessary silverware",
      "Ensure all salt, pepper, red pepper flakes, and sugars are stocked",
      "Ensure both drawers are stocked with roll ups and bottom drawer with folder napkins",
      "Ensure the tables are wiped clean before service, and every table has a cocktail menu and table tent on it",
      "Spot check the floors",
      "Make extra roll ups as needed",
      "Make sure the menu organizer is properly set up and stocked with all menus",
      "Ensure both fireplaces are on",
    ],
    "Lounge – Closing": [
      "Wipe down all the tables and chairs",
      "Wipe down beverage menus",
      "Ensure there’s two full drawers of rollups for lunch service and full napkin drawer",
      "Ensure all salt, pepper, red pepper flakes, and sugars are stocked and full",
      "Take back water pitchers and sanitizer bucket back to dish pit to be washed",
      "Help polish glassware and silverware",
      "Check out with the bar before checking out with MGMT",
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
                        <Link
          to="/service/service"
          className="inline-block mb-6 px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md transition duration-300"
        >
          ← Back to Service Home
        </Link> 
      </div>
      
    </div>
  );
}
