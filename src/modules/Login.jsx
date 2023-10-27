import React from "react";
import logogoogle from "./logoogle.png";
import { Container } from "../helpers/constantes";
import { UserAuth } from "../helpers/Auth";

const Login = ({}) => {
  const { googleSignIn } = UserAuth();
  const iniciarSesion = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <section className="imgseccion">
          <div className="fondocontent"></div>
        </section>
        <section className="panelsesion">
          <h2>Iniciar sesión</h2>

          <button onClick={iniciarSesion} className="btniniciar">
            <img src={logogoogle} />
            <span> Iniciar con Gmail</span>
          </button>
        </section>
      </Container>
    </>
  );
};

export default Login;
