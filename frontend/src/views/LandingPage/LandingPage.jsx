import React from "react";
import TitleAndVideo from "../../components/TitleAndVideo/TitleAndVideo";
import background3 from "../../assets/background3.png";
import logo from "../../assets/logo/logo.png";
import Footer from "../../components/Footer/Footer";
import MailchimpForm from "../../components/MailchimpForm/MailchimpForm";
const LandingPage = () => {
  const background3Style = {
    backgroundImage: `url(${background3})`,
    backgroundSize: "cover", // Asegúrate que la imagen cubra todo el div
    backgroundPosition: "center", // Centra la imagen en el div
    backgroundRepeat: "no-repeat", // Evita que la imagen se repita
  };

  return (
    <div >
      <div
        // style={background3Style}
        className="flex flex-wrap justify-center  py-4 bg-gray-900 "
      >
        <div className="w-screen h-14 lg:h-20  flex justify-center items-center border-b-[1px] border-[#062f70]">
          <img className="w-14 lg:w-20" src={logo} alt="logo" />
        </div>
        <div className="px-3 lg:px-14 xl:px-[9rem] pt-2 lg:pt-6">
        <TitleAndVideo />
        </div>
      </div>
      {/* <MailchimpForm /> */}
      <div className="bg-gray-900 py-4 border-t-[1px] border-[#062f70] ">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
