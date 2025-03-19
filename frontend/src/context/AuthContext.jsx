import { createContext,ReactNode, useState } from "react";





export const AuthContext = createContext({})
export default function AuthProvider({children}) {
const [token,setToken]=useState(localStorage.getItem("token"))
const [user,setUser]=useState(null)  
const login=(token)=>{
  setToken(token)
  localStorage.setItem('token',token)
}
const logout=()=>{
  setToken(null);
  localStorage.removeItem('token')
}
return (
      <AuthContext.Provider value={{user,setUser,token,login,logout}}>
      {children}
      </AuthContext.Provider>


   )
 }






