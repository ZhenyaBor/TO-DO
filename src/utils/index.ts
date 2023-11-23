import { TodoItemType } from "../types";

export const loadTodoFromLocalStorage = (): TodoItemType[] => {
  const storedData = localStorage.getItem("todo");
  return storedData ? JSON.parse(storedData) : [];
};

export const saveTodoToLocalStorage = (todo: TodoItemType[]): void => {
  localStorage.setItem("todo", JSON.stringify(todo));
};
