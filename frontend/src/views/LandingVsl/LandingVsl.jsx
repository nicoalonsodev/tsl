import React from "react";
import TitleAndVideo from "../../components/TitleAndVideo/TitleAndVideo";
import background2 from "../../assets/background2.png";
import logo from "../../assets/logo/logo_blanco-re.png";
import Footer from "../../components/Footer/Footer";
import ModalButton from "../../components/ModalButton/ModalButton";
import { Link } from "react-router-dom";


const LandingVsl = () => {
  const background2Style = {
    backgroundImage: `url(${background2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
const historyPart1 = [
  "Siempre me llamó la atención el mundo del <strong>emprendimiento</strong>, los <strong>negocios</strong> y la formación de <strong>empresas</strong>. Me recibí de <strong>Técnico en administración de empresas</strong>, estudié 1 año en la <strong>UBA</strong> y 2 años en la <strong>UADE</strong>. Trabajé un año en <strong>IBM</strong>, y eso fue más que suficiente para darme cuenta que el <strong>sistema tradicional</strong> no me iba a dar la <strong>vida</strong> que quería.",
  "Ahí inició mi carrera como <strong>emprendedor</strong>, a los 21 años compré un <strong>auto</strong> a crédito para ponerlo a hacer <strong>UBER</strong>, avancé con un <strong>local de comida</strong>, después llegó a mi vida el mundo de los <strong>negocios digitales</strong>. Me presentaron la empresa <strong>AMWAY</strong>, que es una empresa <strong>Norteamericana</strong> que lleva más de 60 años en funcionamiento, donde vos podrías distribuir sus <strong>productos</strong>, comisionar por tus <strong>ventas</strong> y armar <strong>equipos de trabajo</strong>. Gracias a esa actividad conocí más de <strong>20 países</strong> y gané mucho <strong>dinero</strong> durante 5 años. Después armé una empresa de <strong>ventas de planes de autos</strong> con 2 amigos, puse una <strong>oficina</strong> con personas haciendo <strong>arbitraje</strong>, armé una <strong>comunidad de cripto players</strong> en <strong>AXIE INFINITY</strong>, pero no me fue tan bien como planeaba...",
]

const historyPart2 = [
  "Después me empezó a llamar la atención el <strong>Trading</strong> y fue ahí cuando conocí a <strong>REVOLUTION</strong> y <strong>Cristian Diaz</strong>, y me encantó, en el minuto uno supe que acá sí podía hacer <strong>carrera</strong> y dedicar años de mi vida a convertirme en un <strong>profesional</strong> e impactar de forma positiva a más personas.",
  "Me encanta ponerme <strong>metas</strong> y trabajar con <strong>personas</strong> así que cuando entendí lo potente del <strong>trading</strong> y el <strong>plan de mercadeo</strong> lo empecé a escalar, mis primeros 5 meses me costó un poco superar los <strong>usd 500 de ganancias mensuales</strong>, hoy en día soy un <strong>trader rentable</strong> y el principal <strong>creador de equipos</strong> de <strong>REVOLUTION</strong>, gano más de <strong>usd 30.000 al mes</strong>, vivo en una <strong>casa soñada</strong>, viajo seguido, ayudo económicamente a mis <strong>viejos</strong> para que no les falte nada, y lo mejor de todo es que hay cientos de personas en el <strong>equipo</strong> ganando <strong>cientos y miles de dólares extras</strong> al mes gracias a tomar la decisión de emprender con nosotros en <strong>REVOLUTION</strong>.",
]

const historyPart3 = [
  "Te invitamos a dar el <strong>paso</strong>, anímate a hacer algo <strong>distinto</strong>, tenemos un <strong>método</strong> que funciona, que ya fue testeado, y constantemente lo estamos <strong>mejorando</strong>.",
  "Si vos das tu <strong>100%</strong> vas a poder <strong>progresar</strong> y hacer <strong>carrera</strong> con nosotros. Lo <strong>tradicional</strong> ya no funciona, el mundo cambió, las <strong>oportunidades</strong> están, hay personas que las aprovechan y otras no! ¡Animate! ¡Nosotros te ayudamos!",
]
const actually = [
  "Facturé más de 200.000 USD con Revolution, vivo en Argentina y tengo amigos que comparten los mismos objetivos.",
  "El dinero ya no es un problema.",
  "Puedo cuidar de mí mismo, de mi familia, de mis amigos y, lo más importante…",
  "Puedo aportarles a personas que son como yo.",
  "Y ahora seguramente te estarás preguntando, ¿cómo es que este joven argentino creció tanto y tan rápido con Revolution?",
 ` Acá los llamamos "los tres pilares" de este nuevo modelo de negocio…`,
]
  const historyData = [
   "Cristian Agustín Castellón",
    "Argentina",
    "5 años",
  ]

  const calendlyPage = "/cristian-castellon/calendly";

    const isRegistered = localStorage.getItem("isRegistered") === "true";
const path = "cristian-castellon"
const googleSheets = "https://script.google.com/macros/s/AKfycbxTCaMbuqkhMpUcXqkM5_YJhsUQzTDOdcI61eZ7sFY0WBgsfj5JsRsy9cjt1OctdN4o/exec"
const wppLink = "https://wa.me/5493815857574?text=Hola%2C%20estoy%20interesado%20en%20tus%20servicios"
const wppNumber = "+5491126997232"
 const data = {
  historyPart1,
  historyPart2,
  historyPart3,
  actually,
  historyData,
  calendlyPage,
  googleSheets,
  wppLink,
  wppNumber
};
  return (
    <div className="flex flex-wrap justify-center overflow-hidden">
      <div className="bg-gray-900 py-4">
        <div className="w-screen h-14 lg:h-20 flex justify-center items-center border-b-[1px] border-[#062f70]">
          <img className="w-14 lg:w-20" src={logo} alt="logo" />
        </div>
            <div className="px-3 lg:px-14 xl:px-[9rem] pt-2 lg:pt-6">
              <TitleAndVideo video={"wpp"} calendlyPage={calendlyPage} data={data} />
            </div>
            {/* <div className="px-3 lg:px-14 xl:px-[9rem] py-4 bg-gray-50 border-t-[#F59800] border-[2px]">
              <History
                historyData={historyData}

                historyPart1={historyPart1}
                historyPart2={historyPart2}
                historyPart3={historyPart3}
              />
            </div>
            <div style={background2Style} className="py-2">
              <div className="px-2 lg:px-14 xl:px-[9rem] py-4">
                <Actually historyPart3={historyPart3} actually={actually} img4={img4} />
                <Pilares />
                <MissionAndResult />
              </div>
              <PresentProgram />
              <Gifts calendlyPage={calendlyPage} />
              <OfferSection calendlyPageUrl={calendlyPage} />
            </div> */}
      </div>
      <div className="bg-gray-900 py-4 border-t-[1px] border-[#062f70]">
        <Footer />
      </div>
      {/* <ModalButton calendlyPage={calendlyPage} /> */}
    </div>
  );
};

export default LandingVsl;
