import React from "react";

const History = ({ historyData, historyImages, historyPart1, historyPart2, historyPart3 }) => {
  return (
    <div className="flex flex-wrap justify-center bg-gray-50">
      <div className="flex flex-wrap justify-center items-center px-2 lg:px-10 xl:px-32 space-y-6 lg:space-y-16 py-10">
        <div className="w-full flex flex-wrap justify-center items-center space-y-6">
          <h1 className="text-3xl lg:text-5xl lato-bold text-[#1D1D1B] text-center">
            HISTORIA DE ÉXITO EN TSL
          </h1>
          <div className="w-full flex justify-center">
            <div className="w-3/5">
              <hr className="border-[1.5px] border-[#F59800]" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-start space-x-0 lg:space-x-8">
          <div className="w-full lg:w-[45%] flex flex-wrap justify-start items-start px-0 lg:px-10 space-y-3">
            <div className="w-full lg:hidden flex justify-center items-start overflow-hidden">
              <img className="w-2/3 object-cover object-center rounded-lg" src={historyImages ? historyImages[0] : ""} alt="" />
            </div>
            <div className="w-full">
              <p className="text-md font-bold text-gray-800">De: <span dangerouslySetInnerHTML={{ __html: historyData ? historyData[0] : "" }} /></p>
              <p className="text-md text-gray-800">Ubicación: <span dangerouslySetInnerHTML={{ __html: historyData ? historyData[1] : "" }} /></p>
              <p className="text-md text-gray-800"><span dangerouslySetInnerHTML={{ __html: historyData ? historyData[2] : "" }} /></p>
            </div>
            <div className="w-full flex justify-start">
              <div className="w-3/5">
                <hr className="border-[1.5px] border-[#F59800]" />
              </div>
            </div>
            <div className="w-full mt-4">
              <p className="text-md lg:text-lg poppins-regular text-gray-700">Tengo una meta clara para ti que estás leyendo esto:</p>
            </div>
            <div className="w-full mt-2">
              <p className="text-xl poppins-semibold text-black">Hacer de ti el próximo caso de éxito nuestra comunidad con este nuevo modelo de negocio.</p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-gray-700">Si esto capta tu atención, te sugiero que leas cada palabra de esta página, porque será lo más importante que leas en todo el año.</p>
            </div>
          </div>
          <div className="w-full lg:w-[40%] hidden lg:flex justify-end items-start overflow-hidden rounded-lg">
            <img className="w-full object-cover object-center" src={historyImages ? historyImages[0] : ""} alt="" />
          </div>
        </div>

        {/* Parte 1 */}
        <div className="flex flex-wrap justify-center items-start space-x-0 lg:space-x-8">
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-start items-start overflow-hidden rounded-lg">
            <img className="w-2/3 lg:w-full object-cover object-center rounded-lg" src={historyImages ? historyImages[1] : ""} alt="" />
          </div>
          <div className="w-full lg:w-[45%] flex flex-wrap justify-start items-start px-0 lg:px-10 space-y-3">
            {historyPart1?.map((text, index) => (
              <div className="w-full mt-4" key={index}>
                <p className="poppins-regular text-md text-gray-700" dangerouslySetInnerHTML={{ __html: text }} />
              </div>
            ))}
          </div>
        </div>

        {/* Parte 2 */}
        <div className="flex flex-wrap justify-center items-start space-x-0 lg:space-x-8">
          <div className="w-full lg:w-[45%] flex flex-wrap justify-start items-start px-0 lg:px-10 space-y-3">
            <div className="w-full lg:hidden flex justify-center items-start overflow-hidden">
              <img className="w-2/3 object-cover object-center rounded-lg" src={historyImages ? historyImages[2] : ""} alt="" />
            </div>
            {historyPart2?.map((text, index) => (
              <div className="w-full mt-4" key={index}>
                <p className="poppins-regular text-md text-gray-700" dangerouslySetInnerHTML={{ __html: text }} />
              </div>
            ))}
          </div>
          <div className="w-full lg:w-[40%] hidden lg:flex items-start overflow-hidden rounded-lg">
            <img className="w-full object-cover object-center" src={historyImages ? historyImages[2] : ""} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
