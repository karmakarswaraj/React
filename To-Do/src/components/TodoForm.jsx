import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodos] = useState("");
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;

    addTodo({todo, checked: false });
    setTodos("")
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodos(e.target.value)}
      />
      <button
        type="submit"
        className="px-3 py-1 text-white bg-red-800 rounded-r-lg shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
