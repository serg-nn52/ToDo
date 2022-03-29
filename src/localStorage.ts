import { todoValueType } from "./components/TodoList";

export type StateType = {
  todo: todoValueType[];
  filter: {
    value: string;
  };
};

export const loadState = (): StateType | undefined => {
  try {
    const savedState = localStorage.getItem("state");
    return savedState === null ? undefined : JSON.parse(savedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state: StateType) => {
  localStorage.setItem("state", JSON.stringify(state));
};
