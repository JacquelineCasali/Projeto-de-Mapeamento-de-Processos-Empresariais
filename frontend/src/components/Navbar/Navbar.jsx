

import { useContext} from "react";
import "./navbar.css"
import { AuthContext } from "../../context/AuthContext";

import { Link } from "react-router-dom";





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

  <ul>
  Área
  <li>
    <Link to="/cadastro/area">Cadastrar</Link>
    </li>
    <li>
    <Link to={`/cadastro/area/`}>Editar</Link>
    </li>
    </ul>
 
  
    <ul>
  Processo
  <li>
  <Link to="/cadastro/processo">Cadastro</Link>
    </li>
  </ul>
 

<ul>
Subprocesso
<li>
  <Link to="/cadastro/subprocesso">Cadastro</Link>
    </li>
</ul>


 

<button className="btn" 
style={{width:"80px"}}
onClick={handleLogout}>Sair</button>


</nav>
 




          </header>
  )
}
