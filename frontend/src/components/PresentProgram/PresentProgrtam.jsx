import React from "react";
import logo from "../../assets/logo/logo_blanco-re.png";
import money from "../../assets/imagenes/Version-2.png";
import negocio from "../../assets/imagenes/Negocio-online.png";
import cohete from "../../assets/imagenes/Cohete-icon.png";

const PresentProgram = () => {
  return (
    <div className="text-gray-100 bg-black py-10 px-3 md:px-64 poppins-regular">
      <div className="relative">
        <img
          src={logo}
          alt="AMG Logo"
          className="absolute top-[-80px] left-1/2 transform -translate-x-1/2"
          style={{ width: "120px", height: "auto" }}
        />
        <div className="bg-black pt-20 pb-10 px-0 lg:px-6 rounded-lg shadow-lg">
          <h1 className="text-4xl text-center font-bold mb-6 poppins-bold">
            Te presentamos el{" "}
            <span className="text-[#F59800]">MÉTODO TSL</span>
          </h1>
          <p className="text-center mb-6">
            El mejor programa del mundo para montar tu propio negocio online y
            comenzar a ganar más de $10k dólares al mes.
          </p>
          <hr className="my-6 border-gray-700" />
          <h2 className="text-2xl text-center font-bold mb-4">
            Esto es lo que recibirás al unirte HOY:
          </h2>
          <p className="text-center mb-4">
            Programa completo TSL, en donde te guiamos paso a paso en tu
            habilidad para ser rentable en trading y/o montar tu negocio online
            y llevarlo a más de $10k/mes.
          </p>
          <p className="text-center">
            Todo esto a través de una organización online y presencial con
            premios para los más activos (viajes, premios, mentorías, oficina
            presencial y experiencias).
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="space-y-10">
          {[
            {
              title:
                "Curso grabado completo y sesiones en vivo todos los días.",
              price: "$1.200 USD anual.",
              module: "Carrera de Trading:",
              image: money,
            },
            {
              title:
                "Cómo crear tu propio negocio online vendiendo el infoproducto de TSL",
              module: "Carrera de Afiliado:",
              price: "$600 USD anual.",
              image: negocio,
            },
            {
              title:
                "Cómo escalar tu negocio online recibiendo servicio gratuito de marketers profesionales y a la vez aprender de ellos.",
              module: "Servicio de marketing profesional:",
              price: "$12.000 USD anual.",
              image: cohete,
            },
           
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col h-auto lg:h-[14rem] md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 bg-black rounded-lg py-4 lg:py-0 p-0 lg:p-4 shadow-lg"
            >
              <div className="w-full h-full md:w-1/2 flex items-center justify-start md:justify-start">
                <div className="flex flex-col justify-center items-center h-full">
                  <h2 className="text-lg text-left text-[#F59800] w-full">
                    {item.module}
                  </h2>
                  <p className="text-2xl font-bold">{item.title}</p>
                  <p className="mt-3 text-lg text-gray-300 font-light text-left w-full">
                    {item.price}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={item.image}
                  alt={item.module}
                  className="object-cover w-full lg:w-2/3 h-full rounded-lg shadow-md "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default PresentProgram;
