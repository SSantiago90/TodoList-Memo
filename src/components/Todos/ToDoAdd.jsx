//react component that adds a new "todo" to a list of "todos" recived from props
import React from "react";

export default function ToDoAdd({ setNewTodoText, addTodo }) {
  function handleSubmit(e) {
    e.preventDefault();
    const input = e.target.querySelector("input");
    const text = input.value;
    input.value = "";

    let randomId = Math.floor(Math.random() * 10000) + 100;

    let objectTodo = {
      id: randomId,
      title: text,
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
