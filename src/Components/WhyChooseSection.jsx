import React from "react";

import filmIcon from "../assets/film.png";
import animationIcon from "../assets/animation.png";
import gameIcon from "../assets/game.png";

import netflix from "../assets/netflix.png";
import pogo from "../assets/pogo.png";
import voot from "../assets/voot.png";

export default function EcosystemSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          PART OF THE RELIANCE <br />
          ENTERTAINMENT ECOSYSTEM
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          When you join the academy, you are connected to a much bigger creative network.
          <br />
          This ecosystem gives students{" "}
          <span className="text-white font-medium">
            rare exposure to real entertainment production environments.
          </span>
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="relative bg-[#0b0b0b] rounded-2xl p-8 text-left overflow-hidden">

            {/* Custom Borders */}
            <div className="absolute top-0 left-0 w-full h-px bg-gray-700" />
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gray-700 via-gray-500/40 to-transparent" />
            <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-gray-700 via-gray-500/40 to-transparent" />

            <div className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-500/10 mb-6">
                <img src={filmIcon} alt="" className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-semibold mb-4">
                Reliance Entertainment
              </h3>

              <p className="text-3xl font-bold mb-2">300+ films</p>

              <p className="text-gray-400 text-sm">
                distributed globally and <br /> presence in 100+ countries.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#0b0b0b] rounded-2xl p-8 text-left overflow-hidden">

            {/* Custom Borders */}
            <div className="absolute top-0 left-0 w-full h-px bg-gray-700" />
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gray-700 via-gray-500/40 to-transparent" />
            <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-gray-700 via-gray-500/40 to-transparent" />

            <div className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-500/10 mb-6">
                <img src={animationIcon} alt="" className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-semibold mb-4">
                Reliance Animation Studios
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                Creators behind shows like:
              </p>

              <ul className="text-sm space-y-1 mb-6">
                <li>• Little Singham</li>
                <li>• Golmaal Jr</li>
                <li>• Little Krishna</li>
                <li>• Smashing Simmba</li>
              </ul>

              <p className="text-gray-400 text-xs mb-3">
                Streaming platforms include:
              </p>

              <div className="flex items-center gap-3 flex-wrap">
                <img src={netflix} alt="" className="h-5" />
                <img src={pogo} alt="" className="h-5" />
                <img src={voot} alt="" className="h-5" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-[#0b0b0b] rounded-2xl p-8 text-left overflow-hidden">

            {/* Custom Borders */}
            <div className="absolute top-0 left-0 w-full h-px bg-gray-700" />
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gray-700 via-gray-500/40 to-transparent" />
            <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-gray-700 via-gray-500/40 to-transparent" />

            <div className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-500/10 mb-6">
                <img src={gameIcon} alt="" className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-semibold mb-4">
                Reliance Games
              </h3>

              <p className="text-3xl font-bold mb-2">1200+ games</p>

              <p className="text-gray-400 text-sm">
                with millions of players worldwide.
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg hover:opacity-90 transition">
            Discover Industry Opportunities
          </button>
        </div>

      </div>
    </section>
  );
}