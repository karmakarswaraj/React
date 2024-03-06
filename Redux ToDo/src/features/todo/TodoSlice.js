import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "TodoMsg",
      checked: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        checked: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    editTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.text = action.newText;
          return todo;
        }
        return todo;
      });
    },
    isComplete: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) todo.checked = !todo.checked;
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, editTodo, isComplete } = todoSlice.actions;

export default todoSlice.reducer;
