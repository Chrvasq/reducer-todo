export const addToDo = (state, task) => {
  return {
    todos: [...state.todos, { item: task, id: Date.now(), completed: false }]
  };
};

export const toggleCompleted = (state, ID) => {
  return {
    ...state,
    todos: state.todos.map(todo =>
      todo.id === ID ? { ...todo, completed: !todo.completed } : todo
    )
  };
};

export const clearCompleted = state => {
  return { todos: state.todos.filter(todo => !todo.completed) };
};
