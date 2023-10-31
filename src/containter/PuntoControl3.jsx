import React, { useState } from "react";
import { useEffect } from "react";
import ReactPlayer from "react-player";

const YouTubeAudioPlayer = ({urlVideo}) => {
  const [second, setSecond] = useState(30);
  const [playing, setplaying] = useState(false);
  const handlePlay = async () => {};

  const playerRef = React.useRef();

  const onReady = React.useCallback(() => {
    const timeToStart = second;
    playerRef.current.seekTo(timeToStart, "seconds");
  }, [playerRef.current]);

  const handleTime = () => {
    setplaying(true)
  }

  useEffect(() => {
    setTimeout(() => {
      console.log("15 segundos.");
      setplaying(false)
    }, 20000);
  }, [onReady]);

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={urlVideo}
        playing={playing}
        width="100%"
        height="100%"
        controls={true}
        onReady={onReady}
      />
     <button onClick={(e) => handleTime()}>Desde el 30 al 45 segundos</button>
    </div>
  );
};

export default YouTubeAudioPlayer;
