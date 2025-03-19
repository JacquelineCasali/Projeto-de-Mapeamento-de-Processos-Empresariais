

import { useContext } from "react";
import "./navbar.css"
import { AuthContext } from "../../context/AuthContext";




export default function Navbar() {
   const {logout} = useContext(AuthContext)
  const handleLogout= ()=>{
    console.log('sair')
    logout();
  }
  

  
   


 return (
<header className="header">
<nav>
<h1>Stage Consulting

</h1>
<button className="btn" onClick={handleLogout}>Sair</button>

</nav>
 




          </header>
  )
}
