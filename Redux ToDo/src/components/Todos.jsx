import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo, isComplete } from "../features/todo/TodoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.text);

  return (
    <>
      <div></div>
      <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
          todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onChange={() => dispatch(isComplete(todo.id))}
        />
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
        <button
          className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded-lg border-black/10 bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            if (todo.completed) return;

            if (isTodoEditable) {
              dispatch(editTodo({ id: todo.id, newText: todoMsg }));
            }
            setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>
        <button
          className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded-lg border-black/10 bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          ❌
        </button>
      </div>
    </>
  );
}

function Todos() {
  const todos = useSelector((state) => state.todos);

  if (!todos || todos.length === 0) {
    return <p>Create Your To-Do</p>;
  }

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
}

export default Todos;
