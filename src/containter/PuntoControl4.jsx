import React, { useState } from "react";

const PuntoControl4 = ({API_KEY}) => {
  const [traduccion, setTraduccion] = useState("...");


  // Incluye la biblioteca de la API de YouTube
gapi.load('client', init);

// Inicializa la API con tus credenciales
function init() {
  gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
  }).then(function() {
    // Llama a la función para agregar subtítulos
    addSubtitles('7X3RiyMVs6I');
  });
}

// Función para agregar subtítulos
function addSubtitles(videoId) {
  // Crea un objeto de subtítulos
  var subtitles = {
    kind: 'youtube#caption',
    snippet: {
      videoId: videoId,
      language: 'es', // Idioma de los subtítulos
      name: 'Spanish',
      isDraft: false,
    },
  };

  // Llama a la API para insertar subtítulos
  gapi.client.youtube.captions.insert({
    part: 'snippet',
    resource: subtitles,
  }).then(function(response) {
    console.log("🚀 ~ file: PuntoControl4.jsx:39 ~ addSubtitles ~ response:", response)
    console.log('Subtítulo agregado con éxito. ID:', response.result.id);
  }, function(err) {
    console.error('Error al agregar subtítulo:', err);
  });
}

  return (
    <div>
      <button>Traduccion Audio</button>
      <p> {traduccion}</p>
    </div>
  );
};

export default PuntoControl4;
