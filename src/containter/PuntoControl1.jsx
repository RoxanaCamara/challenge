import React, { useState } from "react";

const PuntoControl1 = ({ API_KEY }) => {
  const [idChannel, setidChannel] = useState("");
  const [VideoTitle, setVideoTitle] = useState("");
 

  //OnChange

  const youtube_parser = (url) => {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };

  const getVideoIdChannel = (e) => {
    const { value } = e.target;
    const text = youtube_parser(value) || "No posible parsear";
    setidChannel(text);
  };

  //onClick

  const getVideoTitle = () => {
    function loadClient() {
      gapi.client.setApiKey(API_KEY);
      return gapi.client
        .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(
          function () {
            console.log("GAPI client loaded for API");
          },
          function (err) {
            console.error("Error loading GAPI client for API", err);
          }
        );
    }
    // Make sure the client is loaded before calling this method.
    function execute() {
      return gapi.client.youtube.videos
        .list({
          part: ["snippet"],
          id: [idChannel],
        })
        .then(
          function (response) {
            // Handle the results here (response.result has the parsed body).
            console.log("Response");
            const titleVideo = response.result.items[0].snippet.title || "";
            setVideoTitle(titleVideo);
          },
          function (err) {
            console.error("Execute error", err);
          }
        );
    }
    loadClient();
    execute();
    gapi.load("client");
  };

  return (
    <div>
      <h2>P1</h2>
      <label htmlFor="videoUrl">Paste YouTube Video URL:</label>
      <input
        type="text"
        id="videoUrl"
        placeholder="Enter YouTube URL"
        onChange={(e) => {
          getVideoIdChannel(e);
        }}
      />
      <button onClick={(e) => getVideoTitle()}>Get Video Title</button>

      <p>Video Title: {VideoTitle}</p>
      
    </div>
  );
};

export default PuntoControl1;
