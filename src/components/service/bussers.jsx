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
    "Set out and label sanitizer buckets for main dining and lounge server stations. Change every 4 hours.",
    "Set up hot water and vinegar bucket for silverware polishing.",
    "Ensure all polishing rags are new and do not use the same rag for glasses and silverware.",
    "Polish, wrap, and set out water pitchers.",
    "Wipe down all booths and chairs with sanitizer rag.",
    "Spot sweep the main dining room and PDR after wiping booths and chairs.",
    "Wipe down swinging doors to and from the kitchen and restaurant to the back station.",
    "Stock tablecloths and linens.",
    "Stock togo boxes, and stamp bags.",
    "Polish any glass or silver.",
    "Fold napkins with servers.",
  ],
  Running: [
    "Maintain polishing glassware and silverware.",
    "Keep togo supplies stocked.",
    "Change any soda bibs, tell Chefs or MGMT when you grab the last bib of a particular soda.",
    "Keep water pitchers full, and keep the water station clean and tidy.",
    "Spot sweep floors as needed.",
    "Wipe down chairs between seatings.",
  ],
  Closing: [
    "Set up dining room for morning service - all glasses flipped on tables with table cloths, all tables set 100%.",
    "Ensure ALL glasses and silverware are polished correctly. No spots or streaks.",
    "Spot check the dining room – Floors, under tables, booth and chair seats must be wiped down with a sanitizer rag.",
    "Empty all sanitizer buckets.",
    "Empty hot water and vinegar bucket after ALL silverware is polished correctly.",
    "Empty and take back all water pitchers to the dish pit to be washed.",
    "Stock tablecloth linens.",
    "Stock togo boxes, and stamp bags.",
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