import React from "react";
import { useHistory } from "react-router-dom";
import "./AnimatedButton.css";

const AnimatedButton = ({ calendlyPage, data, cta }) => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push({
      pathname: calendlyPage,
      state: { data: data },
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth", // Desplazamiento suave
    });
  };

  return (
    <button
      onClick={cta ? scrollToTop : handleButtonClick}
      className="w-full lg:w-2/4 animated-button text-xl border-[2px] border-[#dc9c35]"
    >
      <span className="text-lg lg:text-2xl">AGENDA TU LLAMADA</span>
      <span className="subtext text-sm lg:text-lg text-balance">
        Y comienza a implementar este nuevo modelo de negocio ahora
      </span>
    </button>
  );
};

export default AnimatedButton;
