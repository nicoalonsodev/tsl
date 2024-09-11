import React from "react";
import VideoWistiaWpp from "../Video/VideoWistiaWpp";
const TitleAndVideo = ({ video, calendlyPage, data }) => {
  return (
    <div className="flex flex-wrap justify-center items-start text-center space-y-4">
      <h1 className="lato-black text-gray-200 text-xl lg:text-5xl text-balance uppercase">
        Trader Argentino{" "}
        <span className="text-[#289ff0]">Revoluciona el Mercado</span> con un
        Sistema de Trading Que{" "}
        <span className="text-[#289ff0]">
          Cualquiera Puede Copiar y Aplicar
        </span>
      </h1>

      <div className="flex justify-center w-full">
        {video === "wpp" && (
          <VideoWistiaWpp dataUser={data} calendlyPageUrl={calendlyPage} />
        )}
      </div>
    </div>
  );
};

export default TitleAndVideo;
