import React from "react";
import "./AnimatedButton.css";
import { SiCalendly } from "react-icons/si";

const AnimatedButtonCalendly = ({ handleShowForm }) => {
  const handleButtonClick = () => {
    handleShowForm(2);
  };

  return (
    <button
      onClick={handleButtonClick}
      className="w-full lg:w-2/4 animated-button-cal text-xl border-[2px] border-blue-500"
    >
      <span className="text-lg lg:text-2xl flex justify-center items-center gap-x-2"><SiCalendly />AGENDA TU LLAMADA</span>
     
    </button>
  );
};

export default AnimatedButtonCalendly;
