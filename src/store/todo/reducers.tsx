import { todoValueType } from "../../components/TodoList";
import { actionType } from "./actions";

export const reducer = (
  state: todoValueType[] = [],
  action: actionType
): todoValueType[] => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        { title: action.payload, id: Date.now(), checked: false },
      ];
    }
    case "REMOVE_TODO": {
      return state.filter((el: todoValueType) => el.id !== action.payload);
    }
    case "TOGGLE_TODO": {
      return state.map((el: todoValueType) => {
        return action.payload.id === el.id
          ? { ...el, checked: !el.checked }
          : el;
      });
    }
    default:
      return state;
  }
};
