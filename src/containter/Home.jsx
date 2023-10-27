import { UserAuth } from "../helpers/Auth";

export const Home = () => {
  const { logOut, user } = UserAuth();
  console.log("🚀 ~ file: Home.jsx:5 ~ Home ~ user:", user)
  const API_KEY = "AIzaSyDlM6xVaCe48amOJNXwpHq-wyI7EytcA5Y";

  const handleLastVideoSearch = () => {
    //guardar en la base de datos url, usuario y url video
  };

  const cerrarSesión = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <button onClick={cerrarSesión}>cerrar sesión</button>
        <span>{ user.displayName}  </span>
        <h1>YouTube Tool</h1>
      </div>
    </>
  );
};
