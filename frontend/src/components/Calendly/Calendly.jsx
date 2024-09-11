import React, { useEffect } from "react";

const Calendly = ({calendlyLink}) => {
  useEffect(() => {
    // Cargar el script de Calendly de forma asíncrona
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    // Listener para el evento de Calendly
    const handleEventScheduled = (e) => {
      if (e.data.event === "calendly.event_scheduled") {
        // Recuperar los datos del usuario de localStorage
        const user = JSON.parse(localStorage.getItem("calendlyUser"));

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "MetaLeadEvent",
          eventCategory: "Lead",
          eventAction: "Submit",
          eventLabel: "MetaLeadEvent",
          phone: user.PHONE, // Enviando el teléfono
          firstName: user.FNAME.toLowerCase().trim(), // Enviando el nombre
        });

        window.location.href = "";
      }
    };

    window.addEventListener("message", handleEventScheduled);

    return () => {
      document.head.removeChild(script);
      window.removeEventListener("message", handleEventScheduled);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget h-[1266px] lg:h-[766px]"
      data-url={calendlyLink}
      style={{ minWidth: "320px" }}
    ></div>
  );
};

export default Calendly;
