import React, { useState, useRef, useEffect } from "react";
import Registro from "../Registro/Registro";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import gif from "../../assets/gifSound.gif";
import { useLocation } from "react-router-dom";
import "./Video.css";

const VideoWistia = ({calendlyPageUrl, dataUser}) => {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const location = useLocation();
  const isRegistered = new URLSearchParams(location.search).get("registered") === "true";
  const videoRef = useRef(null);

  const videoUrl = "https://fast.wistia.net/embed/iframe/ayx9d0kxz4";

  useEffect(() => {
    if (videoRef.current) {
      const command = isRegistered ? 'unMute' : 'mute';
      videoRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      );
      videoRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
        '*'
      );

      // Establecer showButton en true después de 30 segundos
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 30000); // 300000 ms = 5 minutos
      // Limpieza del temporizador cuando el componente se desmonte o cambie el estado relevante
      return () => clearTimeout(timer);
    }
  }, [isRegistered]);

  const actualizarEstadoPadre = (estado) => {
    setShowForm(false);
    if (estado && !formSubmitted) {
      setFormSubmitted(true);
      if (videoRef.current) {
        videoRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
          '*'
        );
        videoRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
          '*'
        );
        setShowOverlay(false);
      }
    }
  };

  const handleOverlayClick = () => {
    setShowOverlay(false);
    actualizarEstadoPadre(true);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pb-4 ">
      <div className="w-full lg:w-2/3 h-full flex flex-col items-center px-1 lg:px-6 py-1 lg:py-4 bg-gray-800 rounded-2xl mb-4 border-gray-800 border-2 relative">
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            ref={videoRef}
            className="w-full h-full rounded-lg shadow-lg"
            src={videoUrl}
            allow="autoplay"
            frameBorder="0"
            title="Wistia Video"
            allowFullScreen
            onLoad={() => {
              const command = isRegistered ? 'unMute' : 'mute';
              videoRef.current.contentWindow.postMessage(
                JSON.stringify({ event: 'command', func: command, args: [] }),
                '*'
              );
              videoRef.current.contentWindow.postMessage(
                JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
                '*'
              );
            }}
          ></iframe>
        </div>
        {showOverlay && !isRegistered && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            onClick={handleOverlayClick}
          >
            <div className="bg-yellow-500 border-2 border-gray-100 bg-opacity-75 p-4 rounded-lg flex flex-col items-center justify-center text-white text-center cursor-pointer">
              <img src={gif} alt="Click to unmute" className="w-16 h-16 mb-4" />
              <p className="text-xl font-bold">Tu video ya ha comenzado</p>
              <p className="text-lg">Haga clic para escuchar</p>
            </div>
          </div>
        )}
      </div>
      <div className="w-full flex justify-center">
        {showButton && <AnimatedButton data={dataUser} calendlyPage={calendlyPageUrl} />}
      </div>
      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 opacity-50 z-40"
            onClick={() => setShowForm(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <Registro actualizarEstado={actualizarEstadoPadre} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoWistia;
