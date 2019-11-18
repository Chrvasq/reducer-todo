import React from "react";
import "./App.css";
import Store from "./components/store";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

function App() {
  return (
    <Store>
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <ToDoList />
        <ToDoForm />
      </div>
    </Store>
  );
}

export default App;
