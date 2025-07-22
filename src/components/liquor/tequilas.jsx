import React, { useState } from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/bar3.jpg";
import SeedsGrapefruitHibiscus from "../../assets/liquorImages/21seedsgrapefruithibiscus.jpg";
import SeedsCucumberJalapeno from "../../assets/liquorImages/21seedscucumberjalapeno.jpg";
import CorralejoReposado from "../../assets/liquorImages/corralejoreposado.jpg";
import DonJulioAnejo1942 from "../../assets/liquorImages/donjulioanejo1942.jpg";
import FlechaAzulExtraAnejo from "../../assets/liquorImages/flechaazulextraanejo.jpg";
import GranCentenarioBlanco from "../../assets/liquorImages/grancentenerioblanco.jpg";
import GranCentenarioReposado from "../../assets/liquorImages/grancentenerioreposado.jpg";
import LaloBlanco from "../../assets/liquorImages/laloblanco.jpg";
import SauzaHaciendaBlanco from "../../assets/liquorImages/sauza.jpg";
import GemAndBoltMezcal from "../../assets/liquorImages/gemandboltmezcal.jpg";


const tequila = [
  {
    name: "21 SEEDS GRAPEFRUIT HIBISCUS BLANCO",
    image: SeedsGrapefruitHibiscus,
    info: "Infused blanco tequila with natural grapefruit and hibiscus; light and floral."
  },
  {
    name: "21 SEEDS TEQUILA CUCUMBER JALAPENO BLANCO",
    image: SeedsCucumberJalapeno,
    info: "Flavor-infused tequila with refreshing cucumber and a touch of jalapeño spice."
  },
  {
    name: "CORRALEJO REPOSADO",
    image: CorralejoReposado,
    info: "Aged in oak barrels for a smooth, slightly woody and vanilla-forward taste."
  },
  {
    name: "DON JULIO ANEJO 1942",
    image: DonJulioAnejo1942,
    info: "Luxury añejo tequila aged for at least 2.5 years; rich caramel, vanilla, and oak."
  },
  {
    name: "FLECHA AZUL EXTRA ANEJO",
    image: FlechaAzulExtraAnejo,
    info: "Aged more than 3 years, ultra-premium and complex with layers of spice and oak."
  },
  {
    name: "GRAN CENTENARIO BLANCO",
    image: GranCentenarioBlanco,
    info: "Smooth and lightly sweet blanco with agave-forward character."
  },
  {
    name: "GRAN CENTENARIO REPOSADO",
    image: GranCentenarioReposado,
    info: "Rested in oak barrels; warm vanilla, citrus, and spice flavors."
  },
  {
    name: "LALO BLANCO",
    image: LaloBlanco,
    info: "Modern, additive-free tequila with bright citrus and pure agave taste."
  },
  {
    name: "SAUZA HACIENDA BLANCO",
    image: SauzaHaciendaBlanco,
    info: "Tequila ideal for mixing; crisp and straightforward agave notes."
  },
  {
    name: "GEM AND BOLT MEZCAL ESPADIN",
    image: GemAndBoltMezcal,
    info: "Organic mezcal with a hint of damiana; smooth, smoky, and herbaceous."
  }
];


export default function TequilaList() {
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
          Tequilas
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Explore our curated selection of Tequilas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {tequila.map((tequila, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-emerald-400 rounded-2xl p-4 shadow-xl"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-xl font-mono font-bold text-emerald-200">
                  {tequila.name}
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
                      src={tequila.image}
                      alt={tequila.name}
                      className="max-w-full max-h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-sm font-mono font-semibold text-emerald-100">
                    <span className="font-bold text-emerald-500">Info: </span>
                    {tequila.info}
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
