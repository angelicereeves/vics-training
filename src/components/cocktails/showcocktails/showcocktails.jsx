import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar10.jpg";

export default function ShowCocktails() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-16 px-6 relative"
      style={{ backgroundImage: `url(${BGpic})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-900 bg-opacity-0 z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10 p-10 rounded-3xl shadow-xl">
                <Link
          to="/cocktails"
          className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition"
        >
          ← Back to Cocktails
        </Link>
        <h1 className="text-5xl font-mono font-bold text-emerald-400 drop-shadow-lg">
          Show Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Specially crafted cocktails for broadway shows that showcase our bartending creativity and flair.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          <Link
            to="/cocktails/showcocktails/peterpan"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Peter Pan
          </Link>
          <Link
            to="/cocktails/showcocktails/somelikeithot"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Some Like it Hot
          </Link>
          <Link
            to="/cocktails/showcocktails/andjuliet"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            &Juliet
          </Link>
          <Link
            to="/cocktails/showcocktails/parade"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Parade
          </Link>
          <Link
            to="/cocktails/showcocktails/kimberlyakimbo"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Kimberly Akimbo
          </Link>
          <Link
            to="/cocktails/showcocktails/shrek"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Shrek
          </Link>
          <Link
            to="/cocktails/showcocktails/cher"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Cher
          </Link>
          <Link
            to="/cocktails/showcocktails/hamilton"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Hamilton
          </Link>
          <Link
            to="/cocktails/showcocktails/backtothefuture"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Back to the Future
          </Link>
          <Link
            to="/cocktails/showcocktails/company"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Company
          </Link>
          <Link
            to="/cocktails/showcocktails/mrsdoubtfire"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Mrs. Doubtfire
          </Link>
          <Link
            to="/cocktails/showcocktails/girlfromnorthcountry"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Girl From The North Country
          </Link>
          <Link
            to="/cocktails/showcocktails/comefromaway"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Come From Away
          </Link>
          <Link
            to="/cocktails/showcocktails/temptations"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Temptations
          </Link>
          <Link
            to="/cocktails/showcocktails/chicago"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Chicago
          </Link>
          <Link
            to="/cocktails/showcocktails/beetlejuice"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Beetlejuice
          </Link>
          <Link
            to="/cocktails/showcocktails/wizardofoz"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Wizard of OZ
          </Link>
          <Link
            to="/cocktails/showcocktails/tinaturner"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Tina Turner
          </Link>
          <Link
            to="/cocktails/showcocktails/swanlake"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Swan Lake
          </Link>
          <Link
            to="/cocktails/showcocktails/funnygirl"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Funny Girl
          </Link>
          <Link
            to="/cocktails/showcocktails/shenyun"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Shen-Yun
          </Link>
        </div>
      </div>
    </div>
  );
}
