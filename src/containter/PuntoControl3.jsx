import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const YouTubeAudioPlayer = () => {
  const [audioUrl, setAudioUrl] = useState('');

  const handlePlay = async () => {
    try {
      // Replace 'VIDEO_ID_AQUI' with the actual YouTube video ID
      const response = await fetch(`/api/getAudio?videoId=VIDEO_ID_AQUI`);
      const data = await response.json();

      setAudioUrl(data.audioUrl);
    } catch (error) {
      console.error('Error fetching audio:', error);
    }
  };

  return (
    <div>
      <button onClick={handlePlay}>Play Audio</button>
      {audioUrl && <ReactPlayer url={audioUrl} controls={true} />}
    </div>
  );
};

export default YouTubeAudioPlayer;