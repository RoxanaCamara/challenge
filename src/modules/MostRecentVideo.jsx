import React, { useEffect, useState } from "react";

const MostRecentVideo = ({ }) => {
  const [recentVideoTitle, setRecentVideoTitle] = useState("");

  useEffect(() => {}, []);

  return (
    <div>
      <p>
        Title the Most Recent Video from the last User created:
        {recentVideoTitle}
      </p>
    </div>
  );
};

export default MostRecentVideo;
