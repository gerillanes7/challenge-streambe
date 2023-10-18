import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ProtectedRoutes } from "./infraesctructure/utils/ProtectedRoute";
import Home from "./infraesctructure/features/Home/Home.view";
import Login from "./infraesctructure/features/Login/Login.view";

import AuthenticationState from "./infraesctructure/context/AuthenticationContext/AuthenticationContext";

function App() {
  return (
    <AuthenticationState>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthenticationState>
  );
}

export default App;
