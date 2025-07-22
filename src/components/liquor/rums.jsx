import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/bar3.jpg";
import Bacardi from "../../assets/liquorImages/bacardi.jpg";
import CaptainMorgan from "../../assets/liquorImages/captainmorgan.jpg";
import Hamilton from "../../assets/liquorImages/hamilton.jpg";
import RonZacapa from "../../assets/liquorImages/ronzacapa.jpg";
import Goslings from "../../assets/liquorImages/goslings.jpg";
import Malibu from "../../assets/liquorImages/malibu.jpg";
import Pisco from "../../assets/liquorImages/pisco.jpg";
import Cachaca from "../../assets/liquorImages/cachaca.jpg";

const rums = [
  {
    name: "BACARDI SUPERIOR RUM",
    image: Bacardi,
    info: "Classic white rum, clean and smooth, ideal for cocktails like Mojitos and Daiquiris."
  },
  {
    name: "CAPTAIN MORGAN SPICED ORIGINAL",
    image: CaptainMorgan,
    info: "Spiced rum with notes of vanilla and caramel; great for mixing with cola or tropical drinks."
  },
  {
    name: "HAMILTON WHITE STACHE RUM",
    image: Hamilton,
    info: "Well white rum known for its bold sugarcane flavor and versatility in cocktails."
  },
  {
    name: "RON ZACAPA 23 YEAR AGED RUM",
    image: RonZacapa,
    info: "Premium aged rum with complex notes of honey, vanilla, caramel, and spice; smooth sipping."
  },
  {
    name: "GOSLINGS BLACK RUM BLACK SEAL",
    image: Goslings,
    info: "Dark rum with rich molasses and spice flavors; essential for a Dark 'n Stormy."
  },
  {
    name: "MALIBU COCONUT FLAVORED ORIGINAL",
    image: Malibu,
    info: "Caribbean rum infused with natural coconut; sweet and tropical, perfect for beachy cocktails."
  },
  {
    name: "PISCO CAPEL RESERVADO",
    image: Pisco,
    info: "Chilean grape brandy often used like rum in cocktails; floral, fruity, and smooth."
  },
  {
    name: "CACHACA NOVO FOGO SILVER",
    image: Cachaca,
    info: "Brazilian sugarcane spirit similar to rum; fresh, grassy, and essential for Caipirinhas."
  }
];



export default function RumList() {
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
          Rums
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Explore our curated selection of Rums.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {rums.map((rums, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-emerald-400 rounded-2xl p-4 shadow-xl"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-xl font-mono font-bold text-emerald-200">
                  {rums.name}
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
                      src={rums.image}
                      alt={rums.name}
                      className="object-contain h-full"
                    />
                  </div>
                  <p className="text-sm font-mono font-semibold text-emerald-100">
                    <span className="font-bold text-emerald-500">Info: </span>
                    {rums.info}
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
