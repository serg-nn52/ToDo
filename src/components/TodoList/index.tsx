import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

import { visibalTodo } from "../../store/todo/selectors";

export type todoValueType = {
  title: string;
  id: number;
  checked: boolean;
};

const TodoList: React.FC = () => {
  const todo: todoValueType[] = useSelector(visibalTodo);

  return (
    <ul>
      {todo.map((item: todoValueType) => (
        <li key={item.id}>
          <TodoItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
