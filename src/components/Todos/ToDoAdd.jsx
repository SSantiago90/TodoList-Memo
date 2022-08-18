//react component that adds a new "todo" to a list of "todos" recived from props
import React from "react";

export default function ToDoAdd({ newTodoText, setNewTodoText, addTodo }) {
  function handleSubmit(e) {
    e.preventDefault();    

    let randomId = Math.floor(Math.random() * 10000) + 100;

    let objectTodo = {
      id: randomId,
      title: newTodoText,
      status: "in progress",
      user: "34710",
      date: new Date().toLocaleDateString(),
    };

    addTodo(objectTodo);
  }

  function handleInputChange(e) {
    setNewTodoText(e.target.value);
  }

  return (
    <form className="ToDoAdd" onSubmit={handleSubmit}>
      <label>
        Add new Todo
        <input onChange={handleInputChange} placeholder="Aprende React" />
      </label>
      <br />
      <button type="submit">Add Todo</button>
    </form>
  );
}
