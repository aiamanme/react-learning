import { useState, createRef } from "react";
import "./App.css";

function AddTaks({ setTodoVisibility, onSubmit, todoInput }) {
  function handeClick() {
    setTodoVisibility(false);
  }

  return (
    <form onSubmit={onSubmit} id="todo-form">
      <input type="text" id="todo-input" ref={todoInput} />
      <div id="buttons">
        <input type="submit" id="todo-submit" />
        <button onClick={handeClick}>close</button>
      </div>
    </form>
  );
}

export default function App() {
  const [Todos, setTodos] = useState([]);
  const todoInput = createRef();
  const [todoVisibility, setTodoVisibility] = useState(false);

  function onSubmit(event) {
    event.preventDefault();

    let todoInputBox = todoInput.current;
    setTodos([...Todos, todoInputBox.value]);
    todoInputBox.value = "";
    setTodoVisibility(false);
  }

  function handeClick() {
    setTodoVisibility(true);
  }

  return (
    <div id="main">
      <h1>Todo List</h1>
      {todoVisibility ? (
        <AddTaks
          onSubmit={onSubmit}
          todoInput={todoInput}
          setTodoVisibility={setTodoVisibility}
        />
      ) : null}
      <ul>
        {Todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
      <button id="add-task-button" onClick={handeClick}>
        <span className="material-symbols-outlined">add_circle</span>
      </button>
    </div>
  );
}