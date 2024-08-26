import React, { useState, useRef } from "react";
import video from "../../assets/gif.mp4";
import Registro from "../Registro/Registro";
import RegistroCaptcha from "../Registro/RegistroCaptcha";

const VideoPreview = ({urlPreview, googleSheets}) => {
  const [showForm, setShowform] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    if (!formSubmitted) {
      setShowform(true);
    }
  };

  const actualizarEstadoPadre = (estado) => {
    setShowform(false);
    if (estado) {
      setFormSubmitted(true);
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      videoRef.current.play();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      <div className="cursor-pointer w-full lg:w-1/2 flex justify-center px-2 lg:px-6 py-4 bg-[#57575787] rounded-2xl mb-4 border-[#57575787] border-[2px]">
        <video
          ref={videoRef}
          className="h-auto"
          playsInline
          autoPlay
          muted
          loop // Agrega esta línea para mantener el video en loop
          onClick={handleClick}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full">
        <a
           onClick={handleClick}
          rel="noopener noreferrer"
          className="w-full lg:w-2/4 animated-button cursor-pointer border-[2px] border-[#5fd3cb]"
        >
          <span className="anton text-gray-100 tracking-wider">VER MÉTODO</span>
        </a>
      </div>

      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 opacity-50 z-40"
            onClick={() => setShowform(false)} // Ajusta esta línea para manejar el cierre del formulario
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Registro actualizarEstado={actualizarEstadoPadre} redirectUrl={"/vsl"} googleSheetsUrl={"https://script.google.com/macros/s/AKfycbzZH7_GuBEMwlnWmeZ_0MuMSIdUgkD0miOCbuew8ps8OcTYYB491XItHXlnxXJb4AhOpg/exec"} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPreview;
