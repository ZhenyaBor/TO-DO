import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { v4 as uuidv4 } from "uuid";
import { TodoItemType } from "../../types";
import { toast } from "react-toastify";
import { loadTodoFromLocalStorage, saveTodoToLocalStorage } from "../../utils";

type TodoState = {
  todo: TodoItemType[];
};

const initialState: TodoState = {
  todo: loadTodoFromLocalStorage(),
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const now = new Date();

      const newTask = {
        text: action.payload,
        id: uuidv4(),
        completed: false,
        time: now.toLocaleTimeString(),
        date: now.toLocaleDateString(),
      };
      toast.success("Add new task!");

      state.todo = [newTask, ...state.todo];
      saveTodoToLocalStorage(state.todo);
    },

    removeTodo(state, action: PayloadAction<string>) {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
      toast.error("Delete new task!");
      saveTodoToLocalStorage(state.todo);
    },

    markAsCompleted(state, action: PayloadAction<string>) {
      const completedItemId = action.payload;
      const { todo } = state;

      const completedIndex = todo.findIndex((item) => item.id === completedItemId);

      if (completedIndex !== -1) {
        const [completedItem] = todo.splice(completedIndex, 1);
        completedItem.completed = !completedItem.completed;

        if (!completedItem.completed) {
          todo.unshift(completedItem);
        } else {
          todo.push(completedItem);
        }
      }
      saveTodoToLocalStorage(state.todo);
    },
  },
});

export const { addTodo, removeTodo, markAsCompleted } = todoSlice.actions;

export const todo = (state: RootState) => state.todo.todo;
