import { UserAuth } from "../helpers/Auth";
import GetTitleOfUrlVideo from "../modules/GetTitleOfUrlVideo";

export const Home = () => {
  const { logOut, user } = UserAuth();
  const API_KEY = "AIzaSyDlM6xVaCe48amOJNXwpHq-wyI7EytcA5Y";


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
        <span>{user.displayName} </span>
        <h1>YouTube Tool</h1>
        <GetTitleOfUrlVideo API_KEY={API_KEY} />
      </div>
    </>
  );
};
