import { useState } from "react";
import Login from "../modules/Login";
import PuntoControl1 from "./PuntoControl1";
import PuntoControl2 from "./PuntoControl2";
import PuntoControl3 from "./PuntoControl3";
import PuntoControl4 from "./PuntoControl4";
import PuntoControl5 from "./PuntoControl5";
import GetTitleOfUrlVideo from "../modules/GetTitleOfUrlVideo";
import MostRecentVideo from "../modules/MostRecentVideo";

export const Home = () => {
  const API_KEY = "AIzaSyDlM6xVaCe48amOJNXwpHq-wyI7EytcA5Y";
  const [autenticado, setAutenticado] = useState(false);

  const handleLastVideoSearch = () => {
    //guardar en la base de datos url, usuario y url video
  }

  return (
    <div>
      <h1>YouTube Tool</h1>
      {
        !autenticado ?
        <Login setAutenticado={setAutenticado} /> :
        <>
        <GetTitleOfUrlVideo handleLastVideoSearch={handleLastVideoSearch}  API_KEY={API_KEY}/>
        {//<MostRecentVideo />
        }
        <PuntoControl3 API_KEY={API_KEY} />
        
        </>
      }
      
    </div>
  );
};
