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

        <Separator className="my-3 px-10" />

        <section className="h-[90vh] flex flex-wrap justify-center mt-10">
          {[1, 2, 3].map((i) => (
            <div className="mx-10" key={i}>
              <h1 className="border rounded-tl-xl rounded-tr-xl w-[20rem] p-4 text-xl font-bold text-center border-b-0 bg-gradient-to-r from-red-600 to-red-400">
                To-Do Taks
              </h1>
              <div className="border w-[20rem] p-4 text-center h-auto">
                <h2>-- Task --</h2>
                <h2>-- Task --</h2>
                <h2>-- Task --</h2>
                <h2>-- Task --</h2>
                <h2>-- Task --</h2>
                <h2>-- Task --</h2>
                <h2>-- Task --</h2>
                <h2>-- Task --</h2>
              </div>
              <div className="border w-[20rem] p-4 text-center rounded-bl-xl rounded-br-xl border-t-0">
                {" "}
                ➕ Add New Tasks{" "}
              </div>
            </div>
          ))}
        </section>
      </div>
    </React.Fragment>
  );
};

export default Tasks;
