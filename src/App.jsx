import "./App.css";
import { Home } from "./containter/Home";
import { AuthContextProvider, UserAuth } from "./modules/Auth";

function App() {
  const { user } = UserAuth();
  console.log("🚀 ~ file: App.jsx:7 ~ App ~ user:", user);
  return (
    <AuthContextProvider>
      {Object.keys(user).length === 0 ? <h1>Login Gmail</h1> : <Home />}
    </AuthContextProvider>
  );
}

export default App;
