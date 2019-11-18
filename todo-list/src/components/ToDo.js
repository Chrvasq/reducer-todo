import React, { useContext } from "react";
import { StoreContext } from "./store";

const ToDo = props => {
  const { dispatch } = useContext(StoreContext);

  return (
    <div
      className="card"
      onClick={() => {
        dispatch({});
      }}
    >
      <p>{props.item}</p>
    </div>
  );
};

export default ToDo;
