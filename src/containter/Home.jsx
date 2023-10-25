
import { useState } from "react";

export const Home = () => {

  const [idChannel, setidChannel] = useState("");
  const [recentVideoTitle, setRecentVideoTitle] = useState("");
  const [viewCount, setViewCount] = useState("");
  const [recentComment, setRecentComment] = useState("");
  const API_KEY="AIzaSyDlM6xVaCe48amOJNXwpHq-wyI7EytcA5Y"
  const URL = "https://www.googleapis.com/youtube/v3/videos"

  //OnChange

  const youtube_parser =(url) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

  const getVideoIdChannel= (e) => {
    const { value } = e.target
    const text = youtube_parser(value) || 'No posible parsear'
    setidChannel(text)
  };
  

  //onClick


  const getVideoTitle = () => {
    function loadClient() {
      gapi.client.setApiKey(API_KEY);
      return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(function() { console.log("GAPI client loaded for API"); },
      function(err) { console.error("Error loading GAPI client for API", err); });
      }
      // Make sure the client is loaded before calling this method.
      function execute() {
        console.log("Ejecutar")
      return gapi.client.youtube.videos.list({
      "part": [
      "snippet"
      ],
      "id": [
        idChannel
      ]
      })
      .then(function(response) {
      // Handle the results here (response.result has the parsed body).
      console.log("Response", )
      const titleVideo = response.result.items[0].snippet.title || ''
      setRecentVideoTitle(titleVideo)
      },
      function(err) { console.error("Execute error", err); });
      }
      loadClient()
      execute()
      gapi.load("client");
 
    
  };

  const getVideoInfo = () => {
   
  };

  const playAudio = () => {};

  const translateToSpanish = () => {};

  const speakSpanishText = () => {};

  return (
    <div>
      <h1>YouTube Tool</h1>

      <label htmlFor="videoUrl">Paste YouTube Video URL:</label>
      <input type="text" id="videoUrl" placeholder="Enter YouTube URL" onChange={(e) => {
        getVideoIdChannel(e)
      } } />
      <button onClick={(e) => getVideoTitle()}>Get Video Title</button>

      <p>
        Most Recent Video Title:
        {recentVideoTitle}
      </p>

      <button onClick={(e) => getVideoInfo(e)}>Get Video Info</button>
      <p>
        View Count: <span id="viewCount"></span>
      </p>
      <p>
        Most Recent Comment: <span id="recentComment"></span>
      </p>

      <button onClick={(e) => playAudio(e)}>Play Audio (0:30 - 0:45)</button>

      <p>
        Spanish Translation: <span id="spanishTranslation"></span>
      </p>
      <button onClick={(e) => speakSpanishText(e)}>Speak Spanish Text</button>
    </div>
  );
};
