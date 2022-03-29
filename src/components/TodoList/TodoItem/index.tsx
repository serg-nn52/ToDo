import React from "react";
import { todoValueType } from "..";
import { removeTodo, toggleTodo } from "../../../store/todo/sliceTodo";
import { useAppDispatch } from "../../../hooks";

type todoItemType = {
  item: todoValueType;
};

const TodoItem: React.FC<todoItemType> = (props) => {
  const { item } = props;
  const dispatch = useAppDispatch();

  return (
    <>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => dispatch(toggleTodo(item))}
      />
      {item.title}
      <button type="button" onClick={() => dispatch(removeTodo(item.id))}>
        delete
      </button>
    </>
  );
};

export default TodoItem;
