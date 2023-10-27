import { Home } from "./containter/Home";
import { AuthContextProvider, UserAuth } from "./helpers/Auth";
import Login from "./modules/Login";

const RequireAuth = ({ children }) => {
  const { user } = UserAuth();
  return user && Object.keys(user).length !== 0 ? children : <Login />;
};

function App() {
  return (
    <AuthContextProvider>
      <RequireAuth>
        <Home />
      </RequireAuth>
    </AuthContextProvider>
  );
}

export default App;
