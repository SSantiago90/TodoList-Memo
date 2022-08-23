import React from 'react'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useState } from 'react'
import ToDoDetail from './ToDoDetail'
import './ToDoDetail.css'

import { getDoc, doc, collection } from "firebase/firestore";
import db from "../../services/firebase";

function getToDoById(id){
  return new Promise( (resolve,reject) => {
    const todosCollection = collection(db, "todos");
    const docRef = doc(todosCollection, id);

    getDoc(docRef).then( docSnapshot =>{
      resolve ({
        ...docSnapshot.data(),
        id: docSnapshot.id,
        date: ""
      })
    }
    )
  });
}


function ToDoDetailContainer() {

    const [toDoDetail, setToDoDetail] = useState({})

    const {id} = useParams()

    useEffect(()=> {
        getToDoById(id).then(response => {
            setToDoDetail(response)
        })
    })
  return (
    <div className='containerDetail'>
        <ToDoDetail {...toDoDetail}/>

    </div>
  )
}

export default ToDoDetailContainer