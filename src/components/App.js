import React, { useState, useEffect } from "react";
import User from "./User";
import CreateUser from "./CreateUser";
import "../App.css"


function App() {
  const [userArray, setUserArray] = useState(() => {
    const localStorageData = localStorage.getItem("users");
    return localStorageData ? JSON.parse(localStorageData) : [];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userArray));
  }, [userArray])

  function addUser(user) {
    if (user.name.trim() !== "" && user.password.trim() !== ""  && user.email.trim() !== "") {
      setUserArray((preValue) => {
        return [...preValue, user];
      });
    } else {
      alert("Enter User and Password.");
    }
  }

  function deleteUser(id) {
    setUserArray((preValue) => {
      return preValue.filter((eachUser, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="Container">

      <CreateUser newUser={addUser} />

      <div className="users-container">
      
      </div>

    </div>
  );
}

export default App;
