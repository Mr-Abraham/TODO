import React, { useContext } from "react";
import { TodoContext } from "../store/Context";

function Task({ task }) {
  const { todo, deleteTodo, markComplete } = useContext(TodoContext);
  return (
    <div key={task.id} className="flex relative items-center gap-1 p-4">
      <img
        onClick={(e) => {
          e.currentTarget.classList.toggle("checked");
          markComplete(task.taskName);
        }}
        src="./icon-check.svg"
        className="border rounded-full p-2 w-[30px]  h-[30px] cursor-pointer text-"
        alt="check image"
      />
      <p
        className={`ml-3 ${
          task.hasCompleted && "line-through"
        } dark:text-white font-extralight`}
      >
        {task.taskName}{" "}
      </p>
      <img
        onClick={() => deleteTodo(task.taskName)}
        src="/icon-cross.svg"
        alt="deleting task button"
        className="absolute right-6 cursor-pointer"
      />
    </div>
  );
}

export default Task;
