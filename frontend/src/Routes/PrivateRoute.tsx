import { JSX, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


 const PrivateRoute = ({children}:{children: JSX.Element})=>{

const auth=useContext(AuthContext);
return auth?.token?children:<Navigate to="/"/>
}
     
   export default PrivateRoute;