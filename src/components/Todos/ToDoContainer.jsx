import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { customFetch } from "../../utils/customFetch";
import ToDoAdd from "./ToDoAdd";
import ToDoList from "./ToDoList";
import "./ToDos.css";
function ToDoContainer() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  useEffect(() => {
    customFetch().then((response) => {
      setTodos(response);
    });
  }, []);

  function removeTodo(id){
    console.log("removed item: ", id);
  }
  return (
    <div className="containerToDoList">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="col-1">User</th>
            <th className="col-1">Title </th>
            <th className="col-1">Status</th>
            <th className="col-1">Create At</th>
          </tr>
        </thead>
        <ToDoList removeTodo={removeTodo} todos={todos} />
      </table>
      <ToDoAdd setNewTodoText={setNewTodoText} addTodo={addTodo} />
    </div>
  );
}

export default ToDoContainer;
