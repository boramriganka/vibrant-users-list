import React, { useState, useEffect } from "react";
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

  
  return (
    <div className="Container">

      <CreateUser newUser={addUser} />

    </div>
  );
}

export default App;
