import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/sections/NavBar";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import Button from "../components/ui/UIButton";
const Tasks: React.FC = () => {
  const { name } = useParams();
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
          <Button />
        </div>

        <section className="flex justify-center my-6 gap-6">
          {["To-Do", "In Progress", "Done"].map((title, i) => (
            <div key={i} className="mx-5 flex flex-col items-center">
              {/* Column Header */}
              <h1
                className={`border rounded-t-xl w-[20rem] p-4 text-xl font-bold text-center border-b-0 text-white shadow-md ${
                  i === 0
                    ? "bg-gradient-to-r from-red-600 to-red-400"
                    : i === 1
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-300"
                    : "bg-gradient-to-r from-green-600 to-green-400"
                }  `}
              >
                {title} Tasks
              </h1>

              {/* Task Cards Container (No Scroll) */}
              <div className="border w-[20rem] p-4 min-h-[15rem] bg-gray-100 shadow-md rounded-b-lg space-y-3">
                {[1, 2, 3, 4].map((task) => (
                  <div
                    key={task}
                    className="group bg-white p-3 rounded-lg shadow-md flex flex-col items-start gap-5 py-4 justify-start border hover:shadow-lg transition transform hover:-translate-y-2"
                  >
                    <h1 className="text-lg font-medium group-hover:text-red-500 transition-colors">
                      Project Completion
                    </h1>
                    <p>
                      Priority :{" "}
                      <span>
                        <Badge variant={"destructive"}>High</Badge>
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </React.Fragment>
  );
};

export default Tasks;
