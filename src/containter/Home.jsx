import { useState } from "react";
import { UserAuth } from "../helpers/Auth";
import GetTitleOfUrlVideo from "../modules/GetTitleOfUrlVideo";
import YouTubeAudioPlayer from "./PuntoControl3";

export const Home = () => {
  const { logOut, user } = UserAuth();
  const API_KEY = "AIzaSyDlM6xVaCe48amOJNXwpHq-wyI7EytcA5Y";
  const [urlVideo, setUrlVideo] = useState("");
  const [idChannel, setidChannel] = useState("");
  const [show, setshow] = useState(false);
  console.log("🚀 ~ file: Home.jsx:12 ~ Home ~ show:", show)

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
        <GetTitleOfUrlVideo
          API_KEY={API_KEY}
          setUrlVideo={setUrlVideo}
          setidChannel={setidChannel}
          idChannel={idChannel}
          setshow={setshow}
        />
        {(show) && (
          <YouTubeAudioPlayer urlVideo={urlVideo} />
        )}
      </div>
    </>
  );
};
