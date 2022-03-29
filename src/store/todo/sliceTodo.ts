import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { todoValueType } from "../../components/TodoList";

type TodoType = {
  title: string;
  id: string;
  checked: boolean;
}[];

const initialState: TodoType = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state: TodoType, action: PayloadAction<string>) => {
      state.push({
        title: action.payload,
        id: nanoid(),
        checked: false,
      });
    },
    removeTodo: (state: TodoType, action: PayloadAction<string>) => {
      return state.filter((el: todoValueType) => el.id !== action.payload);
    },
    toggleTodo: (state: TodoType, action: PayloadAction<todoValueType>) => {
      return state.map((el: todoValueType) => {
        return action.payload.id === el.id
          ? { ...el, checked: !el.checked }
          : el;
      });
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todo;
export const visibalTodo = (state: RootState) => {
  switch (state.filter.value) {
    case "all": {
      return state.todo;
    }
    case "done": {
      return state.todo.filter((el) => el.checked);
    }
    case "actual": {
      return state.todo.filter((el) => !el.checked);
    }
    default: {
      return state.todo;
    }
  }
};
export default todoSlice.reducer;
