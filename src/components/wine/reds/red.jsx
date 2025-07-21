import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar6.jpg";

export default function Red() {
  const redSections = [
    { name: "Cabernet Sauvignon", path: "/wine/red/cabs" },
    { name: "Pinot Noir", path: "/wine/red/pinotnoirs" },
    { name: "Tuscany", path: "/wine/red/tuscany" },
    { name: "Piedmont", path: "/wine/red/piedmont" },
    { name: "Interesting Reds", path: "/wine/red/interestingreds" },

  ];

  return (
        <div
              className="min-h-screen bg-cover bg-center bg-no-repeat text-white relative"
              style={{ backgroundImage: `url(${BGpic})` }}
            >
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h1 className="text-5xl font-mono font-bold text-emerald-400 drop-shadow-md">
          By the Bottle – Red Wines
        </h1>
        <p className="text-lg font-mono text-gray-300 max-w-3xl mx-auto">
          Explore Vic’s curated selection of red wines, ranging from bold and
          structured Cabernets to elegant Pinots and rich Tuscan blends.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {redSections.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="block bg-black bg-opacity-60 border border-emerald-600 rounded-xl shadow-lg hover:bg-emerald-800 transition duration-300 p-6"
            >
              <h2 className="text-2xl font-bold text-emerald-300 font-mono mb-2">
                {name}
              </h2>
              <p className="text-sm text-gray-300 font-mono">
                View our selections of {name}.
              </p>
            </Link>
          ))}
        </div>

        <Link
          to="/wine"
          className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold font-mono rounded-full shadow-lg hover:bg-emerald-100 transition"
        >
          ← Back to Wine Menu
        </Link>
      </div>
    </div>
  );
}
