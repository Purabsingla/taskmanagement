import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "./NavBar";
import { Layout, Search, Plus } from "lucide-react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import DialogBoard from "./DialogFormBoard";

type Board = {
  id: string;
  title: string;
  icon: string;
  tasks?: number;
};

const initialBoards: Board[] = [
  { id: "1", title: "College Work", icon: "📚", tasks: 5 },
  { id: "2", title: "Home Work", icon: "🏠", tasks: 3 },
  { id: "3", title: "Personal", icon: "💭", tasks: 8 },
  { id: "4", title: "Work Tasks", icon: "💼", tasks: 12 },
  { id: "5", title: "Hobby Projects", icon: "🎨", tasks: 4 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function BoardsPage() {
  const [boards, setBoards] = useState<Board[]>(initialBoards);
  const [draggedBoard, setDraggedBoard] = useState<Board | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  const handleDragStart = (board: Board) => {
    setDraggedBoard(board);
  };

  const handleDragEnd = () => {
    setDraggedBoard(null);
  };

  const handleDragOver = (event: React.DragEvent, targetBoard: Board) => {
    event.preventDefault();
    if (!draggedBoard || draggedBoard.id === targetBoard.id) return;

    const newBoards = [...boards];
    const draggedIndex = newBoards.findIndex((b) => b.id === draggedBoard.id);
    const targetIndex = newBoards.findIndex((b) => b.id === targetBoard.id);

    newBoards.splice(draggedIndex, 1);
    newBoards.splice(targetIndex, 0, draggedBoard);

    setBoards(newBoards);
  };

  const handleCreateBoard = (name: string, emoji: string) => {
    const newBoard: Board = {
      id: (boards.length + 1).toString(),
      title: name,
      icon: emoji,
      tasks: 0,
    };
    setBoards([...boards, newBoard]);
    setOpen(false);
  };

  const filteredBoards = boards.filter((board) =>
    board.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 md:mb-0"
          >
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              My Boards
            </h1>
            <p className="text-gray-600 mt-2">
              Organize and manage your tasks efficiently
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex space-x-4"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search boards..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full md:w-64"
              />
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
                  <Plus className="h-4 w-4 mr-2" />
                  New Board
                </button>
              </DialogTrigger>
              <DialogBoard HandleClick={handleCreateBoard} />
            </Dialog>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredBoards.map((board) => (
              <motion.div
                key={board.id}
                variants={item}
                layout
                draggable={true}
                onDragStart={() => handleDragStart(board)}
                onDragEnd={handleDragEnd}
                onDragOver={(event) => handleDragOver(event, board)}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 ease-out border border-gray-100 hover:shadow-2xl hover:border-indigo-100 hover:bg-gradient-to-br hover:from-white hover:to-indigo-50">
                  <div className="flex items-center justify-between mb-4">
                    <motion.span
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-3xl transform transition-transform duration-300 group-hover:scale-110"
                    >
                      {board.icon}
                    </motion.span>
                    <div className="bg-indigo-100 px-2 py-1 rounded-full">
                      <span className="text-xs font-medium text-indigo-600">
                        {board.tasks} tasks
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                    {board.title}
                  </h3>
                  <div className="mt-2 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Layout className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm text-indigo-600 font-medium">
                      View Board
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
