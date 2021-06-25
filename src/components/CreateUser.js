import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import TextField from '@material-ui/core/TextField';

function CreateUser(params) {
  const [user, setUser] = useState({
    name: "",
    email:"",
    password: ""
  });

 
  function storeUser(event) {
    const { value, name } = event.target;
    // take the object and add the new name ,value pair to user object and return it.
    setUser(preValue => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function OnButtonClick(event) {
    event.preventDefault();

    params.newUser(user);
    console.log(user)
    setUser({
      name: "",
      email:"",
      password: ""
    });
  }

  return (
    <div className="formDiv">
      <form className="create-user">
          <TextField
          id="outlined-basic"  
          variant="outlined"
            autoComplete="off"
            value={user.name}
            onChange={storeUser}
            name="name"
            placeholder="name"
            rows={"3"}
          />
           <TextField
           id="outlined-basic"  variant="outlined"
            autoComplete="off"
            value={user.email}
            onChange={storeUser}
            name="email"
            placeholder="email"
            rows={"3"}
          />
        <TextField
        id="outlined-basic"  variant="outlined"
          value={user.password}
          onChange={storeUser}
          name="password"
          placeholder="password"
          rows={"3"}
        />
        
      </form>
      <Zoom in={true}>
          <Fab onClick={OnButtonClick}>
            <AddIcon />
          </Fab>
        </Zoom>
    </div>
  );
}

export default CreateUser;
