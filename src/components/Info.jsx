import React, { useContext } from "react";
import { TodoContext } from "../store/Context";

function Info() {
  const { todo, settodo, showComplete, clearComplete, showActive } =
    useContext(TodoContext);
  //   const ActiveNumbers = ;

  return (
    <div className="dark:bg-slate-900 dark:text-white lg:w-[850px] lg:m-auto shadow-md mx-4 my-5  lg:my-3">
      <div className="flex justify-between items-center border p-2 w-[100%]">
        <h2 className="font-bold">
          {todo.filter((item) => item.hasCompleted == false).length} Tasks Left
        </h2>
        <div className="max-lg:hidden flex justify-between gap-2 p-2">
          <button className="font-bold hover:text-blue-200">All</button>
          <button
            onClick={showActive}
            className="font-bold hover:text-blue-200"
          >
            Active
          </button>
          <button
            onClick={showComplete}
            className="font-bold hover:text-blue-200"
          >
            Completed
          </button>
        </div>
        <button
          onClick={clearComplete}
          className="font-bold hover:text-blue-200"
        >
          Clear Completed
        </button>
      </div>
      <div className="lg:hidden flex justify-between gap-2 p-2">
        <button className="font-bold hover:text-blue-200">All</button>
        <button onClick={showActive} className="font-bold hover:text-blue-200">
          Active
        </button>
        <button
          onClick={showComplete}
          className="font-bold hover:text-blue-200"
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default Info;
