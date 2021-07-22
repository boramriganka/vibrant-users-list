import { useState,useEffect } from "react";
export default function useLocalStorageState(key, defaultValue=[]){
    const [state, setState] = useState(() => {
        const localStorageData = localStorage.getItem("users");
        return localStorageData ? JSON.parse(localStorageData) : defaultValue;
      });
    
      useEffect(() => {
        localStorage.setItem("users", JSON.stringify(state));
      }, [key,state])
    return [state,setState]
}