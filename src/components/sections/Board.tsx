import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialBoards = [
  { id: uuidv4(), title: "College Work" },
  { id: uuidv4(), title: "Home Work" },
  { id: uuidv4(), title: "Personal" },
  { id: uuidv4(), title: "Work Tasks" },
  { id: uuidv4(), title: "Hobby Projects" },
];

const KanbanBoardSelection: React.FC = () => {
  const [boards, setBoards] = useState(initialBoards);

  return (
    <div className="mt-48 relative flex flex-col items-center p-6 min-h-screen bg-gradient-to-r from-red-500 to-red-400 z-30">
      {/* Top SVG */}
      <div className="absolute -top-[21rem] left-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full">
          <defs>
            <linearGradient id="svgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#f87171" />
            </linearGradient>
          </defs>
          <path
            fill="url(#svgGradient)"
            fillOpacity="1"
            d="M0,128L48,128C96,128,192,128,288,144C384,160,480,192,576,197.3C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      <h1 className="text-4xl font-extrabold text-white mb-8 drop-shadow-lg z-10">
        Select Your Board to Manage
      </h1>
      <div className="flex flex-wrap justify-center gap-10 w-full max-w-5xl min-h-[60vh] z-10">
        {boards.slice(0, 5).map((board) => (
          <button
            key={board.id}
            className="w-80 h-48 flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-2xl hover:bg-opacity-30 transition-all text-2xl font-semibold text-white border border-white border-opacity-40 transform hover:scale-105"
          >
            📌 {board.title}
          </button>
        ))}
        <button className="w-80 h-48 flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-2xl hover:bg-opacity-30 transition-all text-2xl font-semibold text-white border border-white border-opacity-40 transform hover:scale-105">
          ➕ Add New Board
        </button>
      </div>
      {boards.length > 6 && (
        <button className="mt-8 px-8 py-4 bg-white bg-opacity-20 backdrop-blur-lg text-white rounded-xl shadow-lg hover:bg-opacity-30 text-lg font-semibold transform hover:scale-105 transition-all z-10">
          Show More Boards
        </button>
      )}

      {/* Bottom SVG (Reversed) */}
      <div className="absolute -bottom-[21rem] left-0 w-full transform rotate-180">
        <svg viewBox="0 0 1440 320" className="w-full">
          <defs>
            <linearGradient
              id="svgGradientReversed"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#f87171" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <path
            fill="url(#svgGradientReversed)"
            fillOpacity="1"
            d="M0,128L48,128C96,128,192,128,288,144C384,160,480,192,576,197.3C672,203,768,181,864,170.7C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default KanbanBoardSelection;
