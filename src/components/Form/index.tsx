import React from "react";
import { useAppDispatch } from "../../hooks";
import { addTodo } from "../../store/todo/sliceTodo";

const Form: React.FC = () => {
  const dispatch = useAppDispatch();
  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.target.inputName.value.trim() !== "") {
      dispatch(addTodo(e.target.inputName.value));
    }
    e.target.inputName.value = [];
  };
  return (
    <form action="#" onSubmit={submitHandler}>
      <input type="text" placeholder="new ToDo" name="inputName" />
      <button type="submit">SEND</button>
    </form>
  );
};

export default Form;
