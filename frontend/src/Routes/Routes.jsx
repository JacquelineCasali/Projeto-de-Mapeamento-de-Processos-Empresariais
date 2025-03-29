import { BrowserRouter as Router,  Routes,Route } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import PrivateRoute from "./PrivateRoute";

import AuthProvider, { AuthContext } from "../context/AuthContext";
import CadastroUsuario from "../page/CadastroUsuario";
import ProcessoPage from "../page/Processo/ProcessoPage";
import SubprocessoPage from "../page/Subprocesso/SubprocessoPage";

import Area from "../page/Area/Area";
import AreaPage from "../page/Area/AreaPage";
import Processo from "../page/Processo/Processo";
import CardProvider from "../context/CardContext";
import Subprocesso from "../page/Subprocesso/Subprocesso";
import Home from "../page/Home";




const AppRoutes = () => {
  
  return (
    <Router>
     
      <AuthProvider>
   
       
        <CardProvider>
     
        <Routes>

        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/cadastro" element={<CadastroUsuario />} />
        <Route exact
            path="/edit/:id"
            element={
              <PrivateRoute>
                <CadastroUsuario />
              </PrivateRoute>
            }
          />
          <Route  exact path="/" element={
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


         

           <Route exact path="/cadastrar/processo" element={
              <PrivateRoute>
 <Processo />
              </PrivateRoute>
           } />
           <Route exact path="/cadastrar/processo/:id" element={
              <PrivateRoute>
  <Processo />
              </PrivateRoute>
          } />
 
   <Route path="/cadastrar/area" element={
      <PrivateRoute>
  <Area />
      </PrivateRoute>
  } />
        <Route path="/cadastrar/area/:id" element={
              <PrivateRoute>
 <Area />
              </PrivateRoute>
         } />

      
      
       
        <Route path="/cadastrar/subprocesso" element={
            <PrivateRoute>
  <Subprocesso />
            </PrivateRoute>
        } />
        <Route path="/cadastrar/subprocesso/:id" element={
                    <PrivateRoute>
                    <Subprocesso />
                              </PrivateRoute>
          
          } />
    
       

    
    
  
    
       
          
        </Routes>
        </CardProvider>
       
      </AuthProvider>
    </Router>
  );
};
export default AppRoutes;
