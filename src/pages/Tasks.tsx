import React, { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/sections/NavBar";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { Slider } from "../components/ui/slider";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/sections/footer";
import { Dialog, DialogTrigger } from "../components/ui/dialog";
import DialogForm from "../components/sections/DialogForm";
type tasks = {
  id: number;
  title: string;
  progress: number;
  section: "To-Do" | "In Progress" | "Done";
  priority: "High" | "Medium" | "Low";
};

const Tasks: React.FC = () => {
  const { name } = useParams();
  const [Tasks, setTasks] = useState<tasks[]>([
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

  const [tempValues, setTempValues] = useState<{ [key: number]: number }>({});
  // const previousCounts = useRef({} as string);
  const previousCounts = useRef<Record<string, number>>({});
  const [open, setOpen] = useState<boolean>(false);
  const getTaskCount = useCallback(
    (section: string) =>
      Tasks.filter((task) => task.section === section).length,
    [Tasks]
  );

  useEffect(() => {
    ["To-Do", "In Progress", "Done"].forEach((title) => {
      previousCounts.current[title] = getTaskCount(title); // Update previous counts
    });
  }, [Tasks, getTaskCount]); // Runs whenever tasks update

  // Update progress while dragging
  const handleSliderChange = (id: number, value: number) => {
    setTempValues((prev) => ({ ...prev, [id]: value }));
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, progress: value } : task
      )
    );
  };

  //Handling Slider change
  const handleSliderRelease = (id: number) => {
    const value = tempValues[id] || 0; // Get the latest slider value
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
    <React.Fragment>
      <NavBar />
      <div className="flex flex-col mt-16">
        {/* Header */}
        <header className="w-full flex p-8 items-center">
          <div className="w-1/2 font-extrabold text-4xl pl-6">
            <p>Board: {name?.split("-").join(" ")}</p>
          </div>
          <div className="w-1/2 flex justify-end pr-10 gap-6">
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md">
              Search
            </button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md">
              Settings
            </button>
          </div>
        </header>

        {/* Separator */}
        <Separator className="my-3 px-10" />

        {/* Kanban Board Section */}
        <div className="flex justify-between items-center px-10 mt-5">
          <h2 className="text-2xl font-bold">Task Board</h2>
          <aside>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger onClick={() => setOpen(true)}>
                <button className="btn">Add Tasks</button>
              </DialogTrigger>
              <DialogForm />
            </Dialog>
          </aside>
        </div>

        <section className="flex justify-center my-5 gap-6">
          {["To-Do", "In Progress", "Done"].map((title, i) => {
            const currentCount = getTaskCount(title);
            const prevCount = previousCounts.current[title] ?? currentCount; // Use previous count or current if first render

            return (
              <div key={i} className="mx-5 flex flex-col items-center">
                {/* Column Header */}
                <AnimatePresence>
                  <h1
                    className={`border rounded-t-xl w-[24rem] p-4 text-xl font-bold text-start border-b-0 text-white shadow-md ${
                      i === 0
                        ? "bg-gradient-to-r from-red-600 to-red-400"
                        : i === 1
                        ? "bg-gradient-to-r from-yellow-500 to-yellow-300"
                        : "bg-gradient-to-r from-green-600 to-green-400"
                    }`}
                  >
                    {title} Tasks (
                    <span className="relative inline-block w-6 h-6 overflow-hidden">
                      <AnimatePresence mode="popLayout">
                        <motion.span
                          key={getTaskCount(title)}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{
                            y: getTaskCount(title) > prevCount ? -10 : 10,
                            opacity: 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="absolute w-full text-center"
                        >
                          {getTaskCount(title)}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                    )
                  </h1>
                </AnimatePresence>

                {/* Task Cards */}
                <div className="w-[26rem] p-4 min-h-[16rem] rounded-b-lg space-y-3">
                  {Tasks.filter((task) => task.section === title).map(
                    (task) => (
                      <div
                        key={task.id}
                        className="group bg-white p-3 rounded-lg hover:shadow-xl flex flex-col items-start gap-5 py-4 justify-start border transition transform hover:-translate-y-2"
                      >
                        <h1 className="text-lg font-medium group-hover:text-red-500 transition-colors">
                          {task.title}
                        </h1>
                        <p>
                          Priority:{" "}
                          <span>
                            <Badge
                              variant={
                                task?.priority === "High"
                                  ? "destructive"
                                  : task?.priority === "Medium"
                                  ? "warning"
                                  : "success"
                              }
                            >
                              {task.priority}
                            </Badge>
                          </span>
                        </p>
                        {/* Slider */}
                        <Slider
                          value={[task.progress]}
                          onValueChange={(value) =>
                            handleSliderChange(task.id, value[0])
                          }
                          onPointerUp={() => handleSliderRelease(task.id)} // Mouse release event
                          className="w-full"
                          // thumbClass="bg-blue-500" // Change slider color
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </section>
      </div>
      <footer className="mt-20">
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default Tasks;
