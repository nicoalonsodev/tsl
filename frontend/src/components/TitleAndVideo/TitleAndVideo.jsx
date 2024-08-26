import React from "react";
import VideoPreview from "../Video/VideoPreview";
import VideoWistia from "../Video/VideoWistia";
import VideoWistiaWpp from "../Video/VideoWistiaWpp";
const TitleAndVideo = ({ video, url, googleSheetsUrl, calendlyPage, data }) => {

  return (
     <div className="flex flex-wrap justify-center items-start text-center space-y-4">
    {/* //   <p className="poppins-medium text-[#289ff0] text-md lg:text-xl px-2">
    //     Infoproductor y trader argentino millonario revela en un video de 10
    //     minutos...
    //   </p> */}

      <h1 className="lato-black text-gray-200 text-xl lg:text-5xl text-balance uppercase">
      Trader Argentino <span className="text-[#289ff0]">Revoluciona el Mercado</span> con un Sistema de Trading Que <span className="text-[#289ff0]">Cualquiera Puede Copiar y Aplicar</span>
      </h1>
      
      {/* <p className="poppins-medium text-[#289ff0] text-sm lg:text-xl px-2">
        Combinando 3 modelos altamente rentables: Trading, Marketing de Afiliados y Growth Partner.

      </p> */}
      <div className="flex justify-center w-full">
        {video === "True" ? <VideoWistia dataUser={data} calendlyPageUrl={calendlyPage} /> : video === "wpp" ? <VideoWistiaWpp dataUser={data} calendlyPageUrl={calendlyPage} /> : <VideoPreview urlPreview={url} googleSheets={googleSheetsUrl} />}
      </div>
    </div>
  );
};

export default TitleAndVideo;
