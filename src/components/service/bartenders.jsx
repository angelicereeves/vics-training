import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/service1.jpg";

export default function Servers() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const duties = {

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
          Bartender Duties
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