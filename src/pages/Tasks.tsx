import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/sections/NavBar";
import { Separator } from "../components/ui/separator";
const Tasks: React.FC = () => {
  const { name } = useParams();
  return (
    <React.Fragment>
      <NavBar />
      <div className="flex flex-col mt-16">
        <header className="w-full flex p-8">
          <div className="w-1/2 font-extrabold text-4xl pl-6">
            <p>Board :- {name?.split("-").join(" ")}</p>
          </div>
          <div className="w-1/2 flex justify-end pr-10 gap-10">
            <button>Search</button>
            <button>Settings</button>
          </div>
        </header>

        <Separator className="my-3" />

        <section className="bg-red-500 h-[90vh]">
          <h1>Here is card brooo</h1>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Tasks;
