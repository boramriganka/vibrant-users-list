import React, { useState, useEffect } from "react";
import User from "./User";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import NoUser from "./NoUser";
import useLocalStorageState from '../hooks/useLocalStorageState'

const Users = () => {
  const [userArray, setUserArray] = useLocalStorageState('users',[])
  const isThereNoUser = (obj) => {
    return Object.keys(obj).length === 0 ? true : false
  }

  const firstConfirmThenDelete = (id) => {
    setUserArray((preValue) => {
      return preValue.filter((eachUser, index) => {
        return index !== id;
      });
    });
  }

  const deleteUser = (id) => {

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <div className="outer">
              <div class="bigdiv">
                <h1 style={{fontSize:"1.8rem"}}>Are you sure?</h1>
                <p style={{fontSize:"1rem"}}>You want to delete this file?</p>

              </div>
              <div class="smalldiv">
                  <button className="btn-confirm1"
                    onClick={() => {
                      firstConfirmThenDelete(id);
                      onClose();
                    }}
                  >
                    Yes, Delete it!
                  </button>
                  <button className="btn-confirm2"
                  onClick={onClose}>No</button>
              </div>
            </div>


          </div>
        );
      }
    });


  }


  return (
    <div className="users-container">
      {

        isThereNoUser(userArray) ?
          <NoUser/> :
          userArray.map((user, index) => {
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
          })


      }
    </div>
  )
}

export default Users
