import React, { useState } from "react";
import { Plus, Layout, ChevronRight } from "lucide-react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import DialogBoard from "./DialogFormBoard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const initialBoards = [
  { title: "College Work", icon: "📚" },
  { title: "Home Work", icon: "🏠" },
  { title: "Personal", icon: "💭" },
  { title: "Work Tasks", icon: "💼" },
  { title: "Hobby Projects", icon: "🎨" },
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

const KanbanBoardSelection: React.FC = () => {
  const [boards, setBoards] = useState(initialBoards);
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNavigate = (data: string) => {
    navigate(`/boards/${data?.split(" ").join("-")}`);
  };

  const handleNavigateAllBoards = () => {
    navigate("allboards");
  };

  const handleClick = (name: string, emoji: string) => {
    setBoards([...boards, { title: name, icon: emoji }]);
    setOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            Your Workspace
          </h1>
          <p className="text-gray-600 text-lg">
            Select a board to start organizing your tasks
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {boards.slice(0, 6).map((board, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavigate(board.title)}
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
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ChevronRight className="w-5 h-5 text-indigo-600" />
                  </motion.div>
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

          {boards.length < 6 && (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger onClick={() => setOpen(true)}>
                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 ease-out border border-dashed border-gray-300 hover:shadow-2xl hover:border-indigo-200 hover:bg-gradient-to-br hover:from-white hover:to-indigo-50 flex flex-col items-center justify-center min-h-[200px]">
                    <motion.div
                      whileHover={{ rotate: 90 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="mb-3"
                    >
                      <Plus className="w-12 h-12 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300" />
                    </motion.div>
                    <p className="text-gray-600 font-medium group-hover:text-indigo-700 transition-colors duration-300">
                      Create New Board
                    </p>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogBoard HandleClick={handleClick} />
            </Dialog>
          )}
        </motion.div>

        {boards.length > 5 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNavigateAllBoards}
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-lg hover:shadow-xl border border-indigo-100 hover:bg-indigo-50 transition-all duration-300"
            >
              View All Boards
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ChevronRight className="w-5 h-5 ml-2" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default KanbanBoardSelection;
