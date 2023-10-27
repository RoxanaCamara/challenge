import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProtectorRuta } from "../components/ProtectorRuta";
import { Home } from "../containter/Home";
import Login from "../modules/Login";

export function Routes() {
  const { user } = UserAuth();
  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to={"/login"} />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Home"
          element={
            <ProtectorRuta>
              <Perfil />
            </ProtectorRuta>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
