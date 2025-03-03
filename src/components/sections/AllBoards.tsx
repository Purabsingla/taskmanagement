import React, { useState } from "react";
import NavBar from "./NavBar";

type Board = {
  id: string;
  title: string;
  icon: string;
  color: string;
};

const initialBoards: Board[] = [
  { id: "1", title: "Home", icon: "🏠", color: "bg-rose-100" },
  { id: "2", title: "Work", icon: "🏢", color: "bg-sky-100" },
  { id: "3", title: "College", icon: "🎓", color: "bg-lime-100" },
  { id: "4", title: "Personal", icon: "🌱", color: "bg-violet-100" },
  { id: "5", title: "Travel", icon: "✈️", color: "bg-amber-100" },
  { id: "6", title: "Shopping", icon: "🛒", color: "bg-teal-100" },
  { id: "7", title: "Fitness", icon: "🏋️", color: "bg-pink-100" },
  { id: "8", title: "Books", icon: "📚", color: "bg-indigo-100" },
  { id: "9", title: "Projects", icon: "📁", color: "bg-orange-100" },
  { id: "10", title: "Music", icon: "🎵", color: "bg-cyan-100" },
];

export default function BoardsPage() {
  const [boards, setBoards] = useState<Board[]>(initialBoards);
  const [draggedBoard, setDraggedBoard] = useState<Board | null>(null);

  const handleDragStart = (board: Board) => {
    setDraggedBoard(board);
  };

  const handleDragEnd = () => {
    setDraggedBoard(null);
  };

  const handleDragOver = (event: React.DragEvent, targetBoard: Board) => {
    event.preventDefault();
    if (!draggedBoard || draggedBoard.id === targetBoard.id) {
      return;
    }

    const newBoards = [...boards];
    const draggedIndex = newBoards.findIndex((b) => b.id === draggedBoard.id);
    const targetIndex = newBoards.findIndex((b) => b.id === targetBoard.id);

    newBoards.splice(draggedIndex, 1);
    newBoards.splice(targetIndex, 0, draggedBoard);

    setBoards(newBoards);
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="flex h-screen bg-gray-50 mt-16">
        {/* Left Sidebar */}
        <div className="w-1/5 p-8 ">
          <h1 className="text-3xl font-extrabold text-gray-700 mb-6">
            My Boards
          </h1>
          <div className="text-gray-600">
            <p className="italic">Drag and drop boards to reorder them.</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-1 h-60 mt-8 border-l border-gray-300"></div>

        {/* Right Main Content (Scrollable) */}
        <div className="w-4/5 p-8 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {boards.map((board) => (
              <div
                key={board.id}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg ${board.color} transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-grab w-full h-40`}
                draggable={true}
                onDragStart={() => handleDragStart(board)}
                onDragEnd={handleDragEnd}
                onDragOver={(event) => handleDragOver(event, board)}
              >
                <span className="text-4xl mb-3">{board.icon}</span>
                <h2 className="text-xl font-bold text-gray-800 text-center">
                  {board.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
