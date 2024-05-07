import React, { useContext } from "react";
import { TodoContext } from "../store/Context";
import Task from "./Task";
import Info from "./Info";

function TaskList() {
  const { todo } = useContext(TodoContext);
  return (
    <div className="mx-6 relative bottom-14  rounded-xl bg-white dark:bg-slate-900 lg:w-[850px] lg:m-auto shadow-md ">
      {todo.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      {todo.length > 0 && <Info />}
    </div>
  );
}

export default TaskList;
