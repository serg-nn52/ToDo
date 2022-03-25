import React from "react";
import { useDispatch } from "react-redux";
import { createAddTodoAction } from "../../store/todo/actions";

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.target.inputName.value.trim() !== "") {
      dispatch(createAddTodoAction(e.target.inputName.value));
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
