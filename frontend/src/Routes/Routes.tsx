import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import Dashboard from "../page/Dashboard";

import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
