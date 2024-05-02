import { useState } from "react";
import darkbg from "../public/bg-desktop-dark.jpg";
import Header from "./components/Header";
import { TodoContext } from "./store/Context";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
function App() {
  const [lightMode, setlightMode] = useState(true);
  const [todo, settodo] = useState([
    { id: Date.now(), taskName: "Buy Milk", hasCompleted: false },
    { id: Date.now(), taskName: "Have Fun", hasCompleted: false },
  ]);

  return (
    <TodoContext.Provider value={{ lightMode, setlightMode, todo, settodo }}>
      <main className={`${lightMode ? "light" : "dark"}`}>
        <Header />
        <TaskList />
      </main>
    </TodoContext.Provider>
  );
}

export default App;
