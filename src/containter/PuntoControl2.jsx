import React from "react";
import { useState } from "react";

const PuntoControl2 = ({ API_KEY }) => {
  const [cantidadVistas, setCantidadVistas] = useState(0);
  const [ultimoComentario, setultimoComentario] = useState("...");
  return (
    <div>
      <p>Cantidad de vistas: {cantidadVistas} </p>
      <p>Ultimo comentario: {ultimoComentario}</p>
      <button>Update</button>
    </div>
  );
};

export default PuntoControl2;
