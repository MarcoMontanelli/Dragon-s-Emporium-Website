import React, { useState, useEffect } from "react";
import "../css/CTATerminal.css"; // Assume styles are moved to this CSS file
import GlobeComponent from "./GlobeComponent";
export default function Shipping() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center ">
        <section className="md:w-1/2 flex items-center justify-center">
          <div className="py-8  mx-auto max-w-screen-xl text-center lg:py-16">
            <div className=" px-4 mx-auto max-w-screen-xl text-center ">
              <span className="mb-2 rounded-full bg-purple-500 px-3 py-0.5 shadow-xl shadow-purple-700/50 text-xl font-semibold leading-5 text-white">
                impeccable service
              </span>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Fast shipping across the EU
              </h1>
              <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                We offer fast and reliable shipping across the european union,
                contact us to find out where we can ship your products.
              </p>
              <button className="shadow-xl shadow-indigo-700/50 relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-indigo-950 via-purple-950 to-fuchsia-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Where do we ship?
                </span>
              </button>
            </div>
          </div>
        </section>
        <div className="lg:w-1/2 max-w-4xl mx-auto  my-12 lg:my-0 p-1 rounded-t-md justify-center gradient-shadow">
          <div className="md:aspect-w-16 md:aspect-h-9  bg-black rounded-lg shadow-xl shadow-purple-700/50 overflow-hidden">
            <div className="terminal-window">
              <div className="flex items-center px-2 py-2 bg-gray-900 rounded-t-lg">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="flex-grow text-center text-xs text-gray-400">
                  Dragon's Emporium@macOS - Shipping locations
                </span>
              </div>
              <div className="flex justify-center items-center h-full">
                <GlobeComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
