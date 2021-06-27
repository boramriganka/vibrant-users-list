import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Paper from '@material-ui/core/Paper';

function User(props) {
  function onBtnClick(event) {
    event.preventDefault();

    props.delete(props.id);
  }

  return (
    <Paper className="User">
      <h1><span>Name : </span>{props.name}</h1>
      <h2><span>Email : </span>{props.email}</h2>
      <h2><span>Password : </span>{props.password}</h2>

      <button onClick={onBtnClick}>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </button>
    </Paper>
  );
}

export default User;
