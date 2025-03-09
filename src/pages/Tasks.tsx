import React, { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
// import { Separator } from "../components/ui/separator";
import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";
import { Slider } from "../components/ui/slider";
import { Dialog, DialogTrigger } from "../components/ui/dialog";
import { PlusCircle, Search, Settings, Layout } from "lucide-react";
import DialogForm from "../components/sections/DialogForm";
import Footer from "../components/sections/footer";

type Task = {
  id: number;
  title: string;
  progress: number;
  section: "To-Do" | "In Progress" | "Done";
  priority: "High" | "Medium" | "Low";
};

const Tasks: React.FC = () => {
  const { name } = useParams();
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Project Completion",
      progress: 0,
      section: "To-Do",
      priority: "High",
    },
    {
      id: 2,
      title: "Code Review",
      progress: 20,
      section: "To-Do",
      priority: "Low",
    },
    {
      id: 3,
      title: "Testing",
      progress: 50,
      section: "In Progress",
      priority: "Medium",
    },
    {
      id: 4,
      title: "Deployment",
      progress: 100,
      section: "Done",
      priority: "Low",
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [tempValues, setTempValues] = useState<{ [key: number]: number }>({});
  const previousCounts = useRef<Record<string, number>>({});
  const [open, setOpen] = useState<boolean>(false);

  const getTaskCount = useCallback(
    (section: string) =>
      tasks.filter((task) => task.section === section).length,
    [tasks]
  );

  useEffect(() => {
    ["To-Do", "In Progress", "Done"].forEach((title) => {
      previousCounts.current[title] = getTaskCount(title);
    });
  }, [tasks, getTaskCount]);

  const handleSliderChange = (id: number, value: number) => {
    setTempValues((prev) => ({ ...prev, [id]: value }));
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, progress: value } : task
      )
    );
  };

  const handleSliderRelease = (id: number) => {
    const value = tempValues[id] || 0;
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              section:
                value === 100 ? "Done" : value >= 33 ? "In Progress" : "To-Do",
            }
          : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 mt-16">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Layout className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              {name?.split("-").join(" ")}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
          </div>
        </header>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
            Task Board
          </h2>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
                <PlusCircle className="w-5 h-5" />
                <span>Add Task</span>
              </button>
            </DialogTrigger>
            <DialogForm />
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["To-Do", "In Progress", "Done"].map((title, i) => (
            <div key={i} className="flex flex-col h-full">
              <div
                className={`rounded-t-xl p-4 ${
                  i === 0
                    ? "bg-gradient-to-r from-rose-500 to-pink-500"
                    : i === 1
                    ? "bg-gradient-to-r from-amber-500 to-orange-500"
                    : "bg-gradient-to-r from-emerald-500 to-green-500"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <span className="px-2.5 py-0.5 bg-white/20 rounded-full text-sm text-white">
                    {getTaskCount(title)}
                  </span>
                </div>
              </div>

              <div className="flex-1 bg-white dark:bg-gray-800 rounded-b-xl p-4 shadow-sm">
                <div className="space-y-4">
                  {tasks
                    .filter((task) => task.section === title)
                    .map((task) => (
                      <motion.div
                        key={task.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="group bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl hover:shadow-lg transition-all duration-200 border border-gray-100 dark:border-gray-600"
                      >
                        <h4 className="text-lg font-medium mb-3 group-hover:text-blue-600 dark:text-gray-100">
                          {task.title}
                        </h4>
                        <div className="flex items-center justify-between mb-4">
                          <Badge
                            variant={
                              task.priority === "High"
                                ? "destructive"
                                : task.priority === "Medium"
                                ? "secondary"
                                : "default"
                            }
                            className="text-xs"
                          >
                            {task.priority}
                          </Badge>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {task.progress}%
                          </span>
                        </div>
                        <Slider
                          value={[task.progress]}
                          onValueChange={(value) =>
                            handleSliderChange(task.id, value[0])
                          }
                          onPointerUp={() => handleSliderRelease(task.id)}
                          className="w-full"
                        />
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tasks;
