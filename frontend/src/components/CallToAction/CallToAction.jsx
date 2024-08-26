import React from 'react';
import AnimatedButton from '../AnimatedButton/AnimatedButton';

const CallToAction = ({calendlyPageUrl}) => {

  return (
    <div className="mt-10 text-center">
      <AnimatedButton  calendlyPage={calendlyPageUrl} cta={1} />
      <div className="mt-4">
        <img src="https://www.agenciadeinfoproductos.com/hosted/images/47/02032650044655b42e246e8101d137/Untitled-2.png" alt="Medios de pago" className="mx-auto w-20" />
      </div>
      <p className="mt-2 poppins-regular text-gray-400">Sitio Seguro. Tu información está protegida.</p>
    </div>
  );
};

export default CallToAction;
