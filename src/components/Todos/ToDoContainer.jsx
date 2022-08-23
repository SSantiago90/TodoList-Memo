import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ToDoList from "./ToDoList";
import "./ToDos.css";

import { getDocs, collection } from "firebase/firestore";
import db from "../../services/firebase";

// ! Nuestro custom Fetch async
const getAllItems = () => {
  const todosCollection = collection(db, "todos");
  getDocs(todosCollection).then((respuesta) => {
    console.log(respuesta.docs[0].data());
  });
};

getAllItems();

// ? Nuestro componente contenedor

export default function ToDoContainer() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    /*  getAllItems().then((response) => {
      setTodos(response);
    }); */
    const todosCollection = collection(db, "todos");
    getDocs(todosCollection).then((respuesta) => {
      const dataMapped = respuesta.docs.map((todo) => {    
        return {
          ...todo.data(),
          /* 
          title:.... 
          status:....
          date:.... */
          id: todo.id,
          date: new Date(todo.data().date.seconds * 1000).toLocaleDateString()
        };
      });
      console.log(dataMapped);
      setTodos(dataMapped);
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
