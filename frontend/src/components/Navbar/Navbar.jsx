import { useContext } from "react";
import "./navbar.css";
import { AuthContext } from "../../context/AuthContext";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    console.log("sair");
    logout();
  };

  return (
    <header className="header">
      <nav>
        <h1>Stage Consulting</h1>
        <div className="ul">
          <ul>
            <NavLink to="area">Área</NavLink>
          </ul>

          <ul>
            <NavLink to="/">Processo</NavLink>
          </ul>

          <ul>
            <NavLink to="subprocesso">Subprocesso</NavLink>
          </ul>
        </div>

        <button
          className="btn"
          style={{ width: "80px" }}
          onClick={handleLogout}
        >
          Sair
        </button>
      </nav>
    </header>
  );
}
