import React, { useState, useContext } from "react";
import { StoreContext } from "./store";

const ToDoForm = () => {
  const [todo, setToDo] = useState({ task: "" });
  const { dispatch } = useContext(StoreContext);

  const handleChange = e => {
    setToDo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (todo.task !== "") {
      dispatch({ type: "addToDo", payload: todo.task });
      setToDo({ task: "" });
    }
  };

  return (
    <div className="todoform">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={todo.task}
          onChange={handleChange}
          placeholder="ToDo"
        />
        <button>Add</button>
      </form>
      <button onClick={() => dispatch({ type: "clearCompleted" })}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoForm;
