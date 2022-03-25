import { todoValueType } from "../../components/TodoList";

export type RootReducerType = {
  todo: todoValueType[];
  filter: string;
};

const getTodo = (state: RootReducerType) => state.todo;

export const visibalTodo = (state: RootReducerType) => {
  switch (state.filter) {
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

export default getTodo;
