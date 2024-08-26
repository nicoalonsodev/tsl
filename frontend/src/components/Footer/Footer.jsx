import React from "react";
import logo from "../../assets/logo/logo_blanco-re.png";

const Footer = () => {
  return (
    <div>
      <div className="w-screen h-14 lg:h-20  flex justify-center items-center ">
        <img className="w-14 lg:w-20" src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
