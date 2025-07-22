import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/bar3.jpg";
import TrumerPilsner from "../../assets/beerImages/trumerpils.jpg";
import BigDogsIPA from "../../assets/beerImages/bigdog.jpg";
import TrulySeltzer from "../../assets/beerImages/trulyseltzer.jpg";
import BlueMoon from "../../assets/beerImages/bluemoon.jpg";
import CoorsLight from "../../assets/beerImages/coorslight.jpg";
import ElysianSpaceDust from "../../assets/beerImages/elysianspacedust.jpg";
import GuinnessDraught from "../../assets/beerImages/guinnessdraught.jpg";
import GoldenRoadMangoCart from "../../assets/beerImages/goldenroadmangocart.jpg";
import MillerLite from "../../assets/beerImages/millerlite.jpg";
import MenabreaBioncaBlonde from "../../assets/beerImages/menabreabioncablonde.jpg";
import Menabrea150Ambrata from "../../assets/beerImages/menabrea150ambrata.jpg";
import MichelobUltra from "../../assets/beerImages/michelobultra.jpg";
import ModeloEspecial from "../../assets/beerImages/modeloespecial.jpg";
import PeroniNastroABruzzo from "../../assets/beerImages/peroninastroabruzzo.jpg";
import StellaArtois from "../../assets/beerImages/stellaartois.jpg";
import Heineken0 from "../../assets/beerImages/heineken0.jpg";
import Heineken from "../../assets/beerImages/heineken.jpg";

const beers = [
  {
    name: "TRUMER PILS - Draft",
    info: "A crisp, Austrian-style Pilsner with floral hop aroma and a dry, refreshing finish.",
    image: TrumerPilsner
  },
  {
    name: "BIG DOGS PEACE LOVE AND HOPPINESS IPA - Draft",
    info: "A hazy, juicy IPA brewed in Las Vegas with notes of citrus, tropical fruit, and smooth bitterness.",
    image: BigDogsIPA
  },
  {
    name: "TRULY STRAWBERRY LEMONADE HARD SELTZER - Can",
    info: "A light and bubbly hard seltzer with sweet strawberry and tart lemonade flavors.",
    image: TrulySeltzer
  },
  {
    name: "BLUE MOON - Bottle",
    info: "A Belgian-style wheat ale brewed with orange peel and coriander, served best with an orange slice.",
    image: BlueMoon
  },
  {
    name: "COORS LIGHT - Bottle",
    info: "An American light lager known for its cold, clean, and crisp taste. Easy-drinking and refreshing.",
    image: CoorsLight
  },
  {
    name: "ELYSIAN SPACE DUST IPA - Bottle",
    info: "A bold and hop-forward IPA with strong notes of grapefruit, mango, and pine.",
    image: ElysianSpaceDust
  },
  {
    name: "GUINNESS DRAUGHT - Bottle",
    info: "A classic Irish stout with a creamy mouthfeel, roasted malt, and notes of coffee and chocolate.",
    image: GuinnessDraught
  },
  {
    name: "GOLDEN ROAD MANGO CART - Can",
    info: "A light and fruity wheat ale bursting with ripe mango flavor. Great for sunny days.",
    image: GoldenRoadMangoCart
  },
  {
    name: "MILLER LITE - Bottle",
    info: "A smooth and crisp light lager with balanced flavor. Low calorie and easy to enjoy.",
    image: MillerLite
  },
  {
    name: "MENABREA BIONCA BLONDE - Bottle",
    info: "An Italian premium lager with a delicate floral aroma and light malt profile.",
    image: MenabreaBioncaBlonde
  },
  {
    name: "MENABREA 150 AMBRATA - Bottle",
    info: "A smooth amber lager from Italy with caramel malt sweetness and a subtle bitter finish.",
    image: Menabrea150Ambrata
  },
  {
    name: "MICHELOB ULTRA",
    info: "A light lager with low carbs and calories, perfect for those seeking a clean, crisp beer.",
    image: MichelobUltra
  },
  {
    name: "MODELO ESPECIAL - Bottle",
    info: "A rich, full-flavored Mexican lager with a slightly sweet and crisp finish.",
    image: ModeloEspecial
  },
  {
    name: "PERONI NASTRO A'BRUZZO - Bottle",
    info: "An Italian pale lager known for its dry, crisp body and subtle bitterness.",
    image: PeroniNastroABruzzo
  },
  {
    name: "STELLA ARTOIS - Bottle",
    info: "A premium Belgian lager with a slightly bitter, malty backbone and floral aroma.",
    image: StellaArtois
  },
  {
    name: "HEINEKEN 0.0 NA - Bottle",
    info: "A non-alcoholic version of Heineken with the same balanced flavor and light bitterness.",
    image: Heineken0
  },
  {
    name: "HEINEKEN - Bottle",
    info: "A European pale lager with mild bitterness, a touch of malt sweetness, and iconic green bottle flavor.",
    image: Heineken
  }
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
          Draft, Bottle, and Canned Beers
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Explore our curated selection of craft, imported, and classic beers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {beers.map((beer, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-emerald-400 rounded-2xl p-4 shadow-xl"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-xl font-mono font-bold text-emerald-200">
                  {beer.name}
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
                    <img src={beer.image} alt={beer.name} className="object-contain h-full" />
                  </div>
                  <p className="text-sm font-mono font-semibold text-emerald-100">
                    <span className="font-bold text-emerald-500">Info: </span>
                    {beer.info}
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
