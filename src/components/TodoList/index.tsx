import React from "react";
import TodoItem from "./TodoItem";

import { visibalTodo } from "../../store/todo/sliceTodo";
import { useAppSelector } from "../../hooks";

export type todoValueType = {
  title: string;
  id: string;
  checked: boolean;
};

const TodoList: React.FC = () => {
  const todo: todoValueType[] = useAppSelector(visibalTodo);

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
