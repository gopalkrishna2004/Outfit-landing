"use client";

import { useState } from "react";

export function CheckboxCapsules() {
  const [selected, setSelected] = useState("Casual");

  return (
    <div className="bg-black py-4 w-full">
      <div className="flex flex-col gap-2 w-full max-w-4xl mx-auto px-4">
        {/* First row - left aligned */}
        <div className="flex justify-start mb-2 w-full">
          <div
            className={`p-4 rounded-lg cursor-pointer flex items-center w-full sm:w-3/4 md:w-2/3 ${
              selected === "Casual" 
                ? "bg-white" 
                : "bg-black border border-white"
            }`}
            onClick={() => setSelected("Casual")}
          >
            <div 
              className={`w-5 h-5 border flex items-center justify-center mr-4 ${
                selected === "Casual" 
                  ? "border-black"  
                  : "border-gray-400"
              }`}
            >
              {selected === "Casual" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </div>
            <span 
              className={`text-lg ${
                selected === "Casual" 
                  ? "text-black" 
                  : "text-white"
              }`}
            >
              Casual
            </span>
          </div>
        </div>

        {/* Second row - right aligned */}
        <div className="flex justify-end mb-2 w-full">
          <div
            className={`p-4 rounded-lg cursor-pointer flex items-center w-full sm:w-3/4 md:w-2/3 ${
              selected === "retro" 
                ? "bg-white" 
                : "bg-black border border-white"
            }`}
            onClick={() => setSelected("retro")}
          >
            <div 
              className={`w-5 h-5 border flex items-center justify-center mr-4 ${
                selected === "retro" 
                  ? "border-black" 
                  : "border-gray-400"
              }`}
            >
              {selected === "retro" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </div>
            <span 
              className={`text-lg ${
                selected === "retro" 
                  ? "text-black" 
                  : "text-white"
              }`}
            >
              Retro
            </span>
          </div>
        </div>

        {/* Third row - left aligned */}
        <div className="flex justify-start w-full">
          <div
            className={`p-4 rounded-lg cursor-pointer flex items-center w-full sm:w-3/4 md:w-2/3 ${
              selected === "classic" 
                ? "bg-white" 
                : "bg-black border border-white"
            }`}
            onClick={() => setSelected("classic")}
          >
            <div 
              className={`w-5 h-5 border flex items-center justify-center mr-4 ${
                selected === "classic" 
                  ? "border-black" 
                  : "border-gray-400"
              }`}
            >
              {selected === "classic" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </div>
            <span 
              className={`text-lg ${
                selected === "classic" 
                  ? "text-black" 
                  : "text-white"
              }`}
            >
              Classic
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}