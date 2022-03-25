import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./styles.css";
import Filter from "./components/Filter";
import ErrorBoundary from "./components/Error";

const App = () => {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Form />
      <Filter />
      <ErrorBoundary>
        <TodoList />
      </ErrorBoundary>
    </div>
  );
};

export default App;
