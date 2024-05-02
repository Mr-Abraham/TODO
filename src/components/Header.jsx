import React, { useContext, useRef } from "react";
import { IoIosSunny, IoMdMoon } from "react-icons/io";
import { TodoContext } from "../store/Context";

function Header() {
  const inputVal = useRef("");
  const { todo, settodo, lightMode, setlightMode } = useContext(TodoContext);
  function darkmode() {
    document.querySelector("html").style.backgroundColor = "black";
    if (!lightMode) {
      document.querySelector("html").style.backgroundColor = "white";
    }
  }
  return (
    <header className="p-2 h-60">
      <div className="mx-4 my-5 lg:w-[850px] lg:m-auto  lg:my-3">
        <section className="flex justify-between items-center mb-8 ">
          <h1 className="text-4xl font-ibold text-white ">TODO</h1>
          <button
            onClick={() => {
              setlightMode(!lightMode);
              darkmode();
            }}
          >
            {lightMode ? (
              <IoIosSunny className="text-4xl text-white" />
            ) : (
              <IoMdMoon className="text-4xl text-white" />
            )}
          </button>
        </section>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newTask = inputVal.current.value;
            if (!newTask) return;
            settodo((prev) => [
              { id: Date.now(), taskName: newTask, hasCompleted: false },
              ...prev,
            ]);
            inputVal.current.value = "";
          }}
          className="mt-5 flex gap-1 bg-white dark:bg-black justify-between items-center p-2 rounded-lg"
        >
          <button
            type="submit"
            className="w-[36px] h-[31px] rounded-full border lg:w-[32px] lg:h-[30px]"
          ></button>
          <input
            ref={inputVal}
            type="text"
            autoFocus
            className="w-[100%] outline-none p-3 rounded-lg bg-transparent dark:caret-white dark:text-white"
            placeholder="Enter Task Name"
          />
        </form>
      </div>
    </header>
  );
}

export default Header;
