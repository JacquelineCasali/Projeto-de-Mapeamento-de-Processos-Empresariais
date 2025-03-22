import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../page/LoginPage";


import PrivateRoute from "./PrivateRoute";


import ProcessoPage from "../page/ProcessoPage";
import CadastroUsuario from "../page/CadastroUsuario";
import CadastrarProcesso from "../page/Processo";

import Area from "../page/Area";
import AuthProvider from "../context/AuthContext";
import Processo from "../page/Processo";
import Subprocesso from "../page/Subprocesso";

// import CadastrarProcesso from "../page/CadastrarProcesso";
// import EditarUsuario from "../page/EditarUsuario";

const AppRoutes = () => {
  return (
    <Router>
        <AuthProvider>

      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro/area" element={<Area />} />
        <Route path="/cadastro/area/:id" element={<Area />} />

        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/cadastro/processo" element={<Processo />} />
        <Route path="/cadastro/processo/edit/:id" element={<Processo />} />
        <Route path="/cadastro/subprocesso" element={<Subprocesso />} />
        <Route path="/cadastro/subprocesso/edit/:id" element={<Subprocesso />} />
    

    
    
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
      </AuthProvider>
    </Router>
  );
};
export default AppRoutes;
