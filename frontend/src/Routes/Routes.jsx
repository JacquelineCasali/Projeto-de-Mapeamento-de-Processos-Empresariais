import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../page/LoginPage";


import PrivateRoute from "./PrivateRoute";


import ProcessoPage from "../page/ProcessoPage";
import CadastroUsuario from "../page/CadastroUsuario";
import CadastrarProcesso from "../page/CadastrarProcesso";
// import CadastrarProcesso from "../page/CadastrarProcesso";
// import EditarUsuario from "../page/EditarUsuario";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/cadastro/processo" element={<CadastrarProcesso />} />
        <Route path="/cadastro/processo/edit/:id" element={<CadastrarProcesso />} />
    

    
    
        <Route path="/edit/:id" element={
             <PrivateRoute>
 <CadastroUsuario />
             </PrivateRoute>
         } />
        <Route path="/processo" element={
              <PrivateRoute>
<ProcessoPage />
              </PrivateRoute> 
          }
          
          />
  
      </Routes>
    </Router>
  );
};
export default AppRoutes;
