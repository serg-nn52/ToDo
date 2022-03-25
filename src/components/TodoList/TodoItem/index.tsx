import React from "react";
import { useDispatch } from "react-redux";
import {
  createRemoveTodoAction,
  createToggleTodoAction,
} from "../../../store/todo/actions";
import { todoValueType } from "..";

type todoItemType = {
  item: todoValueType;
};

const TodoItem: React.FC<todoItemType> = (props) => {
  const { item } = props;
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => dispatch(createToggleTodoAction(item))}
      />
      {item.title}
      <button
        type="button"
        onClick={() => dispatch(createRemoveTodoAction(item.id))}>
        delete
      </button>
    </>
  );
};

export default TodoItem;
