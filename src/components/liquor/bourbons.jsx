import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/bar3.jpg";
import AngelsEnvyBourbon from "../../assets/liquorImages/angelsenvy.jpg";
import BasilHayden from "../../assets/liquorImages/basilhayden.jpg";
import BlantonsSingleBarrel from "../../assets/liquorImages/blantonssinglebarrel.jpg";
import BuffaloTrace from "../../assets/liquorImages/buffalotrace.jpg";
import ChristianBrothersBrandy from "../../assets/liquorImages/christianbrothersbrandy.jpg";
import DoughBallCookieDoughWhiskey from "../../assets/liquorImages/doughballcookiedoughwhiskey.jpg";
import ElijahCraigSmallBatch from "../../assets/liquorImages/elijahcraigsmallbatch.jpg";
import EagleRare10Yr from "../../assets/liquorImages/eaglerare10yr.jpg";
import FourRosesBourbon from "../../assets/liquorImages/fourroses.jpg";
import JackDanielsSingleBarrel from "../../assets/liquorImages/jackdanielssinglebarrel.jpg";
import MakersMark from "../../assets/liquorImages/makersmark.jpg";
import Pendleton20Year from "../../assets/liquorImages/pendleton20year.jpg";
import OldForester1920 from "../../assets/liquorImages/oldforester1920.jpg";
import RdOneAmburana from "../../assets/liquorImages/rdoneamburana.jpg";
import RdOneMaple from "../../assets/liquorImages/rdonemaple.jpg";
import WoodfordReserveDoubleOaked from "../../assets/liquorImages/woodfordreserve.jpg";
import HorseSoldierSignatureBourbon from "../../assets/liquorImages/horsesoldier.jpg";
import SkrewballPBWhiskey from "../../assets/liquorImages/skrewball.jpg";


const bourbons = [
  { name: "ANGELS ENVY BOURBON",
    image: AngelsEnvyBourbon,
    info: "Finished in port barrels, rich with vanilla and ripe fruit." },
  { name: "BASIL HAYDEN", 
    image: BasilHayden,
    info: "Mild bourbon with peppery spice and honey." },
  { name: "BLANTON'S SINGLE BARREL", 
    image: BlantonsSingleBarrel,
    info: "Top-tier bourbon with caramel, orange peel, and spice." },
  { name: "BUFFALO TRACE", 
    image: BuffaloTrace,
    info: "Well-balanced bourbon with toffee, dark fruit, and oak." },
  { name: "CHRISTIAN BROTHERS BRANDY", 
    image: ChristianBrothersBrandy,
    info: "American brandy with a smooth, sweet profile." },
  { name: "DOUGH BALL COOKIE DOUGH WHISKEY", 
    image: DoughBallCookieDoughWhiskey,
    info: "Flavored whiskey with rich cookie dough sweetness." },
  { name: "ELIJAH CRAIG SMALL BATCH", 
    image: ElijahCraigSmallBatch,
    info: "Toasty bourbon with notes of nutmeg and vanilla." },
  { name: "EAGLE RARE 10 YR", 
    image: EagleRare10Yr,
    info: "Aged bourbon with chocolate, leather, and oak." },
  { name: "FOUR ROSES BOURBON", 
    image: FourRosesBourbon,
    info: "Balanced bourbon with light spice and fruit." },
  { name: "JACK DANIELS SINGLE BARREL", 
    image: JackDanielsSingleBarrel,
    info: "Tennessee whiskey with full flavor and rich oak." },
  { name: "MAKERS MARK", 
    image: MakersMark,
    info: "Soft, wheated bourbon with caramel and vanilla." },
  { name: "PENDLETON 20 YEAR", 
    image: Pendleton20Year,
    info: "Canadian-style aged whiskey made in the U.S., smooth and refined." },
  { name: "OLD FORESTER 1920", 
    image: OldForester1920,
    info: "High-proof bourbon with chocolate, cherry, and spice." },
  { name: "RD ONE AMBURANA", 
    image: RdOneAmburana,
    info: "Bourbon finished in Amburana wood, sweet and spicy." },
  { name: "RD ONE MAPLE", 
    image: RdOneMaple,
    info: "Maple-finished bourbon with smooth, dessert-like finish." },
  { name: "WOODFORD RESERVE DOUBLE OAKED", 
    image: WoodfordReserveDoubleOaked,
    info: "Extra oaked bourbon with toasted caramel and baking spice." },
  { name: "HORSE SOLDIER SIGNATURE BOURBON", 
    image: HorseSoldierSignatureBourbon,
    info: "Veteran-crafted bourbon with a bold, rich profile." },
  { name: "SKREWBALL PB WHISKEY", 
    image: SkrewballPBWhiskey,
    info: "Peanut butter-flavored whiskey, sweet and nutty." }
];




export default function BeerList() {
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
          Bourbons
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Explore our curated selection of Bourbons.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {bourbons.map((bourbons, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-emerald-400 rounded-2xl p-4 shadow-xl"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-xl font-mono font-bold text-emerald-200">
                  {bourbons.name}
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
                      src={bourbons.image}
                      alt={bourbons.name}
                      className="object-contain h-full"
                    />
                  </div>
                  <p className="text-sm font-mono font-semibold text-emerald-100">
                    <span className="font-bold text-emerald-500">Info: </span>
                    {bourbons.info}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
                <Link
          to="/liquor"
          className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition"
        >
          ← Back to Liquor Program
        </Link>
      </div>
    </div>
  );
}
