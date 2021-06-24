import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

function User(props) {
  function onBtnClick(event) {
    event.preventDefault();

    props.delete(props.id);
  }

  return (
    <div className="User">
      <h1><span>Name : </span>{props.name}</h1>
      <p><span>Email : </span>{props.email}</p>
      <p><span>Password : </span>{props.password}</p>

      <button onClick={onBtnClick}>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </button>
    </div>
  );
}

export default User;
