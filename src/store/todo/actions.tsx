import { todoValueType } from "../../components/TodoList";

export type actionType = {
  type: string;
  payload: any;
};

export const createAddTodoAction = (data: string) => {
  return {
    type: "ADD_TODO",
    payload: data,
  };
};

export const createRemoveTodoAction = (data: number) => {
  return {
    type: "REMOVE_TODO",
    payload: data,
  };
};

export const createToggleTodoAction = (data: todoValueType) => {
  return {
    type: "TOGGLE_TODO",
    payload: data,
  };
};
