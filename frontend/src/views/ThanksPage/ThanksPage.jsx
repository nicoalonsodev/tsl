import React from "react";
import Footer from "../../components/Footer/Footer";
import VideoWistiaThanks from "../../components/Video/VideoWistiaThanks";
import logo from "../../assets/logo/logo_blanco-re.png";

const ThanksPage = () => {
  return (
    <div className="flex flex-wrap justify-center py-4 bg-gray-900">
      <div className="w-screen h-14 lg:h-20 flex justify-center items-center border-b-[1px] border-yellow-600">
        <img className="w-14 lg:w-20" src={logo} alt="logo" />
      </div>
      <div className="flex flex-wrap justify-center items-center px-2 lg:px-32 py-10 space-y-3">
        <h1 className="w-full lato-black text-gray-200 text-2xl lg:text-5xl text-balance text-center">
          ¡Estamos muy felices de que hayas tomado la decisión de agendar!
        </h1>
        <p className="poppins-medium text-yellow-500 text-md lg:text-xl text-center">
          Te pedimos por favor que respetes el tiempo tuyo y el de los miembros
          de nuestra comunidad.
        </p>
       

        <VideoWistiaThanks />
      </div>
      <Footer />
    </div>
  );
};

export default ThanksPage;
