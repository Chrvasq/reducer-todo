export const initialState = [
  { item: "this is a test", completed: false, id: "" }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "addToDo":
      return [...state, action.payload];
    default:
      console.log("Default action needed");
  }
};
