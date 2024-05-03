import { useState } from "react";
import darkbg from "../public/bg-desktop-dark.jpg";
import Header from "./components/Header";
import { TodoContext } from "./store/Context";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import Info from "./components/Info";
function App() {
  const [lightMode, setlightMode] = useState(false);
  const [todo, settodo] = useState([]);
  const addTodo = (newTask) => {
    settodo((prev) => [
      { id: Date.now(), taskName: newTask, hasCompleted: false },
      ...prev,
    ]);
  };
  // console.log(todo);
  const deleteTodo = (task) => {
    settodo(() => todo.filter((prev) => task !== prev.taskName));
  };

  const markComplete = (task) => {
    let updatedTasks = todo.map((item) => {
      if (item.taskName == task) {
        item.hasCompleted = true;
      }
      return item;
    });
    settodo(updatedTasks);
  };

  const showComplete = () => {
    const CompletedTasks = todo.filter((item) => item.hasCompleted);
    settodo(CompletedTasks);
  };

  const clearComplete = () => {
    const removedCompleted = todo.filter((item) => !item.hasCompleted);
    settodo(removedCompleted);
  };

  const showActive = () => {
    const activeTasks = todo.filter((item) => !item.hasCompleted);
    settodo(activeTasks);
  };
  return (
    <TodoContext.Provider
      value={{
        lightMode,
        setlightMode,
        todo,
        settodo,
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
