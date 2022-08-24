import React from "react";
import { useEffect } from "react";
/* import { getToDoById } from '../../utils/customFetch.js' */
import { useParams } from "react-router-dom";
import { useState } from "react";
import ToDoDetail from "./ToDoDetail";
import "./ToDoDetail.css";

import firestoreDB from "../../services/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

/* 3. LLamado para obtener UN item */
function getToDoById(id) {
  return new Promise((resolve, reject) => {
    const todosCollectionRef = collection(firestoreDB, "todos");
    const docRef = doc(todosCollectionRef, id);

    getDoc(docRef).then((snapshot) => {
      resolve({ ...snapshot.data(), id: snapshot.id });
    });
  });
}

function ToDoDetailContainer() {
  const [toDoDetail, setToDoDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getToDoById(id).then((response) => {
      setToDoDetail(response);
    });
  }, []);

  return (
    <div className="containerDetail">
      <ToDoDetail {...toDoDetail} />
    </div>
  );
}

export default ToDoDetailContainer;
