import { useContext, useState } from "react";
import "./navbar.css";
import { AuthContext } from "../../context/AuthContext";

import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const { logout } = useContext(AuthContext);
  const [menuAberto, setMenuAberto] = useState({
    areas: false,
    processos: false,
    subprocessos: false,
  });
  const toggleMenu = (menu) => {
    setMenuAberto((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };
 
  return (
    <header className="header">
      <nav className="nav-bar">
        <h2>Gestão de Processo</h2>
 
       
        <ul className="navLinks">
   
          <li className="dropdown"
            >
            <Link to="/"
            className="link"
            >Processo</Link>
             <FiChevronDown
              onClick={()=>toggleMenu('processos')}
               size={26}
               cursor={"pointer"}
               color="#4F372F"
             />
              {  menuAberto.processos&& 
              <ul className="dropdownContent">
  <li>
      <Link to="/cadastrar/processo"
      className="link"
      >Cadastro</Link>
    </li>
              </ul>


          }
          </li>
          <li className="dropdown"
            >
            <Link to="area"
            className="link"
            >Área</Link>
 <FiChevronDown
            onClick={()=>toggleMenu('areas')}
               size={26}
               cursor={"pointer"}
               color="#4F372F"
             />
              {  menuAberto.areas&& 
              <ul className="dropdownContent">
  <li>
      <Link to="/cadastrar/area"
      className="link"
      >Cadastro</Link>
    </li>
              </ul>


          }


          </li>
          <li className="dropdown"
            >
            <Link to="subprocesso"
            className="link"
            >Subprocesso</Link>

<FiChevronDown
                onClick={()=>toggleMenu('subprocessos')}
               size={26}
               cursor={"pointer"}
               color="#4F372F"
             />
              {  menuAberto.subprocessos&& 
              <ul className="dropdownContent">
  <li >
      <Link to="/cadastrar/subprocesso"
      className="link"
      >Cadastro</Link>
    </li>
              </ul>


          }
          </li>

 

 

        </ul>


        <button className="logout" style={{ width: "80px" }} onClick={logout}>
          Sair
        </button>
     
      </nav>
    </header>
  );
}
