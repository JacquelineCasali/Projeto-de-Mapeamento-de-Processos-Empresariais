import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import PrivateRoute from "./PrivateRoute";

import AuthProvider from "../context/AuthContext";
import CadastroUsuario from "../page/CadastroUsuario";
import ProcessoPage from "../page/Processo/ProcessoPage";
import SubprocessoPage from "../page/Subprocesso/SubprocessoPage";
import Home from "../page/Home";

import Area from "../page/Area/Area";
import AreaPage from "../page/Area/AreaPage";
import Processo from "../page/Processo/Processo";
import CardProvider from "../context/CardContext";
import Subprocesso from "../page/Subprocesso/Subprocesso";

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <CardProvider>
        <Routes>
          <Route path="/" element={
            <PrivateRoute>
            <Home />
            </PrivateRoute>
            }>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <ProcessoPage />
                </PrivateRoute>
              }
            />
            <Route
              path="subprocesso"
              element={
                <PrivateRoute>
                  <SubprocessoPage />
                </PrivateRoute>
              }
            />
              <Route
              path="area"
              element={
                <PrivateRoute>
                  <AreaPage/>
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />

          <Route
            path="/edit/:id"
            element={
              <PrivateRoute>
                <CadastroUsuario />
              </PrivateRoute>
            }
          />

           <Route path="/cadastrar/processo" element={<Processo />} />
           <Route path="/cadastrar/processo/:id" element={<Processo />} />
 
   <Route path="/cadastrar/area" element={<Area />} />
        <Route path="/cadastrar/area/:id" element={<Area />} />

      
      
       
        <Route path="/cadastrar/subprocesso" element={<Subprocesso />} />
        <Route path="/cadastrar/subprocesso/edit/:id" element={<Subprocesso />} />
    
        <Route path="/cadastrar/edit/:id" element={<Subprocesso />} />


    
    
  
    
       
          
        </Routes>
        </CardProvider>
       
      </AuthProvider>
    </Router>
  );
};
export default AppRoutes;
