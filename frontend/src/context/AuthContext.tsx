import { createContext,ReactNode, useState } from "react";


interface AuthContextType{
 token:string| null;
 login:(token:string)=>void;
 logout:()=>void;
  }
interface AuthProviderProps{
    children:ReactNode
}

export const AuthContext = createContext({}as AuthContextType)
export default function AuthProvider({children}:AuthProviderProps) {
const [token,setToken]=useState<string|null>(localStorage.getItem("token"))
   
const login=(token:string)=>{
  setToken(token)
  localStorage.setItem('token',token)
}
const logout=()=>{
  setToken(null);
  localStorage.removeItem('token')
}
return (
      <AuthContext.Provider value={{token,login,logout}}>
      {children}
      </AuthContext.Provider>


   )
 }






