import { act, useEffect, useReducer, useState } from "react";
import darkbg from "../public/bg-desktop-dark.jpg";
import Header from "./components/Header";
import { TodoContext } from "./store/Context";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import Info from "./components/Info";

function taskReducrer(curr, action) {
  let newTaskList = curr;
  if (action.type === "NEW_TASK") {
    newTaskList = [
      ...curr,
      {
        id: action.payload.id,
        taskName: action.payload.taskName,
        hasCompleted: action.payload.hasCompleted,
      },
    ];
  } else if (action.type === "DELETE") {
    newTaskList = curr.filter(
      (item) => item.taskName !== action.payload.taskName
    );
  } else if (action.type === "UPDATE") {
    newTaskList = curr.map((item) => {
      if (item.taskName == action.payload.taskName) {
        item.hasCompleted = true;
      }
      return item;
    });
  } else if (action.type === "FILTER_COMPLETE") {
    newTaskList = curr.filter((item) => item.hasCompleted);
  } else if (action.type == "CLEAR_COMPLETE") {
    newTaskList = curr.filter((item) => !item.hasCompleted);
  } else if (action.type == "SHOW_ACTIVE") {
    newTaskList = curr.filter((item) => !item.hasCompleted);
  }
  return newTaskList;
}
function App() {
  const [lightMode, setlightMode] = useState(true);
  const [todo, dispatchTask] = useReducer(taskReducrer, []);
  const addTodo = (newTask) => {
    const newTaskAction = {
      type: "NEW_TASK",
      payload: {
        id: Date.now(),
        taskName: newTask,
        hasCompleted: false,
      },
    };
    dispatchTask(newTaskAction);
  };

  const deleteTodo = (task) => {
    const deleteItemAction = {
      type: "DELETE",
      payload: {
        taskName: task,
      },
    };
    dispatchTask(deleteItemAction);
  };

  const markComplete = (task) => {
    const completeAction = {
      type: "UPDATE",
      payload: {
        taskName: task,
      },
    };
    dispatchTask(completeAction);
  };

  const showComplete = () => {
    const showCompletedTask = {
      type: "FILTER_COMPLETE",
    };
    dispatchTask(showCompletedTask);
  };

  const clearComplete = () => {
    const clearComplete = {
      type: "CLEAR_COMPLETE",
    };
    dispatchTask(clearComplete);
  };

  const showActive = () => {
    const showActiveTasks = {
      type: "SHOW_ACTIVE",
    };
    dispatchTask(showActiveTasks);
  };

  return (
    <TodoContext.Provider
      value={{
        lightMode,
        setlightMode,
        todo,
        addTodo,
        deleteTodo,
        markComplete,
        showComplete,
        clearComplete,
        showActive,
      }}
    >
      <main className={`${lightMode ? "light" : "dark"}`}>
        <Header />
        <TaskList />
      </main>
    </TodoContext.Provider>
  );
}
export default App;
