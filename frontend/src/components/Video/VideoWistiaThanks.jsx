import React from "react";
import "./Video.css";

const VideoWistiaThanks = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pb-4 px-2">
      <div className="w-full lg:w-2/3 h-full flex flex-col items-center px-3 lg:px-6 py-4  rounded-2xl border-transparent border-2 relative">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://fast.wistia.com/embed/iframe/ayx9d0kxz4"
            allow="autoplay"
            frameBorder="0"
            title="Wistia Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
     
    </div>
  );
};

export default VideoWistiaThanks;
