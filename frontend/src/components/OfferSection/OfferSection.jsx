import React from "react";
import { FaCheck } from "react-icons/fa";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

const OfferSection = ({calendlyPageUrl}) => {
  return (
    <div className="text-gray-100 mt-10 text-center">
    
 
      <div className="mt-10">
        <p className="text-2xl line-through text-gray-400">
          Valor Total: $13,800 USD anual
        </p>
        <p className="text-2xl line-through text-gray-400">
          Normalmente: $1,200 USD
        </p>
        <p className="text-5xl font-bold text-white mt-4">SOLO HOY: GRATIS</p>
        <p className="text-sm text-gray-400 poppins-regular text-balance">
          (Sólo tienes que depositar $300 USD en tu cuenta de trading)
        </p>
      </div>
      <div className="mt-10 mx-2">
        <AnimatedButton
        calendlyPage={calendlyPageUrl}
          text='Escríbeme "AMG" en Instagram'
          subtext="Y comienza a construir tu propia agencia de Infoproductos"
          cta={1}
        />
        <div className="mt-4">
          <img
            src="https://www.agenciadeinfoproductos.com/hosted/images/47/02032650044655b42e246e8101d137/Untitled-2.png"
            alt="Medios de pago"
            className="mx-auto  w-20"
          />
        </div>
        <p className="mt-2 poppins-regular text-gray-400">
          Sitio Seguro. Tu información está protegida.
        </p>
      </div>
    </div>
  );
};

export default OfferSection;
