import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/service1.jpg";

export default function ServiceHome() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white relative"
      style={{ backgroundImage: `url(${BGpic})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center space-y-8">
        <h1 className="text-5xl font-mono font-bold text-emerald-400 drop-shadow-md">
          Service at Vic’s
        </h1>

        <p className="text-lg font-mono font-medium text-gray-200 leading-relaxed">
          Service at Vic's is designed to enhance your dining experience, with attentive staff ready to assist you in selecting the
           perfect wine or cocktail to complement your meal. Our knowledgeable team is here to ensure you have a memorable visit, 
           whether you're enjoying a casual evening or celebrating a special occasion.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <Link
            to="/service/servers"
            className="px-6 py-3 bg-emerald-700 text-white font-mono font-bold rounded-full shadow-lg hover:bg-emerald-400 transition"
          >
            Servers
          </Link>
          <Link
            to="/service/bussers"
            className="px-6 py-3 bg-emerald-700 text-white font-mono font-bold rounded-full shadow-lg hover:bg-emerald-400 transition"
          >
            Bussers
          </Link>
          <Link
            to="/service/runners"
            className="px-6 py-3 bg-emerald-700 text-white font-mono font-bold rounded-full shadow-lg hover:bg-emerald-400 transition"
          >
            Runners
          </Link>

                    <Link
            to="/service/bartenders"
            className="px-6 py-3 bg-emerald-700 text-white font-mono font-bold rounded-full shadow-lg hover:bg-emerald-400 transition"
          >
            Bartenders
          </Link>
                              <Link
            to="/service/hosts"
            className="px-6 py-3 bg-emerald-700 text-white font-mono font-bold rounded-full shadow-lg hover:bg-emerald-400 transition"
          >
            Hosts
          </Link>
        </div>
      </div>
    </div>
  );
}
