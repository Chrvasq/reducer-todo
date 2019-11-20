import {
  addToDo,
  toggleCompleted,
  clearCompleted
} from "../functions/reducerFunctions";

export const initialState = {
  todos: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "addToDo":
      return addToDo(state, action.payload);
    case "toggleCompleted":
      return toggleCompleted(state, action.payload);
    case "clearCompleted":
      return clearCompleted(state);
    default:
      return state;
  }
};
