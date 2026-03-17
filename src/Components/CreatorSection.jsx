import React from "react";
import rightImage from "../assets/right-grid.svg";
import ProgressLoad from "./ProgressLoad";

const CreatorSection = () => {
  return (
    <section className="w-full text-white py-16 sm:py-24 px-6 bg-black bg-creator-left bg-no-repeat bg-left bg-contain">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            THE WORLD IS <br />
            CONSUMING MORE <br />
            ENTERTAINMENT <br />
            THAN EVER AND IT <br />
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
              NEEDS MORE <br /> CREATORS
            </span>
          </h2>

          <p className="mt-6 text-sm sm:text-base text-gray-400 max-w-md">
            From animated films to Netflix series to AAA games, the world is
            hungry for visual storytellers.
          </p>

          <p className="mt-4 text-sm sm:text-base text-gray-300 font-medium">
            But studios don’t hire people with theory.
          </p>

          <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-md">
            They hire people who can create, animate, design, and deliver
            production-ready work. That’s exactly what you learn here.
          </p>

          <button className="mt-8 px-6 py-3 rounded-full text-sm sm:text-base font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
            Start Your Animation Career
          </button>

          <div className="w-full flex justify-center lg:justify-start mt-6">
            <div className="inline-block">
              <ProgressLoad />
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full">
          <img
            src={rightImage}
            alt="creators showcase"
            className="w-full h-auto object-contain opacity-90"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-900/10 to-transparent blur-2xl pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default CreatorSection;