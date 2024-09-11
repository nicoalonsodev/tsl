import React from "react";
import background3 from "../../assets/background3.png";

const Goal = () => {
  const background3Style = {
    backgroundImage: `url(${background3})`,
    backgroundSize: "cover", // Asegúrate que la imagen cubra todo el div
    backgroundPosition: "center", // Centra la imagen en el div
    backgroundRepeat: "no-repeat", // Evita que la imagen se repita
  };
  return (
    <div className="flex ">
   
      <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-8">
        <div className="w-full lg:w-[55%] flex flex-wrap justify-start items-center space-y-3">
          <div className="w-full flex lg:hidden items-center overflow-hidden rounded-lg  mb-2">
            <img
              className="w-full object-cover object-center"
               src="https://www.agenciadeinfoproductos.com/hosted/images/13/d109d8e427462080f289ac1f7f89f4/Captura-de-pantalla-2024-05-10-102526.png"
                alt=""
            />
          </div>
          <div className="w-full mt-4">
            <p className="poppins-regular text-lg text-[#F59800]">
            Tengo una meta clara para ti que estás leyendo esto:
            </p>
          </div>
          <div className="w-full mt-4">
            <p className="poppins-semibold text-4xl text-gray-100">
            Hacer de ti el próximo millonario de latinoamérica con este nuevo modelo de negocio.
            </p>
          </div>
          <div className="w-full mt-4">
            <p className="poppins-regular text-lg text-gray-200">
            Si esto capta tu atención, te sugiero que leas cada palabra de esta página, porque será lo más importante que leas en todo el año.

            </p>
          </div>
          <div className="w-full mt-4">
            <p className="poppins-regular text-lg text-gray-200">
            Acompáñame a conocer uno de los casos de éxito más recientes en TSL, contado por él mismo.
            </p>
          </div>
        </div>
        <div className="w-full  lg:w-[30%] hidden lg:flex items-center overflow-hidden rounded-lg">
          <img
            className="w-full object-cover object-center"
            src="https://www.agenciadeinfoproductos.com/hosted/images/13/d109d8e427462080f289ac1f7f89f4/Captura-de-pantalla-2024-05-10-102526.png"
                alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Goal;
