import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ToDoList from "./ToDoList";
import "./ToDos.css";

import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../../services/firebase";

// ! Nuestro custom Fetch async
const getAllItems = () => {
  return new Promise((resolve) => {
    const todosCollection = collection(db, "todos");
    getDocs(todosCollection).then((respuesta) => {
      const dataMapped = respuesta.docs.map((todo) => ({
        ...todo.data(),
        /* 
          title:.... 
          status:....
          date:.... */
        id: todo.id,
        date: new Date(todo.data().date.seconds * 1000).toLocaleDateString(),
      }));
      resolve(dataMapped);
    });
  });
};

async function getAllItemsWithAsync() {
  const todosCollection = collection(db, "todos");
  /* getDocs(todosCollection).then((respuesta) => { */
  let respuesta = await getDocs(todosCollection);
  const dataMapped = respuesta.docs.map((todo) => ({
    ...todo.data(),
    id: todo.id,
    date: new Date().toLocaleDateString(),
  }));
  return dataMapped;
}

const getItemsByStatus = (statusFilter) => {
  return new Promise((resolve) => {
    const todosCollection = collection(db, "todos");
    const q = query(todosCollection, where("status", "==", statusFilter));
    getDocs(q).then((respuesta) => {
      const dataMapped = respuesta.docs.map((todo) => ({
        ...todo.data(),
        id: todo.id,
        date: new Date(todo.data().date.seconds * 1000).toLocaleDateString(),
      }));
      resolve(dataMapped);
    });
  });
};

// ? Nuestro componente contenedor
export default function ToDoContainer() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllItemsWithAsync().then((respuesta) => setTodos(respuesta));
    /* if(categoryParam) 
            getItemsByStatus("complete").then( respuesta => setTodos(respuesta));    
          else
            getAllItems().then( respuesta => setTodos(respuesta));   
        */
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
