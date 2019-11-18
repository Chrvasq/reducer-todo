import React, { useContext } from "react";
import ToDo from "./ToDo";
import { StoreContext } from "./store";

const ToDoList = () => {
  const { state } = useContext(StoreContext);

  return (
    <div>
      {state &&
        state.map(todo => {
          return <ToDo key={todo.id} item={todo.item} />;
        })}
    </div>
  );
};

export default ToDoList;
