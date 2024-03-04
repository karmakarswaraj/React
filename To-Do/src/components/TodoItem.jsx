import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const { editTodo, deleteTodo, isComplete } = useTodo();

  const updateTodo = () => {
    editTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    isComplete(todo.id);
  };
  
  return (
  <div
    className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
      todo.checked ? "bg-[#9efe4a] line-through" : "bg-[#c27ef5]"
    }`}
  >
    <input
      type="checkbox"
      className="cursor-pointer"
      checked={todo.checked}
      onChange={toggleCompleted}
    />
    <input
      type="text"
      className={`border outline-none w-full bg-transparent rounded-lg ${
        isTodoEditable ? "border-black/10 px-2" : "border-transparent"
      } ${todo.checked ? "line-through" : ""}`}
      value={todoMsg}
      onChange={(e) => setTodoMsg(e.target.value)}
      readOnly={!isTodoEditable}
    />
    <button
      className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded-lg border-black/10 bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
      onClick={() => {
        if (todo.checked) return;

        if (isTodoEditable) {
          updateTodo();
        } else setIsTodoEditable((prev) => !prev);
      }}
      disabled={todo.checked}
    >
      {isTodoEditable ? "📁" : "✏️"}
    </button>
    <button
      className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded-lg border-black/10 bg-gray-50 hover:bg-gray-100 shrink-0"
      onClick={() => deleteTodo(todo.id)}
    >
      ❌
    </button>
  </div>
);

}

export default TodoItem;
