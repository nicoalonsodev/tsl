import React from "react";
import { FaCheck } from "react-icons/fa";
import CallToAction from "../CallToAction/CallToAction";
import rev from "../../assets/imagenes/rev2.jpeg";
import dubai from "../../assets/imagenes/Dunai-imagen.png";
import mapa from "../../assets/imagenes/Mapa-icon.png";
import rev3 from "../../assets/imagenes/rev3.jpeg";
const Gifts = ({ calendlyPage }) => {
  return (
    <div className="mt-10 text-gray-100 px-3 lg:px-0">
      <h1 className="text-2xl lg:text-4xl text-center font-bold mb-6 poppins-bold text-balance">
        Además de los siguientes regalos para formar parte de la comunidad y
        cambiar tu entorno.
      </h1>
      <p className="text-center mb-6">
        Para las primeras 100 personas que accedan al programa
      </p>
      <div className="flex flex-wrap justify-center px-0 lg:px-32">
        <div className="flex flex-wrap justify-center items-center  space-y-16 py-10">
          {/* Primer Regalo */}
          <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-8">
            <div className="w-full lg:w-[55%] flex flex-wrap justify-start items-center space-y-3">
              <div className="w-full flex justify-center lg:hidden items-center overflow-hidden rounded-lg  mb-2">
                <img
                  className="w-1/2 object-cover object-center "
                  src={rev}
                  alt="Nichos Rentables"
                />
              </div>
              <div className="w-full mt-4">
                <p className="poppins-regular text-3xl">
                  <span className="text-[#F59800] font-bold">Regalo #1:</span>{" "}
                  <span className="font-bold">
                    {" "}
                    Oficina presencial en Buenos Aires, Argentina
                  </span>
                </p>
              </div>
              <div className="flex items-start mt-4">
                <FaCheck className="text-[#F59800] w-32 text-3xl mt-1 mr-2" />
                <p className="text-xl">
                  Te ofrecemos la oportunidad única de trabajar desde una
                  oficina ubicada en el corazón de Buenos Aires, completamente
                  equipada y lista para que despegues en tus proyectos. Este
                  espacio no solo te brindará un ambiente profesional para
                  trabajar, sino que también será tu punto de conexión con otros
                  emprendedores exitosos.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[40%] hidden lg:flex items-center overflow-hidden rounded-lg">
              <img
                className="w-2/4 object-cover object-center"
                src={rev}
                alt="Vehículo AMG"
              />
            </div>
          </div>

          {/* Segundo Regalo */}
          <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-8">
            <div className="w-full lg:w-[40%] flex justify-center lg:justify-start items-center overflow-hidden rounded-lg mb-2 lg:mb-0">
              <img
                className="w-full object-cover object-center"
                src={dubai}
                alt="Vehículo AMG"
              />
            </div>
            <div className="w-full lg:w-[45%]">
              <div className="w-full mt-4">
                <p className="poppins-regular text-3xl">
                  <span className="text-[#F59800] font-bold">Regalo #2:</span>{" "}
                  <span className="font-bold">Viajes:</span>
                </p>
              </div>
              <div className="flex items-start mt-4">
                <FaCheck className="text-[#F59800] w-32 text-3xl mt-1 mr-2" />
                <p className="text-xl">
                  Explora destinos increíbles y crea recuerdos imborrables
                  mientras impulsas tu crecimiento personal y profesional.
                  ¡Prepárate para descubrir el mundo de una manera que nunca
                  imaginaste!
                </p>
              </div>
            </div>
          </div>

          {/* Tercer Regalo */}
          <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-8">
            <div className="w-full lg:w-[55%] flex flex-wrap justify-start items-center space-y-3">
              <div className="w-full flex justify-center lg:hidden items-center overflow-hidden rounded-lg  mb-2">
                <img
                  className="w-1/2 object-cover object-center"
                  src={mapa}
                  alt="Vehículo AMG"
                />
              </div>
              <div className="w-full">
                <div className="w-full mt-4">
                  <p className="poppins-regular text-3xl">
                    <span className="text-[#F59800] font-bold">Regalo #3:</span>{" "}
                    <span className="font-bold">Mentor personal</span>
                  </p>
                </div>
                <div className="flex items-start mt-4">
                  <FaCheck className="text-[#F59800] w-32 text-3xl mt-1 mr-2" />
                  <p className="text-xl">
                    Accede a la orientación exclusiva de un mentor experto que
                    te acompañará en tu camino hacia el éxito. Aprovecha la
                    experiencia y conocimientos de un líder en tu campo para
                    acelerar tu desarrollo y alcanzar tus metas más ambiciosas.
                    ¡Tu éxito es nuestra prioridad!
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[40%] hidden lg:flex items-center overflow-hidden rounded-lg">
              <img
                className="w-2/4 object-cover object-center"
                src={mapa}
                alt="Vehículo AMG"
              />
            </div>
          </div>
          {/* Cuarto Regalo */}
          <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-8">
            <div className="w-full lg:w-[40%] flex justify-center lg:justify-start items-center overflow-hidden rounded-lg mb-2 lg:mb-0">
              <img
                className="w-full object-cover object-center"
                src={rev3}
                alt="Vehículo AMG"
              />
            </div>
            <div className="w-full lg:w-[45%]">
              <div className="w-full mt-4">
                <p className="poppins-regular text-3xl">
                  <span className="text-[#F59800] font-bold">Regalo #4:</span>{" "}
                  <span className="font-bold">
                    Acceso a Comunidad TSL
                  </span>
                </p>
              </div>
              <div className="flex items-start mt-4">
                <FaCheck className="text-[#F59800] w-32 text-3xl mt-1 mr-2" />
                <p className="text-xl">
                  Intégrate a la Comunidad TSL, un círculo exclusivo de
                  emprendedores innovadores. Amplía tu red, colabora y crece con
                  el apoyo de mentes afines.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-2xl lg:text-4xl font-bold mb-6 poppins-bold text-center">
              Sinergia:
            </h1>
            <div className="w-full lg:w-2/3  bg-black p-6 rounded-lg shadow-lg border border-[#F59800] inline-block text-left">
              <p className="text-center text-md lg:text-lg text-balance">
                Combinando estos 3 beneficios vas a ser capaz de cambiar 100% tu
                realidad y desarrollarte en TSL en donde no sólo ganarás
                dinero sino que crecerás como persona y crearás relaciones con
                mucha gente en tu misma sintonía.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CallToAction calendlyPageUrl={calendlyPage} />
    </div>
  );
};

export default Gifts;
