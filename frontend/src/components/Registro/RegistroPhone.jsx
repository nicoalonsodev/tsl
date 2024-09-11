import React, { useState, useRef, useEffect } from "react";
import loading from "../../assets/load3.gif";
import Select from "react-select";
import country from "../../assets/country.svg";
import email from "../../assets/email.svg";
import person from "../../assets/person.svg";
import phone from "../../assets/phone.svg";
import countries from "./countries";
import { useHistory } from "react-router-dom";
import { SiCalendly } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa6";
import "./Registro.css";
const RegistroPhone = ({
  actualizarEstado,
  redirectUrl,
  googleSheetsUrl,
  data,
  formUrl,
}) => {
  const formRef = useRef(null);
  const history = useHistory();
  const [registro, setRegistro] = useState({
    FNAME: "",

    PHONE: "",
    CountryCode: null,
    Country: "",
    DATE: new Date().toLocaleString(),
  });
  console.log(formUrl);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCode, setIsLoadingCode] = useState(false);
  const [verificationCode, setVerificationCode] = useState(null);
  const [errors, setErrors] = useState({
    FNAME: "completar con su nombre",

    PHONE: "colocar su numero",
    countryCode: "colocar Country Code",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    setVerificationCode(randomCode);
    console.log("Generated Verification Code: ", randomCode);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegistro((prevRegistro) => ({
      ...prevRegistro,
      [name]: value,
    }));

    validate({ ...registro, [name]: value });
  };

  const validate = (registro) => {
    let errors = {};
    if (!registro.FNAME) {
      errors.FNAME = "Llenar con su nombre";
    }

    if (!registro.PHONE) {
      errors.PHONE = "Debe ingresar su número de celular.";
    }
    if (registro.PHONE) {
      const phoneRegex = /^\d{8,10}$/;

      if (!phoneRegex.test(registro.PHONE)) {
        errors.PHONE = "Debe ingresar un número válido";
      }
    }
    if (!registro.CountryCode) {
      errors.PHONE = "Debe ingresar el código de su país.";
    }
    if (!registro.CountryCode && !registro.PHONE) {
      errors.PHONE =
        "Debe ingresar el código de su país y su número de celular.";
    }
    setErrors(errors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validate(registro);

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);

      localStorage.setItem("calendlyUser", JSON.stringify({
        FNAME: registro.FNAME,
        PHONE: registro.PHONE,
    }));
    
      const formDatab = new FormData();
      for (const key in registro) {
        formDatab.append(key, registro[key]);
      }

      try {
       // Enviar los datos a la primera Google Sheet (la que llega por props)
       await fetch(googleSheetsUrl, {
        method: "POST",
        body: formDatab,
        mode: "no-cors",
    });

    // Enviar los datos a la segunda Google Sheet (la URL estática)
    await fetch("https://script.google.com/macros/s/AKfycbzZH7_GuBEMwlnWmeZ_0MuMSIdUgkD0miOCbuew8ps8OcTYYB491XItHXlnxXJb4AhOpg/exec", {
        method: "POST",
        body: formDatab,
        mode: "no-cors",
    });

        const mailchimpForm = formRef.current;
        const formData = new FormData(mailchimpForm);

        await fetch(mailchimpForm.action, {
          method: mailchimpForm.method,
          body: formData,
          mode: "no-cors",
        });

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "MetaCompleteRegristrationEvent",
          eventCategory: "CompleteRegistration",
          eventAction: "Submit",
          eventLabel: registro.FNAME,
          phone: registro.PHONE, 
          firstName: registro.FNAME.toLowerCase().trim(),
        });

        // Guardar en localStorage que el usuario se ha registrado
        localStorage.setItem("isRegistered", "true");
        if (formUrl === 2) {
          history.push({ pathname: redirectUrl, state: { data: data } });
        } else {
          window.location.href = redirectUrl;
        }
        setRegistro({
          FNAME: "",
          PHONE: "",
          CountryCode: null,
          Country: "",
          DATE: new Date().toLocaleString(),
        });
        setIsLoading(false);
        actualizarEstado(false);

        // history.push(redirectUrl);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    } else {
      setFormSubmitted(true);
    }
  };

  const handleClick = (click) => {
    actualizarEstado(click);
  };

  const selectedCountry = countries.find(
    (country) => country.code === registro.CountryCode
  );

  const getPhoneExample = () => {
    if (selectedCountry) {
      if (selectedCountry.code === "+549") {
        return "Ejemplo: 3815588985 (con el código de área de tu provincia)";
      }
      return "Ejemplo: 1234567890 (sin el código de país)";
    }
    return "Selecciona un país para ver el ejemplo";
  };

  return (
    <div className="max-w-[1100px] flex items-center justify-center">
      <div className="max-w-[700px] p-4 bg-white rounded-lg shadow-lg overflow-auto max-h-[700px] relative">
        <button
          className="bg-gray-500 hover:bg-gray-700 transition duration-300 ease-in-out text-white font-semibold text-sm py-1 px-2 rounded absolute top-0 right-0 mt-2 mr-2"
          onClick={() => handleClick(false)}
        >
          X
        </button>
        <h1 className="text-xl md:text-2xl lato-black font-semibold text-center text-gray-900 mt-4 mb-2 text-balance">
          Ingresa tus datos para reservar tu cupo gratuito en el Grupo VIP y
          recibir señales y clases en vivo.
        </h1>
        <form
          className="max-w-[400px] sm:max-w-[700px] mx-auto"
          action="https://revolutionoficial.us13.list-manage.com/subscribe/post?u=8449426f8fafa7d818754f177&amp;id=8098f80fd7&amp;f_id=000e67e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div className="mb-2">
            <input
              type="text"
              id="FNAME"
              name="FNAME"
              value={registro.FNAME}
              onChange={handleChange}
              placeholder="Ingresa tu Nombre y Apellido"
              className="input-f h-[40px] w-full px-4 pl-10 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
              style={{
                backgroundImage: `url(${person})`,
                backgroundSize: "25px 25px",
                backgroundPosition: "5px center",
                backgroundRepeat: "no-repeat",
              }}
              autoComplete="name"
            />
            {formSubmitted && errors.FNAME && (
              <span className="text-red-500">{errors.FNAME}</span>
            )}
          </div>

          <div className="mb-4">
            <div className="flex max-h-[54px] cursor-pointer">
              <Select
                options={countries.map((country) => ({
                  value: [country.code, country.name],
                  label: (
                    <div className="cursor-pointer flex items-center">
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-6 h-4"
                      />
                      <span>{country.name}</span>
                    </div>
                  ),
                }))}
                placeholder={null}
                value={
                  selectedCountry
                    ? {
                        value: [registro.CountryCode, registro.Country],
                        label: (
                          <div className="flex items-center cursor-pointer">
                            <img
                              src={selectedCountry.flag}
                              alt={selectedCountry.name}
                              className="w-6 h-4"
                            />
                            <span>{`${selectedCountry.name}`}</span>
                          </div>
                        ),
                      }
                    : registro.CountryCode
                }
                onChange={(selectedOption) => {
                  setRegistro({
                    ...registro,
                    CountryCode: selectedOption.value[0],
                    Country: selectedOption.value[1],
                  });
                  validate({
                    ...registro,
                    CountryCode: selectedOption.value,
                  });
                }}
                className="div-f w-2/3 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 cursor-pointer"
                styles={{
                  control: (provided) => {
                    const controlStyles = {
                      ...provided,
                      "&::placeholder": {
                        color: "lightgray",
                      },
                    };

                    if (!selectedCountry) {
                      controlStyles.backgroundImage = `url(${country})`;
                      controlStyles.backgroundSize = "25px 25px";
                      controlStyles.backgroundPosition = "5px center";
                      controlStyles.backgroundRepeat = "no-repeat";
                      controlStyles.paddingLeft = "40px";
                    }

                    return controlStyles;
                  },
                }}
              />
              <input
                type="text"
                id="PHONE"
                name="PHONE"
                value={registro.PHONE}
                onChange={handleChange}
                className="input-f h-[40px] w-full px-4 pl-10 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Tu número de Whatsapp sin código de área"
                required
                style={{
                  backgroundImage: `url(${phone})`,
                  backgroundSize: "25px 25px",
                  backgroundPosition: "5px center",
                  backgroundRepeat: "no-repeat",
                }}
                autoComplete="tel"
              />
            </div>
            {formSubmitted && errors.PHONE && (
              <span className="text-red-500">{errors.PHONE}</span>
            )}
            <p className="text-sm text-gray-600 mt-2">{getPhoneExample()}</p>
          </div>

          {formSubmitted && errors.verificationCodeInput && (
            <span className="text-red-500">{errors.verificationCodeInput}</span>
          )}

          <div className="flex items-center justify-center ">
            {isLoading ? (
              <img
                src={loading}
                alt="loading"
                className="max-w-[76px] max-h-[76px]"
              />
            ) : (
              <button
                type="submit"
                className={`${formUrl === 2 ? "w-full lg:w-2/4 animated-button-cal text-xl border-[2px] border-blue-500" : "w-full lg:w-2/4 animated-button-wpp text-xl border-[2px] border-green-500"}`}
              >
                {formUrl === 2 ? (
                  <span className="text-lg lg:text-2xl flex justify-center items-center gap-x-2">
                    <SiCalendly />
                    AGENDA TU LLAMADA
                  </span>
                ) : (
                  <span className="text-lg lg:text-2xl flex justify-center items-center gap-x-2"><FaWhatsapp />RESERVA TU CUPO</span>
                )}
              </button>
            )}
          </div>
        </form>
        <div className="text-center"></div>
        <p className="text-xs text-gray-600 text-center mt-8">
          &copy; 2024 TSL
        </p>
      </div>
    </div>
  );
};

export default RegistroPhone;
