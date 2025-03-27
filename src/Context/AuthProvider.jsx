// import React from 'react'

import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { fetchData } from "../utils/rapidapi";
import { useContext } from "react";

// const AuthProvider = () => {
//   return (
//     <div>AuthProvider</div>
//   )
// }

// export default AuthProvider

export  const AuthContext= createContext()
export default function AuthProvider({children}){
    const[loading,setLoading] =useState(false)
    const[data,setData]=useState([])
    const {value,setValue}=useState("New")

    useEffect (()=>{
        fetchAlldata(value)
    },[value])

    const fetchAlldata=(query)=>{
        setLoading(true)
        fetchData(`search/?q=${query}`).then(({contents})=>{
            console.log(contents)
            setData(contents)
            setLoading(false)
        })
    }


    return(
        <AuthContext.Provider value={{loading,data,value,setValue}}>
            {children}

        </AuthContext.Provider>
    )
}
 export const useAuth=()=>useContext(AuthContext)