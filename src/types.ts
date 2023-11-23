export type TodoItemType = {
  id: string;
  text: string;
  completed: boolean;
  time: string;
  date: string;
};

export type InitialType = {
  text: string;
};
export type ActionType = "add" | "edit";
