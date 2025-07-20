import React from "react";
import { Link } from "react-router-dom";
import BGimage from "../assets/BGimages/homebg.jpg";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white relative"
      style={{ backgroundImage: `url(${BGimage})` }}
    >
      {/* Overlay to darken background */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
        <h1 className="text-5xl font-serif font-bold text-emerald-300 drop-shadow-md">
          Welcome to Vic’s Training Hub
        </h1>

        <p className="text-lg font-serif text-gray-200 leading-relaxed">
          This app is your comprehensive training companion for Vic’s — a fine dining jazz club
          celebrating Italian cuisine, world-class cocktails, elegant service, and soulful music.
        </p>

        <p className="text-lg font-serif text-gray-300">
          Whether you're a new hire or seasoned team member, use this app to learn our food and wine
          offerings, study recipes, understand service expectations, and tune into the rhythm of Vic’s.
        </p>

        <Link
          to="/quiz"
          className="inline-block mt-6 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-full shadow-lg transition duration-300"
        >
          Test My Knowledge
        </Link>
      </div>
    </div>
  );
}

