import React from "react";
import lambo from "../../assets/imagenes/lambo.png";
import marketing from "../../assets/imagenes/Marketing-icon.png";
import version1 from "../../assets/imagenes/Version-1.png";
const Pilares = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex flex-wrap justify-center items-center space-y-8 py-10">
        <div className="w-full flex flex-wrap justify-center items-center  space-y-6">
          <h1 className="text-3xl lg:text-5xl lato-bold text-gray-100 text-center">
            De: Cristian y Marcelo Diaz..
            <br />
            ¿Cómo llegamos a $500.000 dólares al mes siendo de Argentina?
          </h1>
          <p className="text-gray-300 text-xl text-center poppins-regular">
            Estos son nuestros 3 pilares fundamentales
          </p>
          <div className="w-full flex justify-center ">
            <div className="w-3/5">
              <hr className=" border-[1.5px] border-[#F59800]" />
            </div>
          </div>
        </div>

        {/* Primer Pilar */}
        <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-8">
          <div className="w-full lg:w-[55%] flex flex-wrap justify-start items-center space-y-3">
            <div className="w-full flex lg:hidden items-center overflow-hidden rounded-lg  mb-2">
              <img
                className="w-full object-cover object-center"
                src={version1}
                alt=""
              />
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-[#F59800]">
                N° 1 | La Habilidad Adecuada
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-semibold text-4xl text-gray-100">Trading</p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Necesitas concentrar todos tus esfuerzos en una habilidad que
                puedas aprovechar y que genere buenos resultados
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Así es como empezamos, aprendiendo la habilidad del trading en
                2018 y luego de muchos altibajos comenzamos a ser rentables y
                vivir de ello.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Es por esto que hoy, después de 6 años somos la mejor academia
                de trading de todo latinoamérica con más de 22.240 alumnos y
                cientos de casos de éxito, lo que da muchísimo valor a la
                organización
              </p>
            </div>
          </div>
          <div className="w-full  lg:w-[40%] hidden lg:flex items-center overflow-hidden rounded-lg">
            <img
              className="w-full object-cover object-center"
              src={version1}
              alt=""
            />
          </div>
        </div>

        {/* Segundo Pilar */}
        <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-8">
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-start items-center overflow-hidden rounded-lg mb-2 lg:mb-0">
            <img
              className="w-full object-cover object-center"
              src={lambo}
              alt=""
            />
          </div>
          <div className="w-full lg:w-[55%] flex flex-wrap justify-start items-center space-y-3">
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-[#F59800]">
                N° 2 | El Vehículo Adecuado
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-semibold text-4xl text-gray-100">
                Monta tu propio Negocio Online
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Una vez que tienes el vehículo, necesitas aprender conducirlo.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Pero para esto necesitas un mentor que sepa cómo conducirlo y
                que te enseñe exactamente cómo hacerlo.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Alguien que te guíe, paso a paso, para que tengas la posibilidad
                de montar tu propio negocio de infoproductos aunque empieces
                desde cero y no tengas idea de que es un negocio online.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                En Revolution podrás contar con un mentor que te ayudará a
                desarrollarte en tu carrera como afiliado.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Para capitalizarte en uno de los mercados con más crecimiento en
                el mundo: los infoproductos y la educación online.
              </p>
            </div>
          </div>
        </div>

        {/* Tercer Pilar */}
        <div className="flex flex-wrap justify-center items-center space-x-0 lg:space-x-8">
          <div className="w-full lg:w-[55%] flex flex-wrap justify-start items-center space-y-3">
            <div className="w-full flex lg:hidden items-center overflow-hidden rounded-lg  mb-2">
              <img
                className="w-full object-cover object-center"
                src={marketing}
                alt=""
              />
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-[#F59800]">
                N° 1 | El Impacto Adecuado
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-semibold text-4xl text-gray-100">
                Sistema de Marketing Profesional
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Domina el marketing digital y explota tu marca personal con
                nuestro equipo de expertos.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Te ofrecemos un servicio de Marketing Digital integral gratuito
                para vender nuestro infoproducto y crecer sin límites.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Además vas a aprender trabajando con profesionales en Meta Ads,
                funnels de ventas, copywriting, edición de video, email
                marketing y más.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Aprovecha este soporte único, ahorra tiempo y dinero, y
                transmite el mensaje de nuestra academia a millones de personas.
              </p>
            </div>
            <div className="w-full mt-4">
              <p className="poppins-regular text-lg text-gray-200">
                Ayuda a otros y recibe dinero a cambio del valor que compartes.
              </p>
            </div>
          </div>
          <div className="w-full  lg:w-[40%] hidden lg:flex items-center overflow-hidden rounded-lg">
            <img
              className="w-full object-cover object-center"
              src={marketing}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pilares;
