import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "TodoMsg",
      checked: false,
    }
  ], 
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  editTodo: (id,todo) => {},
  isComplete: (id) => {}
}); 

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoContextProvider = TodoContext.Provider;
