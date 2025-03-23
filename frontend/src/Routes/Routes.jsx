import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import PrivateRoute from "./PrivateRoute";

import AuthProvider from "../context/AuthContext";
import CadastroUsuario from "../page/CadastroUsuario"
import ProcessoPage from "../page/Processo/ProcessoPage";
import SubprocessoPage from "../page/Subprocesso/SubprocessoPage";







const AppRoutes = () => {
  return (
    <Router>
        <AuthProvider>

      
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
       
        
        <Route path="/edit/:id" element={
           <PrivateRoute>
          <CadastroUsuario />
          </PrivateRoute>
          }
          
           />

        <Route path="/processo" element={
           <PrivateRoute>
<ProcessoPage />
</PrivateRoute>
          }
          
          />
              <Route path="/subprocesso" element={
              <PrivateRoute>
<SubprocessoPage />
              </PrivateRoute> 
          }
          
          />
        
           {/* <Route path="/cadastro/processo" element={<Processo />} />

 
        <Route path="/cadastro/area" element={<Area />} />
        <Route path="/cadastro/area/:id" element={<Area />} />

      
      
        <Route path="/cadastro/processo/edit/:id" element={<Processo />} />
        <Route path="/cadastro/subprocesso" element={<Subprocesso />} />
        <Route path="/cadastro/subprocesso/edit/:id" element={<Subprocesso />} />
    
        <Route path="/subprocesso/edit/:id" element={<Subprocesso />} />


    
    
  
    
       
          */}
      </Routes>
      </AuthProvider>
    </Router>
  );
};
export default AppRoutes;
