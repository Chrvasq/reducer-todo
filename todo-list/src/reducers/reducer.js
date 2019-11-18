export const initialState = {
  todos: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "addToDo":
      return {
        todos: [
          ...state.todos,
          { item: action.payload, id: Date.now(), completed: false }
        ]
      };
    case "toggleCompleted":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case "clearCompleted":
      return { todos: state.todos.filter(todo => !todo.completed) };
    default:
      return state;
  }
};
