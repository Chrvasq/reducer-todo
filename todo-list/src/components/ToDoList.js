import React, { useContext } from "react";
import ToDo from "./ToDo";
import { StoreContext } from "./store";

const ToDoList = () => {
  const { state } = useContext(StoreContext);

  return (
    <div>
      {state.todos.map(todo => {
        return <ToDo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default ToDoList;
