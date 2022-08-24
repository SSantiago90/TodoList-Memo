import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function ToDo({ id, user, title, date, status, removeTodo, img}) {
  return (
    <tr key={id}>
      <td className="usuarioImg">
        <Link className="userLink" to={`/todo/${id}`}>
          <img
            alt="profil"
            width="80"
            src={img}
            className="userImage"
          />
        </Link>
        <p>{user}</p>
      </td>
      <td>
        <p>{title}</p>
      </td>
      <td>
        <p>{status}</p>
      </td>
      <td>
        <p>{date}</p>
      </td>
      <td>
        <Button type="isDanger" onClick={() => removeTodo(id)}>
          X
        </Button>
      </td>
    </tr>
  );
}

export default ToDo;
