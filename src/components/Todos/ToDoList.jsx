import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todos, removeTodo }) {
  return (
    <tbody>
      {todos.map((todo) => (
        <ToDo
          key={todo.id}
          user={todo.user}
          title={todo.title}
          img={todo.img}
          status={todo.status}
          /* date={todo.date} */
          id={todo.id}
          removeTodo={removeTodo}
        />
      ))}
    </tbody>
  );
}

export default ToDoList;
