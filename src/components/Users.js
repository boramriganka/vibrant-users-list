import React, { useState, useEffect } from "react";
import User from "./User";

const Users = () => {
    const [userArray, setUserArray] = useState(() => {
        const localStorageData = localStorage.getItem("users");
        return localStorageData ? JSON.parse(localStorageData) : [];
      });
    
      useEffect(() => {
        localStorage.setItem("users", JSON.stringify(userArray));
      }, [userArray])
    
      function deleteUser(id) {
        setUserArray((preValue) => {
          return preValue.filter((eachUser, index) => {
            return index !== id;
          });
        });
      }
    
    return (
        <div className="users-container">
      {userArray.map((user, index) => {
        return (
          <User
            key={index}
            id={index}
            name={user.name}
            email={user.email}
            password={user.password}
            delete={deleteUser}
          />
        );
      })}
      </div>
    )
}

export default Users
