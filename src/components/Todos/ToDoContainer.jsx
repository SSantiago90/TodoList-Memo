import React, { useCallback, useMemo } from "react";
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

  const removeTodo = useCallback(
    (idRemove) => {
      let newTodoList = todos.filter((item) => item.id !== idRemove);
      setTodos(newTodoList);
    }, 
    [ todos ]
  )

  const memoizedTodoList = useMemo(
    () => <ToDoList removeTodo={removeTodo} todos={todos} />, [todos, removeTodo]
  );

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
        {memoizedTodoList}
      </table>
      <ToDoAdd
        setNewTodoText={setNewTodoText}
        newTodoText={newTodoText}
        addTodo={addTodo}
      />
    </div>
  );
}

export default ToDoContainer;
