import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/bar3.jpg";
import BrothersBond from "../../assets/liquorImages/brothersbond.jpg";
import BulleitRye from "../../assets/liquorImages/bulleitrye.jpg";
import HighWestDoubleRye from "../../assets/liquorImages/highwestdoublerye.jpg";
import KnobCreek from "../../assets/liquorImages/knobcreekrye.jpg";
import SazeracRye from "../../assets/liquorImages/sazeracrye.jpg";
import WhistlePig12yr from "../../assets/liquorImages/whistlepig12.jpg";

const ryeWhiskeys = [
  { name: "BROTHERS BOND RYE",
    image: BrothersBond, 
    info: "Smooth, spicy rye whiskey with rich vanilla and caramel." },
  { name: "BULLEIT RYE", 
    image: BulleitRye,
    info: "High-rye content with bold spice, dried fruit, and a clean finish." },
  { name: "HIGH WEST DOUBLE RYE", 
    image: HighWestDoubleRye,
    info: "Blended rye with cinnamon, clove, and mint notes." },
  { name: "KNOB CREEK RYE 100 PROOF", 
    image: KnobCreek,
    info: "Full-bodied rye with bold spice and oak, bottled at 100 proof." },
  { name: "SAZERAC STRAIGHT RYE", 
    image: SazeracRye,
    info: "Classic rye whiskey with clove, anise, and subtle vanilla." },
  { name: "WHISTLEPIG 12YR OLD WORLD", 
    image: WhistlePig12yr,
    info: "Aged rye finished in wine casks for complexity and depth." }
];



export default function RyeList() {
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
          to="/liquor"
          className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition"
        >
          ← Back to Liquor Program
        </Link>

        <h1 className="text-5xl font-mono font-bold text-emerald-300 drop-shadow-lg">
          Rye Whiskeys
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Explore our curated selection of Rye Whiskeys.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {ryeWhiskeys.map((ryeWhiskeys, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-emerald-400 rounded-2xl p-4 shadow-xl"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-xl font-mono font-bold text-emerald-200">
                  {ryeWhiskeys.name}
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
                    <img
                      src={ryeWhiskeys.image}
                      alt={ryeWhiskeys.name}
                      className="object-contain h-full"
                    />
                  </div>
                  <p className="text-sm font-mono font-semibold text-emerald-100">
                    <span className="font-bold text-emerald-500">Info: </span>
                    {ryeWhiskeys.info}
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
