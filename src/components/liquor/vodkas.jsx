import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/bar3.jpg";

const vodka = [
  {
    name: "WILD ROOTS APPLE CINNAMON VODKA",
    info: "Infused with real apple and cinnamon for a warm, spiced profile."
  },
  {
    name: "WILD ROOTS PEAR VODKA",
    info: "Fruit-forward vodka with juicy pear notes and a smooth finish."
  },
  {
    name: "SVEDKA VODKA",
    info: "Popular well vodka with a clean, neutral flavor profile."
  },
  {
    name: "SMIRNOFF CHERRY FLAVORED VODKA",
    info: "Bold cherry-flavored vodka, great for mixing or shots."
  },
  {
    name: "SMIRNOFF LEMON FLAVORED CITRON",
    info: "Bright lemon-flavored vodka with citrus tang."
  },
  {
    name: "SMIRNOFF VANILLA VODKA",
    info: "Smooth vanilla flavor with dessert-like sweetness."
  },
  {
    name: "BELVEDERE VODKA",
    info: "Polish rye vodka known for its velvety texture and purity."
  },
  {
    name: "CHOPIN VODKA",
    info: "Potato-based vodka with a creamy texture and rich body."
  },
  {
    name: "GREY GOOSE",
    info: "French vodka made from wheat; smooth and clean finish."
  },
  {
    name: "KETEL ONE",
    info: "Dutch vodka distilled from wheat, crisp and balanced."
  },
  {
    name: "TITO'S HANDMADE",
    info: "American corn-based vodka with a smooth and mellow profile."
  }
];



export default function VodkaList() {
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
          Vodkas
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Explore our curated selection of Vodkas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {vodka.map((vodka, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-emerald-400 rounded-2xl p-4 shadow-xl"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-xl font-mono font-bold text-emerald-200">
                  {vodka.name}
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
                    image or logo goes here
                  </div>
                  <p className="text-sm font-mono font-semibold text-emerald-100">
                    <span className="font-bold text-emerald-500">Info: </span>
                    {vodka.info}
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