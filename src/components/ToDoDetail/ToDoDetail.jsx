import React from 'react'


function ToDoDetail({title, img, user}) {





  return (
    <div className="card">
    <img src={img} alt="Avatar" />
    <div className="containerDetail">
      <h4>Title <b>{title}</b></h4> 
      <p> Usuario : {user}</p> 
    </div>
  </div>
  )
}

export default ToDoDetail