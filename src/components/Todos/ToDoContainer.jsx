import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ToDoList from "./ToDoList";
import "./ToDos.css";

import firestoreDB from '../../services/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore'

/* 1. todos los items */
const getItemsFromDB = () => {
  return new Promise((resolve) => {
    const todosCollection = collection(firestoreDB, "todos");

    getDocs(todosCollection).then( snapshot => {
      const docsData = snapshot.docs.map( doc => {
        return { ...doc.data(), id: doc.id}        
      });
      resolve(docsData);
      });
    })      
};

/* 2. Items segun categoria  */
const getItemsFromDBbyStatus = ( statusParam ) => {
  return new Promise((resolve) => {
    const todosCollectionRef = collection(firestoreDB, "todos");

    const q = query(todosCollectionRef, where("status", "==", statusParam));

    getDocs(q).then( snapshot => {
      const docsData = snapshot.docs.map( doc => {
        return { ...doc.data(), id: doc.id}        
      });
      resolve(docsData);
      });
    })      
};

export default function ToDoContainer() {
  const [todos, setTodos] = useState([]);

  const statusFromParams = "in progress"; /* useParams() */

  useEffect(() => {
    if (statusFromParams === undefined)
      getItemsFromDB().then((response) => {
        setTodos(response);
      });
    else{
      getItemsFromDBbyStatus(statusFromParams).then((response) => {
        setTodos(response);
        })
      }
  },[]);

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
        <ToDoList  todos={todos} removeTodo={removeTodo} />
      </table>   
    </div>
  );
}
