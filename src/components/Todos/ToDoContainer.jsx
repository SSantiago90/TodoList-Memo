import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ToDoList from "./ToDoList";
import "./ToDos.css";

// * Nuestros Items

const listtodos = [
  {
    id: "1",
    title: "Learn React",
    status: "in progress",
    user: "All of Us",
    date: new Date().toLocaleDateString(),
  },
  {
    id: "2",
    title: "Learn Context",
    status: "pending",
    user: "comision React JS",
    date: new Date().toLocaleDateString(),
  },
  {
    id: "3",
    title: "La proxima prepara antes",
    status: "in progress",
    user: "comision React JS",
    date: new Date().toLocaleDateString(),
  },
];

// ! Nuestro custom Fetch async
const customFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listtodos);
    }, 500);
  });
};

// ? Nuestro componente contenedor

export default function ToDoContainer() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    customFetch().then((response) => {
      setTodos(response);
    });
  }, []);

  const removeTodo = (idRemove) => {
    let newTodoList = todos.filter((item) => item.id !== idRemove);
    setTodos(newTodoList);
  };

  return (
    <div className="containerToDoList">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="col-1">User</th>
            <th className="col-1">Title </th>
            <th className="col-1">Status</th>
            <th className="col-1">Create At</th>
            <th className="col-1">Remove Todo</th>
          </tr>
        </thead>
        <ToDoList removeTodo={removeTodo} todos={todos} />
      </table>   
    </div>
  );
}
