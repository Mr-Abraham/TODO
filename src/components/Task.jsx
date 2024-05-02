import React from "react";

function Task({ task }) {
  return (
    <div key={task.id} className="flex relative items-center gap-1 p-4">
      <img
        onClick={(e) => {
          console.log("check button clicked");
          e.currentTarget.classList.toggle("checked");
        }}
        src="./icon-check.svg"
        className="border rounded-full p-2 w-[30px] h-[30px] cursor-pointer"
        alt="check image"
      />
      <p className="ml-3 dark:text-white">{task.taskName} </p>
      <img
        src="/icon-cross.svg"
        alt="deleting task button"
        className="absolute right-6"
      />
    </div>
  );
}

export default Task;
