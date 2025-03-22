import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";




export const AuthContext = createContext({})
export default function AuthProvider({children}) {
const [token,setToken]=useState(localStorage.getItem("token"))
const [user,setUser]=useState(localStorage.getItem("user"))
const navigate = useNavigate();
const login=(token)=>{

  localStorage.setItem('token',token)
  setToken(token)

}
const logout=()=>{
  api.defaults.headers.Authorization=null
 
  setToken(null)
  localStorage.removeItem('token')
 
  navigate("/")
}
return (
      <AuthContext.Provider value={{user,setUser,token,login,logout}}>
      {children}
      </AuthContext.Provider>


   )
 }






